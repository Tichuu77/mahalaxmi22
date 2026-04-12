"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"

const images = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/gallery${i + 1}.jpg`,
  alt: `Mahalaxmi Infra project gallery image ${i + 1}`,
}))

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section
      id="gallery"
      className="relative overflow-hidden"
      style={{ background: "#fff" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
            Project Gallery
          </p>
          <h2
            className="text-4xl font-bold leading-tight text-[var(--text-dark)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Inside Our{" "}
            <em className="not-italic text-[var(--green)]">Projects & Spaces</em>
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Real sites. Real progress. No renders.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:auto-rows-[160px] md:gap-3">
          {images.map((item, idx) => {
            const isLarge = idx % 7 === 0 || idx % 7 === 3
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`group relative overflow-hidden rounded-2xl ${
                  isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
                style={{
                  aspectRatio: isLarge ? undefined : "1",
                  minHeight: isLarge ? undefined : "120px",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: "rgba(201,134,43,0.9)" }}
                  >
                    <ZoomIn size={16} className="text-white" />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            onClick={() => setSelected(null)}
          >
            <X size={18} />
          </button>
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selected - 1].src}
              alt={images[selected - 1].alt}
              className="max-h-[85vh] w-full rounded-3xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
