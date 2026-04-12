"use client"

import { useState } from "react"
import { Dumbbell, Shield, Trees, Users, Wifi, Zap } from "lucide-react"

const amenities = [
  { icon: Wifi,     title: "Smart Home",      description: "Advanced IoT integration for modern living.",         emoji: null, color: "#C9862B" },
  { icon: Dumbbell, title: "Fitness Center",   description: "State-of-the-art gym & workout facilities.",          emoji: null, color: "#30534A" },
  { icon: Trees,    title: "Green Spaces",     description: "Lush landscaping, parks and tree-lined paths.",       emoji: null, color: "#C9862B" },
  { icon: Zap,      title: "Power Backup",     description: "Uninterrupted 24×7 power supply.",                   emoji: null, color: "#30534A" },
  { icon: Shield,   title: "24/7 Security",    description: "CCTV surveillance and on-site security team.",       emoji: null, color: "#C9862B" },
  { icon: Users,    title: "Community Hub",    description: "Vibrant spaces designed for social gatherings.",     emoji: null, color: "#30534A" },
  { icon: null,     title: "Swimming Pool",    description: "Olympic-sized pool with children's splash zone.",    emoji: "🏊", color: "#C9862B" },
  { icon: null,     title: "Gaming Zone",      description: "Indoor games & entertainment for all ages.",         emoji: "🎮", color: "#30534A" },
  { icon: null,     title: "Yoga Studio",      description: "Dedicated wellness spaces for mind & body.",         emoji: "🧘", color: "#C9862B" },
  { icon: null,     title: "Covered Parking",  description: "Secure multi-level parking for every resident.",    emoji: "🚗", color: "#30534A" },
]

export function AmenitiesSection() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section
      id="amenities"
      style={{ background: "linear-gradient(170deg, #fff 0%, #f5f2ec 100%)" }}
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute left-0 bottom-0 h-[350px] w-[350px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(48,83,74,0.06) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
              World-Class Facilities
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-[var(--text-dark)] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Designed for <em className="not-italic text-[var(--green)]">Modern Living</em>
            </h2>
          </div>
          <div
            className="inline-flex self-start items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-[var(--green)] md:self-auto"
            style={{ background: "rgba(48,83,74,0.08)", border: "1px solid rgba(48,83,74,0.15)" }}
          >
            {amenities.length}+ Premium Amenities
          </div>
        </div>

        {/* ── MOBILE: 2-col tap grid ── */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {amenities.map((item) => {
            const Icon = item.icon
            const isActive = active === item.title
            return (
              <button
                key={item.title}
                onClick={() => setActive(isActive ? null : item.title)}
                className="relative overflow-hidden rounded-3xl p-4 text-left transition-all duration-300 active:scale-[0.97]"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${item.color}, ${item.color}cc)`
                    : "#fff",
                  border: isActive
                    ? `1.5px solid ${item.color}55`
                    : "1.5px solid rgba(48,83,74,0.08)",
                  boxShadow: isActive
                    ? `0 8px 24px ${item.color}33`
                    : "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {/* Corner */}
                <div
                  className="absolute right-0 top-0 h-10 w-10 rounded-bl-[30px]"
                  style={{ background: isActive ? "rgba(255,255,255,0.1)" : "rgba(201,134,43,0.04)" }}
                />

                {/* Icon */}
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.18)" : "rgba(201,134,43,0.09)",
                  }}
                >
                  {Icon ? (
                    <Icon size={20} style={{ color: isActive ? "#fff" : "var(--gold)" }} />
                  ) : (
                    <span className="text-xl">{item.emoji}</span>
                  )}
                </div>

                <p
                  className="text-sm font-bold leading-tight"
                  style={{ color: isActive ? "#fff" : "var(--text-dark)" }}
                >
                  {item.title}
                </p>

                {isActive && (
                  <p className="mt-1.5 text-[11px] leading-snug text-white/70">
                    {item.description}
                  </p>
                )}

                {/* Active indicator dot */}
                {isActive && (
                  <div
                    className="mt-3 h-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.4)", width: "32px" }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* ── DESKTOP: 5-col horizontal grid ── */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-4">
          {amenities.map((item) => {
            const Icon = item.icon
            const isActive = active === item.title
            return (
              <article
                key={item.title}
                onClick={() => setActive(isActive ? null : item.title)}
                className="group cursor-pointer rounded-3xl p-4 transition-all duration-300"
                style={{
                  background: isActive ? `linear-gradient(135deg, #30534A, #1f3731)` : "#fff",
                  border: isActive ? "1px solid rgba(201,134,43,0.3)" : "1px solid rgba(48,83,74,0.08)",
                  boxShadow: isActive ? "0 12px 32px rgba(48,83,74,0.3)" : "0 2px 12px rgba(0,0,0,0.05)",
                  transform: isActive ? "translateY(-4px)" : undefined,
                }}
              >
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: isActive ? "rgba(255,255,255,0.12)" : "rgba(201,134,43,0.08)" }}
                >
                  {Icon ? (
                    <Icon size={20} className={isActive ? "text-white" : "text-[var(--gold)]"} />
                  ) : (
                    <span className="text-xl">{item.emoji}</span>
                  )}
                </div>
                <h3
                  className="mb-1 text-sm font-bold leading-tight"
                  style={{ color: isActive ? "#fff" : "var(--text-dark)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: isActive ? "rgba(255,255,255,0.65)" : "var(--text-muted)" }}
                >
                  {item.description}
                </p>
                <div
                  className="mt-3 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: isActive ? "var(--gold)" : "rgba(201,134,43,0.2)",
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
