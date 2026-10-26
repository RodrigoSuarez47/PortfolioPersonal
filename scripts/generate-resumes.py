"""Generate and validate one-page selectable-text resumes from the shared career data.
Requires reportlab, pypdf; --check compares committed PDF text without replacing it.
"""
import json
import re
import sys
from pathlib import Path
from xml.sax.saxutils import escape
import reportlab
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "resume-results"
OUTPUT.mkdir(exist_ok=True)
font_dir = Path(reportlab.__file__).parent / "fonts"
pdfmetrics.registerFont(TTFont("Resume", str(font_dir / "Vera.ttf")))
pdfmetrics.registerFont(TTFont("ResumeBold", str(font_dir / "VeraBd.ttf")))
pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold")
profile = json.loads((ROOT / "src/data/profile.json").read_text(encoding="utf-8"))
ink, accent = colors.HexColor("#17212b"), colors.HexColor("#006685")
styles = {
    "name": ParagraphStyle("name", fontName="ResumeBold", fontSize=26, leading=31, textColor=ink, spaceAfter=3),
    "role": ParagraphStyle("role", fontName="Resume", fontSize=11, leading=15, textColor=accent, spaceAfter=4),
    "contact": ParagraphStyle("contact", fontName="Resume", fontSize=9, leading=13, textColor=ink),
    "heading": ParagraphStyle("heading", fontName="ResumeBold", fontSize=10.5, leading=14, textColor=accent, spaceBefore=13, spaceAfter=6),
    "body": ParagraphStyle("body", fontName="Resume", fontSize=10, leading=14, textColor=ink, spaceAfter=3),
    "job": ParagraphStyle("job", fontName="ResumeBold", fontSize=10, leading=13, textColor=ink, spaceBefore=3, spaceAfter=1),
}
copy = {
"es": {
"role": "Analista en Tecnologías de la Información | Universidad ORT Uruguay",
"profile_h": "PERFIL PROFESIONAL",
"profile": "Analista en Tecnologías de la Información por Universidad ORT Uruguay. Desarrollo aplicaciones web, APIs y sistemas de gestión con C#/.NET, React y TypeScript. Experiencia en integraciones corporativas y procesos de negocio; formación en Big Data.",
"experience_h": "EXPERIENCIA LABORAL", "present": "Actualidad",
"projects_h": "PROYECTOS DESTACADOS",
"projects": "<b>Mayorista Javier:</b> sistema .NET/PostgreSQL y catálogo web; inventario, ventas y pedidos por WhatsApp. Ahorro estimado por el cliente: ~15 min/pedido.<br/><b>Ratio (Espina):</b> colaboración con Luis Terzano; logs y usuarios del panel administrador, Excel e instaladores Inno Setup de punta a punta. Gantt implementado para tiempos, recursos y costos previstos de obra.<br/><b>Jaume &amp; Sere:</b> proyecto final en equipo; reservas con .NET/React, Active Directory y avisos Outlook mediante Microsoft Graph.",
"education_h": "FORMACIÓN ACADÉMICA Y COMPLEMENTARIA",
"education": "<b>Universidad ORT Uruguay</b> | Analista en Tecnologías de la Información | 2023 - 2026.<br/>Título intermedio: Analista Programador. Promedio: 94%.<br/>Big Data (ORT) y Analista GeneXus 18 | 2026.<br/>Desarrollo Web, JavaScript y React (Coderhouse) | 2023. PC y Redes (BIOS) | 2017.",
"skills_h": "HABILIDADES TÉCNICAS",
"skills": "<b>Lenguajes:</b> C#, Java, JavaScript, TypeScript, Python, SQL.<br/><b>Frameworks:</b> ASP.NET Core, Entity Framework Core, React, Next.js, Astro, WPF, Tailwind CSS.<br/><b>Datos:</b> PostgreSQL, SQL Server, MySQL, MongoDB, Firebase, Cassandra, Neo4j.<br/><b>Herramientas y cloud:</b> Git, GitHub, Docker, Kubernetes, GeneXus, Azure, AWS, Vercel, Railway, Neon.<br/><b>Datos y BI:</b> Power BI, Tableau, Jupyter, Pandas, Apache Spark, Hive.",
"references": "Referencias disponibles a solicitud."
},
"en": {
"role": "Information Technology Analyst | Universidad ORT Uruguay",
"profile_h": "PROFESSIONAL SUMMARY",
"profile": "Information Technology Analyst graduate from Universidad ORT Uruguay. I develop web applications, APIs and business management systems with C#/.NET, React and TypeScript. Experience with corporate integrations and business processes; additional training in Big Data.",
"experience_h": "WORK EXPERIENCE", "present": "Present",
"projects_h": "SELECTED PROJECTS",
"projects": "<b>Mayorista Javier:</b> .NET/PostgreSQL system and web catalog; inventory, sales and WhatsApp orders. Client-estimated saving: ~15 min/order.<br/><b>Ratio (Espina):</b> contributor alongside Luis Terzano; admin logs/users, end-to-end Excel import/export and Inno Setup installers. Implemented Gantt for construction schedules, resources and planned costs.<br/><b>Jaume &amp; Sere:</b> team final degree project; .NET/React bookings, Active Directory and Outlook notifications via Microsoft Graph.",
"education_h": "EDUCATION AND ADDITIONAL TRAINING",
"education": "<b>Universidad ORT Uruguay</b> | Information Technology Analyst | 2023 - 2026.<br/>Intermediate qualification: Programming Analyst. Grade average: 94%.<br/>Big Data certificate (ORT) and GeneXus 18 Analyst | 2026.<br/>Web Development, JavaScript and React (Coderhouse) | 2023. PC and Networks (BIOS) | 2017.",
"skills_h": "TECHNICAL SKILLS",
"skills": "<b>Languages:</b> C#, Java, JavaScript, TypeScript, Python, SQL.<br/><b>Frameworks:</b> ASP.NET Core, Entity Framework Core, React, Next.js, Astro, WPF, Tailwind CSS.<br/><b>Databases:</b> PostgreSQL, SQL Server, MySQL, MongoDB, Firebase, Cassandra, Neo4j.<br/><b>Tools and cloud:</b> Git, GitHub, Docker, Kubernetes, GeneXus, Azure, AWS, Vercel, Railway, Neon.<br/><b>Data and BI:</b> Power BI, Tableau, Jupyter, Pandas, Apache Spark, Hive.",
"references": "References available upon request."
}}
for locale, c in copy.items():
    name = "Cv_Rodrigo_Suarez" + ("_EN" if locale == "en" else "") + ".pdf"
    path = OUTPUT / name
    def para(text, style="body"):
        return Paragraph(text, styles[style])
    story = [para("Rodrigo Suárez", "name"), para(c["role"], "role")]
    story += [para('Montevideo, Uruguay | +598 94 974 540 | <link href="mailto:rodrisua1@hotmail.com">rodrisua1@hotmail.com</link>', "contact")]
    story += [para('<link href="https://rodrigosuarez.vercel.app/">rodrigosuarez.vercel.app</link> | <link href="https://github.com/RodrigoSuarez47">github.com/RodrigoSuarez47</link>', "contact")]
    story += [para('<link href="https://www.linkedin.com/in/rodrigogabrielsuarez/">linkedin.com/in/rodrigogabrielsuarez</link>', "contact")]
    def section(title):
        return [para(title, "heading"), HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5df"), spaceAfter=6)]
    story += section(c["profile_h"]) + [para(c["profile"])]
    education, training = c["education"].split("<br/>", 2)[:2], c["education"].split("<br/>", 2)[2]
    story += section("FORMACIÓN ACADÉMICA" if locale == "es" else "EDUCATION") + [para("<br/>".join(education))]
    story += section("FORMACIÓN COMPLEMENTARIA" if locale == "es" else "ADDITIONAL TRAINING") + [para(training)]
    story += section(c["experience_h"])
    for item in profile["employment"]:
        period = item["since"] + " - " + (item["until"] or c["present"])
        heading = escape(item["role"][locale]) + " | " + escape(item["organization"]) + " | " + period
        story.append(KeepTogether([para(heading, "job"), para(escape(item["description"][locale]))]))
    for heading, body in [("projects_h","projects"), ("skills_h","skills")]:
        story += section(c[heading]) + [para(c[body])]
    story += section("REFERENCIAS" if locale == "es" else "REFERENCES") + [para(c["references"], "contact")]
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=48, leftMargin=48, topMargin=42, bottomMargin=38, title="Rodrigo Suárez - Resume" if locale=="en" else "Rodrigo Suárez - Currículum", author="Rodrigo Suárez", subject=c["role"])
    doc.build(story)
    pdf = PdfReader(path)
    assert len(pdf.pages) == 1, f"{locale}: resume must fit on one page"
    extracted = pdf.pages[0].extract_text()
    for expected in ["2020", "CASMU", "Mayorista Javier", "Ratio", "Inno Setup", "Gantt", "C#", "rodrisua1@hotmail.com", profile["employment"][0]["role"][locale]]:
        assert expected in extracted, f"{locale}: missing ATS text {expected}"
    assert "\ufffd" not in extracted and len(extracted) > 1200
    destination = ROOT / "public" / "documents" / name
    if "--check" in sys.argv:
        committed = PdfReader(destination)
        assert len(committed.pages) == 1
        assert re.sub(r"\s+", "", committed.pages[0].extract_text()) == re.sub(r"\s+", "", extracted), f"{locale}: committed resume is stale"
    else:
        destination.write_bytes(path.read_bytes())
    print(f"{locale}: one page, {len(extracted)} extractable characters, embedded fonts and selectable text")
