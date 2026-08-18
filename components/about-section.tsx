import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12 text-center">
          <div className="flex items-center justify-center space-x-3">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Sobre mí</h2>
          </div>
          <div className="prose prose-base dark:prose-invert max-w-none mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed">
              Soy egresado de la carrera Analista en Tecnologías de la Información en Universidad ORT, con perfil
              mixto orientado al desarrollo de software y al trabajo con datos. Aporto una mirada integral para
              transformar necesidades de negocio en soluciones digitales robustas, seguras y escalables.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              He participado en proyectos web y de escritorio de punta a punta, desde el análisis funcional hasta el
              despliegue y soporte. Trabajo con foco en calidad técnica, claridad de implementación y entrega de valor,
              combinando construcción de producto con decisiones apoyadas en datos.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Mi especialización en Big Data complementa este enfoque, permitiéndome convertir grandes volúmenes de
              información en insights accionables para optimizar procesos y mejorar resultados de negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
