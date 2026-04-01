"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black px-8">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-32 gap-16">
        {/* Left column: Text */}
        <div className="flex flex-col items-start flex-1">
          <h1 className="text-4xl md:text-5xl font-normal font-bitter text-black leading-snug">
            Hi, <br />
            I'm <span className="font-bold">Margaux</span>
          </h1>

          {/* Line separator */}
          <div className="w-48 h-1 bg-black mt-4 mb-6" />

          {/* Description */}
          <p className="text-lg text-gray-700">
            I’m a third-year Management Information Systems student at Ateneo de Manila University with a strong interest in process optimization, systems thinking, and full-stack development. I enjoy building structured, scalable solutions that bridge business strategy and technology.
          </p>
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