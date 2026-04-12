"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const newsArticles = [
  {
    title: "MIHAN Nagpur: Why It's Becoming the City's Most Sought-After Corridor",
    date: "March 2025",
    category: "Market Insight",
    summary: "With AIIMS, IT parks, and logistics hubs expanding along the MIHAN belt, plot demand has surged 35% year-on-year.",
    emoji: "📈",
  },
  {
    title: "RERA's Impact on Plot Buying: What Every Nagpur Buyer Must Know",
    date: "January 2025",
    category: "Legal & Compliance",
    summary: "RERA registration protects buyers from project delays and ensures full transparency in layout documents.",
    emoji: "⚖️",
  },
  {
    title: "Home Loan for Plots in 2025: Rate Trends & What Banks Offer",
    date: "February 2025",
    category: "Finance",
    summary: "Leading banks now offer up to 90% LTV on NMRDA-approved residential plots.",
    emoji: "🏦",
  },
  {
    title: "Green Layouts: How Mahalaxmi Infra is Integrating Sustainability",
    date: "December 2024",
    category: "Projects",
    summary: "Rain harvesting systems, wide green belts, and solar street lighting are now standard in new layouts.",
    emoji: "🌿",
  },
]

export default function NewsArticles() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const total = newsArticles.length

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
      const idx = Math.round(el.scrollLeft / (cardWidth + 12))
      setCurrent(Math.max(0, Math.min(idx, total - 1)))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [total])

  return (
    <section
      id="news"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f2ec 0%, #fff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
              Stay Informed
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-[var(--text-dark)] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              News &{" "}
              <em className="not-italic text-[var(--green)]">Articles</em>
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollTo(Math.max(0, current - 1))}
              disabled={current === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(48,83,74,0.15)] bg-white text-[var(--green)] transition hover:border-[var(--gold)] disabled:opacity-25"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo(Math.min(total - 1, current + 1))}
              disabled={current === total - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(48,83,74,0.15)] bg-white text-[var(--green)] transition hover:border-[var(--gold)] disabled:opacity-25"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── MOBILE: snap carousel ── */}
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
            {newsArticles.map((article, idx) => (
              <article
                key={article.title}
                className="relative flex-shrink-0 overflow-hidden rounded-3xl p-5"
                style={{
                  scrollSnapAlign: "start",
                  width: "calc(100vw - 52px)",
                  background: "#fff",
                  border: "1.5px solid rgba(48,83,74,0.08)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* Top bar */}
                <div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ background: "linear-gradient(90deg, var(--gold), var(--green))" }}
                />

                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--gold)]"
                      style={{ background: "rgba(201,134,43,0.08)", border: "1px solid rgba(201,134,43,0.15)" }}
                    >
                      {article.category}
                    </span>
                    <p className="mt-2 text-[10px] text-[var(--text-muted)]">{article.date}</p>
                  </div>
                  <span className="text-3xl">{article.emoji}</span>
                </div>

                <h3
                  className="mb-3 text-lg font-bold leading-snug text-[var(--green)]"
                >
                  {article.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[var(--text-mid)]">{article.summary}</p>

                <button className="flex items-center gap-1.5 text-xs font-bold text-[var(--gold)]">
                  Read More <ArrowRight size={12} />
                </button>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {newsArticles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className="transition-all duration-300"
                style={{
                  height: "6px",
                  borderRadius: "999px",
                  width: current === idx ? "28px" : "6px",
                  background: current === idx ? "var(--gold)" : "rgba(48,83,74,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 2-col grid ── */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-5">
          {newsArticles.map((article) => (
            <article
              key={article.title}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(48,83,74,0.08)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ background: "linear-gradient(90deg, var(--gold), var(--green))" }}
              />
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--gold)]"
                    style={{ background: "rgba(201,134,43,0.08)" }}
                  >
                    {article.category}
                  </span>
                  <p className="mt-1.5 text-[10px] text-[var(--text-muted)]">{article.date}</p>
                </div>
                <span className="text-3xl">{article.emoji}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug text-[var(--green)]">{article.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-[var(--text-mid)]">{article.summary}</p>
              <div
                className="h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ background: "var(--gold)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
