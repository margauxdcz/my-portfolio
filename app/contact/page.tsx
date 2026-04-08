"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Mail, Globe, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

// Hook for fade-in on scroll
function useInView() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export default function ContactPage() {
  const contacts = [
    { type: "Email", icon: <Mail />, value: "margauxsimone31@gmail.com", href: "mailto:margauxsimone31@gmail.com", description: "Send me an email and I'll get back to you ASAP." },
    { type: "LinkedIn", icon: <FaLinkedin />, value: "linkedin.com/in/margarita-simone-dela-cruz", href: "https://www.linkedin.com/in/margarita-simone-dela-cruz-3683b1215/", description: "Connect with me professionally." },
    { type: "GitHub", icon: <FaGithub />, value: "github.com/margauxdcz", href: "https://github.com/margauxdcz", description: "Check out my projects and code samples." },
    { type: "Portfolio", icon: <Globe />, value: "yourwebsite.com", href: "#", description: "coming soon" },
    { type: "Resume", icon: <FileText />, value: "Download PDF", href: "/DELA CRUZ_Resume.docx (1).pdf", description: "My latest resume in PDF format." },
    { type: "Location", icon: <MapPin />, value: "Philippines", href: "#", description: "Currently based in the Philippines." },
  ];

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-24 px-6 md:px-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Contact Me</h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Reach out if you want to collaborate, hire me, or just say hi. I’m passionate about building solutions, learning continuously, and connecting with like-minded people.
        </p>
        <div className="mt-6 h-1 w-24 bg-gray-800 mx-auto rounded-full"></div>
      </section>

      {/* Contacts Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact, idx) => {
          const { ref, inView } = useInView();
          return (
            <Link
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={ref}
              className={`flex flex-col items-start p-6 bg-white rounded-2xl shadow-md transition-all duration-500 group transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } hover:shadow-xl hover:scale-[1.03]`}
            >
              {/* Icon */}
              <div className="bg-gray-100 p-3 rounded-full mb-4 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
                {contact.icon}
              </div>

              {/* Type and value */}
              <h2 className="font-semibold text-xl flex items-center gap-2 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                {contact.type}{" "}
                {contact.type !== "Location" && (
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </h2>
              <p className="text-gray-700 text-sm mb-2 break-all font-medium">{contact.value}</p>

              {/* Description */}
              <p className="text-gray-500 text-sm">{contact.description}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}