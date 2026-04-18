"use client";

import Navbar from "@/components/Navbar";
import { Folder, ExternalLink } from "lucide-react";
import Image from "next/image";

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
          Selected Work
        </h1>
        <p className="text-base sm:text-lg text-[#5f5a52] max-w-2xl mx-auto leading-relaxed">
          A look into what I’ve been building — focused on practical systems and real-world applications.
        </p>

        <div className="mt-6 h-px w-24 bg-[#d8d2c7] mx-auto rounded-full" />
      </section>

      {/* Project */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="bg-white shadow-lg rounded-2xl border border-[#e5dfd4] p-8 sm:p-10 transition-all hover:shadow-xl">

          {/* Preview Image */}
          <a
            href="https://ateneo-room-management.vercel.app/"
            target="_blank"
            className="block mb-8 overflow-hidden rounded-xl border border-[#e5dfd4] relative group"
          >
            <Image
              src="/room-management.png"
              alt="Ateneo Room Management System Preview"
              width={1200}
              height={700}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-sm font-medium bg-white px-3 py-1 rounded-full shadow">
                View Live
              </span>
            </div>
          </a>

          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <Folder className="w-6 h-6 text-[#a8a396]" />
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Ateneo Room Management System
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#6b665e] text-sm sm:text-base leading-relaxed mb-6">
            A web-based platform that simplifies room reservations, approvals, and scheduling through a more intuitive and user-friendly interface, improving how users interact with and manage shared spaces.
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <p className="text-sm font-medium text-[#1f1f1c] mb-2">
              Key Features - Coming Soon
            </p>
            {/*<ul className="text-sm text-[#6b665e] space-y-1 list-disc list-inside">
              <li>Room reservation and scheduling system</li>
              <li>Approval workflow for administrators</li>
              <li>Interactive and user-friendly UI</li>
              <li>Centralized space management</li>
            </ul>*/}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs bg-[#f1eee8] px-3 py-1 rounded-full">Next.js</span>
            <span className="text-xs bg-[#f1eee8] px-3 py-1 rounded-full">Tailwind</span>
            <span className="text-xs bg-[#f1eee8] px-3 py-1 rounded-full">System Design</span>
          </div>

          {/* CTA */}
          <a
            href="https://ateneo-room-management.vercel.app/"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] hover:underline"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[#7a766d] italic text-sm sm:text-base text-center mt-10">
          More projects coming soon.
        </p>
      </section>
    </main>
  );
}