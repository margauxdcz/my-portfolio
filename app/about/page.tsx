"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  const cards = [
    {
      title: "Education",
      icon: "🎓",
      preview: "BS Management Information Systems, Ateneo de Manila University (2027)",
      previewImg: "/IMG_7021.jpeg", // small preview image for the card
      description: (
        <>
          <strong>BS Management Information Systems with a specialization in Enterprise Systems (2027)</strong>
          <br />
          Studying at Ateneo has been a balancing act between curiosity, challenges, and figuring out how to make the most of my time. Through extracurriculars like varsity Taekwondo, the Guidon, Ateneo Blue Repertory, and the Management Information Systems Association, I’ve pushed my limits and discovered the areas I enjoy most. Currently specializing in enterprise systems, I’m diving into full-stack development to expand my technical toolkit and explore how technology can solve complex business problems.
          <br />
        </>
      ),
      images: ["/edu1.jpg", "/edu2.jpg", "/edu3.jpg"], // stacked images
    },
    {
      title: "Hobbies",
      icon: "🎨",
      preview: "Speedcubing, Bouldering, Swimming, Playing Games",
      previewImg: "/hobbies_preview.jpg",
      description: (
        <>
          <strong>Favorite Hobbies</strong>
          <br />
          I enjoy reading, painting, and hiking during weekends. I also like exploring tech projects and coding challenges whenever I have time.
          <br />
        </>
      ),
      images: ["/hobby1.jpg", "/hobby2.jpg", "/hobby3.jpg"],
    },
    {
      title: "Extracurriculars",
      icon: "🏆",
      preview: "Taekwondo Varsity, The Guidon, Ateneo Blue Repertory, Management Information Systems Association",
      previewImg: "/poomsae.jpeg",
      description: (
        <>
          <strong>Extracurricular Involvements</strong>
          <br />
          Active member of the school's debate club, coding club, and volunteer organization. These experiences have helped me develop leadership, teamwork, and organizational skills while making meaningful contributions to the community.
          <br />
        </>
      ),
      images: ["/extra1.jpg", "/extra2.jpg", "/extra3.jpg"],
    },
    {
      title: "Skills",
      icon: "💻",
      preview: "Problem-Solving, Systems Thinking, Project Management, Web Development",
      previewImg: "/skills_preview.jpg",
      description: (
        <>
          <strong>Technical Skills</strong>
          <br />
          Python, HTML, CSS, MySQL, Android Studio, Java need to fix this
          <br />
          <strong>Soft Skills</strong>
          <br />
          Problem-solving, systems thinking, project management, communication, teamwork
        </>
      ),
      images: ["/skill1.jpg", "/skill2.jpg", "/skill3.jpg"],
    },
  ];

  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <main className="bg-white text-gray-900 min-h-screen relative">
      <Navbar />

      {/* Page Heading */}
      <div className="px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Click a card to see more details about each section.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-8 pb-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => setActiveCard(card.title)}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col items-center"
          >
            {/* Icon + Title */}
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span>{card.icon}</span> {card.title}
            </h2>

            {/* Preview Image */}
            {card.previewImg && (
              <div className="w-full h-32 relative mb-2">
                <Image src={card.previewImg} alt={card.title} fill className="object-cover rounded-lg" />
              </div>
            )}

            {/* Preview Text */}
            <p className="text-gray-600 text-center">{card.preview}</p>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeCard && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          onClick={() => setActiveCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl p-8 transform scale-90 opacity-0 animate-openModal relative transition-all duration-300 flex flex-col md:flex-row gap-6"
          >
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Full Card Content */}
            {cards
              .filter((card) => card.title === activeCard)
              .map((card) => (
                <div key={card.title} className="flex-1 flex flex-col md:flex-row gap-6">
                  {/* Description */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                      <span>{card.icon}</span> {card.title}
                    </h2>
                    <div className="text-gray-700 text-lg">{card.description}</div>
                  </div>

                  {/* Stacked Images */}
                  <div className="flex flex-col gap-2 flex-shrink-0 w-40">
                    {card.images.map((img, idx) => (
                      <div key={idx} className="w-full h-24 relative">
                        <Image src={img} alt={`${card.title} ${idx + 1}`} fill className="object-cover rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes openModal {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-openModal {
          animation: openModal 0.3s ease-out forwards;
        }
      `}</style>
    </main>
  );
}