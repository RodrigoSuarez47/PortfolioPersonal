"use client"

import { useState } from "react"
import Image from "next/image"
import { Carousel } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import type { ProjectImage } from "@/lib/projects"

export function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <Carousel images={images} className="h-56 sm:h-64" onImageClick={setSelected} />
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null) }}>
        <DialogContent className="sm:max-w-5xl" aria-describedby={undefined}>
          <DialogTitle>{title}</DialogTitle>
          {selected !== null ? (
            <div className="relative h-[65vh]">
              <Image src={images[selected].src} alt={images[selected].alt} fill sizes="90vw" className="object-contain" />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
