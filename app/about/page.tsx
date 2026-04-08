"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { GraduationCap, Palette, Trophy, Code2 } from "lucide-react";

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
      previewImg: "/hobbies_preview.jpg",
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
      preview:
        "Taekwondo Varsity, The Guidon, Ateneo Blue Repertory, Management Information Systems Association",
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
      preview: "Python, Django, Next.js, Tailwind, Android Studio",
      previewImg: "/skills_preview.jpg",
      description: (
        <>
          <strong className="block mb-3 text-gray-900">Technical Skills</strong>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Python",
              "Django",
              "HTML",
              "CSS",
              "MySQL",
              "Next.js",
              "Tailwind CSS",
              "Android Studio",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <strong className="block mb-3 text-gray-900">Soft Skills</strong>
          <div className="flex flex-wrap gap-2">
            {[
              "Problem-Solving",
              "Systems Thinking",
              "Project Management",
              "Communication",
              "Teamwork",
              "Leadership",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      ),
      images: ["/skill1.jpg", "/skill2.jpg", "/skill3.jpg"],
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-900 min-h-screen relative">
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
                <div className="flex items-center gap-2 mb-3">
                  {card.icon}
                  <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">{card.preview}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      {activeCard !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
          onClick={() => setActiveCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 shadow-2xl relative animate-openModal"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-5 text-gray-400 hover:text-gray-900 text-3xl font-light"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
              {/* Left Side */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  {cards[activeCard].icon}
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                    {cards[activeCard].title}
                  </h2>
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