"use client"

import { Star } from "lucide-react"

const testimonials = [
  { name: "Rajkumar Gharjale", location: "Nagpur", image: "/testonomials1.webp", content: "Investing with Maha Laxmi Developers was an effortless experience. Their transparent process and clear documentation gave me full confidence. The best decision I ever made." },
  { name: "Priya Shah", location: "Mumbai", image: "/testonomials2.jpg", content: "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Developers exceeded my expectations in every way. Highly recommended!" },
  { name: "Karan Akojwar", location: "Pune", image: "/testonomials3.jpg", content: "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me real peace of mind." },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[linear-gradient(160deg,#30534A_0%,#1f3731_100%)] px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl text-white md:text-5xl">Words from Our Happy Families</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="min-w-[310px] max-w-[370px] rounded-3xl border border-white/20 bg-white/95 p-5 shadow-xl">
              <div className="mb-3 flex text-[var(--gold)]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
              <p className="text-sm leading-relaxed text-[var(--text-mid)]">“{item.content}”</p>
              <footer className="mt-4 flex items-center gap-3">
                <img src={item.image} alt={item.name} loading="lazy" className="h-11 w-11 rounded-full object-cover ring-2 ring-[var(--gold-border)]" />
                <cite className="not-italic text-sm font-semibold">{item.name} <span className="font-normal text-[var(--text-muted)]">· {item.location}</span></cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
