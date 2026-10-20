import type { Metadata } from "next"
import { site } from "@/lib/site"
import { localePath, type Locale } from "@/lib/i18n"

export function getMetadata(locale: Locale): Metadata {
  const title = locale === "en" ? "Rodrigo Suárez | Software Developer in Uruguay" : site.title
  const description = locale === "en" ? "Information Technology Analyst graduate from Universidad ORT Uruguay. Web applications, APIs and business management systems with C#, React and TypeScript." : site.description
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: "%s | Rodrigo Suárez" },
    description,
    authors: [{ name: site.name, url: site.linkedin }],
    creator: site.name,
    alternates: { canonical: localePath(locale), languages: { "es-UY": "/", en: "/en", "x-default": "/" } },
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", locale: locale === "es" ? "es_UY" : "en_US", alternateLocale: locale === "es" ? ["en_US"] : ["es_UY"], siteName: site.name, url: localePath(locale), images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  }
}
