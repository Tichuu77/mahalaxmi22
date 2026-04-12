"use client"

import { Dumbbell, Shield, Trees, Users, Wifi, Zap } from "lucide-react"

const amenities = [
  { icon: Wifi, title: "Smart Home", description: "Advanced IoT integration for modern living." },
  { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gym & workout facilities." },
  { icon: Trees, title: "Green Spaces", description: "Lush landscaping, parks and tree-lined paths." },
  { icon: Zap, title: "Power Backup", description: "Uninterrupted power supply around the clock." },
  { icon: Shield, title: "24/7 Security", description: "CCTV surveillance and on-site security team." },
  { icon: Users, title: "Community Hub", description: "Vibrant spaces designed for social gatherings." },
  { icon: null, title: "Swimming Pool", description: "Olympic-sized pool with children's splash zone.", emoji: "🏊" },
  { icon: null, title: "Gaming Zone", description: "Indoor games & entertainment for all ages.", emoji: "🎮" },
  { icon: null, title: "Yoga Studio", description: "Dedicated wellness spaces for mind & body.", emoji: "🧘" },
  { icon: null, title: "Covered Parking", description: "Secure multi-level parking for every resident.", emoji: "🚗" },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-[var(--cream)] px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-3">
          <h2 className="text-3xl md:text-5xl">Designed for Modern Living</h2>
          <p className="rounded-full bg-white px-3 py-1 text-xs text-[var(--text-muted)]">{amenities.length}+ Amenities</p>
        </div>
        <div className="flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {amenities.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="group min-w-[240px] snap-start rounded-2xl border border-[var(--green-border)] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--gold-light),#fff)]">
                  {Icon ? <Icon size={16} className="text-[var(--gold)]" /> : <span>{item.emoji}</span>}
                </div>
                <h3 className="text-base font-semibold text-[var(--green)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-mid)]">{item.description}</p>
                <div className="mt-3 h-1 w-0 rounded-full bg-[var(--gold)] transition-all duration-300 group-hover:w-16" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
