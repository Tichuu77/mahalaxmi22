"use client"

import { ArrowRight, Award, CheckCircle2, MapPin, Shield, TrendingUp } from "lucide-react"

const stats = [
  { value: "70+", label: "Projects" },
  { value: "17K+", label: "Families" },
  { value: "100%", label: "RERA Approved" },
]

const trust = [
  { icon: Shield, label: "NMRDA Sanctioned" },
  { icon: CheckCircle2, label: "RERA Approved" },
  { icon: Award, label: "ISO Certified" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--cream)] px-4 pb-10 pt-28 md:px-8 md:pt-36">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[var(--gold-light)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[var(--green-light)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.08fr_.92fr] md:items-center">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--gold)]">
            <MapPin size={12} /> Nagpur, Maharashtra
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] text-[var(--text-dark)] md:text-7xl">
            Premium <span className="text-[var(--gold)]">RERA</span><br />Approved Plots<br />in Nagpur
          </h1>
          <p className="max-w-xl text-[var(--text-mid)] md:text-lg">
            NMRDA sanctioned residential plots near MIHAN, Wardha Road & Hingna. Starting <strong>₹22 Lakh</strong>. Bank loan up to 90% available.
          </p>
          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
            {stats.map((item) => (
              <div key={item.label} className="min-w-[150px] rounded-2xl border border-[var(--green-border)] bg-white/90 p-3 shadow-sm backdrop-blur">
                <p className="text-2xl font-bold text-[var(--green)]">{item.value}</p>
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--green)] to-[#3f6f63] px-6 py-3 text-sm font-semibold text-white shadow-lg">Explore Projects <ArrowRight size={14} /></a>
            <a href="#contact" className="rounded-full border border-[var(--gold-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--gold)]">Schedule Visit</a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="relative rounded-[30px] border border-[var(--green-border)] bg-white/90 p-3 shadow-xl backdrop-blur">
            <img src="/hero-bg.jpeg" alt="Mahalaxmi Infra premium residential plots in Nagpur" fetchPriority="high" className="h-[460px] w-full rounded-3xl object-cover" />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-[color:rgba(9,18,16,.75)] px-4 py-3 text-white backdrop-blur">
              <p className="text-[11px] uppercase tracking-widest text-white/70">Prime Offer</p>
              <p className="mt-1 flex items-center gap-1 text-xl font-bold">₹22L <TrendingUp size={14} className="text-[var(--gold)]" /></p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {trust.map((item) => {
              const Icon = item.icon
              return <span key={item.label} className="inline-flex items-center gap-2 rounded-full border border-[var(--green-border)] bg-white/90 px-3 py-2 text-xs shadow-sm"><Icon size={12} className="text-[var(--gold)]" />{item.label}</span>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
