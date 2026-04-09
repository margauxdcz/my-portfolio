"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  const experiences = [
    {
      title: "Ateneo Taekwondo Varsity Team",
      date: "July 2023 – Present",
      bullets: [
        "Manage a demanding academic and athletic schedule, training daily from 5:30–7:30 AM, building discipline, resilience, and highly effective time management.",
        "Mentor grade-school athletes, developing their skills while enhancing leadership, communication, and coaching abilities.",
        "Represent Ateneo in national competitions, demonstrating teamwork, strategic thinking, and a competitive spirit that drives continuous improvement and success."
      ],
      image: "/kyorugiTeam.JPG",
    },
    {
      title: "The GUIDON Sports Staffer",
      date: "July 2025 – Present",
      bullets: [
        "Write engaging and accurate articles on Ateneo varsity sports teams under tight deadlines, demonstrating strong observation and storytelling skills.",
        "Collaborate with editors and fellow staffers to produce high-quality, timely content for a wide readership.",
        "Balance academic and athletic responsibilities while covering games onsite and online, showing adaptability and excellent multitasking skills."
      ],
      image: "/guidon.JPEG",
    },
    {
      title: "Ateneo Blue Repertory",
      date: "September 2025 – Present",
      bullets: [
        "Developed and maintained Google Sheets trackers for finance, attendance, and ticket sales, improving team efficiency.",
        "Supported front-of-house operations during performances, ensuring seamless audience experiences.",
        "Automated ticketing communications using mail merge for confirmations and reminders, enhancing attendee engagement."
      ],
      image: "/brep.jpg",
    },
    {
      title: "The Blackbelt Sorority",
      date: "November 2023 – November 2025",
      bullets: [
        "Successfully balanced intensive late-night training sessions with academic commitments, demonstrating exceptional discipline, resilience, and time management under demanding schedules.",
        "Led and coordinated competition logistics, ensuring seamless ingress and egress of athletes and smooth execution of high-stakes events.",
        "Served as secretariat and court official for Philippine Taekwondo Association promotion tests, managing critical administrative and operational responsibilities to guarantee precise, professional, and orderly event execution."
      ],
      image: "/blackbelt.jpg",
    },
    {
      title: "Management Information Systems Association (MISA) – Finance Officer",
      date: "October 2024 – May 2025",
      bullets: [
        "Managed budgeting for merchandise initiatives, preparing best, feasible, and worst-case financial scenarios.",
        "Coordinated with multiple suppliers to secure cost-effective, high-quality procurement.",
        "Oversaw merchandise distribution for Wave 2, ensuring timely delivery and accurate allocation."
      ],
      image: "/misalogo.png",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#f8f6f2] text-[#1f1f1c] overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 gap-10 sm:gap-12 md:gap-16">
        {/* Left column: Text */}
        <div className="flex flex-col items-start flex-1 text-left w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-bitter leading-snug">
            Hi, <br />
            I'm <span className="font-bold text-[#9c7c6c]">Margaux</span>
          </h1>

          <div className="w-28 sm:w-36 md:w-48 h-1 bg-[#d8d2c7] mt-4 mb-5 sm:mb-6 rounded-full" />

          <p className="text-sm sm:text-base md:text-lg text-[#5f5a52] leading-relaxed max-w-2xl">
            I’m a third-year Management Information Systems student at Ateneo de Manila University passionate about turning complex problems into efficient, scalable solutions. I enjoy optimizing processes and designing systems that connect business strategy with technology, and I’m currently diving into full-stack development to expand my technical toolkit. Driven by curiosity and a competitive spirit, I thrive on challenges that create real impact.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="https://www.linkedin.com/in/margarita-simone-dela-cruz-3683b1215/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 text-[#f8f6f2] bg-[#9c7c6c] rounded-lg shadow-md hover:bg-[#b1927d] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.538C0 23.226.79 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.732V1.73C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.432c-1.136 0-2.058-.92-2.058-2.057 0-1.136.922-2.057 2.058-2.057 1.136 0 2.057.92 2.057 2.057 0 1.137-.922 2.057-2.057 2.057zm15.11 13.02h-3.555v-5.85c0-1.393-.025-3.184-1.942-3.184-1.943 0-2.24 1.518-2.24 3.086v5.948h-3.555V9h3.414v1.561h.05c.476-.901 1.637-1.85 3.372-1.85 3.604 0 4.27 2.373 4.27 5.458v6.283z" />
              </svg>
            </a>

            <a
              href="/DELA CRUZ_Resume.docx (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#9c7c6c] text-[#f8f6f2] text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-[#b1927d] transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right column: Photo */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/DSC_0145.jpg"
              alt="Margaux Photo"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 py-16">
        <h2 className="text-3xl font-bold mb-10 text-[#1f1f1c]">Experience</h2>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              {exp.image && (
                <div className="flex-shrink-0 w-full md:w-48 lg:w-56 h-48 md:h-48 lg:h-56 relative">
                  <Image
                    src={exp.image}
                    alt={exp.title + " image"}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}
              <div className="flex-1 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-xl md:text-2xl font-semibold text-[#9c7c6c]">
                  {exp.title}
                </h3>
                <p className="text-sm md:text-base text-[#5f5a52] mb-3">
                  {exp.date}
                </p>
                <ul className="list-disc list-inside text-sm md:text-base text-[#1f1f1c] space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}