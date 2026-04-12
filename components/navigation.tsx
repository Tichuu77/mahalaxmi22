"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Home, Info, Star, Grid3X3, HelpCircle, Mail, ChevronRight } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#amenities", label: "Amenities", icon: Star },
  { href: "#projects", label: "Projects", icon: Grid3X3 },
  { href: "#gallery", label: "Gallery", icon: Grid3X3 },
  { href: "#user-guide", label: "How It Works", icon: HelpCircle },
  { href: "#testimonials", label: "Reviews", icon: Star },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(9,18,16,0.97)] shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-[rgba(201,134,43,0.18)]"
            : "bg-[rgba(9,18,16,0.6)]"
        } backdrop-blur-xl`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-[var(--gold)] opacity-20 blur-sm" />
              <img
                src="/Malaxmi-Final-Logo-1.png"
                alt="Mahalaxmi Infra Logo"
                className="relative h-10 w-10 rounded-xl object-cover ring-1 ring-[var(--gold-border)]"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Mahalaxmi Infra</p>
              <p className="text-[9px] tracking-[0.25em] text-[var(--gold)] font-semibold">RERA APPROVED</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-white/65 transition-all duration-200 hover:bg-[var(--gold-light)] hover:text-[var(--gold)] hover:border hover:border-[var(--gold-border)]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="tel:+919326709970"
              className="flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-[var(--gold-light)] px-3 py-1.5 text-xs font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-white"
            >
              <Phone size={11} /> Call Now
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[var(--gold)] px-4 py-2 text-xs font-bold text-white shadow-[0_4px_14px_rgba(201,134,43,0.45)] transition hover:bg-[#b5741f] hover:shadow-[0_6px_20px_rgba(201,134,43,0.5)]"
            >
              Book Visit
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((p) => !p)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 md:hidden ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          background: "linear-gradient(180deg, #0d1a16 0%, #091210 100%)",
          borderRadius: "24px 24px 0 0",
          border: "1px solid rgba(201,134,43,0.18)",
          padding: "8px 0 20px",
        }}
      >
        {/* Handle bar */}
        <div className="mx-auto mb-4 mt-2 h-1 w-12 rounded-full bg-white/20" />

        <div className="px-4 pb-2">
          <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 mb-3">Navigation</p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {navLinks.map((l) => {
              const Icon = l.icon
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/8 bg-white/5 p-3 text-center transition hover:bg-[var(--gold-light)] hover:border-[var(--gold-border)]"
                >
                  <Icon size={18} className="text-[var(--gold)]" />
                  <span className="text-[9px] font-medium text-white/70 leading-tight">{l.label}</span>
                </a>
              )
            })}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+919326709970"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl border border-[var(--gold-border)] bg-[var(--gold-light)] py-3 text-sm font-bold text-[var(--gold)]"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--gold)] py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(201,134,43,0.4)]"
            >
              Book Visit <ChevronRight size={14} />
            </a>
          </div>

          <p className="mt-4 text-center text-[9px] tracking-widest text-white/20">
            MAHA RERA · NMRDA · ISO CERTIFIED
          </p>
        </div>
      </div>
    </>
  )
}
