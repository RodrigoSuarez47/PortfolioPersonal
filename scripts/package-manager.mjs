import { readFileSync } from "node:fs"
import { execFileSync } from "node:child_process"

// Bootstrap the exact same pnpm in Vercel as in local development and CI.
const { packageManager } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"))
if (!/^pnpm@\d+\.\d+\.\d+$/.test(packageManager)) throw new Error("Pin an exact pnpm version")
execFileSync(process.platform === "win32" ? "npx.cmd" : "npx", ["--yes", `--package=${packageManager}`, "pnpm", ...process.argv.slice(2)], { stdio: "inherit" })
