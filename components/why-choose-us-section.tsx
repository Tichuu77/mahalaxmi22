"use client"

import { Award, Building2, CheckCircle2, MapPin, Shield, Users } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Award-winning projects trusted by thousands of families across Nagpur.",
    stat: "70+",
    statLabel: "Projects",
  },
  {
    icon: Building2,
    title: "Innovation First",
    description: "Modern layouts, smart planning, and forward-thinking infrastructure.",
    stat: "13+",
    statLabel: "Years",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with decades of real estate experience.",
    stat: "17K+",
    statLabel: "Clients",
  },
  {
    icon: CheckCircle2,
    title: "Customer Focused",
    description: "Your satisfaction drives every decision from plot to possession.",
    stat: "100%",
    statLabel: "RERA",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Near MIHAN, highways, hospitals & schools — where value grows.",
    stat: "9+",
    statLabel: "Locations",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "NMRDA sanctioned, legally clear, and bank finance eligible plots.",
    stat: "90%",
    statLabel: "Finance",
  },
]

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f2ec 0%, #fff 50%, #f5f2ec 100%)" }}
    >
      {/* Decoration */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] opacity-60"
        style={{ background: "radial-gradient(circle at top right, rgba(201,134,43,0.07), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
              Why Choose Us
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-[var(--text-dark)] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Thousands
              <br />
              <em className="not-italic text-[var(--green)]">Trust Mahalaxmi</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--text-mid)]">
            For over a decade, we&apos;ve built confidence, community, and long-term value for families across Nagpur.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(48,83,74,0.08)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                {/* Corner decoration */}
                <div
                  className="absolute right-0 top-0 h-20 w-20 rounded-bl-[50px] transition-all duration-300 group-hover:opacity-80"
                  style={{ background: "rgba(201,134,43,0.05)" }}
                />

                {/* Icon + stat */}
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: "linear-gradient(135deg, #30534A, #3f6f63)" }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-right">
                    <p
                      className="text-2xl font-bold text-[var(--gold)] leading-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.stat}
                    </p>
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      {item.statLabel}
                    </p>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-[var(--green)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-mid)]">{item.description}</p>

                {/* Hover bar */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: "linear-gradient(90deg, var(--gold), var(--green))",
                    width: "0%",
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
