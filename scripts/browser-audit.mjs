import assert from "node:assert/strict"
import { createRequire } from "node:module"
import { resolve } from "node:path"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { createServer } from "node:http"
import { siteUrl } from "../site.config.mjs"

const require = createRequire(resolve(process.env.AUDIT_TOOLS, "package.json"))
const { chromium } = require("playwright")
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".svg": "image/svg+xml", ".json": "application/json", ".md": "text/markdown", ".txt": "text/plain", ".xml": "application/xml" }
const config = JSON.parse(readFileSync("vercel.json", "utf8"))
const server = createServer((request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname)
    if (pathname.includes("..")) throw new Error("Invalid path")
    let path = resolve("dist", "." + pathname)
    if (pathname === "/" || pathname === "/en") path = resolve("dist", "." + pathname, "index.html")
    const bytes = readFileSync(path)
    for (const rule of config.headers) if (rule.source === "/(.*)" || rule.source === pathname) for (const header of rule.headers) response.setHeader(header.key, header.value)
    if (!response.hasHeader("Content-Type")) response.setHeader("Content-Type", mime[path.slice(path.lastIndexOf("."))] ?? "application/octet-stream")
    response.end(bytes)
  } catch { response.writeHead(404).end("Not found") }
})
await new Promise(resolve => server.listen(4173, "127.0.0.1", resolve))
const browser = await chromium.launch()
mkdirSync("audit-results", { recursive: true })
try {
  for (const [path, lang] of [["/", "es-UY"], ["/en", "en"]]) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
    const errors = []
    page.on("pageerror", error => errors.push(error.message))
    // Exercise the exact production tool registration in browsers without WebMCP enabled.
    await page.addInitScript(() => {
      window.portfolioTools = {}
      Object.defineProperty(document, "modelContext", { value: { registerTool(tool) { window.portfolioTools[tool.name] = tool } } })
      window.cspViolations = []
      document.addEventListener("securitypolicyviolation", event => window.cspViolations.push(event.effectiveDirective + ": " + event.blockedURI))
    })
    await page.goto("http://127.0.0.1:4173" + path)
    assert.equal(await page.locator("html").getAttribute("lang"), lang)
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), siteUrl + path)
    assert.equal(await page.locator("h1").count(), 1)
    assert.equal(await page.locator(".project-card").count(), 4)
    assert.equal(await page.locator('link[rel="alternate"][type="application/json"]').count(), 1)
    assert.equal(await page.locator("[data-case-study][open]").count(), 0)
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    // Theme, persistence, keyboard gallery and focus restoration under enforced CSP.
    const toggle = page.locator("[data-theme-toggle]")
    await toggle.click()
    assert.equal(await page.locator("html").getAttribute("class"), "")
    await page.reload()
    assert.equal(await page.locator("html").getAttribute("class"), "")
    await page.locator("[data-photo]").first().click()
    assert.ok(await page.locator("dialog").evaluate(dialog => dialog.open))
    await page.keyboard.press("ArrowRight")
    assert.match(await page.locator("[data-lightbox-counter]").innerText(), /^2 \/ /)
    await page.keyboard.press("Escape")
    assert.ok(await page.locator("[data-photo]").first().evaluate(link => link === document.activeElement))
    const data = await page.evaluate(async () => JSON.parse(await window.portfolioTools.get_portfolio.execute({})))
    assert.equal(data.projects.length, 4)
    assert.equal(data.language, lang === "en" ? "en" : "es")
    await page.evaluate(() => window.portfolioTools.show_project.execute({ slug: "jaume-sere" }))
    assert.ok(await page.locator("#jaume-sere [data-case-study]").evaluate(details => details.open))
    await page.evaluate(() => window.portfolioTools.navigate_portfolio.execute({ section: "contact" }))
    assert.equal(await page.evaluate(async () => { try { await window.portfolioTools.show_project.execute({slug:"contact"}); return false } catch { return true } }), true)
    assert.deepEqual(errors, [])
    assert.deepEqual(await page.evaluate(() => window.cspViolations), [])
    await page.screenshot({ path: `audit-results/${lang}-mobile.png`, fullPage: true })
    await page.close()
    const noJS = await browser.newContext({ javaScriptEnabled: false })
    const plain = await noJS.newPage()
    await plain.goto("http://127.0.0.1:4173" + path)
    await plain.locator("[data-case-study] summary").first().click()
    assert.ok(await plain.locator("[data-case-study]").first().evaluate(details => details.open))
    assert.equal(await plain.locator('[href="/llms.txt"]').count(), 1)
    await noJS.close()
  }
  const { default: lighthouse } = await import(require.resolve("lighthouse"))
  const { launch } = require("chrome-launcher")
  const chrome = await launch({ chromePath: chromium.executablePath(), chromeFlags: ["--headless", "--no-sandbox"] })
  try {
    for (const path of ["/", "/en"]) {
      const result = await lighthouse("http://127.0.0.1:4173" + path, { port: chrome.port, output: "json", onlyCategories: ["performance", "accessibility", "best-practices", "seo"] })
      writeFileSync(`audit-results/lighthouse-${path === "/" ? "es" : "en"}.json`, result.report)
      for (const [id, category] of Object.entries(result.lhr.categories)) {
        console.log(path, id, category.score)
        assert.ok(category.score >= (id === "performance" ? .95 : 1), `${path}: ${id} budget`)
      }
    }
  } finally { await chrome.kill() }
  console.log("Browser, no-JS, CSP, agent tools and Lighthouse checks passed.")
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)) }
