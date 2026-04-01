"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  const cards = [
    {
      title: "Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, urna eu tincidunt consectetur, nisi nisl aliquet nunc, sit amet laoreet sem nisi eu augue. Completed high school at XYZ Academy and currently pursuing a degree at ABC University.",
    },
    {
      title: "Hobbies",
      description:
        "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Enjoy reading, painting, and hiking during weekends. Also interested in tech and coding challenges.",
    },
    {
      title: "Extracurriculars",
      description:
        "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Active member of the school's debate club, coding club, and volunteer organization.",
    },
    {
      title: "Skills",
      description:
        "Mauris massa. Vestibulum lacinia arcu eget nulla. Skilled in problem-solving, systems thinking, project management, and basic web development. Familiar with JavaScript, React, and Python.",
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
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">
              {card.description.substring(0, 60)}...
            </p>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeCard && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }} // subtle dim
          onClick={() => setActiveCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal
            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-8 transform scale-90 opacity-0 animate-openModal relative transition-all duration-300"
          >
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Card Content */}
            {cards
              .filter((card) => card.title === activeCard)
              .map((card) => (
                <div key={card.title}>
                  <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                  <p className="text-gray-700 text-lg">{card.description}</p>
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