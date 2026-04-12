"use client"

const reasons = [
  { title: "Proven Excellence", description: "Award-winning projects trusted by thousands of families across Nagpur.", stat: "70+ Projects" },
  { title: "Innovation First", description: "Modern layouts, smart planning, and forward-thinking infrastructure.", stat: "13+ Years" },
  { title: "Expert Team", description: "Dedicated professionals with decades of real estate experience.", stat: "17K+ Clients" },
  { title: "Customer Focused", description: "Your satisfaction drives every decision from plot to possession.", stat: "100% RERA" },
  { title: "Prime Locations", description: "Strategically chosen land near MIHAN, highways, hospitals & schools.", stat: "9+ Locations" },
  { title: "Quality Assured", description: "NMRDA sanctioned, legally clear, and bank finance eligible plots.", stat: "90% Finance" },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-[var(--cream)] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl">Why Thousands Trust Mahalaxmi</h2>
        <p className="mt-2 max-w-3xl text-[var(--text-mid)]">For over a decade, we&apos;ve been building more than plots — we build confidence, community, and lasting value for families across Nagpur.</p>
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {reasons.map((item) => (
            <article key={item.title} className="min-w-[260px] rounded-2xl border border-[var(--green-border)] bg-white p-4 transition hover:-translate-y-1">
              <p className="text-xs font-semibold tracking-widest text-[var(--gold)]">{item.stat}</p>
              <h3 className="mt-1 text-lg font-semibold text-[var(--green)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-mid)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
