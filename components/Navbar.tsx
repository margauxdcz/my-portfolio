"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-black flex justify-between items-center px-8 py-4">
      {/* Left: Name as a link to the home page */}
      <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
        Margarita Dela Cruz
      </Link>

      {/* Right: Buttons */}
      <div className="flex gap-6 text-lg font-semibold">
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link href="/projects" className="hover:text-gray-300 transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}