"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function HelpBannerSection() {
  const bannerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".help-reveal", {
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 85%",
          },
          autoAlpha: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      });
    },
    { scope: bannerRef }
  );

  return (
    <section
      ref={bannerRef}
      id="help-banner"
      className="relative isolate bg-[#fbfaf7] py-16 sm:py-20 px-6 lg:px-8 text-navy-950 overflow-hidden border-t border-b border-gold-400/30"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,102,0.18)_0%,transparent_70%)]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row sm:items-center">
        {/* Left Side: Title & Description */}
        <div className="help-reveal max-w-xl text-center sm:text-left">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            We can help
          </h2>
          <p className="mt-3 text-base sm:text-lg text-navy-800/80">
            Contact us today to find out more about how we can help you.
          </p>
        </div>

        {/* Right Side: Primary CTA Button */}
        <div className="help-reveal shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-[0_4px_25px_rgba(212,175,102,0.35)] transition-all hover:scale-105 hover:shadow-[0_6px_30px_rgba(212,175,102,0.5)]"
          >
            Get in touch
            <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
