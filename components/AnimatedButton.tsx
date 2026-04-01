"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function AnimatedButton({ href, children }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}       // subtle grow on hover
      whileTap={{ scale: 0.95 }}         // slight shrink on click
      className="inline-block"
    >
      <Link
        href={href}
        className="text-2xl font-bold text-black hover:text-gray-700"
      >
        {children}
      </Link>
    </motion.div>
  );
}