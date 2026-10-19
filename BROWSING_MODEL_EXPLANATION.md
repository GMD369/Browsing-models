# Browsing Models — Simple Explanation

## What browsing means in Information Retrieval

Searching starts with a question. Browsing starts with a collection. The user looks at categories or related items and gradually decides what is useful. It is helpful when the user does not know the exact words, IDs, or documents to search for.

In VoltMize, an operator may only know that “the electricity bill is high.” The operator can browse a factory, choose a zone, inspect its meter, open an anomaly, and then follow a diagnostic guide.

## 1. Flat browsing

Flat browsing puts every document in one list. There is no deep category path.

Example:

```text
Factory brief → Meter profile → Incident → Zone summary → Playbook → ...
```

The user scans titles and previews until something looks useful. This is simple and works for a small collection, but it becomes tiring as the collection grows. In the website, select **Flat index**.

## 2. Structured / guided browsing

Guided browsing organizes documents in a hierarchy. Each choice reduces the visible scope.

Example:

```text
All factories
└── Reference Weaving Unit
    └── Compressor room
        ├── MT3 meter profile
        ├── Compressor running after shift
        └── Compressed-air leak growth
```

The breadcrumb keeps the user's location visible. This model is the strongest default for VoltMize because factories naturally contain zones and zones contain monitored evidence.

## 3. Hypertext / connection browsing

Hypertext browsing treats each document as a node and each relationship as an edge. The user does not follow one fixed route.

```text
[Leak incident] ──supported by──> [MT3 meter]
       │
       ├──occurred in───────────> [Compressor room]
       └──diagnosed with────────> [Compressor playbook]
```

The next item is chosen from related links. This is useful for investigation because evidence, context and action are related but are not always parent and child categories.

## Dataset design

The SQLite database uses five normalized parts:

- `categories`: the collection, factories and zones.
- `documents`: briefs, zone summaries, meters, incidents and playbooks.
- `tags`: reusable concepts such as compressor, peak and short-cycling.
- `document_tags`: the many-to-many relationship between documents and tags.
- `document_links`: weighted, directional relationships between documents.

The browser receives a generated read-only projection of those tables. This keeps the demonstration easy to run while preserving a proper relational source dataset.

## How related items are created

Four clear rules are used:

1. A factory brief links to each zone summary.
2. A zone summary links to its meter profile and incidents.
3. An incident links to a diagnostic playbook when their topic tags overlap.
4. Two incidents link as similar when they share a meaningful domain tag.

Each edge stores a relationship label, explanation and weight. Therefore, the link is not an unexplained random recommendation.

## Search behavior inside browsing

Search is a supporting feature, not a separate FYP retrieval experiment. Every query term must appear somewhere in the document. Matching fields receive simple weights:

```text
title = 6, tag = 4, summary = 2, full content = 1
```

If the user selects a guided category first, search stays inside that part of the hierarchy. For example, searching `compressor` inside the weaving-unit compressor room is more focused than searching the entire collection.

## How to explain it in class

Say: “We converted the VoltMize workflow into browsable knowledge. The hierarchy answers *where am I?* The related links answer *where can I go next?* The preview answers *is this worth opening?* Recent items and history answer *how do I return?* Search and filters reduce the collection when the user has partial knowledge.”

