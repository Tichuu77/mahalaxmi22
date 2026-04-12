"use client"

import { ArrowRight, Award, CheckCircle2, MapPin, Phone, Shield, TrendingUp } from "lucide-react"

const stats = [
  { value: "70+", label: "Projects" },
  { value: "17K+", label: "Families" },
  { value: "100%", label: "RERA" },
]

const trust = [
  { icon: Shield, label: "NMRDA Sanctioned" },
  { icon: CheckCircle2, label: "RERA Approved" },
  { icon: Award, label: "ISO Certified" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #060e0b 0%, #0d1a16 45%, #0f1411 100%)",
      }}
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(201,134,43,.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-[15%] left-[5%] h-[400px] w-[400px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(48,83,74,0.35) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] h-[300px] w-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,134,43,0.1) 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-28 pt-28 md:grid md:grid-cols-2 md:items-center md:gap-10 md:px-8 md:pt-32">
        {/* Left: Copy */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Eye-brow badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{
              background: "rgba(201,134,43,0.08)",
              borderColor: "rgba(201,134,43,0.25)",
            }}
          >
            <MapPin size={12} className="text-[var(--gold)]" />
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--gold)]">
              Nagpur, Maharashtra
            </span>
          </div>

          {/* H1 */}
          <h1
            className="mb-4 font-bold leading-[1.04] text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem,7vw,5.5rem)",
            }}
          >
            Premium{" "}
            <em className="not-italic" style={{ color: "var(--gold)" }}>
              RERA
            </em>
            <br />
            Approved Plots
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.3)",
                color: "transparent",
              }}
            >
              in Nagpur
            </span>
          </h1>

          {/* Sub */}
          <p className="mb-6 max-w-md text-base leading-[1.8] text-white/55 md:text-lg">
            NMRDA sanctioned residential plots near MIHAN, Wardha Road &amp; Hingna. Starting{" "}
            <strong className="font-bold text-[var(--gold)]">₹22 Lakh</strong>. Bank loan up to 90% available.
          </p>

          {/* Stats */}
          <div className="mb-7 flex w-full justify-center gap-3 md:justify-start">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex-1 rounded-2xl py-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <p
                  className="font-bold text-[var(--gold)]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,3vw,2rem)" }}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/35">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(201,134,43,0.35)] transition-all hover:shadow-[0_12px_32px_rgba(201,134,43,0.5)] hover:-translate-y-0.5"
              style={{ background: "var(--gold)" }}
            >
              Explore Projects <ArrowRight size={14} />
            </a>
            <a
              href="tel:+919326709970"
              className="flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white/80 transition-all hover:text-white hover:border-white/25"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1.5px solid rgba(255,255,255,0.12)",
              }}
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>

        {/* Right: Image Panel (desktop only) */}
        <div className="mt-8 hidden relative md:flex md:justify-end">
          <div
            className="relative w-full max-w-[480px] overflow-hidden rounded-[24px]"
            style={{
              aspectRatio: "4/5",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/hero-bg.jpeg"
              alt="Mahalaxmi Infra premium residential plots in Nagpur"
              fetchPriority="high"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0 rounded-[24px]"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
              }}
            />
            {/* Price Badge */}
            <div
              className="absolute bottom-6 left-[-18px] flex items-center gap-2 rounded-2xl px-4 py-3 shadow-xl"
              style={{ background: "var(--gold)" }}
            >
              <TrendingUp size={14} className="text-white" />
              <div>
                <p className="text-[8px] uppercase tracking-[0.1em] text-white/70">Starting From</p>
                <p className="text-lg font-bold text-white leading-tight">₹22 Lakh</p>
              </div>
            </div>
            {/* RERA Badge */}
            <div
              className="absolute right-[-14px] top-6 rounded-2xl px-4 py-2.5"
              style={{
                background: "rgba(9,18,16,0.92)",
                border: "1px solid rgba(201,134,43,0.28)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-[10px] font-bold text-[var(--gold)]">RERA Approved</p>
              <p className="text-[8px] text-white/35 mt-0.5 tracking-[0.06em]">A50500044725</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background: "rgba(0,0,0,0.5)",
          borderTop: "1px solid rgba(201,134,43,0.12)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-3 flex-wrap md:gap-10 md:py-4">
          {trust.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ background: "rgba(201,134,43,0.12)" }}
                >
                  <Icon size={12} className="text-[var(--gold)]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
