window.VOLTMIZE_BROWSE_DATA = {
  "meta": {
    "title": "VoltMize Energy Knowledge Browser",
    "generated_on": "2026-10-18",
    "document_count": 62,
    "factory_count": 5,
    "category_count": 26,
    "relationship_count": 166
  },
  "categories": [
    {
      "id": "root",
      "parent_id": null,
      "name": "All factories",
      "kind": "collection",
      "description": "VoltMize operational knowledge collection",
      "sort_order": 0
    },
    {
      "id": "factory-textile_reference",
      "parent_id": "root",
      "name": "Reference Weaving Unit",
      "kind": "factory",
      "description": "Textile weaving · Lahore",
      "sort_order": 1
    },
    {
      "id": "zone-textile_reference-z_prod",
      "parent_id": "factory-textile_reference",
      "name": "Production hall",
      "kind": "zone",
      "description": "Production-linked load with separate Line 1 and Line 2 behavior.",
      "sort_order": 1
    },
    {
      "id": "zone-textile_reference-z_air",
      "parent_id": "factory-textile_reference",
      "name": "Compressor room",
      "kind": "zone",
      "description": "Fixed- and variable-speed compressors supply the shared compressed-air system.",
      "sort_order": 2
    },
    {
      "id": "zone-textile_reference-z_hum",
      "parent_id": "factory-textile_reference",
      "name": "Humidification",
      "kind": "zone",
      "description": "Fans and pumps maintain fabric-process humidity during both shifts.",
      "sort_order": 3
    },
    {
      "id": "zone-textile_reference-z_prep",
      "parent_id": "factory-textile_reference",
      "name": "Preparatory",
      "kind": "zone",
      "description": "Warping and sizing are batch loads concentrated in the day shift.",
      "sort_order": 4
    },
    {
      "id": "zone-textile_reference-z_util",
      "parent_id": "factory-textile_reference",
      "name": "Utilities",
      "kind": "zone",
      "description": "Lighting, pumps, ventilation, sockets and standby services.",
      "sort_order": 5
    },
    {
      "id": "factory-cold_storage",
      "parent_id": "root",
      "name": "Indus Cold Chain",
      "kind": "factory",
      "description": "Cold storage · Karachi",
      "sort_order": 2
    },
    {
      "id": "zone-cold_storage-z_plant",
      "parent_id": "factory-cold_storage",
      "name": "Refrigeration plant",
      "kind": "zone",
      "description": "Screw and reciprocating compressors supply cooling around the clock.",
      "sort_order": 1
    },
    {
      "id": "zone-cold_storage-z_chamb",
      "parent_id": "factory-cold_storage",
      "name": "Cold chambers",
      "kind": "zone",
      "description": "Freezer, chiller, evaporator-fan and defrost loads form the thermal demand.",
      "sort_order": 2
    },
    {
      "id": "zone-cold_storage-z_dock",
      "parent_id": "factory-cold_storage",
      "name": "Loading dock",
      "kind": "zone",
      "description": "Doors, air curtains and forklift charging vary with dispatch activity.",
      "sort_order": 3
    },
    {
      "id": "zone-cold_storage-z_util",
      "parent_id": "factory-cold_storage",
      "name": "Utilities",
      "kind": "zone",
      "description": "Yard lighting, offices, security and monitoring systems.",
      "sort_order": 4
    },
    {
      "id": "factory-plastics_moulding",
      "parent_id": "root",
      "name": "Ravi Polymers (Pvt) Ltd",
      "kind": "factory",
      "description": "Plastics moulding · Lahore",
      "sort_order": 3
    },
    {
      "id": "zone-plastics_moulding-z_mould",
      "parent_id": "factory-plastics_moulding",
      "name": "Moulding hall",
      "kind": "zone",
      "description": "Heaters, hydraulic drives and mould cycles dominate demand.",
      "sort_order": 1
    },
    {
      "id": "zone-plastics_moulding-z_aux",
      "parent_id": "factory-plastics_moulding",
      "name": "Auxiliaries",
      "kind": "zone",
      "description": "Chillers, cooling pumps, dryers and material handling support production.",
      "sort_order": 2
    },
    {
      "id": "zone-plastics_moulding-z_util",
      "parent_id": "factory-plastics_moulding",
      "name": "Utilities",
      "kind": "zone",
      "description": "Lighting, office cooling, workshop loads and standby services.",
      "sort_order": 3
    },
    {
      "id": "factory-metal_workshop",
      "parent_id": "root",
      "name": "Al-Hadeed Engineering Works",
      "kind": "factory",
      "description": "Metal fabrication · Gujranwala",
      "sort_order": 4
    },
    {
      "id": "zone-metal_workshop-z_shop",
      "parent_id": "factory-metal_workshop",
      "name": "Machine shop",
      "kind": "zone",
      "description": "Lathes, mills, drills and grinders create short high-load operations.",
      "sort_order": 1
    },
    {
      "id": "zone-metal_workshop-z_fab",
      "parent_id": "factory-metal_workshop",
      "name": "Fabrication bay",
      "kind": "zone",
      "description": "Welders, cutting tools and extraction fans produce irregular peaks.",
      "sort_order": 2
    },
    {
      "id": "zone-metal_workshop-z_util",
      "parent_id": "factory-metal_workshop",
      "name": "Utilities",
      "kind": "zone",
      "description": "Lighting, ventilation, office and standby loads.",
      "sort_order": 3
    },
    {
      "id": "factory-bakery_food",
      "parent_id": "root",
      "name": "Shaheen Bakers",
      "kind": "factory",
      "description": "Commercial bakery · Faisalabad",
      "sort_order": 5
    },
    {
      "id": "zone-bakery_food-z_bake",
      "parent_id": "factory-bakery_food",
      "name": "Bakery hall",
      "kind": "zone",
      "description": "Ovens and proofers form the largest scheduled production load.",
      "sort_order": 1
    },
    {
      "id": "zone-bakery_food-z_dough",
      "parent_id": "factory-bakery_food",
      "name": "Dough preparation",
      "kind": "zone",
      "description": "Mixers and dividers run in short batches before baking.",
      "sort_order": 2
    },
    {
      "id": "zone-bakery_food-z_cold",
      "parent_id": "factory-bakery_food",
      "name": "Cold store",
      "kind": "zone",
      "description": "Refrigeration protects ingredients and finished products.",
      "sort_order": 3
    },
    {
      "id": "zone-bakery_food-z_pack",
      "parent_id": "factory-bakery_food",
      "name": "Packing",
      "kind": "zone",
      "description": "Conveyors, sealers and packing equipment follow oven output.",
      "sort_order": 4
    },
    {
      "id": "zone-bakery_food-z_util",
      "parent_id": "factory-bakery_food",
      "name": "Utilities",
      "kind": "zone",
      "description": "Lighting, water pumping, office and hygiene equipment.",
      "sort_order": 5
    }
  ],
  "documents": [
    {
      "id": "overview-textile_reference",
      "category_id": "factory-textile_reference",
      "factory_id": "textile_reference",
      "zone_id": null,
      "title": "Reference Weaving Unit — energy profile",
      "document_type": "Factory brief",
      "summary": "A two-shift weaving unit where compressed-air demand, humidification and production lines create distinct energy signatures.",
      "content": "This profile explains the energy context for Reference Weaving Unit in Lahore. Browse its zones to move from the facility context to meter evidence, anomaly incidents and recommended diagnostic playbooks.",
      "author": "VoltMize Energy Team",
      "published_on": "2026-09-02",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Coverage",
      "metric_value": "8 meters · 400 kVA",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "factory-profile",
        "lahore",
        "textile-weaving"
      ]
    },
    {
      "id": "zone-textile_reference-z_prod",
      "category_id": "zone-textile_reference-z_prod",
      "factory_id": "textile_reference",
      "zone_id": "Z_PROD",
      "title": "Production hall — operating context",
      "document_type": "Zone summary",
      "summary": "Production-linked load with separate Line 1 and Line 2 behavior.",
      "content": "The production hall is part of Reference Weaving Unit. Its normal operating context is: Production-linked load with separate Line 1 and Line 2 behavior. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-13",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "24 air-jet looms",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "production-hall",
        "textile-weaving",
        "zone-profile"
      ]
    },
    {
      "id": "meter-textile_reference-z_prod-mt2",
      "category_id": "zone-textile_reference-z_prod",
      "factory_id": "textile_reference",
      "zone_id": "Z_PROD",
      "title": "MT2 — Production hall meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret production hall energy behavior.",
      "content": "MT2 supplies the electrical evidence for this browsing path. It measures the available scope for production hall; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-03",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT2",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt2",
        "production-hall"
      ]
    },
    {
      "id": "zone-textile_reference-z_air",
      "category_id": "zone-textile_reference-z_air",
      "factory_id": "textile_reference",
      "zone_id": "Z_AIR",
      "title": "Compressor room — operating context",
      "document_type": "Zone summary",
      "summary": "Fixed- and variable-speed compressors supply the shared compressed-air system.",
      "content": "The compressor room is part of Reference Weaving Unit. Its normal operating context is: Fixed- and variable-speed compressors supply the shared compressed-air system. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-14",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "145 kW installed",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "compressor-room",
        "textile-weaving",
        "zone-profile"
      ]
    },
    {
      "id": "meter-textile_reference-z_air-mt3",
      "category_id": "zone-textile_reference-z_air",
      "factory_id": "textile_reference",
      "zone_id": "Z_AIR",
      "title": "MT3 — Compressor room meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret compressor room energy behavior.",
      "content": "MT3 supplies the electrical evidence for this browsing path. It measures the available scope for compressor room; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-04",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT3",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "compressor-room",
        "meter",
        "mt3"
      ]
    },
    {
      "id": "zone-textile_reference-z_hum",
      "category_id": "zone-textile_reference-z_hum",
      "factory_id": "textile_reference",
      "zone_id": "Z_HUM",
      "title": "Humidification — operating context",
      "document_type": "Zone summary",
      "summary": "Fans and pumps maintain fabric-process humidity during both shifts.",
      "content": "The humidification is part of Reference Weaving Unit. Its normal operating context is: Fans and pumps maintain fabric-process humidity during both shifts. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-15",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "22.2 kW installed",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "humidification",
        "textile-weaving",
        "zone-profile"
      ]
    },
    {
      "id": "meter-textile_reference-z_hum-mt4",
      "category_id": "zone-textile_reference-z_hum",
      "factory_id": "textile_reference",
      "zone_id": "Z_HUM",
      "title": "MT4 — Humidification meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret humidification energy behavior.",
      "content": "MT4 supplies the electrical evidence for this browsing path. It measures the available scope for humidification; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-05",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT4",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "humidification",
        "meter",
        "mt4"
      ]
    },
    {
      "id": "zone-textile_reference-z_prep",
      "category_id": "zone-textile_reference-z_prep",
      "factory_id": "textile_reference",
      "zone_id": "Z_PREP",
      "title": "Preparatory — operating context",
      "document_type": "Zone summary",
      "summary": "Warping and sizing are batch loads concentrated in the day shift.",
      "content": "The preparatory is part of Reference Weaving Unit. Its normal operating context is: Warping and sizing are batch loads concentrated in the day shift. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-16",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "29.5 kW installed",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "preparatory",
        "textile-weaving",
        "zone-profile"
      ]
    },
    {
      "id": "meter-textile_reference-z_prep-mt5",
      "category_id": "zone-textile_reference-z_prep",
      "factory_id": "textile_reference",
      "zone_id": "Z_PREP",
      "title": "MT5 — Preparatory meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret preparatory energy behavior.",
      "content": "MT5 supplies the electrical evidence for this browsing path. It measures the available scope for preparatory; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-06",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT5",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt5",
        "preparatory"
      ]
    },
    {
      "id": "zone-textile_reference-z_util",
      "category_id": "zone-textile_reference-z_util",
      "factory_id": "textile_reference",
      "zone_id": "Z_UTIL",
      "title": "Utilities — operating context",
      "document_type": "Zone summary",
      "summary": "Lighting, pumps, ventilation, sockets and standby services.",
      "content": "The utilities is part of Reference Weaving Unit. Its normal operating context is: Lighting, pumps, ventilation, sockets and standby services. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-17",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Mixed auxiliary load",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "textile-weaving",
        "utilities",
        "zone-profile"
      ]
    },
    {
      "id": "meter-textile_reference-z_util-mt6",
      "category_id": "zone-textile_reference-z_util",
      "factory_id": "textile_reference",
      "zone_id": "Z_UTIL",
      "title": "MT6 — Utilities meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret utilities energy behavior.",
      "content": "MT6 supplies the electrical evidence for this browsing path. It measures the available scope for utilities; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-07",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT6",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt6",
        "utilities"
      ]
    },
    {
      "id": "overview-cold_storage",
      "category_id": "factory-cold_storage",
      "factory_id": "cold_storage",
      "zone_id": null,
      "title": "Indus Cold Chain — energy profile",
      "document_type": "Factory brief",
      "summary": "A refrigerated warehouse whose compressors and chamber fans operate continuously without a normal overnight shutdown.",
      "content": "This profile explains the energy context for Indus Cold Chain in Karachi. Browse its zones to move from the facility context to meter evidence, anomaly incidents and recommended diagnostic playbooks.",
      "author": "VoltMize Energy Team",
      "published_on": "2026-09-03",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Coverage",
      "metric_value": "5 meters · 24/7 load",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-storage",
        "factory-profile",
        "karachi"
      ]
    },
    {
      "id": "zone-cold_storage-z_plant",
      "category_id": "zone-cold_storage-z_plant",
      "factory_id": "cold_storage",
      "zone_id": "Z_PLANT",
      "title": "Refrigeration plant — operating context",
      "document_type": "Zone summary",
      "summary": "Screw and reciprocating compressors supply cooling around the clock.",
      "content": "The refrigeration plant is part of Indus Cold Chain. Its normal operating context is: Screw and reciprocating compressors supply cooling around the clock. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-14",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "75 kW compressors",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-storage",
        "refrigeration-plant",
        "zone-profile"
      ]
    },
    {
      "id": "meter-cold_storage-z_plant-mt2",
      "category_id": "zone-cold_storage-z_plant",
      "factory_id": "cold_storage",
      "zone_id": "Z_PLANT",
      "title": "MT2 — Refrigeration plant meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret refrigeration plant energy behavior.",
      "content": "MT2 supplies the electrical evidence for this browsing path. It measures the available scope for refrigeration plant; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-04",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT2",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt2",
        "refrigeration-plant"
      ]
    },
    {
      "id": "zone-cold_storage-z_chamb",
      "category_id": "zone-cold_storage-z_chamb",
      "factory_id": "cold_storage",
      "zone_id": "Z_CHAMB",
      "title": "Cold chambers — operating context",
      "document_type": "Zone summary",
      "summary": "Freezer, chiller, evaporator-fan and defrost loads form the thermal demand.",
      "content": "The cold chambers is part of Indus Cold Chain. Its normal operating context is: Freezer, chiller, evaporator-fan and defrost loads form the thermal demand. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-15",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "5 chambers",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-chambers",
        "cold-storage",
        "zone-profile"
      ]
    },
    {
      "id": "meter-cold_storage-z_chamb-mt1",
      "category_id": "zone-cold_storage-z_chamb",
      "factory_id": "cold_storage",
      "zone_id": "Z_CHAMB",
      "title": "MT1 — Cold chambers meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret cold chambers energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for cold chambers; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-05",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-chambers",
        "meter",
        "mt1"
      ]
    },
    {
      "id": "zone-cold_storage-z_dock",
      "category_id": "zone-cold_storage-z_dock",
      "factory_id": "cold_storage",
      "zone_id": "Z_DOCK",
      "title": "Loading dock — operating context",
      "document_type": "Zone summary",
      "summary": "Doors, air curtains and forklift charging vary with dispatch activity.",
      "content": "The loading dock is part of Indus Cold Chain. Its normal operating context is: Doors, air curtains and forklift charging vary with dispatch activity. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-16",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "06:00–18:00",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-storage",
        "loading-dock",
        "zone-profile"
      ]
    },
    {
      "id": "meter-cold_storage-z_dock-mt5",
      "category_id": "zone-cold_storage-z_dock",
      "factory_id": "cold_storage",
      "zone_id": "Z_DOCK",
      "title": "MT5 — Loading dock meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret loading dock energy behavior.",
      "content": "MT5 supplies the electrical evidence for this browsing path. It measures the available scope for loading dock; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-06",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT5",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "loading-dock",
        "meter",
        "mt5"
      ]
    },
    {
      "id": "zone-cold_storage-z_util",
      "category_id": "zone-cold_storage-z_util",
      "factory_id": "cold_storage",
      "zone_id": "Z_UTIL",
      "title": "Utilities — operating context",
      "document_type": "Zone summary",
      "summary": "Yard lighting, offices, security and monitoring systems.",
      "content": "The utilities is part of Indus Cold Chain. Its normal operating context is: Yard lighting, offices, security and monitoring systems. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-17",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Always monitored",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-storage",
        "utilities",
        "zone-profile"
      ]
    },
    {
      "id": "meter-cold_storage-z_util-mt1",
      "category_id": "zone-cold_storage-z_util",
      "factory_id": "cold_storage",
      "zone_id": "Z_UTIL",
      "title": "MT1 — Utilities meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret utilities energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for utilities; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-07",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt1",
        "utilities"
      ]
    },
    {
      "id": "overview-plastics_moulding",
      "category_id": "factory-plastics_moulding",
      "factory_id": "plastics_moulding",
      "zone_id": null,
      "title": "Ravi Polymers (Pvt) Ltd — energy profile",
      "document_type": "Factory brief",
      "summary": "Injection-moulding machines, process chillers and auxiliary equipment create repeatable cycle-based demand.",
      "content": "This profile explains the energy context for Ravi Polymers (Pvt) Ltd in Lahore. Browse its zones to move from the facility context to meter evidence, anomaly incidents and recommended diagnostic playbooks.",
      "author": "VoltMize Energy Team",
      "published_on": "2026-09-04",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Coverage",
      "metric_value": "4 meters · batch cycles",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "factory-profile",
        "lahore",
        "plastics-moulding"
      ]
    },
    {
      "id": "zone-plastics_moulding-z_mould",
      "category_id": "zone-plastics_moulding-z_mould",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_MOULD",
      "title": "Moulding hall — operating context",
      "document_type": "Zone summary",
      "summary": "Heaters, hydraulic drives and mould cycles dominate demand.",
      "content": "The moulding hall is part of Ravi Polymers (Pvt) Ltd. Its normal operating context is: Heaters, hydraulic drives and mould cycles dominate demand. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-15",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Injection machines",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "moulding-hall",
        "plastics-moulding",
        "zone-profile"
      ]
    },
    {
      "id": "meter-plastics_moulding-z_mould-mt2",
      "category_id": "zone-plastics_moulding-z_mould",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_MOULD",
      "title": "MT2 — Moulding hall meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret moulding hall energy behavior.",
      "content": "MT2 supplies the electrical evidence for this browsing path. It measures the available scope for moulding hall; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-05",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT2",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "moulding-hall",
        "mt2"
      ]
    },
    {
      "id": "zone-plastics_moulding-z_aux",
      "category_id": "zone-plastics_moulding-z_aux",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_AUX",
      "title": "Auxiliaries — operating context",
      "document_type": "Zone summary",
      "summary": "Chillers, cooling pumps, dryers and material handling support production.",
      "content": "The auxiliaries is part of Ravi Polymers (Pvt) Ltd. Its normal operating context is: Chillers, cooling pumps, dryers and material handling support production. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-16",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Cooling + material",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "auxiliaries",
        "plastics-moulding",
        "zone-profile"
      ]
    },
    {
      "id": "meter-plastics_moulding-z_aux-mt3",
      "category_id": "zone-plastics_moulding-z_aux",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_AUX",
      "title": "MT3 — Auxiliaries meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret auxiliaries energy behavior.",
      "content": "MT3 supplies the electrical evidence for this browsing path. It measures the available scope for auxiliaries; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-06",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT3",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "auxiliaries",
        "meter",
        "mt3"
      ]
    },
    {
      "id": "zone-plastics_moulding-z_util",
      "category_id": "zone-plastics_moulding-z_util",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_UTIL",
      "title": "Utilities — operating context",
      "document_type": "Zone summary",
      "summary": "Lighting, office cooling, workshop loads and standby services.",
      "content": "The utilities is part of Ravi Polymers (Pvt) Ltd. Its normal operating context is: Lighting, office cooling, workshop loads and standby services. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-17",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Shared services",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "plastics-moulding",
        "utilities",
        "zone-profile"
      ]
    },
    {
      "id": "meter-plastics_moulding-z_util-mt1",
      "category_id": "zone-plastics_moulding-z_util",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_UTIL",
      "title": "MT1 — Utilities meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret utilities energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for utilities; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-07",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt1",
        "utilities"
      ]
    },
    {
      "id": "overview-metal_workshop",
      "category_id": "factory-metal_workshop",
      "factory_id": "metal_workshop",
      "zone_id": null,
      "title": "Al-Hadeed Engineering Works — energy profile",
      "document_type": "Factory brief",
      "summary": "A mixed metal workshop with intermittent machine tools and welding loads observed through a single main meter.",
      "content": "This profile explains the energy context for Al-Hadeed Engineering Works in Gujranwala. Browse its zones to move from the facility context to meter evidence, anomaly incidents and recommended diagnostic playbooks.",
      "author": "VoltMize Energy Team",
      "published_on": "2026-09-05",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Coverage",
      "metric_value": "1 main meter · variable load",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "factory-profile",
        "gujranwala",
        "metal-fabrication"
      ]
    },
    {
      "id": "zone-metal_workshop-z_shop",
      "category_id": "zone-metal_workshop-z_shop",
      "factory_id": "metal_workshop",
      "zone_id": "Z_SHOP",
      "title": "Machine shop — operating context",
      "document_type": "Zone summary",
      "summary": "Lathes, mills, drills and grinders create short high-load operations.",
      "content": "The machine shop is part of Al-Hadeed Engineering Works. Its normal operating context is: Lathes, mills, drills and grinders create short high-load operations. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-16",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Intermittent machining",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "machine-shop",
        "metal-fabrication",
        "zone-profile"
      ]
    },
    {
      "id": "meter-metal_workshop-z_shop-mt1",
      "category_id": "zone-metal_workshop-z_shop",
      "factory_id": "metal_workshop",
      "zone_id": "Z_SHOP",
      "title": "MT1 — Machine shop meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret machine shop energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for machine shop; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-06",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "machine-shop",
        "meter",
        "mt1"
      ]
    },
    {
      "id": "zone-metal_workshop-z_fab",
      "category_id": "zone-metal_workshop-z_fab",
      "factory_id": "metal_workshop",
      "zone_id": "Z_FAB",
      "title": "Fabrication bay — operating context",
      "document_type": "Zone summary",
      "summary": "Welders, cutting tools and extraction fans produce irregular peaks.",
      "content": "The fabrication bay is part of Al-Hadeed Engineering Works. Its normal operating context is: Welders, cutting tools and extraction fans produce irregular peaks. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-17",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Welding demand",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "fabrication-bay",
        "metal-fabrication",
        "zone-profile"
      ]
    },
    {
      "id": "meter-metal_workshop-z_fab-mt1",
      "category_id": "zone-metal_workshop-z_fab",
      "factory_id": "metal_workshop",
      "zone_id": "Z_FAB",
      "title": "MT1 — Fabrication bay meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret fabrication bay energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for fabrication bay; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-07",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "fabrication-bay",
        "meter",
        "mt1"
      ]
    },
    {
      "id": "zone-metal_workshop-z_util",
      "category_id": "zone-metal_workshop-z_util",
      "factory_id": "metal_workshop",
      "zone_id": "Z_UTIL",
      "title": "Utilities — operating context",
      "document_type": "Zone summary",
      "summary": "Lighting, ventilation, office and standby loads.",
      "content": "The utilities is part of Al-Hadeed Engineering Works. Its normal operating context is: Lighting, ventilation, office and standby loads. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-18",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Common services",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "metal-fabrication",
        "utilities",
        "zone-profile"
      ]
    },
    {
      "id": "meter-metal_workshop-z_util-mt1",
      "category_id": "zone-metal_workshop-z_util",
      "factory_id": "metal_workshop",
      "zone_id": "Z_UTIL",
      "title": "MT1 — Utilities meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret utilities energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for utilities; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-08",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt1",
        "utilities"
      ]
    },
    {
      "id": "overview-bakery_food",
      "category_id": "factory-bakery_food",
      "factory_id": "bakery_food",
      "zone_id": null,
      "title": "Shaheen Bakers — energy profile",
      "document_type": "Factory brief",
      "summary": "A bakery where ovens, dough preparation, cold storage and packing follow a daily production schedule.",
      "content": "This profile explains the energy context for Shaheen Bakers in Faisalabad. Browse its zones to move from the facility context to meter evidence, anomaly incidents and recommended diagnostic playbooks.",
      "author": "VoltMize Energy Team",
      "published_on": "2026-09-06",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Coverage",
      "metric_value": "3 meters · thermal process",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "commercial-bakery",
        "factory-profile",
        "faisalabad"
      ]
    },
    {
      "id": "zone-bakery_food-z_bake",
      "category_id": "zone-bakery_food-z_bake",
      "factory_id": "bakery_food",
      "zone_id": "Z_BAKE",
      "title": "Bakery hall — operating context",
      "document_type": "Zone summary",
      "summary": "Ovens and proofers form the largest scheduled production load.",
      "content": "The bakery hall is part of Shaheen Bakers. Its normal operating context is: Ovens and proofers form the largest scheduled production load. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-17",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Ovens + proofing",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "bakery-hall",
        "commercial-bakery",
        "zone-profile"
      ]
    },
    {
      "id": "meter-bakery_food-z_bake-mt2",
      "category_id": "zone-bakery_food-z_bake",
      "factory_id": "bakery_food",
      "zone_id": "Z_BAKE",
      "title": "MT2 — Bakery hall meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret bakery hall energy behavior.",
      "content": "MT2 supplies the electrical evidence for this browsing path. It measures the available scope for bakery hall; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-07",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT2",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "bakery-hall",
        "meter",
        "mt2"
      ]
    },
    {
      "id": "zone-bakery_food-z_dough",
      "category_id": "zone-bakery_food-z_dough",
      "factory_id": "bakery_food",
      "zone_id": "Z_DOUGH",
      "title": "Dough preparation — operating context",
      "document_type": "Zone summary",
      "summary": "Mixers and dividers run in short batches before baking.",
      "content": "The dough preparation is part of Shaheen Bakers. Its normal operating context is: Mixers and dividers run in short batches before baking. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-18",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Batch equipment",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "commercial-bakery",
        "dough-preparation",
        "zone-profile"
      ]
    },
    {
      "id": "meter-bakery_food-z_dough-mt1",
      "category_id": "zone-bakery_food-z_dough",
      "factory_id": "bakery_food",
      "zone_id": "Z_DOUGH",
      "title": "MT1 — Dough preparation meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret dough preparation energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for dough preparation; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-08",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "dough-preparation",
        "meter",
        "mt1"
      ]
    },
    {
      "id": "zone-bakery_food-z_cold",
      "category_id": "zone-bakery_food-z_cold",
      "factory_id": "bakery_food",
      "zone_id": "Z_COLD",
      "title": "Cold store — operating context",
      "document_type": "Zone summary",
      "summary": "Refrigeration protects ingredients and finished products.",
      "content": "The cold store is part of Shaheen Bakers. Its normal operating context is: Refrigeration protects ingredients and finished products. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-19",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Cooling load",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-store",
        "commercial-bakery",
        "zone-profile"
      ]
    },
    {
      "id": "meter-bakery_food-z_cold-mt3",
      "category_id": "zone-bakery_food-z_cold",
      "factory_id": "bakery_food",
      "zone_id": "Z_COLD",
      "title": "MT3 — Cold store meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret cold store energy behavior.",
      "content": "MT3 supplies the electrical evidence for this browsing path. It measures the available scope for cold store; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-09",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT3",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-store",
        "meter",
        "mt3"
      ]
    },
    {
      "id": "zone-bakery_food-z_pack",
      "category_id": "zone-bakery_food-z_pack",
      "factory_id": "bakery_food",
      "zone_id": "Z_PACK",
      "title": "Packing — operating context",
      "document_type": "Zone summary",
      "summary": "Conveyors, sealers and packing equipment follow oven output.",
      "content": "The packing is part of Shaheen Bakers. Its normal operating context is: Conveyors, sealers and packing equipment follow oven output. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-20",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "End-of-line load",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "commercial-bakery",
        "packing",
        "zone-profile"
      ]
    },
    {
      "id": "meter-bakery_food-z_pack-mt1",
      "category_id": "zone-bakery_food-z_pack",
      "factory_id": "bakery_food",
      "zone_id": "Z_PACK",
      "title": "MT1 — Packing meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret packing energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for packing; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-10",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt1",
        "packing"
      ]
    },
    {
      "id": "zone-bakery_food-z_util",
      "category_id": "zone-bakery_food-z_util",
      "factory_id": "bakery_food",
      "zone_id": "Z_UTIL",
      "title": "Utilities — operating context",
      "document_type": "Zone summary",
      "summary": "Lighting, water pumping, office and hygiene equipment.",
      "content": "The utilities is part of Shaheen Bakers. Its normal operating context is: Lighting, water pumping, office and hygiene equipment. The linked meter profile explains observability; linked incidents show how deviations become actionable evidence.",
      "author": "Energy Analyst",
      "published_on": "2026-09-21",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Normal context",
      "metric_value": "Shared services",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "commercial-bakery",
        "utilities",
        "zone-profile"
      ]
    },
    {
      "id": "meter-bakery_food-z_util-mt1",
      "category_id": "zone-bakery_food-z_util",
      "factory_id": "bakery_food",
      "zone_id": "Z_UTIL",
      "title": "MT1 — Utilities meter profile",
      "document_type": "Meter profile",
      "summary": "Measurement point used to interpret utilities energy behavior.",
      "content": "MT1 supplies the electrical evidence for this browsing path. It measures the available scope for utilities; where the same main meter appears in several zones, the zone context—not a dedicated submeter—must be used when interpreting an event.",
      "author": "Metering Engineer",
      "published_on": "2026-10-11",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Meter scope",
      "metric_value": "MT1",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "meter",
        "mt1",
        "utilities"
      ]
    },
    {
      "id": "incident-01-compressor-running-after-saturday-shift",
      "category_id": "zone-textile_reference-z_air",
      "factory_id": "textile_reference",
      "zone_id": "Z_AIR",
      "title": "Compressor running after Saturday shift",
      "document_type": "Anomaly incident",
      "summary": "Overnight compressor-room demand remained elevated after production stopped.",
      "content": "Detection summary: Overnight compressor-room demand remained elevated after production stopped. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-02",
      "severity": "critical",
      "status": "Needs review",
      "metric_label": "Key signal",
      "metric_value": "22:00–06:00",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "compressor",
        "critical",
        "overnight",
        "waste"
      ]
    },
    {
      "id": "incident-02-compressed-air-leak-growth",
      "category_id": "zone-textile_reference-z_air",
      "factory_id": "textile_reference",
      "zone_id": "Z_AIR",
      "title": "Compressed-air leak growth",
      "document_type": "Anomaly incident",
      "summary": "Supplier duty cycle rose while loaded power stayed stable, matching a growing distribution leak.",
      "content": "Detection summary: Supplier duty cycle rose while loaded power stayed stable, matching a growing distribution leak. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-03",
      "severity": "high",
      "status": "Needs review",
      "metric_label": "Key signal",
      "metric_value": "+10% system loss",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "compressed-air",
        "high",
        "leak",
        "trend"
      ]
    },
    {
      "id": "incident-03-line-1-motor-efficiency-drift",
      "category_id": "zone-textile_reference-z_prod",
      "factory_id": "textile_reference",
      "zone_id": "Z_PROD",
      "title": "Line 1 motor efficiency drift",
      "document_type": "Anomaly incident",
      "summary": "Line 1 diverged from the comparable Line 2 baseline and showed lower power factor.",
      "content": "Detection summary: Line 1 diverged from the comparable Line 2 baseline and showed lower power factor. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-04",
      "severity": "medium",
      "status": "Observed",
      "metric_label": "Key signal",
      "metric_value": "PF 0.82 → 0.78",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "comparison",
        "medium",
        "motor",
        "power-factor"
      ]
    },
    {
      "id": "incident-04-screw-compressor-efficiency-loss",
      "category_id": "zone-cold_storage-z_plant",
      "factory_id": "cold_storage",
      "zone_id": "Z_PLANT",
      "title": "Screw compressor efficiency loss",
      "document_type": "Anomaly incident",
      "summary": "Compressor input increased at a similar cooling duty, suggesting mechanical or control degradation.",
      "content": "Detection summary: Compressor input increased at a similar cooling duty, suggesting mechanical or control degradation. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-05",
      "severity": "high",
      "status": "Needs review",
      "metric_label": "Key signal",
      "metric_value": "+6.8% kWh/day",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "compressor",
        "continuous-load",
        "efficiency",
        "high"
      ]
    },
    {
      "id": "incident-05-loading-door-thermal-ingress",
      "category_id": "zone-cold_storage-z_dock",
      "factory_id": "cold_storage",
      "zone_id": "Z_DOCK",
      "title": "Loading-door thermal ingress",
      "document_type": "Anomaly incident",
      "summary": "Extended door openings coincided with plant-load spikes and slow chamber recovery.",
      "content": "Detection summary: Extended door openings coincided with plant-load spikes and slow chamber recovery. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-06",
      "severity": "medium",
      "status": "Observed",
      "metric_label": "Key signal",
      "metric_value": "+11 kW during dispatch",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "door",
        "medium",
        "operations",
        "thermal"
      ]
    },
    {
      "id": "incident-06-chiller-short-cycling",
      "category_id": "zone-plastics_moulding-z_aux",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_AUX",
      "title": "Chiller short cycling",
      "document_type": "Anomaly incident",
      "summary": "The process chiller start count rose above its normal cycle frequency while average load changed only slightly.",
      "content": "Detection summary: The process chiller start count rose above its normal cycle frequency while average load changed only slightly. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-07",
      "severity": "high",
      "status": "Needs review",
      "metric_label": "Key signal",
      "metric_value": "17 starts/hour",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "chiller",
        "high",
        "maintenance",
        "short-cycling"
      ]
    },
    {
      "id": "incident-07-barrel-heater-left-energised",
      "category_id": "zone-plastics_moulding-z_mould",
      "factory_id": "plastics_moulding",
      "zone_id": "Z_MOULD",
      "title": "Barrel heater left energised",
      "document_type": "Anomaly incident",
      "summary": "Heating demand continued between production batches with no corresponding hydraulic activity.",
      "content": "Detection summary: Heating demand continued between production batches with no corresponding hydraulic activity. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-08",
      "severity": "medium",
      "status": "Observed",
      "metric_label": "Key signal",
      "metric_value": "2.4 h idle heating",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "heater",
        "idle-load",
        "medium",
        "schedule"
      ]
    },
    {
      "id": "incident-08-unexpected-welding-peak",
      "category_id": "zone-metal_workshop-z_fab",
      "factory_id": "metal_workshop",
      "zone_id": "Z_FAB",
      "title": "Unexpected welding peak",
      "document_type": "Anomaly incident",
      "summary": "Coincident welder operation created a short demand peak above the workshop planning limit.",
      "content": "Detection summary: Coincident welder operation created a short demand peak above the workshop planning limit. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-09",
      "severity": "high",
      "status": "Needs review",
      "metric_label": "Key signal",
      "metric_value": "146 kW peak",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "demand",
        "high",
        "peak",
        "welding"
      ]
    },
    {
      "id": "incident-09-lathe-idle-load-pattern",
      "category_id": "zone-metal_workshop-z_shop",
      "factory_id": "metal_workshop",
      "zone_id": "Z_SHOP",
      "title": "Lathe idle-load pattern",
      "document_type": "Anomaly incident",
      "summary": "A machine remained energised between jobs, creating a stable avoidable baseline.",
      "content": "Detection summary: A machine remained energised between jobs, creating a stable avoidable baseline. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-10",
      "severity": "low",
      "status": "Observed",
      "metric_label": "Key signal",
      "metric_value": "3.1 kW for 96 min",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "idle-load",
        "low",
        "machine-tool",
        "waste"
      ]
    },
    {
      "id": "incident-10-oven-preheat-started-early",
      "category_id": "zone-bakery_food-z_bake",
      "factory_id": "bakery_food",
      "zone_id": "Z_BAKE",
      "title": "Oven preheat started early",
      "document_type": "Anomaly incident",
      "summary": "The main oven reached full preheat well before the first scheduled batch.",
      "content": "Detection summary: The main oven reached full preheat well before the first scheduled batch. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-11",
      "severity": "medium",
      "status": "Observed",
      "metric_label": "Key signal",
      "metric_value": "41 min early",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "medium",
        "oven",
        "schedule",
        "thermal"
      ]
    },
    {
      "id": "incident-11-cold-room-seal-degradation",
      "category_id": "zone-bakery_food-z_cold",
      "factory_id": "bakery_food",
      "zone_id": "Z_COLD",
      "title": "Cold-room seal degradation",
      "document_type": "Anomaly incident",
      "summary": "Longer refrigeration cycles appeared without a change in production volume or ambient schedule.",
      "content": "Detection summary: Longer refrigeration cycles appeared without a change in production volume or ambient schedule. The operator should first validate the meter scope and operating schedule, then follow the linked diagnostic playbook. This record demonstrates how a user can browse from facility context to evidence and then to an action.",
      "author": "Anomaly Review Team",
      "published_on": "2026-10-12",
      "severity": "high",
      "status": "Needs review",
      "metric_label": "Key signal",
      "metric_value": "+9.3% compressor duty",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "anomaly",
        "cold-room",
        "efficiency",
        "high",
        "trend"
      ]
    },
    {
      "id": "pb-compressor",
      "category_id": "root",
      "factory_id": null,
      "zone_id": null,
      "title": "Compressor anomaly triage",
      "document_type": "Diagnostic playbook",
      "summary": "Compare loaded kW, duty cycle and production state before classifying a compressor anomaly.",
      "content": "Purpose: Compare loaded kW, duty cycle and production state before classifying a compressor anomaly. Start with context, validate the signal against a comparable period, check related equipment, and record the operational explanation before recommending maintenance or schedule changes.",
      "author": "VoltMize Knowledge Team",
      "published_on": "2026-08-11",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Procedure",
      "metric_value": "4 verification steps",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "compressed-air",
        "compressor",
        "diagnosis",
        "efficiency",
        "playbook"
      ]
    },
    {
      "id": "pb-idle",
      "category_id": "root",
      "factory_id": null,
      "zone_id": null,
      "title": "Idle and after-hours load check",
      "document_type": "Diagnostic playbook",
      "summary": "Verify the production schedule, isolate expected standby loads and inspect the responsible zone.",
      "content": "Purpose: Verify the production schedule, isolate expected standby loads and inspect the responsible zone. Start with context, validate the signal against a comparable period, check related equipment, and record the operational explanation before recommending maintenance or schedule changes.",
      "author": "VoltMize Knowledge Team",
      "published_on": "2026-08-12",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Procedure",
      "metric_value": "4 verification steps",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "diagnosis",
        "idle-load",
        "overnight",
        "playbook",
        "schedule",
        "waste"
      ]
    },
    {
      "id": "pb-peak",
      "category_id": "root",
      "factory_id": null,
      "zone_id": null,
      "title": "Demand-peak investigation",
      "document_type": "Diagnostic playbook",
      "summary": "Align equipment start times, find coincident loads and estimate avoidable maximum demand.",
      "content": "Purpose: Align equipment start times, find coincident loads and estimate avoidable maximum demand. Start with context, validate the signal against a comparable period, check related equipment, and record the operational explanation before recommending maintenance or schedule changes.",
      "author": "VoltMize Knowledge Team",
      "published_on": "2026-08-13",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Procedure",
      "metric_value": "4 verification steps",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "demand",
        "diagnosis",
        "peak",
        "playbook",
        "welding"
      ]
    },
    {
      "id": "pb-cycle",
      "category_id": "root",
      "factory_id": null,
      "zone_id": null,
      "title": "Short-cycling diagnosis",
      "document_type": "Diagnostic playbook",
      "summary": "Count starts per interval, compare run duration and inspect sensor or control feedback.",
      "content": "Purpose: Count starts per interval, compare run duration and inspect sensor or control feedback. Start with context, validate the signal against a comparable period, check related equipment, and record the operational explanation before recommending maintenance or schedule changes.",
      "author": "VoltMize Knowledge Team",
      "published_on": "2026-08-14",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Procedure",
      "metric_value": "4 verification steps",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "chiller",
        "diagnosis",
        "maintenance",
        "playbook",
        "short-cycling"
      ]
    },
    {
      "id": "pb-thermal",
      "category_id": "root",
      "factory_id": null,
      "zone_id": null,
      "title": "Thermal-system efficiency check",
      "document_type": "Diagnostic playbook",
      "summary": "Compare compressor duty with doors, ambient conditions and production throughput.",
      "content": "Purpose: Compare compressor duty with doors, ambient conditions and production throughput. Start with context, validate the signal against a comparable period, check related equipment, and record the operational explanation before recommending maintenance or schedule changes.",
      "author": "VoltMize Knowledge Team",
      "published_on": "2026-08-15",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Procedure",
      "metric_value": "4 verification steps",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "cold-room",
        "diagnosis",
        "door",
        "oven",
        "playbook",
        "thermal"
      ]
    },
    {
      "id": "pb-pf",
      "category_id": "root",
      "factory_id": null,
      "zone_id": null,
      "title": "Low power-factor investigation",
      "document_type": "Diagnostic playbook",
      "summary": "Compare phases and peer equipment before checking loading, wear and compensation.",
      "content": "Purpose: Compare phases and peer equipment before checking loading, wear and compensation. Start with context, validate the signal against a comparable period, check related equipment, and record the operational explanation before recommending maintenance or schedule changes.",
      "author": "VoltMize Knowledge Team",
      "published_on": "2026-08-16",
      "severity": "info",
      "status": "Reference",
      "metric_label": "Procedure",
      "metric_value": "4 verification steps",
      "source_note": "Synthetic teaching record based on the VoltMize workflow",
      "tags": [
        "comparison",
        "diagnosis",
        "motor",
        "playbook",
        "power-factor"
      ]
    }
  ],
  "links": [
    {
      "source_document_id": "overview-textile_reference",
      "target_document_id": "zone-textile_reference-z_prod",
      "relationship": "contains",
      "explanation": "Production hall belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-textile_reference-z_prod",
      "target_document_id": "overview-textile_reference",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-textile_reference-z_prod",
      "target_document_id": "meter-textile_reference-z_prod-mt2",
      "relationship": "measured by",
      "explanation": "MT2 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-textile_reference-z_prod-mt2",
      "target_document_id": "zone-textile_reference-z_prod",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-textile_reference",
      "target_document_id": "zone-textile_reference-z_air",
      "relationship": "contains",
      "explanation": "Compressor room belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-textile_reference-z_air",
      "target_document_id": "overview-textile_reference",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-textile_reference-z_air",
      "target_document_id": "meter-textile_reference-z_air-mt3",
      "relationship": "measured by",
      "explanation": "MT3 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-textile_reference-z_air-mt3",
      "target_document_id": "zone-textile_reference-z_air",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-textile_reference",
      "target_document_id": "zone-textile_reference-z_hum",
      "relationship": "contains",
      "explanation": "Humidification belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-textile_reference-z_hum",
      "target_document_id": "overview-textile_reference",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-textile_reference-z_hum",
      "target_document_id": "meter-textile_reference-z_hum-mt4",
      "relationship": "measured by",
      "explanation": "MT4 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-textile_reference-z_hum-mt4",
      "target_document_id": "zone-textile_reference-z_hum",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-textile_reference",
      "target_document_id": "zone-textile_reference-z_prep",
      "relationship": "contains",
      "explanation": "Preparatory belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-textile_reference-z_prep",
      "target_document_id": "overview-textile_reference",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-textile_reference-z_prep",
      "target_document_id": "meter-textile_reference-z_prep-mt5",
      "relationship": "measured by",
      "explanation": "MT5 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-textile_reference-z_prep-mt5",
      "target_document_id": "zone-textile_reference-z_prep",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-textile_reference",
      "target_document_id": "zone-textile_reference-z_util",
      "relationship": "contains",
      "explanation": "Utilities belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-textile_reference-z_util",
      "target_document_id": "overview-textile_reference",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-textile_reference-z_util",
      "target_document_id": "meter-textile_reference-z_util-mt6",
      "relationship": "measured by",
      "explanation": "MT6 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-textile_reference-z_util-mt6",
      "target_document_id": "zone-textile_reference-z_util",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-cold_storage",
      "target_document_id": "zone-cold_storage-z_plant",
      "relationship": "contains",
      "explanation": "Refrigeration plant belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-cold_storage-z_plant",
      "target_document_id": "overview-cold_storage",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-cold_storage-z_plant",
      "target_document_id": "meter-cold_storage-z_plant-mt2",
      "relationship": "measured by",
      "explanation": "MT2 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-cold_storage-z_plant-mt2",
      "target_document_id": "zone-cold_storage-z_plant",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-cold_storage",
      "target_document_id": "zone-cold_storage-z_chamb",
      "relationship": "contains",
      "explanation": "Cold chambers belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-cold_storage-z_chamb",
      "target_document_id": "overview-cold_storage",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-cold_storage-z_chamb",
      "target_document_id": "meter-cold_storage-z_chamb-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-cold_storage-z_chamb-mt1",
      "target_document_id": "zone-cold_storage-z_chamb",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-cold_storage",
      "target_document_id": "zone-cold_storage-z_dock",
      "relationship": "contains",
      "explanation": "Loading dock belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-cold_storage-z_dock",
      "target_document_id": "overview-cold_storage",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-cold_storage-z_dock",
      "target_document_id": "meter-cold_storage-z_dock-mt5",
      "relationship": "measured by",
      "explanation": "MT5 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-cold_storage-z_dock-mt5",
      "target_document_id": "zone-cold_storage-z_dock",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-cold_storage",
      "target_document_id": "zone-cold_storage-z_util",
      "relationship": "contains",
      "explanation": "Utilities belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-cold_storage-z_util",
      "target_document_id": "overview-cold_storage",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-cold_storage-z_util",
      "target_document_id": "meter-cold_storage-z_util-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-cold_storage-z_util-mt1",
      "target_document_id": "zone-cold_storage-z_util",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-plastics_moulding",
      "target_document_id": "zone-plastics_moulding-z_mould",
      "relationship": "contains",
      "explanation": "Moulding hall belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-plastics_moulding-z_mould",
      "target_document_id": "overview-plastics_moulding",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-plastics_moulding-z_mould",
      "target_document_id": "meter-plastics_moulding-z_mould-mt2",
      "relationship": "measured by",
      "explanation": "MT2 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-plastics_moulding-z_mould-mt2",
      "target_document_id": "zone-plastics_moulding-z_mould",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-plastics_moulding",
      "target_document_id": "zone-plastics_moulding-z_aux",
      "relationship": "contains",
      "explanation": "Auxiliaries belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-plastics_moulding-z_aux",
      "target_document_id": "overview-plastics_moulding",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-plastics_moulding-z_aux",
      "target_document_id": "meter-plastics_moulding-z_aux-mt3",
      "relationship": "measured by",
      "explanation": "MT3 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-plastics_moulding-z_aux-mt3",
      "target_document_id": "zone-plastics_moulding-z_aux",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-plastics_moulding",
      "target_document_id": "zone-plastics_moulding-z_util",
      "relationship": "contains",
      "explanation": "Utilities belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-plastics_moulding-z_util",
      "target_document_id": "overview-plastics_moulding",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-plastics_moulding-z_util",
      "target_document_id": "meter-plastics_moulding-z_util-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-plastics_moulding-z_util-mt1",
      "target_document_id": "zone-plastics_moulding-z_util",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-metal_workshop",
      "target_document_id": "zone-metal_workshop-z_shop",
      "relationship": "contains",
      "explanation": "Machine shop belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-metal_workshop-z_shop",
      "target_document_id": "overview-metal_workshop",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-metal_workshop-z_shop",
      "target_document_id": "meter-metal_workshop-z_shop-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-metal_workshop-z_shop-mt1",
      "target_document_id": "zone-metal_workshop-z_shop",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-metal_workshop",
      "target_document_id": "zone-metal_workshop-z_fab",
      "relationship": "contains",
      "explanation": "Fabrication bay belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-metal_workshop-z_fab",
      "target_document_id": "overview-metal_workshop",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-metal_workshop-z_fab",
      "target_document_id": "meter-metal_workshop-z_fab-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-metal_workshop-z_fab-mt1",
      "target_document_id": "zone-metal_workshop-z_fab",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-metal_workshop",
      "target_document_id": "zone-metal_workshop-z_util",
      "relationship": "contains",
      "explanation": "Utilities belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-metal_workshop-z_util",
      "target_document_id": "overview-metal_workshop",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-metal_workshop-z_util",
      "target_document_id": "meter-metal_workshop-z_util-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-metal_workshop-z_util-mt1",
      "target_document_id": "zone-metal_workshop-z_util",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-bakery_food",
      "target_document_id": "zone-bakery_food-z_bake",
      "relationship": "contains",
      "explanation": "Bakery hall belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-bakery_food-z_bake",
      "target_document_id": "overview-bakery_food",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-bakery_food-z_bake",
      "target_document_id": "meter-bakery_food-z_bake-mt2",
      "relationship": "measured by",
      "explanation": "MT2 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-bakery_food-z_bake-mt2",
      "target_document_id": "zone-bakery_food-z_bake",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-bakery_food",
      "target_document_id": "zone-bakery_food-z_dough",
      "relationship": "contains",
      "explanation": "Dough preparation belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-bakery_food-z_dough",
      "target_document_id": "overview-bakery_food",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-bakery_food-z_dough",
      "target_document_id": "meter-bakery_food-z_dough-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-bakery_food-z_dough-mt1",
      "target_document_id": "zone-bakery_food-z_dough",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-bakery_food",
      "target_document_id": "zone-bakery_food-z_cold",
      "relationship": "contains",
      "explanation": "Cold store belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-bakery_food-z_cold",
      "target_document_id": "overview-bakery_food",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-bakery_food-z_cold",
      "target_document_id": "meter-bakery_food-z_cold-mt3",
      "relationship": "measured by",
      "explanation": "MT3 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-bakery_food-z_cold-mt3",
      "target_document_id": "zone-bakery_food-z_cold",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-bakery_food",
      "target_document_id": "zone-bakery_food-z_pack",
      "relationship": "contains",
      "explanation": "Packing belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-bakery_food-z_pack",
      "target_document_id": "overview-bakery_food",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-bakery_food-z_pack",
      "target_document_id": "meter-bakery_food-z_pack-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-bakery_food-z_pack-mt1",
      "target_document_id": "zone-bakery_food-z_pack",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "overview-bakery_food",
      "target_document_id": "zone-bakery_food-z_util",
      "relationship": "contains",
      "explanation": "Utilities belongs to this factory",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-bakery_food-z_util",
      "target_document_id": "overview-bakery_food",
      "relationship": "part of",
      "explanation": "Return to the factory-wide context",
      "weight": 0.95
    },
    {
      "source_document_id": "zone-bakery_food-z_util",
      "target_document_id": "meter-bakery_food-z_util-mt1",
      "relationship": "measured by",
      "explanation": "MT1 provides this zone's evidence",
      "weight": 1.0
    },
    {
      "source_document_id": "meter-bakery_food-z_util-mt1",
      "target_document_id": "zone-bakery_food-z_util",
      "relationship": "observes",
      "explanation": "Open the operating context for this measurement point",
      "weight": 1.0
    },
    {
      "source_document_id": "zone-textile_reference-z_air",
      "target_document_id": "incident-01-compressor-running-after-saturday-shift",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-01-compressor-running-after-saturday-shift",
      "target_document_id": "zone-textile_reference-z_air",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-01-compressor-running-after-saturday-shift",
      "target_document_id": "meter-textile_reference-z_air-mt3",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-textile_reference-z_air-mt3",
      "target_document_id": "incident-01-compressor-running-after-saturday-shift",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-textile_reference-z_air",
      "target_document_id": "incident-02-compressed-air-leak-growth",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-02-compressed-air-leak-growth",
      "target_document_id": "zone-textile_reference-z_air",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-02-compressed-air-leak-growth",
      "target_document_id": "meter-textile_reference-z_air-mt3",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-textile_reference-z_air-mt3",
      "target_document_id": "incident-02-compressed-air-leak-growth",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-textile_reference-z_prod",
      "target_document_id": "incident-03-line-1-motor-efficiency-drift",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-03-line-1-motor-efficiency-drift",
      "target_document_id": "zone-textile_reference-z_prod",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-03-line-1-motor-efficiency-drift",
      "target_document_id": "meter-textile_reference-z_prod-mt2",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-textile_reference-z_prod-mt2",
      "target_document_id": "incident-03-line-1-motor-efficiency-drift",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-cold_storage-z_plant",
      "target_document_id": "incident-04-screw-compressor-efficiency-loss",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-04-screw-compressor-efficiency-loss",
      "target_document_id": "zone-cold_storage-z_plant",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-04-screw-compressor-efficiency-loss",
      "target_document_id": "meter-cold_storage-z_plant-mt2",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-cold_storage-z_plant-mt2",
      "target_document_id": "incident-04-screw-compressor-efficiency-loss",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-cold_storage-z_dock",
      "target_document_id": "incident-05-loading-door-thermal-ingress",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-05-loading-door-thermal-ingress",
      "target_document_id": "zone-cold_storage-z_dock",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-05-loading-door-thermal-ingress",
      "target_document_id": "meter-cold_storage-z_dock-mt5",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-cold_storage-z_dock-mt5",
      "target_document_id": "incident-05-loading-door-thermal-ingress",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-plastics_moulding-z_aux",
      "target_document_id": "incident-06-chiller-short-cycling",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-06-chiller-short-cycling",
      "target_document_id": "zone-plastics_moulding-z_aux",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-06-chiller-short-cycling",
      "target_document_id": "meter-plastics_moulding-z_aux-mt3",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-plastics_moulding-z_aux-mt3",
      "target_document_id": "incident-06-chiller-short-cycling",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-plastics_moulding-z_mould",
      "target_document_id": "incident-07-barrel-heater-left-energised",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-07-barrel-heater-left-energised",
      "target_document_id": "zone-plastics_moulding-z_mould",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-07-barrel-heater-left-energised",
      "target_document_id": "meter-plastics_moulding-z_mould-mt2",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-plastics_moulding-z_mould-mt2",
      "target_document_id": "incident-07-barrel-heater-left-energised",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-metal_workshop-z_fab",
      "target_document_id": "incident-08-unexpected-welding-peak",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-08-unexpected-welding-peak",
      "target_document_id": "zone-metal_workshop-z_fab",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-08-unexpected-welding-peak",
      "target_document_id": "meter-metal_workshop-z_fab-mt1",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-metal_workshop-z_fab-mt1",
      "target_document_id": "incident-08-unexpected-welding-peak",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-metal_workshop-z_shop",
      "target_document_id": "incident-09-lathe-idle-load-pattern",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-09-lathe-idle-load-pattern",
      "target_document_id": "zone-metal_workshop-z_shop",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-09-lathe-idle-load-pattern",
      "target_document_id": "meter-metal_workshop-z_shop-mt1",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-metal_workshop-z_shop-mt1",
      "target_document_id": "incident-09-lathe-idle-load-pattern",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-bakery_food-z_bake",
      "target_document_id": "incident-10-oven-preheat-started-early",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-10-oven-preheat-started-early",
      "target_document_id": "zone-bakery_food-z_bake",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-10-oven-preheat-started-early",
      "target_document_id": "meter-bakery_food-z_bake-mt2",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-bakery_food-z_bake-mt2",
      "target_document_id": "incident-10-oven-preheat-started-early",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "zone-bakery_food-z_cold",
      "target_document_id": "incident-11-cold-room-seal-degradation",
      "relationship": "has incident",
      "explanation": "Observed inside this zone",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-11-cold-room-seal-degradation",
      "target_document_id": "zone-bakery_food-z_cold",
      "relationship": "occurred in",
      "explanation": "Review the zone operating context",
      "weight": 1.0
    },
    {
      "source_document_id": "incident-11-cold-room-seal-degradation",
      "target_document_id": "meter-bakery_food-z_cold-mt3",
      "relationship": "supported by",
      "explanation": "Inspect the measurement point behind this finding",
      "weight": 0.96
    },
    {
      "source_document_id": "meter-bakery_food-z_cold-mt3",
      "target_document_id": "incident-11-cold-room-seal-degradation",
      "relationship": "detected",
      "explanation": "An anomaly supported by this meter",
      "weight": 0.88
    },
    {
      "source_document_id": "incident-01-compressor-running-after-saturday-shift",
      "target_document_id": "pb-idle",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: overnight, waste",
      "weight": 0.8800000000000001
    },
    {
      "source_document_id": "pb-idle",
      "target_document_id": "incident-01-compressor-running-after-saturday-shift",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.8200000000000001
    },
    {
      "source_document_id": "incident-01-compressor-running-after-saturday-shift",
      "target_document_id": "pb-compressor",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: compressor",
      "weight": 0.78
    },
    {
      "source_document_id": "pb-compressor",
      "target_document_id": "incident-01-compressor-running-after-saturday-shift",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-02-compressed-air-leak-growth",
      "target_document_id": "pb-compressor",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: compressed-air",
      "weight": 0.78
    },
    {
      "source_document_id": "pb-compressor",
      "target_document_id": "incident-02-compressed-air-leak-growth",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-03-line-1-motor-efficiency-drift",
      "target_document_id": "pb-pf",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: comparison, motor, power-factor",
      "weight": 0.9800000000000001
    },
    {
      "source_document_id": "pb-pf",
      "target_document_id": "incident-03-line-1-motor-efficiency-drift",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-04-screw-compressor-efficiency-loss",
      "target_document_id": "pb-compressor",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: compressor, efficiency",
      "weight": 0.8800000000000001
    },
    {
      "source_document_id": "pb-compressor",
      "target_document_id": "incident-04-screw-compressor-efficiency-loss",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.8200000000000001
    },
    {
      "source_document_id": "incident-05-loading-door-thermal-ingress",
      "target_document_id": "pb-thermal",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: door, thermal",
      "weight": 0.8800000000000001
    },
    {
      "source_document_id": "pb-thermal",
      "target_document_id": "incident-05-loading-door-thermal-ingress",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.8200000000000001
    },
    {
      "source_document_id": "incident-06-chiller-short-cycling",
      "target_document_id": "pb-cycle",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: chiller, maintenance, short-cycling",
      "weight": 0.9800000000000001
    },
    {
      "source_document_id": "pb-cycle",
      "target_document_id": "incident-06-chiller-short-cycling",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-07-barrel-heater-left-energised",
      "target_document_id": "pb-idle",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: idle-load, schedule",
      "weight": 0.8800000000000001
    },
    {
      "source_document_id": "pb-idle",
      "target_document_id": "incident-07-barrel-heater-left-energised",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.8200000000000001
    },
    {
      "source_document_id": "incident-08-unexpected-welding-peak",
      "target_document_id": "pb-peak",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: demand, peak, welding",
      "weight": 0.9800000000000001
    },
    {
      "source_document_id": "pb-peak",
      "target_document_id": "incident-08-unexpected-welding-peak",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.92
    },
    {
      "source_document_id": "incident-09-lathe-idle-load-pattern",
      "target_document_id": "pb-idle",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: idle-load, waste",
      "weight": 0.8800000000000001
    },
    {
      "source_document_id": "pb-idle",
      "target_document_id": "incident-09-lathe-idle-load-pattern",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.8200000000000001
    },
    {
      "source_document_id": "incident-10-oven-preheat-started-early",
      "target_document_id": "pb-thermal",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: oven, thermal",
      "weight": 0.8800000000000001
    },
    {
      "source_document_id": "pb-thermal",
      "target_document_id": "incident-10-oven-preheat-started-early",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.8200000000000001
    },
    {
      "source_document_id": "incident-10-oven-preheat-started-early",
      "target_document_id": "pb-idle",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: schedule",
      "weight": 0.78
    },
    {
      "source_document_id": "pb-idle",
      "target_document_id": "incident-10-oven-preheat-started-early",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-11-cold-room-seal-degradation",
      "target_document_id": "pb-thermal",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: cold-room",
      "weight": 0.78
    },
    {
      "source_document_id": "pb-thermal",
      "target_document_id": "incident-11-cold-room-seal-degradation",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-11-cold-room-seal-degradation",
      "target_document_id": "pb-compressor",
      "relationship": "diagnosed with",
      "explanation": "Shared topic: efficiency",
      "weight": 0.78
    },
    {
      "source_document_id": "pb-compressor",
      "target_document_id": "incident-11-cold-room-seal-degradation",
      "relationship": "used for",
      "explanation": "Example incident for this procedure",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-01-compressor-running-after-saturday-shift",
      "target_document_id": "incident-04-screw-compressor-efficiency-loss",
      "relationship": "similar to",
      "explanation": "Similar signal: compressor",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-04-screw-compressor-efficiency-loss",
      "target_document_id": "incident-01-compressor-running-after-saturday-shift",
      "relationship": "similar to",
      "explanation": "Similar signal: compressor",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-01-compressor-running-after-saturday-shift",
      "target_document_id": "incident-09-lathe-idle-load-pattern",
      "relationship": "similar to",
      "explanation": "Similar signal: waste",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-09-lathe-idle-load-pattern",
      "target_document_id": "incident-01-compressor-running-after-saturday-shift",
      "relationship": "similar to",
      "explanation": "Similar signal: waste",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-02-compressed-air-leak-growth",
      "target_document_id": "incident-11-cold-room-seal-degradation",
      "relationship": "similar to",
      "explanation": "Similar signal: trend",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-11-cold-room-seal-degradation",
      "target_document_id": "incident-02-compressed-air-leak-growth",
      "relationship": "similar to",
      "explanation": "Similar signal: trend",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-04-screw-compressor-efficiency-loss",
      "target_document_id": "incident-11-cold-room-seal-degradation",
      "relationship": "similar to",
      "explanation": "Similar signal: efficiency",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-11-cold-room-seal-degradation",
      "target_document_id": "incident-04-screw-compressor-efficiency-loss",
      "relationship": "similar to",
      "explanation": "Similar signal: efficiency",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-05-loading-door-thermal-ingress",
      "target_document_id": "incident-10-oven-preheat-started-early",
      "relationship": "similar to",
      "explanation": "Similar signal: thermal",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-10-oven-preheat-started-early",
      "target_document_id": "incident-05-loading-door-thermal-ingress",
      "relationship": "similar to",
      "explanation": "Similar signal: thermal",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-07-barrel-heater-left-energised",
      "target_document_id": "incident-09-lathe-idle-load-pattern",
      "relationship": "similar to",
      "explanation": "Similar signal: idle-load",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-09-lathe-idle-load-pattern",
      "target_document_id": "incident-07-barrel-heater-left-energised",
      "relationship": "similar to",
      "explanation": "Similar signal: idle-load",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-07-barrel-heater-left-energised",
      "target_document_id": "incident-10-oven-preheat-started-early",
      "relationship": "similar to",
      "explanation": "Similar signal: schedule",
      "weight": 0.72
    },
    {
      "source_document_id": "incident-10-oven-preheat-started-early",
      "target_document_id": "incident-07-barrel-heater-left-energised",
      "relationship": "similar to",
      "explanation": "Similar signal: schedule",
      "weight": 0.72
    }
  ]
};
