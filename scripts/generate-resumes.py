"""Generate bilingual CVs using the fixed layout of the original recruiter-reviewed CV.

Layout reference: 01b1a13, public/documents/Cv_Rodrigo_Suarez.pdf.
Content may change; page geometry, section positions, typography and colors are locked.
An overflow is an error: never shrink type or move sections to accommodate content.
Requires reportlab and pypdf. Use --check to validate without replacing public PDFs.
"""
from io import BytesIO
import json
from pathlib import Path
import re
import sys
from xml.sax.saxutils import escape
from reportlab.lib.colors import Color, black
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "resume-results"
OUTPUT.mkdir(exist_ok=True)
PROFILE = json.loads((ROOT / "src/data/profile.json").read_text(encoding="utf-8"))
COPY = json.loads((ROOT / "scripts/resume-copy.json").read_text(encoding="utf-8"))
# Measured from the original PDF, in points. Do not restyle these constants.
PAGE = (595.2, 841.92)
LEFT, RIGHT = 84.984, 510.194
ACCENT = Color(0.431, 0.675, 0.925)
BODY = ParagraphStyle("body", fontName="Times-Roman", fontSize=11.04, leading=12.72, textColor=black)
CENTER = ParagraphStyle("center", parent=BODY, alignment=1)
RULES = (127.97, 215.35, 322.42, 429.48, 609.77)
SECTIONS = (("profile", 137.52, 156.03, 205.1), ("education", 224.66, 243.17, 307.1),
            ("training", 331.73, 350.24, 414.2), ("experience", 438.79, 457.56, 595.0),
            ("skills", 619.08, 637.61, 724.7))


def paragraph(canvas, text, top, bottom, centered=False, left=LEFT):
    item = Paragraph(text, CENTER if centered else BODY)
    _, height = item.wrap(RIGHT - left, bottom - top)
    if height > bottom - top + 0.1:
        raise ValueError(f"Content exceeds the approved CV layout at {top}: {height:.2f}pt available {bottom-top:.2f}pt. Shorten the copy; do not change the layout.")
    item.drawOn(canvas, left, PAGE[1] - top - height)


def generate(locale):
    copy = COPY[locale]
    buffer = BytesIO()
    canvas = Canvas(buffer, pagesize=PAGE, invariant=1)
    canvas.setTitle("Rodrigo Suarez - CV" + (" (English)" if locale == "en" else ""))
    canvas.setAuthor("Rodrigo Suarez")
    canvas.setFillColor(ACCENT)
    canvas.setFont("Times-Bold", 13.92)
    canvas.drawCentredString(PAGE[0] / 2, PAGE[1] - 54.8, "Rodrigo Suarez")
    paragraph(canvas, copy["qualification"], 60.96, 74.0, centered=True)
    paragraph(canvas, "(+598) 94 974 540 | rodrisua1@hotmail.com | Montevideo, Uruguay", 75.36, 89, centered=True)
    paragraph(canvas, '<link href="https://rodrigosuarez.vercel.app/">' + copy["website"] + '</link> | <link href="https://github.com/RodrigoSuarez47">GitHub</link> | <link href="https://www.linkedin.com/in/rodrigogabrielsuarez/">LinkedIn</link>', 94.8, 109, centered=True)
    for top in RULES:
        canvas.setStrokeColor(Color(0.5, 0.5, 0.5) if top == RULES[0] else black)
        canvas.setLineWidth(0.25 if top == RULES[0] else 0.8)
        canvas.line(LEFT, PAGE[1] - top, RIGHT, PAGE[1] - top)
    for key, heading_top, content_top, content_bottom in SECTIONS:
        canvas.setFillColor(ACCENT)
        canvas.setFont("Times-Bold", 12)
        canvas.drawCentredString(PAGE[0] / 2, PAGE[1] - heading_top - 9.6, copy[key + "_heading"])
        content = copy[key]
        if key == "experience":
            # Preserve the original sub-layout: freelance row, operator heading,
            # three hanging bullets and the references row at their original positions.
            paragraph(canvas, content, 457.56, 471)
            paragraph(canvas, copy["freelance_summary"], 472.0, 485.5)
            item = PROFILE["employment"][0]
            period = item["since"] + " - " + (item["until"] or copy["present"])
            heading = '<b>' + escape(item["role"][locale]) + ' - ' + escape(item["organization"]) + ' | ' + period + '</b>'
            paragraph(canvas, heading, 487.8, 501.3)
            for index, bullet in enumerate(copy["operator_bullets"]):
                top = (505.32, 522.84, 540.39)[index]
                canvas.setFillColor(black)
                canvas.circle(106.0, PAGE[1] - top - 7.5, 1.5, stroke=0, fill=1)
                paragraph(canvas, escape(bullet), top, top + 26, left=121.01)
            paragraph(canvas, copy["references"], 583.59, 597, left=103.01)
            continue
        if key in ("education", "training"):
            # Original document uses fixed 17.52pt row spacing in these sections.
            for index, row in enumerate(content.split("<br/>")):
                top = content_top + index * 17.52
                paragraph(canvas, row, top, top + 14)
        else:
            paragraph(canvas, content, content_top, content_bottom)
    canvas.showPage()
    canvas.save()
    return buffer.getvalue()


def validate(data, locale):
    reader = PdfReader(BytesIO(data))
    assert len(reader.pages) == 1, "The approved CV is one page"
    page = reader.pages[0]
    assert tuple(float(v) for v in page.mediabox[2:]) == PAGE
    text = re.sub(r"\s+", " ", page.extract_text())
    for word in ("CASMU", "2020", "Mayorista Javier", "Ratio", "Gantt", "C#", "94%", "rodrisua1@hotmail.com"):
        assert word in text, f"{locale}: missing {word}"
    assert "\ufffd" not in text
    links = {str(a.get_object().get("/A", {}).get("/URI", "")) for a in page.get("/Annots", [])}
    assert {"https://rodrigosuarez.vercel.app/", "https://github.com/RodrigoSuarez47", "https://www.linkedin.com/in/rodrigogabrielsuarez/", "https://github.com/jterzano"} <= links
    # Guard the actual rendered styling, not only the extracted text.
    stream = page.get_contents().get_data()
    assert b".431 .675 .925 rg" in stream, "Original sky-blue accent must be preserved"
    assert any(str(f.get_object().get("/BaseFont")) == "/Times-Roman" for f in page["/Resources"]["/Font"].values())
    return text


for locale in ("es", "en"):
    filename = "Cv_Rodrigo_Suarez" + ("_EN" if locale == "en" else "") + ".pdf"
    data = generate(locale)
    text = validate(data, locale)
    (OUTPUT / filename).write_bytes(data)
    target = ROOT / "public/documents" / filename
    if "--check" in sys.argv:
        assert validate(target.read_bytes(), locale) == text, f"{locale}: committed CV content is stale"
        assert target.read_bytes() == data, f"{locale}: committed CV layout differs from the approved template"
    else:
        target.write_bytes(data)
    print(f"{locale}: approved layout preserved; one page; selectable text; links and content verified")
