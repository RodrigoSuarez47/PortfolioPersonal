/** Content contract: both languages must expose the same complete project information. */
import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { stripTypeScriptTypes } from "node:module"
import { resolve } from "node:path"

const importSource = async path => import("data:text/javascript;base64," + Buffer.from(stripTypeScriptTypes(readFileSync(path, "utf8"))).toString("base64"))
const { getProjects } = await importSource("src/lib/projects.ts")
const { getCopy } = await importSource("src/lib/i18n.ts")
const projects = { es: getProjects("es"), en: getProjects("en") }
const shape = value => Array.isArray(value) ? value.map(shape) : value && typeof value === "object" ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)])) : typeof value
assert.deepEqual(shape(projects.es), shape(projects.en), "Both languages must contain the same project fields, features and screenshots")
for (const locale of ["es", "en"]) {
  assert.equal(projects[locale].length, 6)
  assert.deepEqual(projects[locale].filter(project => project.featured).map(project => project.id), [1, 5])
  assert.equal(new Set(projects[locale].map(project => project.slug)).size, 5)
  for (const project of projects[locale]) {
    for (const field of ["problem", "role", "decisions", "result", "highlight", "evidence"]) {
      assert.ok(project.caseStudy[field]?.trim(), `${locale}/${project.slug}: missing ${field}`)
    }
    assert.ok(project.features.length >= 4, `${locale}/${project.slug}: complete technical scope`)
    assert.ok(project.longDescription.length > 100)
    assert.ok(!JSON.stringify(project).includes("\ufffd"), `${locale}: corrupt Unicode`)
  }
  const pimPollo = projects[locale].find(project => project.id === 6)
  assert.ok(pimPollo, `${locale}: PimPollo present`)
  assert.equal(pimPollo.slug, "pimpollo")
  assert.equal(pimPollo.status, locale === "es" ? "En construcción" : "In development")
  assert.match(pimPollo.features.join(" "), /Previsto:|Planned:/, "PimPollo future features explicitly labelled")
  assert.equal(pimPollo.githubUrl, null, "Private source stays private")
  assert.equal(pimPollo.demoUrl, "https://pimpollo-web.vercel.app/", "Published construction page")
  const ratio = projects[locale].find(project => project.id === 5)
  assert.match(ratio.features.join(" "), /Gantt/)
  assert.match(ratio.features.join(" "), /Previsto:|Planned:/, "Future work must be labelled")
}
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(item => item.isDirectory() ? walk(resolve(dir, item.name)) : [resolve(dir, item.name)])
let translations = 0
for (const path of walk(resolve("src")).filter(path => /\.(astro|ts)$/.test(path))) {
  const source = readFileSync(path, "utf8")
  for (const [, literal] of source.matchAll(/\bt\(("(?:[^"\\]|\\.)*")\)/g)) {
    const key = JSON.parse(literal)
    assert.ok(getCopy("en")(key), `${path}: missing English translation for ${key}`)
    translations++
  }
}
const skills = readFileSync("src/components/SkillsSection.astro", "utf8")
for (const [, slug] of skills.matchAll(/project: "([^"]+)"/g)) {
  assert.ok(projects.es.some(project => project.slug === slug), `Broken skills link: ${slug}`)
}
const cv = JSON.parse(readFileSync("scripts/resume-copy.json", "utf8"))
assert.deepEqual(Object.keys(cv.es).sort(), Object.keys(cv.en).sort(), "CV language parity")
console.log(`Content checks passed: six complete bilingual projects, featured order, skills links, ${translations} translated UI strings and bilingual CV copy.`)
