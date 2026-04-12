"use client"

import { useState } from "react"
import { X } from "lucide-react"

const images = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, src: `/gallery${i + 1}.jpg`, alt: `Gallery image ${i + 1}` }))

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-white px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl">Inside Our Projects & Spaces</h2>
        <p className="mt-2 text-[var(--text-muted)]">Real sites. Real progress. No renders.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-12 md:auto-rows-[120px]">
          {images.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`group overflow-hidden rounded-2xl ${
                idx % 5 === 0 ? "md:col-span-6 md:row-span-2" : "md:col-span-3 md:row-span-1"
              }`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute right-3 top-3 rounded-full bg-white p-2"><X size={14} /></button>
            <img src={images[selected - 1].src} alt={images[selected - 1].alt} className="max-h-[85vh] w-full rounded-3xl object-cover" />
          </div>
        </div>
      )}
    </section>
  )
}
