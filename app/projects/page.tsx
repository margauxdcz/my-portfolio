"use client";

import Navbar from "@/components/Navbar";
import { Folder } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1c] overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="text-center px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24">
        <p className="text-sm uppercase tracking-[0.22em] text-[#7a766d] mb-2">
          Projects
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          My Work in Progress
        </h1>
        <p className="text-base sm:text-lg text-[#5f5a52] max-w-2xl mx-auto leading-relaxed">
          I’m currently building and organizing my projects. Soon, you’ll be able to see my portfolio, code samples, and technical showcases here. Stay tuned!
        </p>

        <div className="mt-6 h-px w-24 bg-[#d8d2c7] mx-auto rounded-full" />
      </section>

      {/* WIP placeholder */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col items-center gap-8">
        <div className="w-full bg-white shadow-lg rounded-2xl border-2 border-dashed border-[#ddd6ca] animate-pulse px-8 py-12 sm:px-12 sm:py-16 text-center transition-all hover:shadow-xl">
          <Folder className="w-12 h-12 text-[#a8a396] mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1c1c18] mb-3">
            Work in Progress
          </h2>
          <p className="text-[#6b665e] text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            I’m currently preparing my projects page. Soon, you’ll be able to explore my portfolio, code samples, and technical showcases in a clean, organized way.
          </p>
        </div>

        <p className="text-[#7a766d] italic text-sm sm:text-base text-center">
          Trust the process :D
        </p>
      </section>
    </main>
  );
}