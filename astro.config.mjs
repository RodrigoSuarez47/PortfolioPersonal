import { siteUrl } from "./site.config.mjs"
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: siteUrl,
  output: "static",
  trailingSlash: "never",
  security: {
    csp: {
      scriptDirective: { resources: ["'self'"] },
      directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "connect-src 'self' https://vitals.vercel-insights.com", "object-src 'none'", "base-uri 'self'", "form-action 'self'"],
    },
  },
  vite: { plugins: [tailwindcss()] },
})
