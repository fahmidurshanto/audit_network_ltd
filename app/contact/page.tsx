"use client";

import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-hero-elem", {
          y: 25,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });

        gsap.from(".contact-card-wrap", {
          scrollTrigger: {
            trigger: ".contact-card-wrap",
            start: "top 85%",
          },
          y: 35,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <Navbar />

      <main className="min-h-screen bg-[#fbfaf7] text-navy-950 pt-28 sm:pt-36 pb-20">
        {/* Header Breadcrumb Banner */}
        <section className="relative px-6 lg:px-8 py-10 sm:py-14 border-b border-gold-400/25 bg-gradient-to-b from-white via-[#fbfaf7] to-[#f8f6f0]">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[300px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(212,175,102,0.18)_0%,transparent_70%)]" />

          <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="contact-hero-elem inline-flex items-center gap-2 rounded-full border border-gold-500/35 bg-white/95 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700 shadow-sm mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                <span>Contact</span>
              </div>
              <h1 className="contact-hero-elem font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Touch</span>
              </h1>
            </div>

            <div className="contact-hero-elem flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/60 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-400">&rsaquo;</span>
              <span className="text-gold-600 font-bold">Contact</span>
            </div>
          </div>
        </section>

        {/* Contact Form Container */}
        <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="contact-card-wrap mx-auto w-full max-w-7xl">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
