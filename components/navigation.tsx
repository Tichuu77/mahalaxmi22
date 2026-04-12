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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--green-border)] bg-[color:rgba(245,242,236,.95)] backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2">
          <img src="/Malaxmi-Final-Logo-1.png" alt="Mahalaxmi Infra Logo" className="h-10 w-10 rounded-full object-cover" />
          <div><p className="text-sm font-semibold">Mahalaxmi Infra</p><p className="text-xs text-[var(--text-muted)]">RERA Approved</p></div>
        </a>
        <div className="hidden gap-4 text-sm md:flex">{navLinks.map((l) => <a key={l.href} href={l.href} className="hover:text-[var(--green)]">{l.label}</a>)}</div>
        <a href="#contact" className="hidden rounded-full bg-[var(--green)] px-4 py-2 text-xs font-semibold text-white md:block">Get Started</a>
        <button className="rounded-xl border border-[var(--green-border)] p-2 md:hidden" onClick={() => setOpen((p) => !p)}>{open ? <X size={16} /> : <Menu size={16} />}</button>
      </nav>
      {open && <div className="grid gap-2 border-t border-[var(--green-border)] bg-white px-4 py-3 md:hidden">{navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}</div>}
    </header>
  )
}
