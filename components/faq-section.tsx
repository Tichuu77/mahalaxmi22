"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
    <section id="faq" className="bg-white px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((item, i) => (
            <article key={item.question} className="rounded-2xl border border-[var(--green-border)] bg-[var(--cream)] p-4">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between text-left font-semibold">
                {item.question}
                <ChevronDown size={16} className={open === i ? "rotate-180 transition" : "transition"} />
              </button>
              {open === i && <p className="mt-2 text-sm text-[var(--text-mid)]">{item.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
