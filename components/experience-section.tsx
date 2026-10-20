import { Section } from "@/components/section"
import { getCopy, type Locale } from "@/lib/i18n"

const background = [
  { kind: "Experiencia aplicada", title: "Desarrollo de soluciones para negocios", description: "Mayorista Javier: sistema de gestión, inventario, compras, ventas y catálogo de clientes. FyV Traslados: diseño y desarrollo de su web comercial." },
  { kind: "Proyecto final de carrera", title: "Gestión de salas para Jaume & Sere", description: "Participación en el análisis y desarrollo de una solución de reservas con .NET, React, Active Directory y Microsoft Graph." },
  { kind: "Formación académica", title: "Analista en Tecnologías de la Información", description: "Universidad ORT Uruguay · Egresado" },
  { kind: "Formación complementaria", title: "Big Data y GeneXus", description: "Especialización en Big Data y formación como Analista GeneXus Jr." },
]

export function ExperienceSection({ locale = "es" }: { locale?: Locale }) {
  const t = getCopy(locale)
  return (
    <Section id="experience" eyebrow={t("Recorrido")} title={t("Experiencia y formación")} description={t("Del análisis a la entrega")}>
      <div className="grid gap-5 md:grid-cols-2">
        {background.map((item) => (
          <article key={item.title} className="space-y-3 rounded-2xl border bg-card p-6">
            <p className="eyebrow">{t(item.kind)}</p>
            <h3 className="text-lg font-semibold">{t(item.title)}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{t(item.description)}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
