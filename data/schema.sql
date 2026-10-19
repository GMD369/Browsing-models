PRAGMA foreign_keys = ON;

CREATE TABLE categories (
    id TEXT PRIMARY KEY,
    parent_id TEXT REFERENCES categories(id),
    name TEXT NOT NULL,
    kind TEXT NOT NULL CHECK (kind IN ('collection', 'factory', 'zone')),
    description TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE documents (
    id TEXT PRIMARY KEY,
    category_id TEXT NOT NULL REFERENCES categories(id),
    factory_id TEXT,
    zone_id TEXT,
    title TEXT NOT NULL,
    document_type TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    published_on TEXT NOT NULL,
    severity TEXT NOT NULL CHECK (severity IN ('info', 'low', 'medium', 'high', 'critical')),
    status TEXT NOT NULL,
    metric_label TEXT,
    metric_value TEXT,
    source_note TEXT NOT NULL
);

CREATE TABLE tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE document_tags (
    document_id TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (document_id, tag_id)
);

CREATE TABLE document_links (
    source_document_id TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    target_document_id TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    relationship TEXT NOT NULL,
    explanation TEXT NOT NULL,
    weight REAL NOT NULL CHECK (weight >= 0 AND weight <= 1),
    PRIMARY KEY (source_document_id, target_document_id, relationship)
);

CREATE VIRTUAL TABLE documents_fts USING fts5(
    document_id UNINDEXED,
    title,
    summary,
    content,
    tags
);

CREATE INDEX idx_categories_parent ON categories(parent_id);
CREATE INDEX idx_documents_category ON documents(category_id);
CREATE INDEX idx_documents_factory ON documents(factory_id);
CREATE INDEX idx_documents_type ON documents(document_type);
CREATE INDEX idx_links_source ON document_links(source_document_id);

