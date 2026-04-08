"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  GraduationCap,
  Palette,
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
      icon: <GraduationCap className="w-5 h-5 text-gray-700" />,
      preview: "BS Management Information Systems, Ateneo de Manila University (2027)",
      previewImg: "/IMG_7021.jpeg",
      description: (
        <>
          <strong className="block mb-3 text-gray-900">
            BS Management Information Systems with a specialization in Enterprise Systems (2027)
          </strong>
          <p className="mb-4">
            Studying at Ateneo has been a balancing act between curiosity, challenges, and figuring out how to make the most of my time. Through extracurriculars like varsity Taekwondo, The Guidon, Ateneo Blue Repertory, and the Management Information Systems Association, I’ve pushed my limits and discovered the areas I enjoy most.
          </p>
          <p>
            Currently specializing in enterprise systems, I’m diving into full-stack development to expand my technical toolkit and explore how technology can solve complex business problems.
          </p>
        </>
      ),
      images: ["/edu1.jpg", "/edu2.jpg", "/edu3.jpg"],
    },
    {
      title: "Hobbies",
      icon: <Palette className="w-5 h-5 text-gray-700" />,
      preview: "Speedcubing, Bouldering, Swimming, Playing Games",
      previewImg: "/eat.jpg",
      description: (
        <>
          <strong className="block mb-3 text-gray-900">Favorite Hobbies</strong>
          <p className="mb-4">
            Outside of academics and extracurriculars, I enjoy hobbies that challenge me both mentally and physically.
          </p>
          <p>
            Some of my favorites include speedcubing, bouldering, swimming, and playing games. These help me stay sharp, competitive, and creative while also giving me space to recharge.
          </p>
        </>
      ),
      images: ["/hobby1.jpg", "/hobby2.jpg", "/hobby3.jpg"],
    },
    {
      title: "Extracurriculars",
      icon: <Trophy className="w-5 h-5 text-gray-700" />,
      preview: "Taekwondo Varsity, The Guidon, Ateneo Blue Repertory, Management Information Systems Association",
      previewImg: "/poomsae.jpeg",
      description: (
        <>
          <strong className="block mb-3 text-gray-900">Extracurricular Involvements</strong>
          <p className="mb-4">
            My extracurriculars have played a huge role in shaping how I lead, collaborate, and challenge myself.
          </p>
          <p>
            Through Ateneo Taekwondo Varsity, The Guidon, Ateneo Blue Repertory, and the Management Information Systems Association, I’ve built discipline, communication skills, adaptability, and confidence in high-pressure environments.
          </p>
        </>
      ),
      images: ["/extra1.jpg", "/extra2.jpg", "/extra3.jpg"],
    },
    {
      title: "Skills",
      icon: <Code2 className="w-5 h-5 text-gray-700" />,
      preview: "Python, TypeScript, Django, Next.js, Systems Thinking",
      previewImg: "/IMG_2233.jpeg",
      description: (
        <div className="space-y-6">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileCode2 className="w-4 h-4 text-gray-500" />
              <strong className="text-gray-900">Languages</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "TypeScript", "HTML", "CSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers3 className="w-4 h-4 text-gray-500" />
              <strong className="text-gray-900">Frameworks & Libraries</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Django", "Next.js", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-gray-500" />
              <strong className="text-gray-900">Databases & Development Tools</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "Android Studio", "Git", "GitHub"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Strategy */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-4 h-4 text-gray-500" />
              <strong className="text-gray-900">Systems & Strategy</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Systems Thinking",
                "Process Analysis",
                "Workflow Design",
                "Requirements Analysis",
                "Project Coordination",
                "Documentation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gray-500" />
              <strong className="text-gray-900">Leadership & Communication</strong>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Team Leadership",
                "Communication",
                "Collaboration",
                "Problem-Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
      images: ["/cafe_code.JPG", "/gsports.JPG", "/frog.jpeg"],
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen relative">
      <Navbar />

      {/* Page Heading */}
      <section className="px-6 md:px-8 py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          A quick look into my background, interests, experiences, and skills.
        </p>
      </section>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-20">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <button
              key={card.title}
              onClick={() => setActiveCard(index)}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col text-left overflow-hidden"
            >
              {/* Preview Image */}
              {card.previewImg && (
                <div className="w-full h-40 relative">
                  <Image
                    src={card.previewImg}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-gray-900">
                  {card.icon}
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{card.preview}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal Floating */}
      {activeCard !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
          <div
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 shadow-2xl animate-openModal flex flex-col md:flex-row gap-8 md:gap-10"
          >
            {/* Left Side */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-5 text-gray-900">
                {cards[activeCard].icon}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{cards[activeCard].title}</h2>
              </div>
              <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                {cards[activeCard].description}
              </div>
            </div>

            {/* Right Side - Stacked Images */}
            <div className="w-full md:w-52 flex-shrink-0 flex flex-col gap-3">
              {cards[activeCard].images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full h-28 md:h-32 relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
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

            {/* Close Button */}
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-5 text-gray-400 hover:text-gray-900 text-3xl font-light"
            >
              &times;
            </button>
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