import { ArrowUpRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { site } from "@/lib/site"

const documents = [
  { title: "Currículum", href: "/documents/Cv_Rodrigo_Suarez.pdf" },
  { title: "Escolaridad", href: "/documents/Escolaridad_ATI.pdf" },
  { title: "Constancia de graduación", href: "/documents/Constancia_graduacion_ATI.pdf" },
]

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Siguiente paso" title="Conversemos sobre tu equipo o proyecto" description="Abierto a oportunidades en desarrollo de software y trabajo con datos. Cuéntame el contexto, el desafío y qué necesitas construir.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <h3 className="mb-3 text-xl font-semibold">Contacto directo</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">Por email para compartir detalles de una oportunidad o por WhatsApp para iniciar la conversación.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp<ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></a></Button>
            <Button asChild variant="outline"><a href={site.email}><Mail aria-hidden="true" className="mr-2 h-4 w-4" />Enviar email</a></Button>
          </div>
          <a href={site.email} className="mt-5 inline-block break-all text-sm text-muted-foreground underline underline-offset-4">rodrisua1@hotmail.com</a>
        </div>
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <h3 className="mb-3 text-xl font-semibold">Perfil y formación</h3>
          <ul className="divide-y">{documents.map((document) => (
            <li key={document.href}><a className="flex items-center justify-between gap-4 py-4 text-sm hover:text-primary" href={document.href} target="_blank" rel="noopener noreferrer">{document.title}<Download aria-hidden="true" className="h-4 w-4 shrink-0" /></a></li>
          ))}</ul>
        </div>
      </div>
    </Section>
  )
}
