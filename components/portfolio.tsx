import { ExperienceSection } from "@/components/experience-section"
import { getCopy, type Locale } from "@/lib/i18n"
import { StructuredData } from "@/components/structured-data"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export function Portfolio({ locale }: { locale: Locale }) {
  const t = getCopy(locale)
  return (
    <>
      <a href="#main-content" className="skip-link">{t("Saltar al contenido")}</a>
      <StructuredData locale={locale} />
      <Navigation locale={locale} />
      <main id="main-content" className="relative" tabIndex={-1}>
        <HeroSection locale={locale} />
        <ProjectsSection locale={locale} />
        <AboutSection locale={locale} />
        <ExperienceSection locale={locale} />
        <SkillsSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
