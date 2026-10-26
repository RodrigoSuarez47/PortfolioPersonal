"""Generate and validate one-page selectable-text resumes from the shared career data.
Requires reportlab, pypdf; --check compares committed PDF text without replacing it.
"""
import json
import re
import sys
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, HRFlowable
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "resume-results"
OUTPUT.mkdir(exist_ok=True)
profile = json.loads((ROOT / "src/data/profile.json").read_text(encoding="utf-8"))
ink = accent = colors.black
styles = {
    "name": ParagraphStyle("name", fontName="Times-Bold", fontSize=22, leading=26, textColor=ink, spaceAfter=3, alignment=1),
    "role": ParagraphStyle("role", fontName="Times-Roman", fontSize=11, leading=14, textColor=accent, spaceAfter=4, alignment=1),
    "contact": ParagraphStyle("contact", fontName="Times-Roman", fontSize=10, leading=12, textColor=ink, alignment=1),
    "heading": ParagraphStyle("heading", fontName="Times-Bold", fontSize=11, leading=13, textColor=accent, spaceBefore=9, spaceAfter=3),
    "body": ParagraphStyle("body", fontName="Times-Roman", fontSize=11, leading=13, textColor=ink, spaceAfter=4),
    "job": ParagraphStyle("job", fontName="Times-Bold", fontSize=11, leading=13, textColor=ink, spaceBefore=2, spaceAfter=2),
}
copy = {
"es": {
"role": "Desarrollador de software Full Stack",
"profile_h": "PERFIL PROFESIONAL",
"profile": "Analista en Tecnologías de la Información por Universidad ORT Uruguay. Desarrollo soluciones que simplifican el trabajo de las organizaciones, desde el análisis de sus necesidades hasta la puesta en funcionamiento. Combino aplicaciones web y de escritorio, integración de sistemas y trabajo con datos.",
"experience_h": "EXPERIENCIA LABORAL", "present": "Actualidad",
"projects_h": "PROYECTOS DESTACADOS",
"projects": "<b>Mayorista Javier | Gestión comercial y catálogo de productos.</b> Desarrollé un sistema que reemplaza pedidos en papel y reúne inventario, compras, ventas e indicadores del negocio. Creé el catálogo web para que los clientes consulten productos y precios y envíen sus pedidos por WhatsApp. El comercio puede cargarlos en segundos: el cliente estima un ahorro de aproximadamente 15 minutos por pedido.<br/><br/><b>Ratio para Espina | Gestión integral de obras.</b> Colaboro con Luis Terzano en un sistema que reúne presupuestos, costos y planificación de obras, adaptado a las necesidades de Uruguay. Mi aporte abarca el desarrollo de funcionalidades completas, la seguridad y gestión de usuarios, los registros de actividad, el intercambio de información con Excel y los instaladores Inno Setup. También modernicé la interfaz y la identidad visual para facilitar el uso del sistema.<br/><br/><b>Jaume &amp; Sere | Reservas de salas de reunión.</b> Participé en el análisis y desarrollo en equipo de una solución que sustituyó la agenda en papel. El sistema centraliza reservas y cancelaciones, integra el acceso corporativo y envía invitaciones y avisos por correo a los participantes. La organización informó que se eliminaron las reservas que bloqueaban salas incorrectamente.",
"education_h": "FORMACIÓN ACADÉMICA Y COMPLEMENTARIA",
"education": "<b>Universidad ORT Uruguay</b> | Analista en Tecnologías de la Información | 2023 - 2026.<br/>Título intermedio: Analista Programador. Promedio: 94%.<br/>Big Data (ORT) y Analista GeneXus 18 | 2026.<br/>Desarrollo Web, JavaScript y React (Coderhouse) | 2023. PC y Redes (BIOS) | 2017.",
"skills_h": "HABILIDADES TÉCNICAS",
"skills": "<b>Desarrollo:</b> C#, .NET, React, WPF, Java, JavaScript, TypeScript, Python y SQL.<br/><b>Datos y herramientas:</b> PostgreSQL, SQL Server, MongoDB, Git, Docker, Azure, AWS y GeneXus.<br/><b>Análisis de datos:</b> Power BI, Tableau, Pandas y Apache Spark.",
"references": "Referencias disponibles a solicitud."
},
"en": {
"role": "Full Stack Software Developer",
"profile_h": "PROFESSIONAL SUMMARY",
"profile": "Information Technology Analyst graduate from Universidad ORT Uruguay. I build solutions that simplify how organizations work, from understanding their needs to delivering working software. My experience combines web and desktop applications, system integrations and data analysis.",
"experience_h": "WORK EXPERIENCE", "present": "Present",
"projects_h": "SELECTED PROJECTS",
"projects": "<b>Mayorista Javier | Business management and product catalog.</b> Built a system that replaces paper orders and brings inventory, purchasing, sales and business indicators together. Developed the web catalog so customers can browse products and prices and send orders through WhatsApp. The business can load them in seconds; the client estimates a saving of approximately 15 minutes per order.<br/><br/><b>Ratio for Espina | Integrated construction management.</b> Collaborate with Luis Terzano on a system bringing together construction budgets, costs and planning, tailored to Uruguay. My contribution includes complete feature development, security and user management, activity records, Excel data exchange and Inno Setup installers. Also modernized the interface and visual identity to make the system easier to use.<br/><br/><b>Jaume &amp; Sere | Meeting room bookings.</b> Contributed to the team analysis and development of a solution replacing the paper booking diary. It centralizes bookings and cancellations, integrates corporate sign-in and emails invitations and updates to participants. The organization reported that bookings incorrectly blocking rooms were eliminated.",
"education_h": "EDUCATION AND ADDITIONAL TRAINING",
"education": "<b>Universidad ORT Uruguay</b> | Information Technology Analyst | 2023 - 2026.<br/>Intermediate qualification: Programming Analyst. Grade average: 94%.<br/>Big Data certificate (ORT) and GeneXus 18 Analyst | 2026.<br/>Web Development, JavaScript and React (Coderhouse) | 2023. PC and Networks (BIOS) | 2017.",
"skills_h": "TECHNICAL SKILLS",
"skills": "<b>Development:</b> C#, .NET, React, WPF, Java, JavaScript, TypeScript, Python and SQL.<br/><b>Data and tools:</b> PostgreSQL, SQL Server, MongoDB, Git, Docker, Azure, AWS and GeneXus.<br/><b>Data analysis:</b> Power BI, Tableau, Pandas and Apache Spark.",
"references": "References available upon request."
}}
experience_copy = {'es': 'Superviso el funcionamiento de los sistemas, analizo registros y datos e investigo incidentes mediante consultas a bases de datos y revisión de archivos. Estas tareas permiten identificar problemas y aportar información para su resolución.', 'en': 'Monitor system operation, analyze activity records and data, and investigate incidents through database queries and file reviews. This work helps identify problems and provide the information needed to resolve them.'}

for locale, c in copy.items():
    name = "Cv_Rodrigo_Suarez" + ("_EN" if locale == "en" else "") + ".pdf"
    path = OUTPUT / name
    def para(text, style="body"):
        return Paragraph(text, styles[style])
    story = [para("Rodrigo Suárez", "name"), para(c["role"], "role")]
    story += [para('Montevideo, Uruguay | +598 94 974 540 | <link href="mailto:rodrisua1@hotmail.com">rodrisua1@hotmail.com</link>', "contact")]
    story += [para('<link href="https://rodrigosuarez.vercel.app/">Portfolio</link> | <link href="https://github.com/RodrigoSuarez47">GitHub</link> | <link href="https://www.linkedin.com/in/rodrigogabrielsuarez/">LinkedIn</link>', "contact")]
    def section(title):
        return [para(title, "heading"), HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceAfter=4)]
    story += section(c["profile_h"]) + [para(c["profile"])]
    education, training = c["education"].split("<br/>", 2)[:2], c["education"].split("<br/>", 2)[2]
    story += section("FORMACIÓN ACADÉMICA" if locale == "es" else "EDUCATION") + [para("<br/>".join(education))]
    story += section(c["experience_h"])
    for item in profile["employment"]:
        period = item["since"] + " - " + (item["until"] or c["present"])
        heading = escape(item["role"][locale]) + " | " + escape(item["organization"]) + " | " + period
        story.append(KeepTogether([para(heading, "job"), para(experience_copy[locale])]))
    story += section(c["projects_h"]) + [para(c["projects"])]
    story += section("FORMACIÓN COMPLEMENTARIA" if locale == "es" else "ADDITIONAL TRAINING") + [para(training)]
    story += section(c["skills_h"]) + [para(c["skills"])]
    story += [Spacer(1, 5), para(c["references"], "contact")]
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=48, leftMargin=48, topMargin=42, bottomMargin=38, title="Rodrigo Suárez - Resume" if locale=="en" else "Rodrigo Suárez - Currículum", author="Rodrigo Suárez", subject=c["role"])
    doc.build(story)
    pdf = PdfReader(path)
    assert len(pdf.pages) == 1, f"{locale}: resume must fit on one page"
    extracted = pdf.pages[0].extract_text()
    for expected in ["2020", "CASMU", "Mayorista Javier", "Ratio", "Inno Setup", "C#", "rodrisua1@hotmail.com", profile["employment"][0]["role"][locale]]:
        assert expected in re.sub(r"\s+", " ", extracted), f"{locale}: missing ATS text {expected}"
    assert "\ufffd" not in extracted and len(extracted) > 2000
    assert not any(url in extracted for url in ["https://", "github.com/", "linkedin.com/", "rodrigosuarez.vercel.app"])
    targets = {str(a.get_object().get("/A", {}).get("/URI", "")) for a in pdf.pages[0].get("/Annots", [])}
    assert {"https://rodrigosuarez.vercel.app/", "https://github.com/RodrigoSuarez47", "https://www.linkedin.com/in/rodrigogabrielsuarez/"} <= targets
    destination = ROOT / "public" / "documents" / name
    if "--check" in sys.argv:
        committed = PdfReader(destination)
        assert len(committed.pages) == 1
        assert re.sub(r"\s+", "", committed.pages[0].extract_text()) == re.sub(r"\s+", "", extracted), f"{locale}: committed resume is stale"
    else:
        destination.write_bytes(path.read_bytes())
    print(f"{locale}: one page, {len(extracted)} extractable characters, standard PDF fonts and selectable text")
