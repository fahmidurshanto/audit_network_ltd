"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Intro animation
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.fromTo(
          ".h-line",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, stagger: 0.12 }
        )
          .fromTo(
            ".h-sub",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.6"
          )
          .fromTo(
            ".h-shape",
            { autoAlpha: 0, scale: 0.6 },
            { autoAlpha: 1, scale: 1, duration: 1.4, stagger: 0.15, ease: "expo.out" },
            0.2
          );

        // Idle floating / rotation
        gsap.to(".h-sphere", {
          y: "+=24",
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".h-cone", {
          y: "-=28",
          rotation: "+=10",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".h-streak", {
          xPercent: 6,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Mouse parallax on 3D elements
        const root = heroRef.current;
        if (!root) return;
        const layers = gsap.utils.toArray<HTMLElement>(".h-parallax", root);
        const setters = layers.map((el) => ({
          depth: Number(el.dataset.depth ?? 1),
          x: gsap.quickTo(el, "x", { duration: 1.4, ease: "power3" }),
          y: gsap.quickTo(el, "y", { duration: 1.4, ease: "power3" }),
        }));
        const onMove = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          setters.forEach((s) => {
            s.x(nx * 40 * s.depth);
            s.y(ny * 40 * s.depth);
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      });
    },
    { scope: heroRef }
  );

  const scrollNext = () => {
    const el = heroRef.current;
    if (!el) return;
    window.scrollTo({ top: el.offsetTop + el.offsetHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate bg-[#fbfaf7]"
      aria-labelledby="hero-heading"
    >
      {/* 100% Light Luxury Curved Content Canvas */}
      <div className="relative min-h-[100svh] overflow-hidden rounded-br-[36vw] bg-gradient-to-b from-[#ffffff] via-[#fdfcf9] to-[#f7f5ed] sm:rounded-br-[28vw] border-b-2 border-gold-400/40 shadow-sm">
        {/* Soft Radiant Gold Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(110%_80%_at_15%_10%,rgba(212,175,102,0.25)_0%,rgba(253,252,249,0.7)_50%,#ffffff_100%)]" />
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] -z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,102,0.2)_0%,transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute left-[30%] bottom-0 -z-0 h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(212,175,102,0.15)_0%,transparent_70%)] blur-2xl" />

        {/* Subtle grid watermark */}
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-25 hero-grid" />

        {/* Shimmering Metallic Gold Light Streaks */}
        <div className="h-streak pointer-events-none absolute -left-[20%] bottom-[10%] h-[38%] w-[140%] -rotate-[12deg] bg-[linear-gradient(90deg,transparent_0%,rgba(212,175,102,0.0)_10%,rgba(212,175,102,0.35)_45%,rgba(184,149,86,0.25)_65%,transparent_100%)] blur-3xl" />
        <div className="h-streak pointer-events-none absolute -left-[10%] bottom-[24%] h-[12%] w-[120%] -rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(212,175,102,0.4),rgba(184,149,86,0.3),transparent)] blur-2xl" />

        {/* Floating Sphere - Pure Radiant Gold & Pearl Marble */}
        <div
          className="h-parallax pointer-events-none absolute left-[22%] top-[5%] sm:left-[24%] sm:top-[7%]"
          data-depth="0.6"
        >
          <div className="h-shape h-sphere h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle_at_30%_25%,#ffffff_0%,#fef7e2_25%,#e6c885_55%,#c99f4d_80%,#9e772d_100%)] shadow-[inset_-16px_-24px_45px_rgba(158,119,45,0.4),0_30px_70px_-15px_rgba(212,175,102,0.4)] border border-white/60 sm:h-[270px] sm:w-[270px]" />
        </div>

        {/* Floating Geometric Prism in Bright Metallic Gold */}
        <div
          className="h-parallax pointer-events-none absolute left-[52%] top-[46%] z-20 sm:left-[54%]"
          data-depth="1.2"
        >
          <div
            className="h-shape h-cone h-[220px] w-[200px] -rotate-[28deg] sm:h-[310px] sm:w-[280px]"
            style={{
              clipPath: "polygon(8% 0%, 100% 62%, 62% 100%)",
              background:
                "linear-gradient(135deg,#ffffff 0%,#fdedc4 20%,#e6c885 50%,#b89556 80%,#96722c 100%)",
              filter: "drop-shadow(0 20px 30px rgba(184,149,86,0.35))",
              borderRadius: "40%",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-6 pt-28 pb-24 sm:px-8">
          {/* Eyebrow Pill Tag */}
          <div className="h-sub mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-500/40 bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-navy-950 shadow-sm backdrop-blur-md w-max">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
            </span>
            <span>Chartered Accountants &bull; Registered Auditors</span>
          </div>

          {/* Main Giant Headline */}
          <h1
            id="hero-heading"
            className="font-hero text-[16vw] leading-[0.88] tracking-[0.005em] uppercase sm:text-[12vw] lg:text-[9.5rem]"
          >
            <span className="block overflow-hidden">
              <span className="h-line block text-navy-950 drop-shadow-sm">Making complexity simple,</span>
            </span>
            <span className="block overflow-hidden">
              <span className="h-line block text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#caa552]">
                Delivering solutions.
              </span>
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="h-sub mt-8 max-w-xl text-lg leading-relaxed text-navy-900/90 font-medium sm:text-xl">
            Uniting All the Expertise You Need to Advance with{" "}
            <span className="relative inline-block font-semibold text-navy-950">
              Confidence
              <span className="absolute left-0 bottom-0.5 h-[3px] w-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />
            </span>.
          </p>

          {/* Action CTAs */}
          <div className="h-sub mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#services"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-[#c29c4e] px-8 py-4 text-sm font-semibold text-navy-950 shadow-[0_8px_25px_rgba(212,175,102,0.4)] transition-all hover:scale-105 hover:shadow-[0_12px_35px_rgba(212,175,102,0.55)]"
            >
              <span>Explore Services</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold-500/50 bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-sm transition-all hover:border-gold-500 hover:bg-gold-50 hover:shadow-md hover:scale-105"
            >
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Seamless Light Ivory transition band linking into the About section */}
      <div className="h-14 sm:h-20 bg-[#fbfaf7]" />
    </section>
  );
}
