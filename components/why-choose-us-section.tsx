"use client"

import { Award, Building2, CheckCircle2, MapPin, Shield, Users } from "lucide-react"

const reasons = [
  { icon: Award, title: "Proven Excellence", description: "Award-winning projects trusted by thousands of families across Nagpur.", stat: "70+ Projects" },
  { icon: Building2, title: "Innovation First", description: "Modern layouts, smart planning, and forward-thinking infrastructure.", stat: "13+ Years" },
  { icon: Users, title: "Expert Team", description: "Dedicated professionals with decades of real estate experience.", stat: "17K+ Clients" },
  { icon: CheckCircle2, title: "Customer Focused", description: "Your satisfaction drives every decision from plot to possession.", stat: "100% RERA" },
  { icon: MapPin, title: "Prime Locations", description: "Strategically chosen land near MIHAN, highways, hospitals & schools.", stat: "9+ Locations" },
  { icon: Shield, title: "Quality Assured", description: "NMRDA sanctioned, legally clear, and bank finance eligible plots.", stat: "90% Finance" },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-[var(--cream)] px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--green-border)] bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.2em] text-[var(--gold)]">WHY CHOOSE US</p>
            <h2 className="mt-2 text-3xl md:text-5xl">Why Thousands Trust Mahalaxmi</h2>
          </div>
          <p className="max-w-md text-sm text-[var(--text-mid)]">For over a decade, we&apos;ve built confidence, community, and long-term value for families across Nagpur.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="group rounded-2xl border border-[var(--green-border)] bg-[linear-gradient(150deg,#fff,#f7f4ef)] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--green)] text-white"><Icon size={16} /></div>
                <p className="text-xs font-semibold tracking-wider text-[var(--gold)]">{item.stat}</p>
                <h3 className="mt-1 text-lg font-semibold text-[var(--green)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-mid)]">{item.description}</p>
                <div className="mt-3 h-1 w-0 rounded-full bg-[var(--gold)] transition-all group-hover:w-20" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
