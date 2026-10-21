// Refresh on load, at New Year, and when a sleeping tab becomes visible.
const labels = document.querySelectorAll<HTMLElement>("[data-copyright-year]")
if (labels.length) {
  let timer: ReturnType<typeof setTimeout>
  const update = () => {
    const now = new Date()
    const year = now.getFullYear()
    labels.forEach(label => { label.textContent = String(year) })
    clearTimeout(timer)
    timer = setTimeout(update, Math.min(new Date(year + 1, 0, 1).getTime() - now.getTime() + 100, 2_147_483_647))
  }
  update()
  document.addEventListener("visibilitychange", () => { if (!document.hidden) update() })
}
