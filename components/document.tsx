import type { ReactNode } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import type { Locale } from "@/lib/i18n"
import "@/styles/globals.css"

export function Document({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale === "es" ? "es-UY" : "en"} suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
