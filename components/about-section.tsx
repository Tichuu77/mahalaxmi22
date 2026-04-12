"use client"

import { Award, Building2, CheckCircle2, Shield, TrendingUp, Users } from "lucide-react"

const features = ["Premium Materials", "Expert Craftsmanship", "Quality Assurance", "Timely Delivery", "Value Appreciation", "Modern Architecture"]

const stats = [
  { icon: Building2, value: "70+", label: "Completed Projects" },
  { icon: Users, value: "17,000+", label: "Happy Families" },
  { icon: Award, value: "13+", label: "Years Experience" },
  { icon: TrendingUp, value: "500K+", label: "Sq.Ft Delivered" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[var(--green-border)] bg-[var(--cream)] p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--gold)]">OUR STORY</p>
          <h2 className="mt-2 text-3xl md:text-5xl">Building Dreams Since 2012</h2>
          <p className="mt-4 text-[var(--text-mid)]">
            Mahalaxmi Infra is Nagpur&apos;s most trusted name in NMRDA sanctioned and RERA approved residential plots. With 70+ completed projects and 17,000+ families settled, we&apos;ve turned land into lifestyles for over a decade.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {features.map((item) => <div key={item} className="rounded-xl border border-[var(--green-border)] bg-white px-3 py-2 text-sm">{item}</div>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--green-border)] px-3 py-1"><Shield size={12} className="text-[var(--gold)]" />NMRDA Sanctioned</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--green-border)] px-3 py-1"><CheckCircle2 size={12} className="text-[var(--gold)]" />RERA Approved</span>
          </div>
        </article>

        <article className="grid gap-3 rounded-3xl bg-[var(--green)] p-5 md:grid-cols-2">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur">
                <Icon size={16} className="text-[var(--gold)]" />
                <p className="mt-2 text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-white/75">{item.label}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}
