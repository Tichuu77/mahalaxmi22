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
    <section id="about" className="bg-white px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--green-border)] bg-[linear-gradient(135deg,#ffffff_10%,#f5f2ec_90%)] p-6 shadow-sm md:p-10">
        <div className="grid gap-7 md:grid-cols-[1.05fr_.95fr]">
          <article>
            <p className="text-xs font-semibold tracking-[0.25em] text-[var(--gold)]">OUR STORY</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-5xl">Building Dreams Since 2012</h2>
            <p className="mt-4 text-[var(--text-mid)] md:text-lg">
              Mahalaxmi Infra is Nagpur&apos;s most trusted name in NMRDA sanctioned and RERA approved residential plots. With 70+ completed projects and 17,000+ families settled, we&apos;ve turned land into lifestyles for over a decade.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {features.map((item) => <div key={item} className="rounded-xl border border-[var(--green-border)] bg-white px-3 py-2 text-sm">{item}</div>)}
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 ring-1 ring-[var(--green-border)]"><Shield size={12} className="text-[var(--gold)]" />NMRDA Sanctioned</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 ring-1 ring-[var(--green-border)]"><CheckCircle2 size={12} className="text-[var(--gold)]" />RERA Approved</span>
            </div>
          </article>

          <article className="grid gap-3 md:grid-cols-2">
            {stats.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-2xl bg-[var(--green)] p-4 text-white shadow-lg">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Icon size={16} className="text-[var(--gold)]" />
                  </div>
                  <p className="mt-3 text-2xl font-bold">{item.value}</p>
                  <p className="text-sm text-white/75">{item.label}</p>
                </div>
              )
            })}
          </article>
        </div>
      </div>
    </section>
  )
}
