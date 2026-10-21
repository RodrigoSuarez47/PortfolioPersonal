import assert from "node:assert/strict"
import { readFileSync, readdirSync, existsSync } from "node:fs"
import { resolve, dirname, relative, extname } from "node:path"
const root = process.cwd()
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(item => item.isDirectory() ? walk(resolve(dir, item.name)) : [resolve(dir, item.name)])
const source = walk(resolve("src")).filter(file => /\.(astro|ts|css)$/.test(file))
const reachable = new Set()
const importedAssets = new Set()
const visit = file => {
  if (reachable.has(file)) return
  reachable.add(file)
  const code = readFileSync(file, "utf8")
  const imports = [...code.matchAll(/(?:import|export)\s+(?:[^'";]*?\s+from\s*)?["']([^"']+)["']/g), ...code.matchAll(/import\(["']([^"']+)["']\)/g)]
  for (const [, specifier] of imports) {
    if (!specifier.startsWith(".") && !specifier.startsWith("@/")) continue
    const base = specifier.startsWith("@/") ? resolve("src", specifier.slice(2)) : resolve(dirname(file), specifier)
    const target = [base, base + ".ts", base + ".astro", base + ".mjs", resolve(base, "index.ts")].find(path => existsSync(path) && extname(path))
    assert.ok(target, "Unresolved import: " + specifier + " in " + relative(root, file))
    if (/\.(png|jpg|svg)$/.test(target)) importedAssets.add(target)
    else visit(target)
  }
}
for (const file of source.filter(file => relative(root, file).replaceAll("\\", "/").startsWith("src/pages/"))) visit(file)
visit(resolve("astro.config.mjs"))
assert.deepEqual(source.filter(file => !reachable.has(file)), [], "Unreachable source modules")
const text = [...reachable].map(file => readFileSync(file, "utf8")).join("\n")
const assets = walk(resolve("src/assets"))
const unused = assets.filter(file => {
  const key = relative(resolve("src/assets/projects"), file).replaceAll("\\", "/")
  return !importedAssets.has(file) && !text.includes("/images/" + key)
})
assert.deepEqual(unused, [], "Unreferenced source assets")
// The final HTML is authoritative for public files, including dynamically mapped logos.
const built = walk(resolve("dist")).filter(file => /\.(html|css|js|json|md|xml|txt)$/.test(file)).map(file => readFileSync(file, "utf8")).join("\n")
const unusedPublic = walk(resolve("public")).filter(file => relative(resolve("public"), file) !== "404.html").filter(file => {
  const url = "/" + relative(resolve("public"), file).replaceAll("\\", "/")
  return !built.includes(url) && !built.includes(encodeURI(url))
})
assert.deepEqual(unusedPublic, [], "Unreferenced public assets")
console.log("Source audit:", source.length, "reachable modules;", assets.length, "referenced source assets; no unused public assets.")
