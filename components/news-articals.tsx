"use client"

const newsArticles = [
  { title: "MIHAN Nagpur: Why It's Becoming the City's Most Sought-After Corridor", date: "March 2025", category: "Market Insight", summary: "With AIIMS, IT parks, and logistics hubs expanding along the MIHAN belt, plot demand has surged 35% year-on-year." },
  { title: "RERA's Impact on Plot Buying: What Every Nagpur Buyer Must Know", date: "January 2025", category: "Legal & Compliance", summary: "RERA registration protects buyers from project delays and ensures full transparency in layout documents." },
  { title: "Home Loan for Plots in 2025: Rate Trends & What Banks Offer", date: "February 2025", category: "Finance", summary: "Leading banks now offer up to 90% LTV on NMRDA-approved residential plots." },
  { title: "Green Layouts: How Mahalaxmi Infra is Integrating Sustainability", date: "December 2024", category: "Projects", summary: "Rain harvesting systems, wide green belts, and solar street lighting are now standard in new layouts." },
]

export default function NewsArticles() {
  return (
    <section id="news" className="bg-[var(--cream)] px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-3xl md:text-5xl">News & Articles</h2>
          <p className="hidden text-sm text-[var(--text-muted)] md:block">Insights from Mahalaxmi Infra</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible">
          {newsArticles.map((article) => (
            <article key={article.title} className="group min-w-[280px] rounded-2xl border border-[var(--green-border)] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold tracking-wider text-[var(--gold)]">{article.category} · {article.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--green)]">{article.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-mid)]">{article.summary}</p>
              <div className="mt-3 h-1 w-0 rounded-full bg-[var(--gold)] transition-all group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
