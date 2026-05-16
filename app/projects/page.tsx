"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const projects = [
  {
    title: "MetroAllstar Inventory System",
    context: "Business Applications Development · Ateneo de Manila University",
    type: "Systems Design · Process Improvement · Full-Stack Development",
    image: null, // replace with "/metroallstar.png" when ready
    summary:
      "Diagnosed a warehouse operations breakdown and designed a system from scratch, turning fragmented, error-prone manual processes into a centralized, auditable workflow.",
    sections: [
      {
        number: "01",
        label: "The Situation",
        content:
          "MetroAllstar's warehouse team was managing inventory, requisitions, and dispatch entirely through manual records. There was no single source of truth as data lived across spreadsheets and paper trails, making it easy for errors to go undetected and hard for anyone to get a clear picture of stock status at any given moment.",
      },
      {
        number: "02",
        label: "My Approach",
        content:
          "Without a predefined brief, I started by mapping existing workflows, identifying where information was getting lost or duplicated, and defining what the system actually needed to do before writing a single line of code. The goal was to build something people would actually use, not just something technically functional.",
      },
      {
        number: "03",
        label: "What I Built",
        content: null,
        bullets: [
          {
            lead: "Unified operations end-to-end.",
            detail:
              "Centralized requisitions, dispatch, arrivals, and inventory tracking into one system, eliminating the need for cross-referencing multiple records.",
          },
          {
            lead: "Built-in safeguards against human error.",
            detail:
              "Role-based access control ensured the right people could only touch what they were responsible for, reducing data integrity risk across the board.",
          },
          {
            lead: "Real-time visibility where there was none.",
            detail:
              "Minimum stock alerts and a requisition progress tracker gave the team live operational awareness, something manual bookkeeping simply couldn't provide.",
          },
          {
            lead: "Automated the tedious.",
            detail:
              "Bill-of-materials calculations that previously required manual computation were fully automated, dynamically adjusting supply quantities per product.",
          },
        ],
      },
      {
        number: "04",
        label: "What This Shows",
        content:
          "More than just building a software solution, I diagnosed a process problem, scoped a solution without a predefined brief, and delivered a system that addressed the root causes, not just the symptoms. This is the kind of thinking I bring to any operational or analytical challenge.",
      },
    ],
    stack: ["Django", "Python", "PostgreSQL", "Requirements Gathering", "Process Mapping", "Systems Design"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1c] overflow-x-hidden">
      <Navbar />

      {/* ── Header ───────────────────────────────────────────────────── */}
      <section className="text-center px-6 sm:px-8 md:px-12 lg:px-16 pt-24 pb-14">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#b09484] mb-4 font-semibold">
          What I've worked on
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 text-[#2a211a]"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Projects
        </h1>
        <p className="text-[15px] text-[#7a6f65] max-w-md mx-auto leading-relaxed">
          Problems I've been handed, how I approached them, and what came out the other side.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d6c9be]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c4a897]" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d6c9be]" />
        </div>
      </section>

      {/* ── Project Cards ────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 pb-28 space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white border border-[#e8e2da] rounded-3xl overflow-hidden shadow-sm"
          >
            {/* Image area */}
            <div className="w-full h-56 bg-[#f0ece6] flex items-center justify-center relative overflow-hidden border-b border-[#e8e2da]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-[#c4b8ae]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  <p className="text-[11px] uppercase tracking-widest font-medium">Screenshot coming soon</p>
                </div>
              )}
            </div>

            <div className="p-7 sm:p-10">
              {/* Context + type */}
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#b09484] font-semibold mb-1">
                {project.context}
              </p>
              <p className="text-[11px] text-[#c4b0a4] mb-4">{project.type}</p>

              {/* Title */}
              <h2
                className="text-2xl sm:text-[28px] font-bold text-[#2a211a] mb-4 leading-snug"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {project.title}
              </h2>

              {/* Summary callout */}
              <div className="bg-[#faf7f4] border border-[#ede7e0] rounded-2xl px-5 py-4 mb-8">
                <p className="text-[14px] text-[#5f5a52] leading-relaxed italic">
                  {project.summary}
                </p>
              </div>

              {/* Case study sections */}
              <div className="space-y-7">
                {project.sections.map((section) => (
                  <div key={section.number} className="flex gap-5">
                    {/* Number */}
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-7 h-7 rounded-full bg-[#f0ece6] flex items-center justify-center">
                        <span className="text-[10px] font-bold text-[#a08070]">{section.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-7 border-b border-[#f5f1ed] last:border-0 last:pb-0">
                      <p className="text-[11px] uppercase tracking-widest font-semibold text-[#b09484] mb-2">
                        {section.label}
                      </p>

                      {section.content && (
                        <p className="text-[14px] text-[#5f5a52] leading-relaxed">
                          {section.content}
                        </p>
                      )}

                      {section.bullets && (
                        <ul className="space-y-3 mt-1">
                          {section.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-2 w-1 h-1 rounded-full bg-[#c4a897] flex-shrink-0" />
                              <p className="text-[14px] text-[#5f5a52] leading-relaxed">
                                <span className="font-semibold text-[#3b3229]">{b.lead}</span>{" "}
                                {b.detail}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-8 pt-6 border-t border-[#f0ece6] flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-[#e2dbd4] bg-[#faf8f5] text-[12px] font-medium text-[#5f5a52]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* In progress placeholder */}
        <div className="bg-white border border-dashed border-[#ddd6ca] rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-3 opacity-60">
          <div className="w-8 h-8 rounded-full bg-[#f0ece6] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a08070" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <p className="text-[12px] font-bold text-[#7a6f65] uppercase tracking-widest">In Progress</p>
          <p className="text-[13px] text-[#b09484]">More projects on the way.</p>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      `}</style>
    </main>
  );
}