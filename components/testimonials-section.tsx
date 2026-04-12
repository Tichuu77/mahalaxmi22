"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajkumar Gharjale",
    location: "Nagpur",
    image: "/testonomials1.webp",
    content:
      "Investing with Maha Laxmi Developers was an effortless experience. Their transparent process and clear documentation gave me full confidence. The best decision I ever made.",
    rating: 5,
  },
  {
    name: "Priya Shah",
    location: "Mumbai",
    image: "/testonomials2.jpg",
    content:
      "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Developers exceeded my expectations in every way. Highly recommended!",
    rating: 5,
  },
  {
    name: "Karan Akojwar",
    location: "Pune",
    image: "/testonomials3.jpg",
    content:
      "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me real peace of mind.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement
    if (!card) return
    el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" })
    setCurrent(index)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const cardEl = el.children[0] as HTMLElement
      const cardWidth = cardEl?.offsetWidth || 1
      const idx = Math.round(el.scrollLeft / (cardWidth + 16))
      setCurrent(Math.max(0, Math.min(idx, total - 1)))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [total])

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1f3731 0%, #0d1a16 100%)" }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,134,43,0.08), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
              Happy Families
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Words from Our{" "}
              <em className="not-italic text-[var(--gold)]">Clients</em>
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollTo(Math.max(0, current - 1))}
              disabled={current === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--gold)] disabled:opacity-25"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo(Math.min(total - 1, current + 1))}
              disabled={current === total - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--gold)] disabled:opacity-25"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── MOBILE: snap carousel ── */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              paddingRight: "32px",
            }}
          >
            {testimonials.map((item, idx) => (
              <blockquote
                key={item.name}
                className="relative flex-shrink-0 overflow-hidden rounded-3xl p-6"
                style={{
                  scrollSnapAlign: "start",
                  width: "calc(100vw - 56px)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Watermark quote */}
                <div className="absolute right-5 top-4 opacity-10 text-[var(--gold)]">
                  <Quote size={52} />
                </div>

                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-[var(--gold)]" />
                  ))}
                </div>

                <p className="mb-7 text-[15px] leading-[1.75] text-white/80">"{item.content}"</p>

                {/* Author row */}
                <footer className="flex items-center gap-4 border-t border-white/10 pt-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                    style={{ boxShadow: "0 0 0 2px rgba(201,134,43,0.5)" }}
                  />
                  <div>
                    <cite className="block not-italic text-base font-bold text-white">{item.name}</cite>
                    <p className="text-xs text-white/45">{item.location}</p>
                    <div className="mt-1.5 h-0.5 w-8 rounded-full" style={{ background: "var(--gold)" }} />
                  </div>
                  <span className="ml-auto text-3xl font-bold text-white/5" style={{ fontFamily: "var(--font-display)" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className="transition-all duration-300"
                style={{
                  height: "6px",
                  borderRadius: "999px",
                  width: current === idx ? "28px" : "6px",
                  background: current === idx ? "var(--gold)" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3-col grid ── */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="group relative overflow-hidden rounded-3xl p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="absolute right-5 top-5 opacity-10 text-[var(--gold)]">
                <Quote size={40} />
              </div>
              <div className="mb-4 flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-[var(--gold)]" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-[1.8] text-white/70">"{item.content}"</p>
              <footer className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                  style={{ boxShadow: "0 0 0 2px rgba(201,134,43,0.4)" }}
                />
                <div>
                  <cite className="not-italic text-sm font-bold text-white">{item.name}</cite>
                  <p className="text-[11px] text-white/45">{item.location}</p>
                </div>
              </footer>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
              />
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
