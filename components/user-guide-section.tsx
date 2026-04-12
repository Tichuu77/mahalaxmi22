"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const guides = [
  {
    number: "01",
    title: "Explore & Shortlist",
    description: "Browse projects and shortlist plots matching your budget and location.",
    details: ["Filter by location, size & budget", "Compare plots side-by-side", "Download project brochures", "Review RERA & NMRDA approvals"],
    icon: "🔍",
  },
  {
    number: "02",
    title: "Schedule a Site Visit",
    description: "Visit our actual plots — no renders, no stock photos.",
    details: ["Book via WhatsApp or phone", "Representative accompanies you", "Visit multiple sites", "Complimentary transport arranged"],
    icon: "📍",
  },
  {
    number: "03",
    title: "Documentation & Finance",
    description: "We handle legal verification. Get up to 90% bank finance.",
    details: ["Title verification", "RERA & NMRDA copy", "Up to 90% loan", "Flexible EMI options"],
    icon: "📋",
  },
  {
    number: "04",
    title: "Register & Move In",
    description: "Sign the sale deed, register, and take possession of your plot.",
    details: ["Sale deed execution", "Registration support", "Possession certificate", "Handover inspection"],
    icon: "🏠",
  },
]

export function UserGuideSection() {
  const [active, setActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const total = guides.length

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement
    if (!card) return
    el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" })
    setCurrent(index)
    setActive(index)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const cardEl = el.children[0] as HTMLElement
      const cardWidth = cardEl?.offsetWidth || 1
      const gap = 12
      const idx = Math.round(el.scrollLeft / (cardWidth + gap))
      const newIdx = Math.max(0, Math.min(idx, total - 1))
      setCurrent(newIdx)
      setActive(newIdx)
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [total])

  return (
    <section
      id="user-guide"
      className="relative overflow-hidden"
      style={{ background: "#fff" }}
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle at top right, rgba(201,134,43,0.06), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">How It Works</p>
          <h2
            className="text-4xl font-bold leading-tight text-[var(--text-dark)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Journey to{" "}
            <em className="not-italic text-[var(--green)]">Ownership</em>
          </h2>
        </div>

        {/* ── MOBILE: full-screen step cards ── */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              paddingRight: "28px",
            }}
          >
            {guides.map((item, idx) => (
              <div
                key={item.number}
                className="relative flex-shrink-0 overflow-hidden rounded-3xl p-6"
                style={{
                  scrollSnapAlign: "start",
                  width: "calc(100vw - 52px)",
                  background: idx === current
                    ? "linear-gradient(135deg, #30534A, #1f3731)"
                    : "linear-gradient(160deg, #fff, #f5f2ec)",
                  border: idx === current
                    ? "1.5px solid rgba(201,134,43,0.3)"
                    : "1.5px solid rgba(48,83,74,0.1)",
                  boxShadow: idx === current
                    ? "0 12px 36px rgba(48,83,74,0.3)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Step badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      background: idx === current ? "rgba(255,255,255,0.15)" : "rgba(201,134,43,0.1)",
                      color: idx === current ? "#fff" : "var(--gold)",
                    }}
                  >
                    Step {item.number}
                  </span>
                  <span className="text-3xl">{item.icon}</span>
                </div>

                <h3
                  className="mb-2 text-xl font-bold"
                  style={{ color: idx === current ? "#fff" : "var(--green)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-5 text-sm leading-relaxed"
                  style={{ color: idx === current ? "rgba(255,255,255,0.65)" : "var(--text-mid)" }}
                >
                  {item.description}
                </p>

                <ul className="space-y-2.5">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={15}
                        style={{ color: idx === current ? "var(--gold)" : "var(--green)", flexShrink: 0 }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: idx === current ? "rgba(255,255,255,0.8)" : "var(--text-mid)" }}
                      >
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Steps progress dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {guides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className="transition-all duration-300"
                style={{
                  height: "6px",
                  borderRadius: "999px",
                  width: current === idx ? "28px" : "6px",
                  background: current === idx ? "var(--green)" : "rgba(48,83,74,0.2)",
                }}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => scrollTo(Math.max(0, current - 1))}
              disabled={current === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border text-[var(--green)] disabled:opacity-30 transition"
              style={{ border: "1.5px solid rgba(48,83,74,0.2)", background: "rgba(48,83,74,0.04)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo(Math.min(total - 1, current + 1))}
              disabled={current === total - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border text-[var(--green)] disabled:opacity-30 transition"
              style={{ border: "1.5px solid rgba(48,83,74,0.2)", background: "rgba(48,83,74,0.04)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── DESKTOP: side-by-side panels ── */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3">
            {guides.map((item, i) => (
              <button
                key={item.number}
                onClick={() => setActive(i)}
                className="rounded-2xl border p-4 text-left transition-all duration-200"
                style={{
                  border: active === i ? "1.5px solid rgba(201,134,43,0.35)" : "1.5px solid rgba(48,83,74,0.1)",
                  background: active === i ? "rgba(201,134,43,0.06)" : "rgba(245,242,236,0.6)",
                  boxShadow: active === i ? "0 4px 16px rgba(201,134,43,0.12)" : "none",
                }}
              >
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--gold)]">STEP {item.number}</p>
                <h3 className="mt-1.5 text-base font-bold text-[var(--green)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-mid)]">{item.description}</p>
              </button>
            ))}
          </div>

          <article
            className="rounded-3xl p-7"
            style={{
              background: "linear-gradient(160deg, #30534A, #1f3731)",
              boxShadow: "0 16px 48px rgba(48,83,74,0.3)",
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Active · Step {guides[active].number}
              </p>
              <span className="text-3xl">{guides[active].icon}</span>
            </div>
            <h3
              className="mb-2 text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {guides[active].title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/60">{guides[active].description}</p>
            <ul className="space-y-3">
              {guides[active].details.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="flex-shrink-0 text-[var(--gold)]" />
                  <span className="text-sm text-white/80">{d}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
