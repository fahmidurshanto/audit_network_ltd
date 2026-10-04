"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".ab-reveal", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          autoAlpha: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate bg-[#0b1b2b]"
    >
      {/* Curved white content card with top-left rounded arc matching reference */}
      <div className="relative bg-white py-16 sm:py-24 px-6 lg:px-8 text-navy-950 overflow-hidden rounded-tl-[20vw] sm:rounded-tl-[14vw]">
        <div className="mx-auto w-full sm:w-[80%] max-w-6xl text-center">
          {/* Category Pill / Tag */}
          <div className="ab-reveal mb-4 inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-navy-900/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            About Audit Network
          </div>

          {/* Main Section Headline */}
          <h2 className="ab-reveal font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl leading-[1.2] w-full mx-auto text-red-600">
            Top UK Chartered Accountants Serving Businesses, Individuals, Families &amp; Trustees
          </h2>

          {/* Sub-heading / Tagline */}
          <p className="ab-reveal mt-4 text-lg sm:text-xl font-medium leading-relaxed text-navy-800 w-full mx-auto">
            A forward-thinking chartered accountancy firm with our clients’ vision at the heart of everything we do.
          </p>

          {/* Divider line */}
          <div className="ab-reveal my-6 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

          {/* Lead Text Paragraphs */}
          <div className="ab-reveal text-base sm:text-lg leading-relaxed text-navy-900/80 space-y-4 w-full mx-auto text-center">
            <p className="font-semibold text-navy-950 text-center">
              Incorporated in 2009, our firm has built a strong reputation for professional integrity, technical expertise and trusted advice. Our core focus is on accounting and auditing activities, and we are recognised as a leading adviser to private clients and a highly regarded financial planning practice.
            </p>

            <p className="text-center">
              As an independent UK firm with international reach, we support clients with both national and cross-border requirements. Through our membership of The International Accounting Group, part of TAG Alliances, we provide access to global accounting expertise and legal support in multiple jurisdictions.
            </p>

            <p className="text-center">
              Whether you require support with audit, compliance, tax strategy, business growth or wealth planning, our experienced team delivers advice that is clear, considered and built for the future.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="ab-reveal mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-900 bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gold-500 hover:border-gold-500 shadow-[0_4px_20px_rgba(11,27,43,0.15)] hover:scale-105"
            >
              Speak to a specialist
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link
              href="/enquiry"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-900/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-navy-900 transition hover:border-navy-900 hover:bg-navy-900/5 hover:scale-105"
            >
              Submit an enquiry
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Floating Side Tab - Fixed right tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <Link
          href="/enquiry"
          className="flex items-center gap-2 rounded-l-xl bg-gold-400 px-3.5 py-4 text-xs font-bold uppercase tracking-widest text-navy-950 shadow-xl transition-all hover:-translate-x-1 hover:bg-gold-500"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Make an Enquiry
        </Link>
      </div>
    </section>
  );
}
