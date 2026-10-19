"""Create a readable contact sheet for lecture review."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "lecture_reference" / "pages"
TARGET = ROOT / "lecture_reference" / "week5_contact_sheet.jpg"


def main() -> None:
    paths = sorted(SOURCE.glob("page-*"))
    cell_width, cell_height, columns = 540, 325, 3
    rows = (len(paths) + columns - 1) // columns
    sheet = Image.new("RGB", (cell_width * columns, cell_height * rows), "white")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default(size=20)
    for index, path in enumerate(paths):
        image = Image.open(path).convert("RGB")
        image.thumbnail((cell_width - 24, cell_height - 42))
        left = index % columns * cell_width
        top = index // columns * cell_height
        x = left + (cell_width - image.width) // 2
        y = top + 34
        sheet.paste(image, (x, y))
        draw.text((left + 10, top + 7), path.stem, fill="black", font=font)
    sheet.save(TARGET, quality=92)
    print(TARGET)


if __name__ == "__main__":
    main()
