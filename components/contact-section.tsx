"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

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

  return (
    <section id="contact" className="bg-[var(--cream)] px-4 py-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 rounded-[32px] border border-[var(--green-border)] bg-white p-5 shadow-lg md:grid-cols-[1.05fr_.95fr] md:p-8">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--green)] p-6 text-white">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gold-glow)] blur-2xl" />
          <h2 className="relative text-3xl md:text-5xl">Let&apos;s Find Your Dream Plot</h2>
          <p className="relative mt-3 text-white/80">Reach out for a site visit, price list, or any query. Our team responds within 30 minutes.</p>
          <div className="relative mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-2"><Phone size={14} className="text-[var(--gold)]" /> +91 9326709970</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[var(--gold)]" /> kuwarb38@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin size={14} className="text-[var(--gold)]" /> Flat 103/104, Laxmivihar Apartment, Wardha Road, Somalwada, Nagpur 440025</p>
          </div>
        </div>

        <form onSubmit={submit} className="grid gap-3 rounded-3xl bg-[var(--cream)] p-4 md:p-6">
          <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Full Name" className="rounded-xl border border-[var(--green-border)] bg-white px-3 py-3" />
          <input required value={form.mobile} onChange={(e) => setForm((p) => ({ ...p, mobile: e.target.value }))} placeholder="Mobile Number" className="rounded-xl border border-[var(--green-border)] bg-white px-3 py-3" />
          <input value={form.lookingFor} onChange={(e) => setForm((p) => ({ ...p, lookingFor: e.target.value }))} placeholder="Looking For" className="rounded-xl border border-[var(--green-border)] bg-white px-3 py-3" />
          <input value={form.interestedIn} onChange={(e) => setForm((p) => ({ ...p, interestedIn: e.target.value }))} placeholder="Interested In" className="rounded-xl border border-[var(--green-border)] bg-white px-3 py-3" />
          <button disabled={status === "loading"} className="rounded-xl bg-gradient-to-r from-[var(--green)] to-[#3f6f63] px-4 py-3 font-semibold text-white">{status === "loading" ? "Sending..." : "Send Enquiry"}</button>
          {status === "success" && <p className="text-sm text-green-700">We&apos;ll be in touch!</p>}
          {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
