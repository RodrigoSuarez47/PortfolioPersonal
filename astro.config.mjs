import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://rodrigosuarez.vercel.app",
  output: "static",
  trailingSlash: "never",
  vite: { plugins: [tailwindcss()] },
})
