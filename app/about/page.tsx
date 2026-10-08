"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Header Entrance Animation
        gsap.from(".about-hero-elem", {
          y: 30,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        });

        // 2. Section ScrollTriggers - Text glide & image float
        const sections = gsap.utils.toArray<HTMLElement>(".about-anim-section");
        sections.forEach((sec) => {
          const textCols = sec.querySelectorAll(".about-text-col");
          const imgCols = sec.querySelectorAll(".about-img-col");

          if (textCols.length > 0) {
            gsap.from(textCols, {
              scrollTrigger: {
                trigger: sec,
                start: "top 82%",
              },
              y: 40,
              autoAlpha: 0,
              duration: 0.9,
              ease: "power3.out",
            });
          }

          if (imgCols.length > 0) {
            gsap.from(imgCols, {
              scrollTrigger: {
                trigger: sec,
                start: "top 82%",
              },
              scale: 0.94,
              autoAlpha: 0,
              duration: 1.0,
              ease: "power3.out",
            });
          }
        });

        // 3. Stat Band entrance animation
        gsap.from(".stat-band-elem", {
          scrollTrigger: {
            trigger: ".stat-band",
            start: "top 85%",
          },
          y: 35,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        // 4. Philosophy Quote Block Zoom & Glow
        gsap.from(".quote-card", {
          scrollTrigger: {
            trigger: ".quote-card",
            start: "top 85%",
          },
          scale: 0.92,
          autoAlpha: 0,
          duration: 0.9,
          ease: "back.out(1.4)",
        });

        // 5. Company Details Grid Stagger
        gsap.from(".company-spec-card", {
          scrollTrigger: {
            trigger: ".company-spec-grid",
            start: "top 85%",
          },
          y: 30,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        });

        // 6. Contact Form Section
        gsap.from(".about-contact-wrap", {
          scrollTrigger: {
            trigger: ".about-contact-wrap",
            start: "top 85%",
          },
          y: 40,
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
        {/* =========================================================================
            1. HEADER BREADCRUMB BANNER
        ========================================================================= */}
        <section className="relative px-6 lg:px-8 py-12 sm:py-16 border-b border-gold-400/25 bg-gradient-to-b from-white via-[#fbfaf7] to-[#f8f6f0]">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[320px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(212,175,102,0.18)_0%,transparent_70%)]" />

          <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="about-hero-elem inline-flex items-center gap-2 rounded-full border border-gold-500/35 bg-white/95 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700 shadow-sm mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                <span>Our Firm</span>
              </div>
              <h1 className="about-hero-elem font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Us</span>
              </h1>
            </div>

            <div className="about-hero-elem flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/60 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-400">&rsaquo;</span>
              <span className="text-gold-600 font-bold">About</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. HERO INTRO SECTION: SPLIT 2-COLUMN (Who We Are)
        ========================================================================= */}
        <section className="about-anim-section px-6 lg:px-8 py-16 sm:py-24 bg-[#fbfaf7] border-b border-gold-400/20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading + Tagline */}
            <div className="about-text-col lg:col-span-5 space-y-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 bg-gold-50/70 border border-gold-400/30 rounded-full px-3 py-1">
                Who We Are
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 leading-[1.15]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-[#b8903c]">Audit Network Limited</span>
              </h2>
              <div className="h-0.5 w-14 bg-gradient-to-r from-gold-500 to-gold-300 my-4" />
              <p className="font-display text-xl sm:text-2xl font-normal text-navy-900/85 leading-snug">
                An independent UK firm of Chartered Certified Accountants, registered auditors and taxation specialists.
              </p>
            </div>

            {/* Right Column: Narrative paragraphs & client statement card */}
            <div className="about-text-col lg:col-span-7 space-y-6 text-base sm:text-lg text-navy-900/85 leading-relaxed font-normal">
              <p>
                Audit Network Limited is an independent UK firm of Chartered Certified Accountants, registered auditors and taxation specialists. Since our incorporation in 2009, we have earned a reputation for professional integrity, technical excellence and trusted advice.
              </p>
              <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-white via-[#fcfbfa] to-white p-6 sm:p-7 text-navy-950 font-medium shadow-md border border-gold-400/25">
                We are a forward-thinking accountancy practice with our clients&apos; vision at the centre of everything we do.
              </div>
              <p>
                As an independent UK firm with international reach, we support clients with both national and cross-border requirements. Through our membership of The International Accounting Group, part of TAG Alliances, we provide access to global accounting expertise and legal support across multiple jurisdictions.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHAT WE DO: SPLIT SECTION WITH IMAGE
        ========================================================================= */}
        <section className="about-anim-section px-6 lg:px-8 py-16 sm:py-24 bg-white border-b border-gold-400/20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo Wrap */}
            <div className="about-img-col lg:col-span-6">
              <div className="relative group overflow-hidden rounded-3xl border border-gold-400/35 bg-[#fbfaf7] p-2.5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-gold-500/50">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/about/what-we-do.jpg"
                    alt="Audit Network Limited What We Do"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/15 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="about-text-col lg:col-span-6 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 bg-gold-50/70 border border-gold-400/30 rounded-full px-3 py-1">
                Our Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 leading-[1.2]">
                What We Do
              </h2>
              <div className="h-0.5 w-14 bg-gradient-to-r from-gold-500 to-gold-300" />
              <p className="text-base sm:text-lg text-navy-900/85 leading-relaxed">
                We provide a comprehensive and fully integrated range of services to businesses of every scale — from ambitious growing enterprises to established larger organisations with complex, multi-faceted requirements.
              </p>
              <p className="text-base sm:text-lg text-navy-900/85 leading-relaxed">
                Our core service offering encompasses accounts and bookkeeping, audit and assurance, tax services, advisory services, and outsourced financial services. Whether supporting day-to-day compliance or advising on strategic growth, our teams deliver advice that is clear, considered and built for the future.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. OUR APPROACH: SPLIT SECTION
        ========================================================================= */}
        <section className="about-anim-section px-6 lg:px-8 py-16 sm:py-24 bg-[#fbfaf7] border-b border-gold-400/20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Text */}
            <div className="about-text-col lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 bg-gold-50/70 border border-gold-400/30 rounded-full px-3 py-1">
                Partner-Led Practice
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 leading-[1.2]">
                Our Approach
              </h2>
              <div className="h-0.5 w-14 bg-gradient-to-r from-gold-500 to-gold-300" />
              <p className="text-base sm:text-lg text-navy-900/85 leading-relaxed">
                Our directors and professional staff adopt a proactive, hands-on approach to delivering expert financial and commercial guidance. We work in close partnership with our clients to support sustainable growth, strengthen financial resilience and unlock long-term value.
              </p>
              <p className="text-base sm:text-lg text-navy-900/85 leading-relaxed">
                Our director-led model ensures consistently high standards of client service, underpinned by streamlined communication and efficient decision-making. We place significant value on cultivating enduring, personal relationships with each of our clients — relationships built on trust, responsiveness and a genuine understanding of their goals.
              </p>
            </div>

            {/* Right Photo Wrap */}
            <div className="about-img-col lg:col-span-6 order-1 lg:order-2">
              <div className="relative group overflow-hidden rounded-3xl border border-gold-400/35 bg-white p-2.5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-gold-500/50">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/about/our-approach.jpg"
                    alt="Audit Network Limited Our Approach"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/15 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. OUR REACH & CREDENTIALS
        ========================================================================= */}
        <section className="about-anim-section px-6 lg:px-8 py-16 sm:py-24 bg-white border-b border-gold-400/20">
          <div className="mx-auto max-w-7xl">
            {/* Centered Header with Eyebrow and Rule */}
            <div className="about-text-col text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-600 bg-gold-50/70 border border-gold-400/30 rounded-full px-3 py-1 mb-3">
                Global Network &amp; Standards
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-navy-950 tracking-tight">
                Our Reach
              </h2>
              <div className="w-14 h-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 mx-auto mt-4" />
            </div>

            {/* Visual Card + Global Membership Feature */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
              <div className="about-img-col lg:col-span-5">
                <div className="relative group overflow-hidden rounded-3xl border border-gold-400/35 bg-[#fbfaf7] p-2.5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-gold-500/50">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/about/our-reach.jpg"
                      alt="International financial reach"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/15 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
              <div className="about-text-col lg:col-span-7 space-y-5">
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-navy-950">
                  TAG Alliances &amp; The International Accounting Group
                </h3>
                <p className="text-base sm:text-lg text-navy-900/85 leading-relaxed">
                  As an independent UK firm with international reach, we support clients with both national and cross-border requirements. Through our membership of The International Accounting Group, part of TAG Alliances, we provide access to global accounting expertise and legal support across multiple jurisdictions.
                </p>
              </div>
            </div>

            {/* Closing Band: Matches actaudit.london Headcount / Stat Band */}
            <div className="stat-band rounded-3xl border-2 border-gold-400/40 bg-gradient-to-br from-white via-[#fcfbfa] to-[#f6f2e8] p-8 sm:p-12 lg:p-14 text-navy-950 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="stat-band-elem text-center md:text-left flex-shrink-0">
                <span className="font-hero text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#caa552] block leading-none">
                  2009
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-navy-900 block mt-3">
                  Year of Incorporation
                </span>
              </div>
              <div className="stat-band-elem hidden md:block w-px h-20 bg-gold-400/50" />
              <div className="stat-band-elem max-w-xl text-center md:text-left">
                <p className="font-display text-xl sm:text-2xl text-navy-950 font-semibold mb-2">
                  Independent UK Chartered Certified Accountants &amp; Registered Auditors
                </p>
                <p className="text-sm sm:text-base text-navy-900/80 leading-relaxed">
                  Cultivating enduring, personal relationships built on trust, responsiveness and a genuine understanding of client goals across the UK and overseas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. OUR PHILOSOPHY & COMPANY DETAILS
        ========================================================================= */}
        <section className="about-anim-section px-6 lg:px-8 py-16 sm:py-24 bg-[#fbfaf7] border-b border-gold-400/20">
          <div className="mx-auto max-w-7xl">
            {/* Philosophy Header */}
            <div className="about-text-col text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-600 bg-gold-50/70 border border-gold-400/30 rounded-full px-3 py-1 mb-3">
                Core Values
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-navy-950 tracking-tight">
                Our Philosophy
              </h2>
              <div className="w-14 h-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 mx-auto mt-4 mb-6" />
              <p className="text-base sm:text-lg text-navy-800/80">
                At Audit Network Limited, everything we do is rooted in a straightforward principle:
              </p>
            </div>

            {/* Standout Quote Card */}
            <div className="quote-card max-w-4xl mx-auto rounded-3xl border-2 border-gold-400/40 bg-gradient-to-br from-white via-[#fdfcf9] to-[#f8f5ec] p-8 sm:p-14 text-center shadow-xl mb-16">
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-navy-950 italic leading-snug">
                &ldquo;<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Quality advice,</span> lasting relationships.&rdquo;
              </p>
            </div>

            {/* Company Details 4-Card Grid */}
            <div className="company-spec-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="company-spec-card group rounded-2xl border border-gold-400/35 bg-white p-6 shadow-sm hover:shadow-md hover:border-gold-500/60 transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-800/60 mb-2">
                  Company Number
                </p>
                <p className="text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                  06858174
                </p>
              </div>

              <div className="company-spec-card group rounded-2xl border border-gold-400/35 bg-white p-6 shadow-sm hover:shadow-md hover:border-gold-500/60 transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-800/60 mb-2">
                  Incorporated
                </p>
                <p className="text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                  2009
                </p>
              </div>

              <div className="company-spec-card group rounded-2xl border border-gold-400/35 bg-white p-6 shadow-sm hover:shadow-md hover:border-gold-500/60 transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-800/60 mb-2">
                  Nature of Business
                </p>
                <p className="text-base font-bold text-navy-950 leading-snug group-hover:text-gold-600 transition-colors">
                  Accounting &amp; auditing activities
                </p>
              </div>

              <div className="company-spec-card group rounded-2xl border border-gold-400/35 bg-white p-6 shadow-sm hover:shadow-md hover:border-gold-500/60 transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-800/60 mb-2">
                  Registered in
                </p>
                <p className="text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. CALL TO ACTION / CONTACT SECTION
        ========================================================================= */}
        <section className="about-contact-wrap px-6 lg:px-8 py-16 sm:py-24 bg-white">
          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-600 bg-gold-50/70 border border-gold-400/30 rounded-full px-3 py-1 mb-3">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-navy-950 tracking-tight">
                Connect With Our Team
              </h2>
              <div className="w-14 h-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 mx-auto mt-4" />
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
