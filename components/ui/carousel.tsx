"use client"

import React, { useState } from "react"
import Image from "next/image"

interface CarouselProps {
    images: { src: string; alt: string; description?: string }[]
    className?: string
    allowFullscreen?: boolean
    onImageClick?: (index: number) => void
}

export const Carousel: React.FC<CarouselProps> = ({ images, className = "", allowFullscreen = false, onImageClick }) => {
    const [current, setCurrent] = useState(0)

    const nextImage = () => setCurrent(current === images.length - 1 ? 0 : current + 1)
    const prevImage = () => setCurrent(current === 0 ? images.length - 1 : current - 1)

    return (
        <div className={`relative w-full ${className}`}>
            <div className={`relative w-full h-full bg-transparent rounded-lg overflow-hidden ${allowFullscreen ? 'cursor-zoom-in' : ''}`}>
                <button
                    type="button"
                    className="absolute inset-0 z-0 cursor-zoom-in"
                    aria-label={`Ampliar ${images[current].alt}`}
                    onClick={() => onImageClick?.(current)}
                >
                    <Image
                        src={images[current].src}
                        alt={images[current].alt}
                        fill
                        className="object-contain transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </button>

                {images[current].description && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-xs rounded-md max-w-[90%] text-center">
                        {images[current].description}
                    </div>
                )}

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 px-2 py-1 bg-black/40 rounded-full">
                    {images.map((_, idx) => (
                        <button
                            type="button"
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === current ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`Ir a imagen ${idx + 1}`}
                            aria-current={idx === current ? "true" : undefined}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                    aria-label="Imagen anterior"
                >
                    ←
                </button>
                <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                    aria-label="Siguiente imagen"
                >
                    →
                </button>
            </div>
        </div>
    )
}
