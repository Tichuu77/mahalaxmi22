"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const projects = [
  {
    title: "Mahalaxmi Nagar-31",
    image: "/ongoingProject8.webp",
    location: "Mouza – Besa",
    description: "Ready to move layout on Besa-Pipla Road, opposite Zudio & Croma. Up to 90% bank finance.",
    badge: "🔥 Hot Pick",
    color: "#C9862B",
  },
  {
    title: "Mahalaxmi Nagar-39",
    image: "/ongoingProject5.webp",
    location: "Mouza – Fetri",
    description: "On Katol Road, Fetri (Chicholi), touching Outer Ring Road. Fully NMRDA & RL sanctioned.",
    badge: "🌟 New Launch",
    color: "#30534A",
  },
  {
    title: "Mahalaxmi Nagar-41",
    image: "/ongoingProject3.webp",
    location: "Mouza – Gomgaon",
    description: "Near Samruddhi Mahamarg with clubhouse & swimming pool. NMRDA + RL approved.",
    badge: "🏊 Pool Included",
    color: "#C9862B",
  },
  {
    title: "Mahalaxmi Nagar-42",
    image: "/ongoingProject2.webp",
    location: "Mouza – Jamtha",
    description: "Near Jamtha, Wardha Road. NMRDA & RL sanctioned with excellent amenities.",
    badge: "🏆 Premium",
    color: "#30534A",
  },
  {
    title: "Mahalaxmi Nagar-43",
    image: "/project_43.jpg",
    location: "Mouza – Shankarpur",
    description: "Behind Royal Gondwana School. Fully developed with 90% finance available.",
    badge: "✅ Move-In Ready",
    color: "#C9862B",
  },
  {
    title: "Mahalaxmi Nagar-44",
    image: "/M-44.jpg",
    location: "Mouza – Tarodi",
    description: "NIT / NMRDA sanctioned with RL. Bank finance 75–80% from nationalized banks.",
    badge: "🏗️ Upcoming",
    color: "#30534A",
  },
]

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const total = projects.length

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement
    if (!card) return
    el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" })
    setCurrent(index)
  }, [])

  // Update dot indicator on scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const scrollLeft = el.scrollLeft
      const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth || 1
      const idx = Math.round(scrollLeft / (cardWidth + 16))
      setCurrent(Math.max(0, Math.min(idx, total - 1)))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [total])

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d1a16 0%, #091210 100%)" }}
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle at top right, rgba(201,134,43,0.1), transparent 55%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(48,83,74,0.2), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
              Our Portfolio
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Landmark{" "}
              <em
                className="not-italic"
                style={{ WebkitTextStroke: "1.5px rgba(201,134,43,0.6)", color: "transparent" }}
              >
                Projects
              </em>
            </h2>
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollTo(Math.max(0, current - 1))}
              disabled={current === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold-light)] disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo(Math.min(total - 1, current + 1))}
              disabled={current === total - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold-light)] disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── MOBILE: full-width snap carousel ── */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              paddingRight: "32px", // peek next card
            }}
          >
            {projects.map((item, idx) => (
              <article
                key={item.title}
                className="relative flex-shrink-0 overflow-hidden rounded-3xl"
                style={{
                  scrollSnapAlign: "start",
                  width: "calc(100vw - 56px)", // full-width minus gutters + peek
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Full image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} – ${item.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }}
                  />
                  {/* Badge */}
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white"
                    style={{
                      background: "rgba(9,18,16,0.85)",
                      border: `1px solid ${item.color}55`,
                    }}
                  >
                    {item.badge}
                  </span>
                  {/* Card number */}
                  <span className="absolute right-3 top-3 text-[10px] font-bold text-white/30">
                    {String(idx + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p
                    className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--gold)" }}
                  >
                    <MapPin size={9} /> {item.location}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/55">{item.description}</p>

                  <a
                    href={`https://wa.me/919326709970?text=${encodeURIComponent(`Hi, I'm interested in ${item.title}.`)}`}
                    target="_blank"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white transition active:scale-95"
                    style={{
                      background: "linear-gradient(90deg, #C9862B, #b5741f)",
                      boxShadow: "0 4px 16px rgba(201,134,43,0.35)",
                    }}
                  >
                    Enquire on WhatsApp <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className="transition-all duration-300"
                style={{
                  height: "6px",
                  borderRadius: "999px",
                  width: current === idx ? "24px" : "6px",
                  background: current === idx ? "var(--gold)" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3-col grid (unchanged) ── */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-5">
          {projects.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} – ${item.location}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }}
                />
                <div
                  className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold text-white"
                  style={{ background: "rgba(9,18,16,0.85)", border: "1px solid rgba(201,134,43,0.3)" }}
                >
                  {item.badge}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                  <MapPin size={9} /> {item.location}
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                <p className="mb-4 text-[13px] leading-relaxed text-white/55">{item.description}</p>
                <a
                  href={`https://wa.me/919326709970?text=${encodeURIComponent(`Hi, I'm interested in ${item.title}.`)}`}
                  target="_blank"
                  className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-xs font-bold text-white transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, var(--gold), #b5741f)",
                    boxShadow: "0 4px 14px rgba(201,134,43,0.3)",
                  }}
                >
                  Enquire Now <ArrowRight size={12} />
                </a>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ border: "1px solid rgba(201,134,43,0.3)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
