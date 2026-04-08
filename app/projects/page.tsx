"use client";

import Navbar from "@/components/Navbar";
import { Folder } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />

      {/* Header */}
      <div className="text-center px-6 md:px-16 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          This section is a work in progress. I’m currently building and organizing my projects. 
          Check back soon for updates and showcases of my latest work!
        </p>
      </div>

      {/* WIP placeholder */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 flex flex-col items-center justify-center gap-8 py-16">
        <div className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-dashed border-gray-300 w-full text-center bg-white shadow-md animate-pulse">
          <Folder className="w-12 h-12 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">
            Work in Progress
          </h2>
          <p className="text-gray-500 max-w-md">
            I’m currently preparing my projects page. 
            Soon, you’ll be able to see my portfolio, code samples, and technical showcases here.
          </p>
        </div>

        <div className="text-gray-400 italic">
          Trust the process :D
        </div>
      </div>
    </main>
  );
}