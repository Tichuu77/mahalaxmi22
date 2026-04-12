"use client"

import { useState } from "react"

const guides = [
  {
    number: "01",
    title: "Explore & Shortlist",
    description: "Browse projects and shortlist plots matching your budget and location.",
    details: ["Filter by location, size & budget", "Compare plots side-by-side", "Download project brochures", "Review RERA & NMRDA approvals"],
  },
  {
    number: "02",
    title: "Schedule a Site Visit",
    description: "Visit our actual plots — no renders, no stock photos.",
    details: ["Book via WhatsApp or phone", "Representative accompanies you", "Visit multiple sites", "Complimentary transport arranged"],
  },
  {
    number: "03",
    title: "Documentation & Finance",
    description: "We handle legal verification. Get up to 90% bank finance.",
    details: ["Title verification", "RERA & NMRDA copy", "Up to 90% loan", "Flexible EMI options"],
  },
  {
    number: "04",
    title: "Register & Move In",
    description: "Sign the sale deed, register, and take possession of your plot.",
    details: ["Sale deed execution", "Registration support", "Possession certificate", "Handover inspection"],
  },
]

export function UserGuideSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="user-guide" className="bg-white px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl">How to Get Started</h2>
        <p className="mt-2 text-[var(--text-mid)]">Follow our simple guide to find, visit, finance and own your dream plot in Nagpur.</p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {guides.map((item, i) => (
            <article key={item.number} className={`rounded-2xl border p-4 ${active === i ? "border-[var(--gold)] bg-[var(--gold-light)]" : "border-[var(--green-border)] bg-[var(--cream)]"}`}>
              <button onClick={() => setActive(i)} className="w-full text-left">
                <p className="text-xs font-semibold tracking-widest text-[var(--gold)]">STEP {item.number}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-mid)]">{item.description}</p>
              </button>
              {active === i && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--text-mid)]">{item.details.map((d) => <li key={d}>{d}</li>)}</ul>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
