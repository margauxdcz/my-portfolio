"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-32 gap-16">
        {/* Left column: Text */}
        <div className="flex flex-col items-start flex-1">
          <h1 className="text-4xcd C:\Users\User\Documents\MSYS30\my-portfoliol md:text-5xl font-normal font-bitter text-black leading-snug">
            Hi, <br />
            I'm <span className="font-bold">Margaux</span>
          </h1>

          {/* Line separator */}
          <div className="w-48 h-1 bg-black mt-4 mb-6" />

          {/* Description */}
          <p className="text-lg text-gray-700">
            I’m a third-year Management Information Systems student at Ateneo de Manila University passionate about turning complex problems into efficient, scalable solutions. I enjoy optimizing processes and designing systems that connect business strategy with technology, and I’m currently diving into full-stack development to expand my technical toolkit. Driven by curiosity and a competitive spirit, I thrive on challenges that create real impact.          </p>


          <div className="flex items-center gap-4 mt-6">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/margarita-simone-dela-cruz-3683b1215/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 text-black bg-white rounded-md hover:bg-black hover:text-white transition-colors"
            >
            {/* LinkedIn icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.538C0 23.226.79 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.732V1.73C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.432c-1.136 0-2.058-.92-2.058-2.057 0-1.136.922-2.057 2.058-2.057 1.136 0 2.057.92 2.057 2.057 0 1.137-.922 2.057-2.057 2.057zm15.11 13.02h-3.555v-5.85c0-1.393-.025-3.184-1.942-3.184-1.943 0-2.24 1.518-2.24 3.086v5.948h-3.555V9h3.414v1.561h.05c.476-.901 1.637-1.85 3.372-1.85 3.604 0 4.27 2.373 4.27 5.458v6.283z"/>
              </svg>
            </a>

            {/* Resume Button */}
            <a
              href="/DELA CRUZ_Resume.docx (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-white hover:text-black border border-black transition-colors"
            >
              Resume
            </a>
          </div>

        </div>

        {/* Right column: Photo */}
        <div className="flex-1 flex justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/DSC_0145.jpg" // replace with your image
              alt="Margaux Photo"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}