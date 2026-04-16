"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Mail, Globe, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  const contacts = [
    {
      type: "Email",
      icon: <Mail className="w-5 h-5" />,
      value: "margauxsimone31@gmail.com",
      href: "mailto:margauxsimone31@gmail.com",
      description: "For collaborations, opportunities, or a quick hello.",
    },
    {
      type: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      value: "https://www.linkedin.com/in/margarita-simone-dela-cruz-3683b1215/",
      href: "https://www.linkedin.com/in/margarita-simone-dela-cruz-3683b1215/",
      description: "Connect with me professionally.",
    },
    {
      type: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      value: "github.com/margauxdcz",
      href: "https://github.com/margauxdcz",
      description: "Projects, code samples, and experiments.",
    },
    {
      type: "Portfolio",
      icon: <Globe className="w-5 h-5" />,
      value: "Coming soon",
      href: "",
      description: "A full showcase of selected work is on the way.",
    },
    {
      type: "Resume",
      icon: <FileText className="w-5 h-5" />,
      value: "Download PDF",
      href: "/Updated_Resume.docx",
      description: "My most recent resume.",
    },
    {
      type: "Location",
      icon: <MapPin className="w-5 h-5" />,
      value: "Philippines",
      href: "",
      description: "Currently based here.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1c]">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-20">
        {/* Hero */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-[#7a766d] mb-4">
            Contact
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-[#1c1c18]">
            Let’s build
            <br />
            something meaningful.
          </h1>

          <p className="mt-6 text-[15px] sm:text-lg leading-relaxed text-[#5f5a52] max-w-xl">
            I’m always open to thoughtful conversations, project opportunities,
            and collaborations that create real impact.
          </p>

          <div className="mt-8 h-px w-24 bg-[#d8d2c7]" />
        </div>

        {/* Contact List */}
        <div className="mt-16 border-t border-[#ddd6ca]">
          {contacts.map((contact, idx) => {
            const isClickable = contact.href && contact.href !== "";

            const content = (
              <div className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 py-7 border-b border-[#e6dfd3] transition-all duration-300 hover:bg-white/40 hover:px-3 sm:hover:px-4 rounded-xl">
                {/* Left */}
                <div className="flex items-start gap-4 min-w-0">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9d2c6] bg-white/70 text-[#4b4943] transition-transform duration-300 group-hover:scale-105">
                    {contact.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm uppercase tracking-[0.14em] text-[#7a766d] mb-1">
                      {contact.type}
                    </p>
                    <p className="text-base sm:text-lg font-medium text-[#1f1f1c] break-all">
                      {contact.value}
                    </p>
                    <p className="mt-1 text-sm text-[#6b665e]">
                      {contact.description}
                    </p>
                  </div>
                </div>

                {/* Right arrow */}
                {isClickable && (
                  <div className="hidden sm:flex items-center text-[#8a8478] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );

            if (isClickable) {
              return (
                <Link
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div key={idx}>
                {content}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}