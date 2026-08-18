"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

const ProgrammingSymbols = () => {
  const symbols = [
    { symbol: "{}", top: "10%", left: "5%", delay: "0s" },
    { symbol: "</>", top: "20%", right: "10%", delay: "2s" },
    { symbol: "[]", top: "60%", left: "8%", delay: "4s" },
    { symbol: "();", top: "70%", right: "15%", delay: "1s" },
    { symbol: "=>", top: "40%", left: "3%", delay: "3s" },
    { symbol: "&&", top: "80%", right: "5%", delay: "5s" },
    { symbol: "||", top: "15%", left: "15%", delay: "6s" },
    { symbol: "!=", top: "85%", left: "12%", delay: "2.5s" },
    { symbol: "===", top: "25%", left: "25%", delay: "1.5s" },
    { symbol: "++", top: "45%", right: "25%", delay: "3.5s" },
    { symbol: "//", top: "55%", right: "8%", delay: "4.5s" },
    { symbol: "/**/", top: "35%", left: "20%", delay: "5.5s" },
    { symbol: "?:", top: "75%", left: "30%", delay: "0.5s" },
    { symbol: "...", top: "65%", right: "30%", delay: "6.5s" },
    { symbol: "=>", top: "30%", right: "20%", delay: "7s" },
    { symbol: "${}", top: "50%", left: "10%", delay: "7.5s" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((item, index) => (
        <div
          key={index}
          className="absolute text-primary/30 font-mono text-3xl animate-pulse"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            animationDuration: "3s",
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative">
      <ProgrammingSymbols />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">Rodrigo Suarez</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Analista en Tecnologías de la Información — Universidad ORT.
            </p>
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty">
              Especialización en Big Data.  Analista GeneXus Jr.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group transition-all hover:bg-white hover:text-primary dark:hover:bg-primary dark:hover:text-white"
            >
              Ver casos de éxito
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild className="group">
                <a href="https://github.com/rodrigoSuarez47" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 transition-colors text-foreground dark:text-white dark:group-hover:text-primary group-hover:text-white" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="group">
                <a href="https://www.linkedin.com/in/rodrigogabrielsuarez/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 transition-colors text-foreground dark:text-white dark:group-hover:text-primary group-hover:text-white" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="group">
                <a href="mailto:rodrisua1@hotmail.com">
                  <Mail className="h-4 w-4 transition-colors text-foreground dark:text-white dark:group-hover:text-primary group-hover:text-white" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="group">
                <a href="https://wa.me/59894974540" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-4 w-4 transition-colors text-foreground dark:text-white dark:group-hover:text-primary group-hover:text-white" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/profile-picture.png"
                alt="Rodrigo Suarez"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -inset-4 bg-primary/10 rounded-full -z-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
