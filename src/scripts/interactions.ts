// Content, language links and navigation remain available without JavaScript.
const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]")
if (toggle) {
  const updateLabel = () => {
    const dark = document.documentElement.classList.contains("dark")
    toggle.setAttribute("aria-label", (dark ? toggle.dataset.lightLabel : toggle.dataset.darkLabel) ?? "")
    const lightSymbol = toggle.querySelector<HTMLElement>("[data-theme-light]")
    const darkSymbol = toggle.querySelector<HTMLElement>("[data-theme-dark]")
    if (lightSymbol) lightSymbol.hidden = !dark
    if (darkSymbol) darkSymbol.hidden = dark
  }
  toggle.hidden = false
  updateLabel()
  toggle.addEventListener("click", () => {
    const dark = document.documentElement.classList.toggle("dark")
    try { localStorage.setItem("theme", dark ? "dark" : "light") } catch {}
    updateLabel()
  })
}
document.querySelectorAll<HTMLDetailsElement>(".mobile-menu").forEach((menu) => {
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { menu.open = false }))
  menu.addEventListener("keydown", (event) => { if (event.key === "Escape") menu.open = false })
})

const dialog = document.querySelector<HTMLDialogElement>("[data-lightbox]")
const image = dialog?.querySelector<HTMLImageElement>("[data-lightbox-image]")
const title = dialog?.querySelector<HTMLElement>("#lightbox-title")
const counter = dialog?.querySelector<HTMLElement>("[data-lightbox-counter]")
const previous = dialog?.querySelector<HTMLButtonElement>("[data-lightbox-prev]")
const next = dialog?.querySelector<HTMLButtonElement>("[data-lightbox-next]")
if (dialog && image && title && counter && previous && next) {
  let photos: HTMLAnchorElement[] = []
  let current = 0
  let opener: HTMLAnchorElement | null = null
  const render = () => {
    const photo = photos[current]
    image.src = photo.href
    image.alt = photo.dataset.caption ?? ""
    title.textContent = image.alt
    counter.textContent = `${current + 1} / ${photos.length}`
    previous.disabled = next.disabled = photos.length < 2
  }
  const move = (direction: number) => {
    current = (current + direction + photos.length) % photos.length
    render()
  }
  document.querySelectorAll<HTMLElement>("[data-gallery]").forEach((gallery) => {
    const links = Array.from(gallery.querySelectorAll<HTMLAnchorElement>("[data-photo]"))
    links.forEach((link, index) => link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== "function") return
      event.preventDefault()
      photos = links
      current = index
      opener = link
      render()
      dialog.showModal()
    }))
  })
  previous.addEventListener("click", () => move(-1))
  next.addEventListener("click", () => move(1))
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault()
      move(event.key === "ArrowLeft" ? -1 : 1)
    }
  })
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close() })
  dialog.addEventListener("close", () => { image.removeAttribute("src"); opener?.focus() })
}
