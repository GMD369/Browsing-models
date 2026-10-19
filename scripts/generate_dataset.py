"""Build the standalone VoltMize browsing dataset.

The source values are a curated, synthetic teaching dataset based on the FYP's
factory -> zone -> meter -> anomaly workflow. The script does not import or run
the production backend or simulator.
"""

from __future__ import annotations

import csv
import json
import sqlite3
from collections import defaultdict
from datetime import date, timedelta
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
EXPORT_DIR = DATA_DIR / "exports"
DB_PATH = DATA_DIR / "voltmize_browsing.db"
WEB_DATA_PATH = ROOT / "dist" / "assets" / "data.js"


FACTORIES = [
    {
        "id": "textile_reference", "name": "Reference Weaving Unit", "city": "Lahore",
        "industry": "Textile weaving", "metric": "8 meters · 400 kVA",
        "summary": "A two-shift weaving unit where compressed-air demand, humidification and production lines create distinct energy signatures.",
        "zones": [
            ("Z_PROD", "Production hall", "MT2", "24 air-jet looms", "Production-linked load with separate Line 1 and Line 2 behavior."),
            ("Z_AIR", "Compressor room", "MT3", "145 kW installed", "Fixed- and variable-speed compressors supply the shared compressed-air system."),
            ("Z_HUM", "Humidification", "MT4", "22.2 kW installed", "Fans and pumps maintain fabric-process humidity during both shifts."),
            ("Z_PREP", "Preparatory", "MT5", "29.5 kW installed", "Warping and sizing are batch loads concentrated in the day shift."),
            ("Z_UTIL", "Utilities", "MT6", "Mixed auxiliary load", "Lighting, pumps, ventilation, sockets and standby services."),
        ],
    },
    {
        "id": "cold_storage", "name": "Indus Cold Chain", "city": "Karachi",
        "industry": "Cold storage", "metric": "5 meters · 24/7 load",
        "summary": "A refrigerated warehouse whose compressors and chamber fans operate continuously without a normal overnight shutdown.",
        "zones": [
            ("Z_PLANT", "Refrigeration plant", "MT2", "75 kW compressors", "Screw and reciprocating compressors supply cooling around the clock."),
            ("Z_CHAMB", "Cold chambers", "MT1", "5 chambers", "Freezer, chiller, evaporator-fan and defrost loads form the thermal demand."),
            ("Z_DOCK", "Loading dock", "MT5", "06:00–18:00", "Doors, air curtains and forklift charging vary with dispatch activity."),
            ("Z_UTIL", "Utilities", "MT1", "Always monitored", "Yard lighting, offices, security and monitoring systems."),
        ],
    },
    {
        "id": "plastics_moulding", "name": "Ravi Polymers (Pvt) Ltd", "city": "Lahore",
        "industry": "Plastics moulding", "metric": "4 meters · batch cycles",
        "summary": "Injection-moulding machines, process chillers and auxiliary equipment create repeatable cycle-based demand.",
        "zones": [
            ("Z_MOULD", "Moulding hall", "MT2", "Injection machines", "Heaters, hydraulic drives and mould cycles dominate demand."),
            ("Z_AUX", "Auxiliaries", "MT3", "Cooling + material", "Chillers, cooling pumps, dryers and material handling support production."),
            ("Z_UTIL", "Utilities", "MT1", "Shared services", "Lighting, office cooling, workshop loads and standby services."),
        ],
    },
    {
        "id": "metal_workshop", "name": "Al-Hadeed Engineering Works", "city": "Gujranwala",
        "industry": "Metal fabrication", "metric": "1 main meter · variable load",
        "summary": "A mixed metal workshop with intermittent machine tools and welding loads observed through a single main meter.",
        "zones": [
            ("Z_SHOP", "Machine shop", "MT1", "Intermittent machining", "Lathes, mills, drills and grinders create short high-load operations."),
            ("Z_FAB", "Fabrication bay", "MT1", "Welding demand", "Welders, cutting tools and extraction fans produce irregular peaks."),
            ("Z_UTIL", "Utilities", "MT1", "Common services", "Lighting, ventilation, office and standby loads."),
        ],
    },
    {
        "id": "bakery_food", "name": "Shaheen Bakers", "city": "Faisalabad",
        "industry": "Commercial bakery", "metric": "3 meters · thermal process",
        "summary": "A bakery where ovens, dough preparation, cold storage and packing follow a daily production schedule.",
        "zones": [
            ("Z_BAKE", "Bakery hall", "MT2", "Ovens + proofing", "Ovens and proofers form the largest scheduled production load."),
            ("Z_DOUGH", "Dough preparation", "MT1", "Batch equipment", "Mixers and dividers run in short batches before baking."),
            ("Z_COLD", "Cold store", "MT3", "Cooling load", "Refrigeration protects ingredients and finished products."),
            ("Z_PACK", "Packing", "MT1", "End-of-line load", "Conveyors, sealers and packing equipment follow oven output."),
            ("Z_UTIL", "Utilities", "MT1", "Shared services", "Lighting, water pumping, office and hygiene equipment."),
        ],
    },
]


INCIDENTS = [
    ("textile_reference", "Z_AIR", "Compressor running after Saturday shift", "critical", "22:00–06:00", "Overnight compressor-room demand remained elevated after production stopped.", ["overnight", "compressor", "waste"]),
    ("textile_reference", "Z_AIR", "Compressed-air leak growth", "high", "+10% system loss", "Supplier duty cycle rose while loaded power stayed stable, matching a growing distribution leak.", ["compressed-air", "leak", "trend"]),
    ("textile_reference", "Z_PROD", "Line 1 motor efficiency drift", "medium", "PF 0.82 → 0.78", "Line 1 diverged from the comparable Line 2 baseline and showed lower power factor.", ["motor", "power-factor", "comparison"]),
    ("cold_storage", "Z_PLANT", "Screw compressor efficiency loss", "high", "+6.8% kWh/day", "Compressor input increased at a similar cooling duty, suggesting mechanical or control degradation.", ["compressor", "efficiency", "continuous-load"]),
    ("cold_storage", "Z_DOCK", "Loading-door thermal ingress", "medium", "+11 kW during dispatch", "Extended door openings coincided with plant-load spikes and slow chamber recovery.", ["door", "thermal", "operations"]),
    ("plastics_moulding", "Z_AUX", "Chiller short cycling", "high", "17 starts/hour", "The process chiller start count rose above its normal cycle frequency while average load changed only slightly.", ["chiller", "short-cycling", "maintenance"]),
    ("plastics_moulding", "Z_MOULD", "Barrel heater left energised", "medium", "2.4 h idle heating", "Heating demand continued between production batches with no corresponding hydraulic activity.", ["heater", "idle-load", "schedule"]),
    ("metal_workshop", "Z_FAB", "Unexpected welding peak", "high", "146 kW peak", "Coincident welder operation created a short demand peak above the workshop planning limit.", ["peak", "welding", "demand"]),
    ("metal_workshop", "Z_SHOP", "Lathe idle-load pattern", "low", "3.1 kW for 96 min", "A machine remained energised between jobs, creating a stable avoidable baseline.", ["idle-load", "machine-tool", "waste"]),
    ("bakery_food", "Z_BAKE", "Oven preheat started early", "medium", "41 min early", "The main oven reached full preheat well before the first scheduled batch.", ["oven", "schedule", "thermal"]),
    ("bakery_food", "Z_COLD", "Cold-room seal degradation", "high", "+9.3% compressor duty", "Longer refrigeration cycles appeared without a change in production volume or ambient schedule.", ["cold-room", "efficiency", "trend"]),
]


PLAYBOOKS = [
    ("pb-compressor", "Compressor anomaly triage", "Compare loaded kW, duty cycle and production state before classifying a compressor anomaly.", ["compressor", "compressed-air", "efficiency"]),
    ("pb-idle", "Idle and after-hours load check", "Verify the production schedule, isolate expected standby loads and inspect the responsible zone.", ["idle-load", "overnight", "schedule", "waste"]),
    ("pb-peak", "Demand-peak investigation", "Align equipment start times, find coincident loads and estimate avoidable maximum demand.", ["peak", "demand", "welding"]),
    ("pb-cycle", "Short-cycling diagnosis", "Count starts per interval, compare run duration and inspect sensor or control feedback.", ["short-cycling", "chiller", "maintenance"]),
    ("pb-thermal", "Thermal-system efficiency check", "Compare compressor duty with doors, ambient conditions and production throughput.", ["thermal", "cold-room", "door", "oven"]),
    ("pb-pf", "Low power-factor investigation", "Compare phases and peer equipment before checking loading, wear and compensation.", ["power-factor", "motor", "comparison"]),
]


def slug(value: str) -> str:
    return "-".join("".join(ch.lower() if ch.isalnum() else " " for ch in value).split())


def make_document(doc_id, category_id, factory_id, zone_id, title, doc_type,
                  summary, content, author, published_on, severity="info",
                  status="Reference", metric_label=None, metric_value=None,
                  source_note="Synthetic teaching record based on the VoltMize workflow"):
    return {
        "id": doc_id, "category_id": category_id, "factory_id": factory_id,
        "zone_id": zone_id, "title": title, "document_type": doc_type,
        "summary": summary, "content": content, "author": author,
        "published_on": published_on, "severity": severity, "status": status,
        "metric_label": metric_label, "metric_value": metric_value,
        "source_note": source_note,
    }


def build_records():
    categories = [{"id": "root", "parent_id": None, "name": "All factories", "kind": "collection", "description": "VoltMize operational knowledge collection", "sort_order": 0}]
    documents, doc_tags, links = [], defaultdict(set), []
    zone_docs, meter_docs, factory_docs = {}, {}, {}
    published = date(2026, 9, 1)

    for f_index, factory in enumerate(FACTORIES, start=1):
        factory_cat = f"factory-{factory['id']}"
        categories.append({"id": factory_cat, "parent_id": "root", "name": factory["name"], "kind": "factory", "description": f"{factory['industry']} · {factory['city']}", "sort_order": f_index})
        fdoc = f"overview-{factory['id']}"
        factory_docs[factory["id"]] = fdoc
        documents.append(make_document(
            fdoc, factory_cat, factory["id"], None, f"{factory['name']} — energy profile",
            "Factory brief", factory["summary"],
            f"This profile explains the energy context for {factory['name']} in {factory['city']}. Browse its zones to move from the facility context to meter evidence, anomaly incidents and recommended diagnostic playbooks.",
            "VoltMize Energy Team", str(published + timedelta(days=f_index)),
            metric_label="Coverage", metric_value=factory["metric"],
        ))
        doc_tags[fdoc].update({slug(factory["industry"]), slug(factory["city"]), "factory-profile"})

        for z_index, (zone_id, zone_name, meter, metric, description) in enumerate(factory["zones"], start=1):
            zone_cat = f"zone-{factory['id']}-{zone_id.lower()}"
            categories.append({"id": zone_cat, "parent_id": factory_cat, "name": zone_name, "kind": "zone", "description": description, "sort_order": z_index})
            zdoc = f"zone-{factory['id']}-{zone_id.lower()}"
            zone_docs[(factory["id"], zone_id)] = zdoc
            documents.append(make_document(
                zdoc, zone_cat, factory["id"], zone_id, f"{zone_name} — operating context",
                "Zone summary", description,
                f"The {zone_name.lower()} is part of {factory['name']}. Its normal operating context is: {description} The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
                "Energy Analyst", str(published + timedelta(days=10 + f_index + z_index)),
                metric_label="Normal context", metric_value=metric,
            ))
            doc_tags[zdoc].update({slug(zone_name), slug(factory["industry"]), "zone-profile"})

            mdoc = f"meter-{factory['id']}-{zone_id.lower()}-{meter.lower()}"
            meter_docs[(factory["id"], zone_id)] = mdoc
            documents.append(make_document(
                mdoc, zone_cat, factory["id"], zone_id, f"{meter} — {zone_name} meter profile",
                "Meter profile", f"Measurement point used to interpret {zone_name.lower()} energy behavior.",
                f"{meter} supplies the electrical evidence for this browsing path. It measures the available scope for {zone_name.lower()}; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
                "Metering Engineer", str(published + timedelta(days=30 + f_index + z_index)),
                metric_label="Meter scope", metric_value=meter,
            ))
            doc_tags[mdoc].update({meter.lower(), "meter", slug(zone_name)})
            links.extend([
                (fdoc, zdoc, "contains", f"{zone_name} belongs to this factory", 1.0),
                (zdoc, fdoc, "part of", "Return to the factory-wide context", 0.95),
                (zdoc, mdoc, "measured by", f"{meter} provides this zone's evidence", 1.0),
                (mdoc, zdoc, "observes", "Open the operating context for this measurement point", 1.0),
            ])

    incident_ids = []
    for idx, (factory_id, zone_id, title, severity, metric, summary, tags) in enumerate(INCIDENTS, start=1):
        zone_cat = f"zone-{factory_id}-{zone_id.lower()}"
        doc_id = f"incident-{idx:02d}-{slug(title)}"
        incident_ids.append(doc_id)
        documents.append(make_document(
            doc_id, zone_cat, factory_id, zone_id, title, "Anomaly incident", summary,
            f"Detection summary: {summary} The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
            "Anomaly Review Team", str(date(2026, 10, 1) + timedelta(days=idx)),
            severity=severity, status="Needs review" if severity in {"high", "critical"} else "Observed",
            metric_label="Key signal", metric_value=metric,
        ))
        doc_tags[doc_id].update(tags + ["anomaly", severity])
        zdoc = zone_docs[(factory_id, zone_id)]
        mdoc = meter_docs[(factory_id, zone_id)]
        links.extend([
            (zdoc, doc_id, "has incident", "Observed inside this zone", 0.92),
            (doc_id, zdoc, "occurred in", "Review the zone operating context", 1.0),
            (doc_id, mdoc, "supported by", "Inspect the measurement point behind this finding", 0.96),
            (mdoc, doc_id, "detected", "An anomaly supported by this meter", 0.88),
        ])

    for idx, (doc_id, title, summary, tags) in enumerate(PLAYBOOKS, start=1):
        documents.append(make_document(
            doc_id, "root", None, None, title, "Diagnostic playbook", summary,
            f"Purpose: {summary} Start with context, validate the signal against a comparable period, check related equipment, and record the operational explanation before recommending maintenance or schedule changes.",
            "VoltMize Knowledge Team", str(date(2026, 8, 10) + timedelta(days=idx)),
            metric_label="Procedure", metric_value="4 verification steps",
        ))
        doc_tags[doc_id].update(tags + ["playbook", "diagnosis"])

    # Connect incidents to the playbooks that share the most tags.
    playbook_ids = {p[0] for p in PLAYBOOKS}
    for incident_id in incident_ids:
        scores = []
        for playbook_id in playbook_ids:
            overlap = doc_tags[incident_id] & doc_tags[playbook_id]
            if overlap:
                scores.append((len(overlap), playbook_id, overlap))
        for score, playbook_id, overlap in sorted(scores, reverse=True)[:2]:
            reason = "Shared topic: " + ", ".join(sorted(overlap))
            links.append((incident_id, playbook_id, "diagnosed with", reason, min(1.0, 0.68 + 0.1 * score)))
            links.append((playbook_id, incident_id, "used for", "Example incident for this procedure", min(1.0, 0.62 + 0.1 * score)))

    # Add peer links between incidents with shared domain tags for hypertext browsing.
    for left_index, left in enumerate(incident_ids):
        for right in incident_ids[left_index + 1:]:
            shared = (doc_tags[left] & doc_tags[right]) - {"anomaly", "high", "medium", "low", "critical"}
            if shared:
                reason = "Similar signal: " + ", ".join(sorted(shared))
                links.append((left, right, "similar to", reason, 0.72))
                links.append((right, left, "similar to", reason, 0.72))

    return categories, documents, doc_tags, links


def write_csv(path: Path, fieldnames, rows):
    with path.open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    EXPORT_DIR.mkdir(parents=True, exist_ok=True)
    WEB_DATA_PATH.parent.mkdir(parents=True, exist_ok=True)
    if DB_PATH.exists():
        DB_PATH.unlink()

    categories, documents, doc_tags, links = build_records()
    schema = (DATA_DIR / "schema.sql").read_text(encoding="utf-8")
    with sqlite3.connect(DB_PATH) as connection:
        connection.executescript(schema)
        connection.executemany(
            "INSERT INTO categories VALUES (:id,:parent_id,:name,:kind,:description,:sort_order)", categories
        )
        document_columns = list(documents[0])
        placeholders = ",".join(f":{column}" for column in document_columns)
        connection.executemany(
            f"INSERT INTO documents ({','.join(document_columns)}) VALUES ({placeholders})", documents
        )
        all_tags = sorted({tag for values in doc_tags.values() for tag in values})
        connection.executemany("INSERT INTO tags(name) VALUES (?)", [(tag,) for tag in all_tags])
        tag_ids = dict(connection.execute("SELECT name,id FROM tags"))
        document_tag_rows = [(doc_id, tag_ids[tag]) for doc_id, values in doc_tags.items() for tag in sorted(values)]
        connection.executemany("INSERT INTO document_tags VALUES (?,?)", document_tag_rows)
        connection.executemany("INSERT OR IGNORE INTO document_links VALUES (?,?,?,?,?)", links)
        for document in documents:
            tags = " ".join(sorted(doc_tags[document["id"]]))
            connection.execute(
                "INSERT INTO documents_fts VALUES (?,?,?,?,?)",
                (document["id"], document["title"], document["summary"], document["content"], tags),
            )
        connection.commit()

        link_rows = [dict(zip(["source_document_id", "target_document_id", "relationship", "explanation", "weight"], row)) for row in connection.execute("SELECT * FROM document_links")]
        payload = {
            "meta": {
                "title": "VoltMize Energy Knowledge Browser",
                "generated_on": str(date.today()),
                "document_count": len(documents),
                "factory_count": len(FACTORIES),
                "category_count": len(categories),
                "relationship_count": len(link_rows),
            },
            "categories": categories,
            "documents": [{**doc, "tags": sorted(doc_tags[doc["id"]])} for doc in documents],
            "links": link_rows,
        }

    write_csv(EXPORT_DIR / "categories.csv", list(categories[0]), categories)
    write_csv(EXPORT_DIR / "documents.csv", list(documents[0]), documents)
    write_csv(EXPORT_DIR / "document_tags.csv", ["document_id", "tag"], [
        {"document_id": doc_id, "tag": tag} for doc_id, values in doc_tags.items() for tag in sorted(values)
    ])
    write_csv(EXPORT_DIR / "document_links.csv", list(link_rows[0]), link_rows)
    WEB_DATA_PATH.write_text(
        "window.VOLTMIZE_BROWSE_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(json.dumps(payload["meta"], indent=2))


if __name__ == "__main__":
    main()
