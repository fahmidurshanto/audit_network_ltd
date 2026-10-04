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
          )
          .fromTo(
            ".h-scroll",
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            "-=0.8"
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
      className="relative isolate bg-[#142a42]"
      aria-labelledby="hero-heading"
    >
      {/* Deep Midnight Navy curved panel matching the logo primary color */}
      <div className="relative min-h-[100svh] overflow-hidden rounded-br-[38vw] bg-[#0b1b2b] sm:rounded-br-[32vw]">
        {/* Deep navy & rich gold glow backdrop gradients */}
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(120%_80%_at_20%_0%,#142a42_0%,#0b1b2b_45%,#060e18_100%)]" />

        {/* Gold light streaks */}
        <div className="h-streak pointer-events-none absolute -left-[20%] bottom-[8%] h-[38%] w-[140%] -rotate-[12deg] bg-[linear-gradient(90deg,transparent_0%,rgba(212,175,102,0.0)_10%,rgba(212,175,102,0.25)_45%,rgba(184,149,86,0.18)_65%,transparent_100%)] blur-3xl" />
        <div className="h-streak pointer-events-none absolute -left-[10%] bottom-[22%] h-[10%] w-[120%] -rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(212,175,102,0.35),transparent)] blur-2xl" />

        {/* Sphere / Globe with logo deep navy & gold tones */}
        <div
          className="h-parallax pointer-events-none absolute left-[20%] top-[4%] sm:left-[22%] sm:top-[6%]"
          data-depth="0.6"
        >
          <div className="h-shape h-sphere h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle_at_30%_28%,#d4af66_0%,#b89556_25%,#142a42_60%,#060e18_90%)] shadow-[inset_-20px_-30px_60px_rgba(4,9,16,0.85),0_30px_80px_-20px_rgba(212,175,102,0.2)] sm:h-[260px] sm:w-[260px]" />
        </div>

        {/* Cone / Prism element in metallic gold tones (z-20 sits in front of text at z-10) */}
        <div
          className="h-parallax pointer-events-none absolute left-[50%] top-[48%] z-20 sm:left-[52%]"
          data-depth="1.2"
        >
          <div
            className="h-shape h-cone h-[220px] w-[200px] -rotate-[28deg] sm:h-[300px] sm:w-[270px]"
            style={{
              clipPath: "polygon(8% 0%, 100% 62%, 62% 100%)",
              background:
                "linear-gradient(135deg,#e6c885 0%,#d4af66 30%,#b89556 60%,#0b1b2b 100%)",
              filter: "drop-shadow(0 30px 40px rgba(6,14,24,0.7))",
              borderRadius: "40%",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-6 pt-28 pb-24 sm:px-8">
          <h1
            id="hero-heading"
            className="font-hero text-[16vw] leading-[0.88] tracking-[0.005em] text-cream uppercase sm:text-[12vw] lg:text-[9.5rem]"
          >
            <span className="block overflow-hidden">
              <span className="h-line block">Making complexity simple,</span>
            </span>
            <span className="block overflow-hidden">
              <span className="h-line block text-transparent bg-clip-text bg-gradient-to-r from-cream via-cream to-gold-400">
                Delivering solutions.
              </span>
            </span>
          </h1>

          <p className="h-sub mt-10 max-w-lg text-lg leading-relaxed text-cream/90 sm:text-xl">
            Uniting All the Expertise You Need to Advance with{" "}
            <span className="text-gold-400 font-medium">Confidence</span>.
          </p>
        </div>
      </div>

      {/* Dark navy background underneath hero curve */}
      <div className="h-24 sm:h-32 bg-[#0b1b2b]" />
    </section>
  );
}
