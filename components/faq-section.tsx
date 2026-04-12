"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"

const faqs = [
  { question: "What does NMRDA sanctioned mean?", answer: "NMRDA sanctioned means the layout has government approval for residential development — ensuring full legal compliance and buyer protection." },
  { question: "Is bank loan available on your plots?", answer: "Yes. Our projects are eligible for up to 90% bank finance with major nationalized banks, making ownership accessible to all." },
  { question: "What is RERA and why does it matter?", answer: "RERA protects buyers with transparency and accountability. Our MAHA RERA number is A50500044725 — verifiable at maharera.mahaonline.gov.in." },
  { question: "How do I book a site visit?", answer: "Call +91 9322987615, message us on WhatsApp, or fill the contact form. Our team responds within 30 minutes during business hours." },
  { question: "What is the starting price of plots?", answer: "Plots start from ₹22 Lakh depending on location, plot size, and project stage. EMI options available." },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative overflow-hidden"
      style={{ background: "#fff" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
            FAQs
          </p>
          <h2
            className="text-4xl font-bold leading-tight text-[var(--text-dark)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked{" "}
            <em className="not-italic text-[var(--green)]">Questions</em>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl transition-all duration-200"
                style={{
                  border: open === i
                    ? "1px solid rgba(48,83,74,0.25)"
                    : "1px solid rgba(48,83,74,0.1)",
                  background: open === i ? "rgba(48,83,74,0.03)" : "#fff",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[var(--green)]"
                >
                  <span className="text-sm">{item.question}</span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-[var(--gold)] transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--text-mid)]">
                    {item.answer}
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* Help aside */}
          <aside
            className="relative overflow-hidden rounded-3xl p-6 text-white"
            style={{
              background: "linear-gradient(135deg, #30534A, #1f3731)",
              boxShadow: "0 12px 40px rgba(48,83,74,0.3)",
            }}
          >
            {/* Decorative */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
              style={{ background: "rgba(201,134,43,0.1)" }}
            />

            <h3
              className="relative mb-2 text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Still have questions?
            </h3>
            <p className="relative mb-5 text-sm text-white/70 leading-relaxed">
              Chat with us on WhatsApp — we usually respond within minutes.
            </p>

            <a
              href="https://wa.me/919822942446"
              target="_blank"
              className="relative mb-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[var(--green)] shadow-lg transition hover:shadow-xl"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>

            <div className="relative space-y-2 border-t border-white/10 pt-5">
              {[
                ["🏆", "70+ Completed Projects"],
                ["👨‍👩‍👧", "17K+ Happy Families"],
                ["📋", "100% RERA Approved"],
                ["🏦", "Up to 90% Bank Finance"],
              ].map(([emoji, text]) => (
                <div key={text} className="flex items-center gap-2 text-sm text-white/70">
                  <span>{emoji}</span> {text}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
