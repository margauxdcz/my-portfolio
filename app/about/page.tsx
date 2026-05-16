"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  GraduationCap,
  ActivityIcon,
  Trophy,
  Code2,
  Layers3,
  FileCode2,
  Sparkles,
  Wrench,
  Brain,
} from "lucide-react";

// ── Skill logo SVGs ──────────────────────────────────────────────────────────
// Using devicons CDN for consistency; falls back to a text badge if unavailable
const SkillLogo = ({ name }: { name: string }) => {
  const devIconMap: Record<string, string> = {
    Python: "python",
    TypeScript: "typescript",
    Java: "java",
    HTML: "html5",
    CSS: "css3",
    Django: "django",
    "Next.js": "nextjs",
    MySQL: "mysql",
    PostgreSQL: "postgresql",
    "Android Studio": "androidstudio",
    Git: "git",
    GitHub: "github",
    Vercel: "vercel",
    Figma: "figma",
  };

  const icon = devIconMap[name];
  if (!icon) return null;

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
      alt={name}
      width={22}
      height={22}
      className="object-contain flex-shrink-0"
      onError={(e) => {
        // fallback: hide broken img
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
};

// ── Card data ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const cards = [
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5 text-[#9c7c6c]" />,
      preview: "BS Management Information Systems · Ateneo de Manila University · 2027",
      previewImg: "/IMG_7021.jpeg",
      tag: "Academia",
      description: (
        <div className="space-y-4">
          <p className="text-[#3b3229] font-semibold text-lg leading-snug">
            BS Management Information Systems<br />
            <span className="font-normal text-base text-[#9c7c6c]">Specialization in Enterprise Systems · Class of 2027</span>
          </p>
          <p className="text-[#5f5a52] leading-relaxed">
            Studying MIS at Ateneo has been a journey of curiosity, problem-solving, and discovery. I've built a strong foundation in enterprise systems, business process management, and data-driven decision-making, exploring how technology can support organizational goals and surface meaningful insights.
          </p>
          <p className="text-[#5f5a52] leading-relaxed">
            Beyond the technical, my coursework has sharpened my analytical thinking, project coordination, and strategic approach to complex challenges. I'm also diving into full-stack development as a side hobby to expand the ways I can bring ideas to life.
          </p>
        </div>
      ),
    },
    {
      title: "Hobbies",
      icon: <ActivityIcon className="w-5 h-5 text-[#9c7c6c]" />,
      preview: "Speedcubing, bouldering, swimming — and everything that keeps my hands and mind busy.",
      previewImg: "/eating.JPG",
      tag: "Life",
      description: (
        <div className="space-y-4">
          <p className="text-[#3b3229] font-semibold text-lg">Favorite Hobbies</p>
          <p className="text-[#5f5a52] leading-relaxed">
            Outside academics and extracurriculars, I immerse myself in things that challenge both mind and body. Speedcubing, bouldering, and swimming push me to think creatively, act strategically, and adapt fast, sharpening focus and perseverance that carries into everything else I do.
          </p>
          <p className="text-[#5f5a52] leading-relaxed">
            I also love games and activities that spark curiosity. They're a way to unwind, try new things, stay creative, and stay active, a reminder that growth can come from exploring and simply having fun.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Speedcubing", "Bouldering", "Swimming", "Gaming", "Reading"].map((h) => (
              <span key={h} className="px-3 py-1 rounded-full border border-[#ddd6ca] bg-[#f8f6f2] text-xs font-medium text-[#5f5a52]">
                {h}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Extracurriculars",
      icon: <Trophy className="w-5 h-5 text-[#9c7c6c]" />,
      preview: "Varsity taekwondo, student journalism, theatre, and systems leadership.",
      previewImg: "/poomsae.jpeg",
      tag: "Involvement",
      description: (
        <div className="space-y-4">
          <p className="text-[#3b3229] font-semibold text-lg">Extracurricular Involvements</p>
          <p className="text-[#5f5a52] leading-relaxed">
            My extracurriculars have been instrumental in shaping how I lead, collaborate, and navigate pressure. Each org has taught me something different: discipline, creativity, adaptability, storytelling.
          </p>
          <div className="space-y-3 pt-1">
            {[
              { org: "Ateneo Taekwondo Varsity", role: "Athlete", note: "Competing at the national level, discipline through repetition." },
              { org: "The Guidon", role: "Sports Staffer", note: "Ateneo's student newspaper: storytelling and editorial thinking." },
              { org: "Ateneo Blue Repertory", role: "Sales Member", note: "University theatre org; managed sales and audience experience." },
              { org: "Management Information Systems Assoc.", role: "Finance Officer", note: "Led financial planning and budgeting for the organization's merchandise drive." },
            ].map(({ org, role, note }) => (
              <div key={org} className="border-l-2 border-[#ddd6ca] pl-4">
                <p className="text-sm font-semibold text-[#3b3229]">{org}</p>
                <p className="text-xs text-[#9c7c6c] mb-0.5">{role}</p>
                <p className="text-sm text-[#5f5a52]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      icon: <Code2 className="w-5 h-5 text-[#9c7c6c]" />,
      preview: "Languages, frameworks, tools, and the softer skills that tie them all together.",
      previewImg: "/IMG_2233.jpeg",
      tag: "Toolkit",
      description: (
        <div className="space-y-6">
          {[
            {
              name: "Languages",
              icon: FileCode2,
              items: ["Python", "TypeScript", "Java", "HTML", "CSS"],
            },
            {
              name: "Frameworks & Libraries",
              icon: Layers3,
              items: ["Django", "Next.js"],
            },
            {
              name: "Tools",
              icon: Wrench,
              items: ["MySQL", "PostgreSQL", "Android Studio", "Git", "GitHub", "Vercel", "Figma"],
            },
            {
              name: "Systems & Strategy",
              icon: Brain,
              items: [
                "Systems Thinking",
                "Process Analysis",
                "Workflow Design",
                "Requirements Analysis",
                "Project Coordination",
                "Documentation",
              ],
            },
            {
              name: "Leadership & Communication",
              icon: Sparkles,
              items: ["Team Leadership", "Communication", "Collaboration", "Problem-Solving"],
            },
          ].map((group) => (
            <div key={group.name}>
              <div className="flex items-center gap-2 mb-3">
                <group.icon className="w-4 h-4 text-[#9c7c6c]" />
                <span className="text-sm font-semibold text-[#3b3229] uppercase tracking-wider">{group.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const hasLogo = [
                    "Python","TypeScript","Java","HTML","CSS",
                    "Django","Next.js","MySQL","PostgreSQL",
                    "Android Studio","Git","GitHub","Vercel","Figma",
                  ].includes(skill);
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#ddd6ca] bg-[#f8f6f2] text-xs font-medium text-[#5f5a52] transition-colors hover:bg-white hover:border-[#c4bdb6]"
                    >
                      {hasLogo && <SkillLogo name={skill} />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1c] relative overflow-x-hidden">
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <Navbar />

      {/* ── Page Heading ─────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 pt-20 pb-12 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#9c7c6c] mb-3 font-medium">
          Get to know me
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 text-[#2a211a]"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          About Me
        </h1>
        <p className="text-base sm:text-lg text-[#6b625a] max-w-xl mx-auto leading-relaxed">
          A quick look into my background, interests, extracurriculars, and the skills I bring to the table.
        </p>
        {/* Decorative accent */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[#ddd6ca]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c4a897]" />
          <div className="h-px w-12 bg-[#ddd6ca]" />
        </div>
      </section>

      {/* ── Cards Grid ───────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-24">
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <button
              key={card.title}
              onClick={() => setActiveCard(index)}
              className="group bg-white border border-[#e4ddd6] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col overflow-hidden w-full text-left"
              style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px) rotate(-0.4deg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) rotate(0deg)";
              }}
            >
              {/* Thumbnail */}
              {card.previewImg && (
                <div className="w-full h-44 relative overflow-hidden">
                  <Image
                    src={card.previewImg}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Tag chip over image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-widest text-[#9c7c6c] border border-white/60">
                    {card.tag}
                  </span>
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2 text-[#3b3229]">
                  {card.icon}
                  <h2
                    className="text-lg font-bold"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    {card.title}
                  </h2>
                </div>
                <p className="text-sm text-[#6b625a] leading-relaxed">{card.preview}</p>

                {/* Read more indicator */}
                <div className="mt-auto pt-4 flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#9c7c6c] font-semibold">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Modal ────────────────────────────────────────────────────── */}
      {activeCard !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6 py-8"
          onClick={() => setActiveCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#fdfaf7] w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#e4ddd6] animate-openModal"
          >
            {/* Modal header stripe */}
            <div className="sticky top-0 z-10 bg-[#fdfaf7]/95 backdrop-blur-sm border-b border-[#ede7e0] px-7 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {cards[activeCard].icon}
                <h2
                  className="text-2xl font-bold text-[#2a211a] tracking-tight"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {cards[activeCard].title}
                </h2>
                <span className="ml-1 px-2.5 py-0.5 rounded-full bg-[#f0ece6] text-[10px] font-semibold uppercase tracking-widest text-[#9c7c6c]">
                  {cards[activeCard].tag}
                </span>
              </div>
              <button
                onClick={() => setActiveCard(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9c7c6c] hover:bg-[#f0ece6] hover:text-[#3b3229] transition-colors text-xl font-light"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {/* Modal body */}
            <div className="px-7 py-6">
              {cards[activeCard].description}
            </div>
          </div>
        </div>
      )}

      {/* ── Google Font import ────────────────────────────────────────── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

        @keyframes openModal {
          from { opacity: 0; transform: scale(0.97) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .animate-openModal {
          animation: openModal 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
}