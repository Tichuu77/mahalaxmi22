"use client"

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

export function Footer() {
  const links = [
    ["#about", "About Us"],
    ["#amenities", "Amenities"],
    ["#projects", "Our Projects"],
    ["#gallery", "Gallery"],
    ["#user-guide", "How It Works"],
    ["#testimonials", "Reviews"],
    ["#faq", "FAQ"],
    ["#contact", "Contact Us"],
  ]

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #091210 0%, #0d1a16 100%)" }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,134,43,0.1), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/Malaxmi-Final-Logo-1.png"
                alt="Mahalaxmi Infra"
                className="h-10 w-10 rounded-xl object-cover"
                style={{ boxShadow: "0 0 0 1px rgba(201,134,43,0.3)" }}
              />
              <div>
                <p className="text-sm font-bold text-white">Mahalaxmi Infra</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">RERA Approved</p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-[1.8] text-white/50">
              Nagpur&apos;s trusted name in NMRDA sanctioned, RERA approved residential plots. Building landmarks
              since 2012.
            </p>
            <div className="space-y-2">
              <a href="tel:+919326709970" className="flex items-center gap-2 text-xs text-white/50 hover:text-[var(--gold)] transition">
                <Phone size={11} /> +91 9326709970
              </a>
              <a href="mailto:kuwarb38@gmail.com" className="flex items-center gap-2 text-xs text-white/50 hover:text-[var(--gold)] transition">
                <Mail size={11} /> kuwarb38@gmail.com
              </a>
              <div className="flex items-start gap-2 text-xs text-white/50">
                <MapPin size={11} className="mt-0.5 flex-shrink-0" />
                Flat 103/104, Laxmivihar Apartment, Wardha Road, Nagpur 440025
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Quick Links</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-3">
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-1.5 text-xs text-white/50 transition hover:text-white"
                >
                  <ArrowUpRight size={9} className="flex-shrink-0 text-[var(--gold)]" /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div
            className="relative overflow-hidden rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,134,43,0.15)",
            }}
          >
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Book a Free Visit</p>
            <p className="mb-1 text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Explore Your Dream Plot Today
            </p>
            <p className="mb-5 text-xs text-white/50 leading-relaxed">
              Site visits available 7 days a week. Our team will guide you through every option.
            </p>
            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold text-white transition hover:opacity-90"
              style={{ background: "var(--gold)", boxShadow: "0 4px 14px rgba(201,134,43,0.35)" }}
            >
              Book Your Visit
            </a>
            <div
              className="mt-4 rounded-2xl px-3 py-2 text-center text-[9px] font-semibold tracking-widest text-white/30"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              A50500037880 · NMRDA · RERA · ISO
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center md:flex-row md:text-left"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-[10px] text-white/25">© {new Date().getFullYear()} Mahalaxmi Infra. All rights reserved.</p>
          <p className="text-[10px] text-white/20">NMRDA Sanctioned · RERA Certified · Bank Approved</p>
        </div>
      </div>
    </footer>
  )
}
