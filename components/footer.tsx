"use client"

export function Footer() {
  return (
    <footer className="bg-[var(--green-deeper)] px-4 py-10 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Mahalaxmi Infra</p>
          <p className="mt-2 text-sm text-white/70">Nagpur&apos;s most trusted name in NMRDA sanctioned, RERA approved residential plots. Building landmarks since 2012.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
          {[
            ["#about", "About Us"], ["#amenities", "Amenities"], ["#projects", "Our Projects"], ["#gallery", "Gallery"], ["#user-guide", "How It Works"], ["#news", "News & Articles"], ["#faq", "FAQ"], ["#contact", "Contact Us"],
          ].map(([href, label]) => <a key={href} href={href} className="hover:text-white">{label}</a>)}
        </div>
        <div className="text-sm text-white/80">
          <p>+91 9326709970</p>
          <p>kuwarb38@gmail.com</p>
          <p>Flat 103/104, Laxmivihar Apartment, Wardha Road, Somalwada, Nagpur 440025</p>
          <p className="mt-2 text-xs">A50500037880 · NMRDA Approved · RERA Certified · ISO Certified</p>
        </div>
      </div>
    </footer>
  )
}
