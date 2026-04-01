"use client";
import AnimatedButton from "./AnimatedButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-8 py-4 border-b border-gray-200">
      {/* Left: Name as a link to the home page */}
      <AnimatedButton href="/">Margarita Dela Cruz</AnimatedButton>

      {/* Right: Navigation buttons */}
      <div className="flex gap-8">
        <AnimatedButton href="/about">About</AnimatedButton>
        <AnimatedButton href="/projects">Projects</AnimatedButton>
        <AnimatedButton href="/contact">Contact</AnimatedButton>
      </div>
    </nav>
  );
}