"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ReviewCard {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  badge: string;
}

const reviewsRow1: ReviewCard[] = [
  {
    id: "r1-1",
    name: "Eleanor Vance",
    role: "Managing Director",
    company: "Vance Global Logistics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Audit Network transformed our annual statutory audit and tax compliance. Their advisory team is exceptionally sharp.",
    badge: "Statutory Audit",
  },
  {
    id: "r1-2",
    name: "Marcus Thorne",
    role: "Chief Financial Officer",
    company: "Apex Tech Holdings",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Handling multi-jurisdiction cross-border tax compliance used to be a nightmare until we partnered with Audit Network Ltd.",
    badge: "Tax Advisory",
  },
  {
    id: "r1-3",
    name: "Sophia Chen",
    role: "Group Controller",
    company: "Luminary Capital",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Their outsourced financial services and payroll management have given our leadership team complete peace of mind.",
    badge: "Outsourced Finance",
  },
  {
    id: "r1-4",
    name: "Arthur Pendelton",
    role: "Senior Partner",
    company: "Pendelton Legal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Flawless audit execution and precise UK GAAP reporting. We couldn't ask for a more reliable team of chartered accountants.",
    badge: "Audit & Assurance",
  },
];

const reviewsRow2: ReviewCard[] = [
  {
    id: "r2-1",
    name: "David Harrison",
    role: "Founder & CEO",
    company: "Harrison & Co Retail",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "The financial planning and wealth management strategy set our company up for sustainable multi-year growth.",
    badge: "Wealth Management",
  },
  {
    id: "r2-2",
    name: "Claire Beaumont",
    role: "Head of Governance",
    company: "Beaumont Estates UK",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Clear, transparent, and rigorous advice tailored precisely to our complex corporate structure across the UK & Ireland.",
    badge: "Accounts & Reporting",
  },
  {
    id: "r2-3",
    name: "Gareth Davies",
    role: "Managing Director",
    company: "Davies BioTech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Their R&D tax credit claim support resulted in significant cash returns that we reinvested into primary product development.",
    badge: "R&D Tax Relief",
  },
  {
    id: "r2-4",
    name: "Hannah Wright",
    role: "Operations Director",
    company: "Wright Logistics",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Professional, responsive, and always available to answer technical accounting questions when we need them most.",
    badge: "Advisory Services",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Scroll-driven horizontal parallax scrub (Faster & wider motion distance)
        if (row1Ref.current) {
          gsap.to(row1Ref.current, {
            xPercent: -55,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        if (row2Ref.current) {
          gsap.to(row2Ref.current, {
            xPercent: 55,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }


        // Floating 3D elements micro motion
        gsap.to(".rv-sphere-1", {
          y: "+=20",
          rotation: "+=15",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".rv-cube-1", {
          y: "-=25",
          rotation: "-=18",
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative isolate bg-[#060e18] py-24 sm:py-32 text-cream overflow-hidden border-t border-navy-800/40"
    >
      {/* Huge Background Typography Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 -translate-x-1/2 select-none opacity-[0.03] text-[20vw] font-hero font-bold tracking-widest text-white uppercase whitespace-nowrap">
        TESTIMONIALS &amp; REVIEWS
      </div>

      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18)_0%,rgba(11,27,43,0.95)_60%,transparent_100%)]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          Client Feedback
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
          What Our Clients Say About Us
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-cream/75">
          Explore trusted feedback from business leaders and individuals across the UK and Ireland.
        </p>
      </div>

      {/* Horizontal Parallax Scroll Strip Container */}
      <div className="flex flex-col gap-8 sm:gap-10 overflow-hidden w-full py-4">
        {/* ROW 1: Scroll-driven leftward track */}
        <div
          ref={row1Ref}
          className="flex items-center gap-6 sm:gap-8 w-max pl-[10vw]"
        >
          {reviewsRow1.map((item, index) => (
            <div key={item.id} className="flex items-center gap-6 sm:gap-8">
              {/* Review Card */}
              <div className="w-[320px] sm:w-[420px] shrink-0 rounded-3xl bg-gradient-to-br from-navy-900 to-[#0c1f33] border border-gold-400/20 p-7 sm:p-8 shadow-2xl transition-all duration-300 hover:border-gold-400/50 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded-full bg-gold-400/15 border border-gold-400/30 px-3 py-1 text-xs font-semibold text-gold-400">
                    {item.badge}
                  </span>
                  <div className="flex text-gold-400 text-sm">
                    {"★".repeat(item.rating)}
                  </div>
                </div>
                <p className="text-sm sm:text-base italic leading-relaxed text-cream/90 mb-8 line-clamp-3">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-cream/10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-11 w-11 rounded-full object-cover border-2 border-gold-400/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-cream/60">{item.role} &bull; {item.company}</p>
                  </div>
                </div>
              </div>

              {/* Interspaced 3D Sphere after 2nd card (Website Theme: Gold & Navy) */}
              {index === 1 && (
                <div className="rv-sphere-1 shrink-0 relative flex items-center justify-center px-4">
                  <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-[radial-gradient(circle_at_30%_28%,#d4af66_0%,#b89556_30%,#142a42_65%,#060e18_90%)] shadow-[inset_-12px_-12px_28px_rgba(4,9,16,0.9),0_20px_50px_rgba(212,175,102,0.35)] border border-gold-400/40" />
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_25%_25%,rgba(255,255,255,0.45)_0%,transparent_60%)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ROW 2: Scroll-driven rightward track */}
        <div
          ref={row2Ref}
          className="flex items-center gap-6 sm:gap-8 w-max -ml-[25vw]"
        >
          {reviewsRow2.map((item, index) => (
            <div key={item.id} className="flex items-center gap-6 sm:gap-8">
              {/* Review Card */}
              <div className="w-[320px] sm:w-[420px] shrink-0 rounded-3xl bg-gradient-to-br from-[#0e2136] to-navy-950 border border-gold-500/20 p-7 sm:p-8 shadow-2xl transition-all duration-300 hover:border-gold-400/50 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded-full bg-gold-500/15 border border-gold-400/30 px-3 py-1 text-xs font-semibold text-gold-400">
                    {item.badge}
                  </span>
                  <div className="flex text-gold-400 text-sm">
                    {"★".repeat(item.rating)}
                  </div>
                </div>
                <p className="text-sm sm:text-base italic leading-relaxed text-cream/90 mb-8 line-clamp-3">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-cream/10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-11 w-11 rounded-full object-cover border-2 border-gold-400/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-cream/60">{item.role} &bull; {item.company}</p>
                  </div>
                </div>
              </div>

              {/* Interspaced 3D Cube after 1st card (Website Theme: Gold & Navy Gradient) */}
              {index === 1 && (
                <div className="rv-cube-1 shrink-0 relative flex items-center justify-center px-4">
                  <div
                    className="h-28 w-24 sm:h-32 sm:w-28 rounded-2xl bg-gradient-to-br from-[#e6c885] via-[#d4af66] to-[#0b1b2b] shadow-[0_20px_45px_rgba(212,175,102,0.35)] border border-gold-400/50 -rotate-12"
                    style={{
                      clipPath: "polygon(15% 0%, 100% 20%, 85% 100%, 0% 80%)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
