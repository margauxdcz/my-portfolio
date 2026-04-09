"use client";

import { Activity, useState } from "react";
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

export default function AboutPage() {
  const cards = [
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5 text-[#9c7c6c]" />,
      preview:
        "BS Management Information Systems, Ateneo de Manila University (2027)",
      previewImg: "/IMG_7021.jpeg",
      description: (
        <>
          <strong className="block mb-3 text-[#3b3229]">
            BS Management Information Systems with a specialization in Enterprise Systems (2027)
          </strong>
          <p className="mb-4 text-[#5f5a52]">
            Studying Management Information Systems at Ateneo de Manila University has been a journey of curiosity, problem-solving, and discovery. I’ve developed a strong understanding of enterprise systems, business process management, and data-driven decision-making. Through my studies, I explore how technology can support organizational goals, streamline operations, and provide meaningful insights that drive effective strategies.         </p>
          <p className="text-[#5f5a52]">
            Beyond technical skills, my coursework has strengthened my analytical thinking, project management, and ability to approach complex challenges strategically. I’m also diving deeper into full-stack development to complement my understanding of systems and expand the ways I can bring ideas to life.          </p>
        </>
      ),
      images: ["/ateneo.jpg", "/study.jpg", "/ateneo2.jpg"],
    },
    {
      title: "Hobbies",
      icon: <ActivityIcon className="w-5 h-5 text-[#9c7c6c]" />,
      preview: "From mental puzzles to energetic hobbies, here’s what keeps me moving and thinking.s",
      previewImg: "/eating.jpg",
      description: (
        <>
          <strong className="block mb-3 text-[#3b3229]">Favorite Hobbies</strong>
          <p className="mb-4 text-[#5f5a52]">
            Outside of academics and extracurriculars, I immerse myself in hobbies that challenge both my mind and body. Activities like speedcubing, bouldering, and swimming push me to think creatively, act strategically, and adapt quickly to new situations. They sharpen my problem-solving skills, enhance my focus, and cultivate a sense of perseverance that carries over into all areas of my life.          </p>
          <p className="text-[#5f5a52]">
            I also enjoy games and activities that spark my curiosity and keep me engaged. They’re a way to unwind, try new things, and stay creative, while still keeping me active and focused. These hobbies remind me that growth can come from exploring, experimenting, and simply having fun.          </p>
        </>
      ),
      images: ["/bouldering.jpg"],
    },
    {
      title: "Extracurriculars",
      icon: <Trophy className="w-5 h-5 text-[#9c7c6c]" />,
      preview:
        "From sports to clubs, these are the arenas where I’ve honed skills beyond the classroom.s",
      previewImg: "/poomsae.jpeg",
      description: (
        <>
          <strong className="block mb-3 text-[#3b3229]">
            Extracurricular Involvements
          </strong>
          <p className="mb-4 text-[#5f5a52]">
            My extracurriculars have been instrumental in shaping how I lead, collaborate, and navigate challenges.
          </p>
          <p className="text-[#5f5a52]">
            From competing with Ateneo Taekwondo Varsity to contributing in The Guidon, performing with Ateneo Blue Repertory, and engaging with the Management Information Systems Association, I’ve developed discipline, resilience, adaptability, and strong communication skills—qualities that allow me to thrive in dynamic, high-pressure environments and continuously push my own limits.          </p>
        </>
      ),
      images: ["/guidon.JPEG", "/kyorugiTeam.jpg"],
    },
    {
      title: "Skills",
      icon: <Code2 className="w-5 h-5 text-[#9c7c6c]" />,
      preview: "From programming languages to clear communication, these are the tools I use to make things happen.",
      previewImg: "/IMG_2233.jpeg",
      description: (
        <div className="space-y-6">
          {/* Skills */}
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
              items: ["MySQL", "Android Studio", "Git", "GitHub", "Vercel", "Figma"],
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
              <div className="flex items-center gap-2 mb-3 text-[#3b3229]">
                <group.icon className="w-4 h-4 text-[#9c7c6c]" />
                <strong>{group.name}</strong>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-[#ddd6ca] bg-[#f8f6f2] text-xs sm:text-sm font-medium text-[#5f5a52]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
      images: ["/cafe_code.JPG", "/gsports.JPG", "/study.jpg"],
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1c] relative overflow-x-hidden">
      <Navbar />

      {/* Page Heading */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          About Me
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#5f5a52] max-w-2xl mx-auto leading-relaxed">
          A quick look into my background, interests, extracurricular activities, and skills.
        </p>
        <div className="mt-6 h-px w-24 bg-[#d8d2c7] mx-auto rounded-full" />
      </section>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-20">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <button
              key={card.title}
              onClick={() => setActiveCard(index)}
              className="bg-white border border-[#ddd6ca] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden w-full"
            >
              {card.previewImg && (
                <div className="w-full h-40 sm:h-44 relative">
                  <Image
                    src={card.previewImg}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-[#3b3229]">
                  {card.icon}
                  <h2 className="text-base sm:text-lg font-semibold">{card.title}</h2>
                </div>
                <p className="text-sm sm:text-base text-[#5f5a52] leading-relaxed">{card.preview}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeCard !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6 py-6"
          onClick={() => setActiveCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl animate-openModal flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10"
          >
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-3 right-4 text-[#9c7c6c] hover:text-[#3b3229] text-3xl font-light z-10"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="flex-1 min-w-0 pr-0 lg:pr-4">
              <div className="flex items-center gap-3 mb-4 text-[#3b3229]">
                {cards[activeCard].icon}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  {cards[activeCard].title}
                </h2>
              </div>
              <div className="text-[#5f5a52] text-sm sm:text-base md:text-lg leading-relaxed">
                {cards[activeCard].description}
              </div>
            </div>

            <div className="w-full lg:w-56 xl:w-64 flex-shrink-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {cards[activeCard].images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full h-28 sm:h-32 lg:h-36 relative overflow-hidden rounded-2xl border border-[#ddd6ca] shadow-sm"
                >
                  <Image
                    src={img}
                    alt={`${cards[activeCard].title} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes openModal {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-openModal {
          animation: openModal 0.25s ease-out forwards;
        }
      `}</style>
    </main>
  );
}