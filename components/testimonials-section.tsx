"use client"

import { Star } from "lucide-react"

const testimonials = [
  { name: "Rajkumar Gharjale", location: "Nagpur", image: "/testonomials1.webp", content: "Investing with Maha Laxmi Developers was an effortless experience. Their transparent process and clear documentation gave me full confidence. The best decision I ever made." },
  { name: "Priya Shah", location: "Mumbai", image: "/testonomials2.jpg", content: "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Developers exceeded my expectations in every way. Highly recommended!" },
  { name: "Karan Akojwar", location: "Pune", image: "/testonomials3.jpg", content: "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me real peace of mind." },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[var(--green)] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl text-white md:text-5xl">Words from Our Happy Families</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="min-w-[300px] max-w-[360px] rounded-3xl bg-white p-5">
              <div className="mb-3 flex text-[var(--gold)]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
              <p className="text-sm text-[var(--text-mid)]">“{item.content}”</p>
              <footer className="mt-4 flex items-center gap-3">
                <img src={item.image} alt={item.name} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                <cite className="not-italic text-sm font-semibold">{item.name} <span className="font-normal text-[var(--text-muted)]">· {item.location}</span></cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
