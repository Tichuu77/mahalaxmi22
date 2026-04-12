"use client"

const projects = [
  { title: "Mahalaxmi Nagar-31", image: "/ongoingProject8.webp", location: "MOUZA - BESA", description: "Ready to move residential layout on Besa-Pipla Road, opposite Zudio & Croma. Prime location with up to 90% bank finance.", status: "ongoing" },
  { title: "Mahalaxmi Nagar-39", image: "/ongoingProject5.webp", location: "MOUZA - FETRI", description: "New project on Katol Road, Fetri (Chicholi), touching Outer Ring Road. Fully developed NMRDA & RL sanctioned.", status: "ongoing" },
  { title: "Mahalaxmi Nagar-41", image: "/ongoingProject3.webp", location: "MOUZA - GOMGAON", description: "Premium layout near Samruddhi Mahamarg with clubhouse & swimming pool. NMRDA + RL approved. Up to 90% finance.", status: "ongoing" },
  { title: "Mahalaxmi Nagar - 42", image: "/ongoingProject2.webp", location: "MOUZA - JAMTHA", description: "Well-connected plots near Jamtha, Wardha Road. NMRDA & RL sanctioned with excellent amenities.", status: "ongoing" },
  { title: "Mahalaxmi Nagar - 43", image: "/project_43.jpg", location: "MOUZA - SHANKARPUR", description: "Ready-to-move plots behind Royal Gondwana School, Shankarpur. Fully developed with 90% finance.", status: "ongoing" },
  { title: "Mahalaxmi Nagar - 44", image: "/M-44.jpg", location: "MOUZA - TARODI", description: "NIT / NMRDA sanctioned with RL. Bank finance available 75% to 80% from nationalized banks.", status: "ongoing" },
  { title: "Mahalaxmi Nagar - 37", image: "/completedProject1.webp", location: "MOUZA - KOTEWADA", description: "NMRDA & RL sanctioned layout in Kotewada. 75-80% bank loan approved.", status: "completed" },
  { title: "Mahalaxmi Nagar - 48", image: "/plotDef.avif", location: "", description: "Upcoming premium plotted development.", status: "upcoming" },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[var(--green)] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 text-white">
          <h2 className="text-3xl md:text-5xl">Our Landmark Projects</h2>
          <p className="text-sm text-white/70">Completed · Ongoing · Upcoming</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {projects.map((item) => (
            <article key={item.title} className="min-w-[290px] max-w-[320px] rounded-3xl bg-white p-3">
              <img src={item.image} alt={`${item.title} ${item.location}`} loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
              <div className="mt-3 flex items-center justify-between gap-2">
                <h3 className="font-semibold text-[var(--text-dark)]">{item.title}</h3>
                <span className="rounded-full bg-[var(--gold-light)] px-2 py-1 text-xs font-semibold text-[var(--gold)]">{item.status}</span>
              </div>
              {item.location && <p className="mt-1 text-xs text-[var(--text-muted)]">{item.location}</p>}
              <p className="mt-2 text-sm text-[var(--text-mid)]">{item.description}</p>
              <a href={`https://wa.me/919326709970?text=${encodeURIComponent(`Hi, I'm interested in ${item.title}.`)}`} target="_blank" className="mt-3 inline-block rounded-full bg-[var(--green)] px-4 py-2 text-xs font-semibold text-white">Enquire Now</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
