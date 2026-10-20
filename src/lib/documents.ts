import type { Locale } from "./i18n"

const resumeByLocale: Record<Locale, string> = {
  es: "/documents/Cv_Rodrigo_Suarez.pdf",
  en: "/documents/Cv_Rodrigo_Suarez_EN.pdf",
}

export const getResume = (locale: Locale) => resumeByLocale[locale]
