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
    <section id="home" className="bg-[var(--cream)] px-4 pb-8 pt-24 md:px-8 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-light)] px-3 py-1 text-xs font-semibold text-[var(--gold)]">
            <MapPin size={12} /> Nagpur, Maharashtra
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--text-dark)] md:text-6xl">
            Premium <span className="text-[var(--gold)]">RERA</span><br />Approved Plots in Nagpur
          </h1>
          <p className="max-w-xl text-[var(--text-mid)]">
            NMRDA sanctioned residential plots near MIHAN, Wardha Road & Hingna. Starting <strong>₹22 Lakh</strong>. Bank loan up to 90% available.
          </p>
          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
            {stats.map((item) => (
              <div key={item.label} className="min-w-[140px] rounded-2xl border border-[var(--green-border)] bg-white p-3">
                <p className="text-xl font-bold text-[var(--green)]">{item.value}</p>
                <p className="text-xs text-[var(--text-muted)]">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-5 py-3 text-sm font-semibold text-white">Explore Projects <ArrowRight size={14} /></a>
            <a href="#contact" className="rounded-full border border-[var(--gold-border)] px-5 py-3 text-sm font-semibold text-[var(--gold)]">Schedule Visit</a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-[28px] border border-[var(--green-border)] bg-white p-3 shadow-md">
            <img src="/hero-bg.jpeg" alt="Mahalaxmi Infra premium residential plots in Nagpur" fetchPriority="high" className="h-[430px] w-full rounded-3xl object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[var(--green)] p-4 text-white">
              <p className="text-xs opacity-80">Starting Price</p>
              <p className="mt-1 flex items-center gap-1 text-2xl font-bold">₹22L <TrendingUp size={16} /></p>
            </div>
            <div className="rounded-2xl border border-[var(--gold-border)] bg-white p-4">
              <p className="text-xs text-[var(--text-muted)]">Approval</p>
              <p className="mt-1 text-lg font-semibold text-[var(--gold)]">MAHA RERA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-wrap gap-2">
        {trust.map((item) => {
          const Icon = item.icon
          return <span key={item.label} className="inline-flex items-center gap-2 rounded-full border border-[var(--green-border)] bg-white px-3 py-2 text-xs"><Icon size={12} className="text-[var(--gold)]" />{item.label}</span>
        })}
      </div>
    </section>
  )
}
