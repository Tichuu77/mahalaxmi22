"use client"

import { Award, Building2, CheckCircle2, Shield, TrendingUp, Users } from "lucide-react"

const features = [
  "Premium Materials",
  "Expert Craftsmanship",
  "Quality Assurance",
  "Timely Delivery",
  "Value Appreciation",
  "Modern Architecture",
]

const stats = [
  { icon: Building2, value: "70+", label: "Completed Projects" },
  { icon: Users, value: "17,000+", label: "Happy Families" },
  { icon: Award, value: "13+", label: "Years Experience" },
  { icon: TrendingUp, value: "500K+", label: "Sq.Ft Delivered" },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f2ec 0%, #fff 60%, #f5f2ec 100%)" }}
    >
      {/* Decorative blob */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(201,134,43,0.08) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Mobile heading */}
        <div className="mb-8 md:hidden">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Our Story</p>
          <h2
            className="text-4xl font-bold leading-tight text-[var(--text-dark)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Building Dreams
            <br />
            <em className="not-italic text-[var(--green)]">Since 2012</em>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14 md:items-center">
          {/* Left */}
          <article>
            {/* Desktop heading */}
            <div className="hidden md:block">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Our Story</p>
              <h2
                className="mb-5 text-5xl font-bold leading-tight text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Building Dreams
                <br />
                <em className="not-italic text-[var(--green)]">Since 2012</em>
              </h2>
            </div>

            <p className="mb-6 text-base leading-[1.8] text-[var(--text-mid)] md:text-lg">
              Mahalaxmi Infra is Nagpur&apos;s most trusted name in NMRDA sanctioned and RERA approved residential plots.
              With 70+ completed projects and 17,000+ families settled, we&apos;ve turned land into lifestyles for over
              a decade.
            </p>

            {/* Features Grid */}
            <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                  style={{
                    background: "rgba(48,83,74,0.05)",
                    border: "1px solid rgba(48,83,74,0.1)",
                  }}
                >
                  <div
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <span className="text-xs font-semibold text-[var(--text-dark)]">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-[var(--green)]"
                style={{ background: "rgba(48,83,74,0.07)", border: "1px solid rgba(48,83,74,0.15)" }}
              >
                <Shield size={12} className="text-[var(--gold)]" /> NMRDA Sanctioned
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-[var(--green)]"
                style={{ background: "rgba(48,83,74,0.07)", border: "1px solid rgba(48,83,74,0.15)" }}
              >
                <CheckCircle2 size={12} className="text-[var(--gold)]" /> RERA Approved
              </span>
            </div>
          </article>

          {/* Right – Stat Cards */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((item, i) => {
              const Icon = item.icon
              const isDark = i % 2 === 1
              return (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={
                    isDark
                      ? {
                          background: "linear-gradient(135deg, #30534A, #1f3731)",
                          boxShadow: "0 8px 28px rgba(48,83,74,0.25)",
                        }
                      : {
                          background: "#fff",
                          border: "1px solid rgba(48,83,74,0.08)",
                          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                        }
                  }
                >
                  {/* Corner glow */}
                  <div
                    className="absolute right-0 top-0 h-12 w-12 rounded-bl-full"
                    style={{
                      background: isDark ? "rgba(201,134,43,0.12)" : "rgba(48,83,74,0.04)",
                    }}
                  />
                  <div
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.1)" : "rgba(48,83,74,0.08)",
                    }}
                  >
                    <Icon size={18} className="text-[var(--gold)]" />
                  </div>
                  <p
                    className="text-3xl font-bold text-[var(--gold)] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="mt-1.5 text-xs font-medium"
                    style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#999" }}
                  >
                    {item.label}
                  </p>
                </div>
              )
            })}

            {/* RERA Note - full width */}
            <div
              className="col-span-2 flex items-center gap-3 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(201,134,43,0.06)",
                border: "1px solid rgba(201,134,43,0.18)",
              }}
            >
              <div
                className="h-2 w-2 flex-shrink-0 rounded-full"
                style={{ background: "var(--gold)", boxShadow: "0 0 6px rgba(201,134,43,0.6)" }}
              />
              <p className="text-xs font-semibold text-[#8a5a1a]">
                MAHA RERA No. A50500044725 · Legal Clear · Bank Approved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
