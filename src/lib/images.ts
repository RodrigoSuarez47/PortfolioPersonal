import type { ImageMetadata } from "astro"

const assets = import.meta.glob<{ default: ImageMetadata }>("/src/assets/projects/**/*.{png,jpg}", { eager: true })
export function projectAsset(src: string): ImageMetadata | string {
  const key = src.replace("/images/", "/src/assets/projects/")
  const asset = assets[key]?.default
  if (!asset && /\.(png|jpg)$/.test(src)) throw new Error(`Missing project image: ${src}`)
  return asset ?? src
}
