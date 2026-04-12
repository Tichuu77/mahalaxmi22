"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", mobile: "", lookingFor: "", interestedIn: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.mobile) return
    setStatus("loading")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7a6bc102-dcc3-4f79-a088-0a0f5bd21923",
          name: form.name,
          subject: `New Inquiry – ${form.lookingFor}`,
          message: `Name: ${form.name}\nMobile: ${form.mobile}\nLooking For: ${form.lookingFor}\nInterested In: ${form.interestedIn}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setForm({ name: "", mobile: "", lookingFor: "", interestedIn: "" })
      } else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9326709970", href: "tel:+919326709970" },
    { icon: Mail, label: "Email", value: "kuwarb38@gmail.com", href: "mailto:kuwarb38@gmail.com" },
    { icon: MapPin, label: "Office", value: "Flat 103/104, Laxmivihar Apartment, Wardha Road, Nagpur 440025", href: "#" },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f2ec 0%, #fff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">
            Get In Touch
          </p>
          <h2
            className="text-4xl font-bold leading-tight text-[var(--text-dark)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Find Your{" "}
            <em className="not-italic text-[var(--green)]">Dream Plot</em>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--text-muted)]">
            Reach out for a site visit, price list, or any query. Our team responds within 30 minutes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-[1fr_1.1fr]">
          {/* Left: Contact info */}
          <div
            className="relative overflow-hidden rounded-3xl p-7 text-white"
            style={{
              background: "linear-gradient(135deg, #30534A 0%, #1f3731 100%)",
              boxShadow: "0 16px 48px rgba(48,83,74,0.3)",
            }}
          >
            {/* Glow */}
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full"
              style={{ background: "rgba(201,134,43,0.12)" }}
            />

            <h3
              className="relative mb-1 text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Us
            </h3>
            <p className="relative mb-7 text-sm text-white/60">We&apos;re here to help you every step of the way.</p>

            <div className="relative space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl transition group-hover:scale-105"
                      style={{ background: "rgba(201,134,43,0.15)" }}
                    >
                      <Icon size={16} className="text-[var(--gold)]" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-white/80 group-hover:text-white transition">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Quick action */}
            <a
              href="https://wa.me/919326709970?text=Hi, I want to know more about your plots."
              target="_blank"
              className="relative mt-8 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-[var(--green)] transition hover:opacity-90"
              style={{ background: "#fff", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[var(--green)]">
                <path d="M20.52 3.48A11.873 11.873 0 0012 .5C6.201.5 1.5 5.2 1.5 11c0 1.937.513 3.813 1.489 5.474L.5 23.5l6.17-1.62A11.471 11.471 0 0012 22.5c5.799 0 10.5-4.7 10.5-10.5 0-2.82-1.1-5.476-3.98-7.52z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={submit}
            className="rounded-3xl p-6 md:p-8"
            style={{
              background: "#fff",
              border: "1px solid rgba(48,83,74,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "rgba(48,83,74,0.08)" }}
                >
                  <CheckCircle2 size={32} className="text-[var(--green)]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[var(--green)]">Message Sent!</h3>
                <p className="text-sm text-[var(--text-muted)]">We&apos;ll get in touch within 30 minutes.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 rounded-full px-5 py-2 text-xs font-bold text-white"
                  style={{ background: "var(--green)" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-5 text-xl font-bold text-[var(--text-dark)]">Send an Enquiry</h3>

                <div className="grid gap-3">
                  {[
                    { field: "name", placeholder: "Full Name *", type: "text" },
                    { field: "mobile", placeholder: "Mobile Number *", type: "tel" },
                    { field: "lookingFor", placeholder: "Looking For (e.g. Residential Plot)", type: "text" },
                    { field: "interestedIn", placeholder: "Interested In (e.g. Mahalaxmi Nagar-41)", type: "text" },
                  ].map(({ field, placeholder, type }) => (
                    <input
                      key={field}
                      type={type}
                      required={field === "name" || field === "mobile"}
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full rounded-2xl px-4 py-3.5 text-sm text-[var(--text-dark)] outline-none transition focus:ring-2"
                      style={{
                        background: "rgba(245,242,236,0.7)",
                        border: "1px solid rgba(48,83,74,0.1)",
                      }}
                    />
                  ))}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
                    style={{
                      background: "linear-gradient(90deg, #30534A, #3f6f63)",
                      boxShadow: "0 6px 20px rgba(48,83,74,0.3)",
                    }}
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Enquiry <Send size={14} />
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <p className="mt-3 text-center text-xs text-red-500">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
