"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#user-guide", label: "How It Works" },
  { href: "#news", label: "News" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[var(--green-border)] bg-[color:rgba(245,242,236,.88)] px-4 py-3 shadow-lg backdrop-blur-xl md:px-6" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2">
          <img src="/Malaxmi-Final-Logo-1.png" alt="Mahalaxmi Infra Logo" className="h-10 w-10 rounded-xl object-cover ring-1 ring-[var(--gold-border)]" />
          <div><p className="text-sm font-semibold">Mahalaxmi Infra</p><p className="text-[10px] tracking-[0.2em] text-[var(--text-muted)]">RERA APPROVED</p></div>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-[var(--green-border)] bg-white/80 p-1 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-xs font-medium transition hover:bg-[var(--green)] hover:text-white">{l.label}</a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-[var(--green)] to-[#3f6f63] px-4 py-2 text-xs font-semibold text-white md:block">Book Visit</a>
        <button className="rounded-xl border border-[var(--green-border)] bg-white p-2 md:hidden" onClick={() => setOpen((p) => !p)} aria-label="Menu">{open ? <X size={16} /> : <Menu size={16} />}</button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 grid max-w-7xl gap-2 rounded-2xl border border-[var(--green-border)] bg-white p-3 shadow-md md:hidden">
          {navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm hover:bg-[var(--cream)]">{l.label}</a>)}
        </div>
      )}
    </header>
  )
}
