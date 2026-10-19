"""Run integrity and coverage checks for the generated browsing collection."""

from pathlib import Path
import sqlite3


ROOT = Path(__file__).resolve().parents[1]
DATABASE = ROOT / "data" / "voltmize_browsing.db"


def scalar(connection, sql, parameters=()):
    return connection.execute(sql, parameters).fetchone()[0]


def main():
    checks = []
    with sqlite3.connect(DATABASE) as connection:
        checks.extend([
            ("SQLite integrity", scalar(connection, "PRAGMA integrity_check") == "ok"),
            ("Five FYP factories", scalar(connection, "SELECT COUNT(*) FROM categories WHERE kind='factory'") == 5),
            ("Documents available", scalar(connection, "SELECT COUNT(*) FROM documents") >= 50),
            ("Every document has tags", scalar(connection, "SELECT COUNT(*) FROM documents d WHERE NOT EXISTS (SELECT 1 FROM document_tags dt WHERE dt.document_id=d.id)") == 0),
            ("No broken link targets", scalar(connection, "SELECT COUNT(*) FROM document_links l LEFT JOIN documents d ON d.id=l.target_document_id WHERE d.id IS NULL") == 0),
            ("No broken categories", scalar(connection, "SELECT COUNT(*) FROM documents d LEFT JOIN categories c ON c.id=d.category_id WHERE c.id IS NULL") == 0),
            ("FTS index returns compressor records", scalar(connection, "SELECT COUNT(*) FROM documents_fts WHERE documents_fts MATCH 'compressor'") > 0),
            ("All required document types", scalar(connection, "SELECT COUNT(DISTINCT document_type) FROM documents") == 5),
        ])
        print("Dataset summary")
        for table in ("categories", "documents", "tags", "document_tags", "document_links"):
            print(f"  {table:16} {scalar(connection, f'SELECT COUNT(*) FROM {table}')}")
        print("\nValidation")
        for label, passed in checks:
            print(f"  {'PASS' if passed else 'FAIL':4}  {label}")
    if not all(result for _, result in checks):
        raise SystemExit(1)


if __name__ == "__main__":
    main()

