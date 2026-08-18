"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, FileBadge2, GraduationCap, Mail, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-12 left-12 text-6xl font-mono text-primary">{"@"}</div>
        <div className="absolute top-24 right-20 text-5xl font-mono text-primary">{"#"}</div>
        <div className="absolute bottom-20 left-24 text-4xl font-mono text-primary">{"$"}</div>
        <div className="absolute bottom-12 right-12 text-6xl font-mono text-primary">{"%"}</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Phone className="h-8 w-8 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Contacto</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              ¿Tienes una oportunidad para sumar talento? Estoy abierto a roles en desarrollo de software y análisis de
              datos, con foco en crear soluciones escalables y orientadas a resultados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3 text-xl">¿Conversamos sobre una oportunidad?</h3>
                <p className="text-muted-foreground mb-4">
                  Actualmente estoy disponible para procesos de selección y nuevas oportunidades profesionales.
                  Contáctame por WhatsApp para una respuesta rápida o por email para compartir detalles del rol.
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="group w-full transition-all hover:bg-white hover:text-primary dark:hover:bg-primary dark:hover:text-white"
                  >
                    <a href="https://wa.me/59894974540" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="mr-2 h-4 w-4 text-white group-hover:text-primary dark:text-black dark:group-hover:text-white transition-colors" />
                      Contactar por WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent dark:hover:text-primary transition-colors">
                    <a href="mailto:rodrisua1@hotmail.com" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 transition-colors group-hover:text-primary dark:group-hover:text-primary" />
                      <span className="transition-colors group-hover:text-primary dark:group-hover:text-primary">Enviar Email</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent dark:hover:text-primary transition-colors">
                    <a
                      href="/documents/CV_Rodrigo_Suarez.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Download className="mr-2 h-4 w-4 transition-colors group-hover:text-primary dark:group-hover:text-primary" />
                      <span className="transition-colors group-hover:text-primary dark:group-hover:text-primary">Descargar CV</span>
                    </a>
                  </Button>
                </div>
              </Card>

              <div>
                <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:rodrisua1@hotmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      rodrisua1@hotmail.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaWhatsapp className="h-5 w-5 text-green-500" />
                    <a
                      href="https://wa.me/59894974540"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-green-500 transition-colors"
                    >
                      +598 94 974 540 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3 text-xl flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Formación académica
                </h3>
                <p className="text-muted-foreground mb-4">
                  Aquí puedes revisar mi escolaridad y el certificado de graduación.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="/documents/Escolaridad_ATI.pdf" aria-label="Ver escolaridad">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Ver escolaridad
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="/documents/Constancia_Graduacion_ATI.pdf" aria-label="Ver certificado de graduación">
                      <FileBadge2 className="mr-2 h-4 w-4" />
                      Ver certificado de graduación
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-4 text-lg">¿Por qué considerarme para tu equipo?</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                    <span>
                      <strong>Experiencia aplicada:</strong> Proyectos reales en producción con tecnologías modernas y
                      arquitecturas escalables
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                    <span>
                      <strong>Calidad técnica:</strong> Desarrollo siguiendo mejores prácticas, clean code y patrones
                      de diseño
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                    <span>
                      <strong>Seguridad integrada:</strong> Implementación de JWT, BCrypt y medidas de seguridad desde
                      el diseño
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                    <span>
                      <strong>Perfil mixto:</strong> Capacidad para aportar en desarrollo de software y trabajo con
                      datos para la toma de decisiones basadas en evidencia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                    <span>
                      <strong>Comunicación profesional:</strong> Seguimiento claro, documentación y colaboración activa
                      con equipos técnicos y de negocio
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                    <span>
                      <strong>Enfoque de negocio:</strong> Soluciones que escalan y se alinean con objetivos concretos
                      de la organización
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                    <span>
                      <strong>Compromiso de entrega:</strong> Responsabilidad con plazos y ejecución eficiente en cada
                      etapa
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
