import assert from "node:assert/strict"
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs"
import { resolve, join } from "node:path"

const root = resolve("dist")
for (const [file, language, canonical] of [["index.html", "es-UY", "/"], ["en/index.html", "en", "/en"]]) {
  const html = readFileSync(join(root, file), "utf8")
  assert.match(html, new RegExp('<html[^>]*lang="' + language + '"'), file + ": document language")
  assert.ok(html.includes('href="https://rodrigosuarez.vercel.app' + canonical + '"'), file + ": canonical")
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, file + ": one page heading")
  assert.equal((html.match(/class="project-card"/g) ?? []).length, 4, file + ": four case studies")
  assert.ok(html.includes('id="experience"'), file + ": experience section")
  assert.ok(html.includes("15"), file + ": supplied business outcome")
  assert.ok(!html.includes("/_next/"), file + ": no Next.js runtime")
  assert.match(html, /hreflang="en"/)
  assert.match(html, /hreflang="es-UY"/)
  const schema = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)
  assert.ok(schema, file + ": structured data")
  assert.equal(JSON.parse(schema[1])["@graph"].find(item => item["@type"] === "ProfilePage").inLanguage, language)
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (value.startsWith("#")) {
      assert.ok(html.includes('id="' + value.slice(1) + '"'), file + ": anchor " + value)
    } else if (value.startsWith("/") && !value.startsWith("//")) {
      const path = decodeURIComponent(value.replaceAll("&amp;", "&").split("#")[0].split("?")[0])
      const disk = join(root, path)
      assert.ok(existsSync(disk) || existsSync(join(disk, "index.html")), file + ": local resource " + path)
    }
  }
}
const en = readFileSync(join(root, "en/index.html"), "utf8")
assert.ok(en.includes("cancellation notices"), "English meeting cancellation outcome")
assert.ok(en.includes("Backend and integrations"), "English skills translated")
assert.ok(existsSync(join(root, "sitemap.xml")))
const walk = dir => readdirSync(dir).flatMap(name => {
  const path = join(dir, name)
  return statSync(path).isDirectory() ? walk(path) : [path]
})
const scripts = walk(root).filter(path => path.endsWith(".js"))
const inlineScripts = new Set()
for (const file of ["index.html", "en/index.html"]) {
  const html = readFileSync(join(root, file), "utf8")
  for (const [, attributes, code] of html.matchAll(/<script\\b([^>]*)>([\\s\\S]*?)<\\/script>/g)) {
    if (!attributes.includes("application/ld+json") && !attributes.includes("src=")) inlineScripts.add(code)
  }
}
const bytes = scripts.reduce((total, path) => total + statSync(path).size, 0) +
  [...inlineScripts].reduce((total, code) => total + Buffer.byteLength(code), 0)
assert.ok(bytes < 25000, "Static site JavaScript must stay below 25 KB before compression")
console.log("Verified both languages, case studies, SEO, local links and assets.")
console.log("First-party JavaScript:", bytes, "bytes across files and unique inline scripts. Analytics loaded separately.")
