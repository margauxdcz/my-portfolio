"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f8f6f2] text-[#1f1f1c] flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 z-50">
      {/* Left: Name as a link to the home page */}
      <Link
        href="/"
        className="text-2xl font-bold hover:text-[#9c7c6c] transition-colors"
      >
        <span className="text-[#9c7c6c]">Margaux</span> Dela Cruz
      </Link>

      {/* Right: Nav Links */}
      <div className="flex gap-6 text-lg font-medium">
        <Link
          href="/about"
          className="relative group transition-colors hover:text-[#9c7c6c]"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#9c7c6c] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/projects"
          className="relative group transition-colors hover:text-[#9c7c6c]"
        >
          Projects
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#9c7c6c] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/contact"
          className="relative group transition-colors hover:text-[#9c7c6c]"
        >
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#9c7c6c] group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
    </nav>
  );
}