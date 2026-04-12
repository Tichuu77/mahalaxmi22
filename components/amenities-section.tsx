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
    <section id="amenities" className="bg-[var(--cream)] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-end justify-between gap-3">
          <h2 className="text-3xl md:text-5xl">Designed for Modern Living</h2>
          <p className="text-sm text-[var(--text-muted)]">{amenities.length}+ Amenities</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {amenities.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="min-w-[230px] rounded-2xl border border-[var(--green-border)] bg-white p-4 transition hover:-translate-y-1">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gold-light)]">
                  {Icon ? <Icon size={16} className="text-[var(--gold)]" /> : <span>{item.emoji}</span>}
                </div>
                <h3 className="text-base font-semibold text-[var(--green)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-mid)]">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
