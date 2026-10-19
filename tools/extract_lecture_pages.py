"""Extract the image-based Week 5 browsing lecture into page images."""

from pathlib import Path

from pypdf import PdfReader


WORKSPACE = Path(__file__).resolve().parents[2]
SOURCE = WORKSPACE / "IR Browsing week 5" / "WEEK 5 IR.pdf"
OUTPUT = Path(__file__).resolve().parents[1] / "lecture_reference" / "pages"


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(str(SOURCE))
    for page_number, page in enumerate(reader.pages, start=1):
        images = list(page.images)
        if not images:
            continue
        largest = max(images, key=lambda image: len(image.data))
        suffix = Path(largest.name).suffix or ".png"
        target = OUTPUT / f"page-{page_number:02d}{suffix}"
        target.write_bytes(largest.data)
        print(target)


if __name__ == "__main__":
    main()
