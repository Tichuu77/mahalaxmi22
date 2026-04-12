"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"

const faqs = [
  { question: "What does NMRDA sanctioned mean?", answer: "NMRDA sanctioned means the layout has government approval for residential development and legal compliance." },
  { question: "Is bank loan available on your plots?", answer: "Yes. Projects are eligible for up to 90% bank finance with major banks." },
  { question: "What is RERA and why does it matter?", answer: "RERA protects buyers with transparency and accountability. MAHA RERA number is A50500044725." },
  { question: "How do I book a site visit?", answer: "Call +91 9322987615, message on WhatsApp, or fill the contact form." },
  { question: "What is the starting price of plots?", answer: "Plots start from ₹22 Lakh depending on location, size, and project stage." },
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
          <div className="grid gap-3">
            {faqs.map((item, i) => (
              <article key={item.question} className="rounded-2xl border border-[var(--green-border)] bg-[var(--cream)] p-4">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-3 text-left font-semibold text-[var(--green)]">
                  {item.question}
                  <ChevronDown size={16} className={open === i ? "rotate-180 transition" : "transition"} />
                </button>
                {open === i && <p className="mt-2 text-sm text-[var(--text-mid)]">{item.answer}</p>}
              </article>
            ))}
          </div>

          <aside className="rounded-3xl bg-[var(--green)] p-5 text-white">
            <h3 className="text-xl font-semibold">Still have questions?</h3>
            <p className="mt-2 text-sm text-white/80">Chat with us on WhatsApp — we usually respond within minutes.</p>
            <a href="https://wa.me/919326709970" target="_blank" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--green)]">
              <MessageCircle size={14} /> Chat on WhatsApp
            </a>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p>🏆 70+ Completed Projects</p>
              <p>👨‍👩‍👧 17K+ Happy Families</p>
              <p>📋 100% RERA Approved</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
