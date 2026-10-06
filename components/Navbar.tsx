"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const serviceSubLinks = [
  { label: "Accounts & Bookkeeping", href: "/services/accounts-bookkeeping" },
  { label: "Audit & Assurance", href: "/services/audit-assurance" },
  { label: "Financial Planning & Wealth Management", href: "/services/financial-planning" },
  { label: "Tax Services", href: "/services/tax-services" },
  { label: "Advisory Services", href: "/services/advisory-services" },
  { label: "Outsourced Financial Services", href: "/services/outsourced-financial-services" },
];

const navLinks = [
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Why Audit Network", href: "/why-audit-network" },
  { label: "Leadership Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "News & Insights", href: "/insights" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Entrance animation
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(pillRef.current, {
          autoAlpha: 0,
          y: -20,
          scale: 0.96,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
        });
      });
    },
    { scope: headerRef }
  );

  // Smooth scroll transitions into compact floating pill
  useGSAP(
    () => {
      if (!pillRef.current) return;
      if (scrolled) {
        gsap.to(pillRef.current, {
          maxWidth: "1100px",
          backgroundColor: "#060e18",
          borderColor: "rgba(212, 175, 102, 0.4)",
          boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 102, 0.15)",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "8px",
          paddingBottom: "8px",
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(pillRef.current, {
          maxWidth: "1280px",
          backgroundColor: "rgba(6, 14, 24, 0.4)",
          borderColor: "rgba(212, 175, 102, 0.15)",
          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "12px",
          paddingBottom: "12px",
          duration: 0.4,
          ease: "power3.out",
        });
      }
    },
    { dependencies: [scrolled] }
  );

  // Mobile drawer animation
  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!menu) return;
      if (open) {
        gsap.set(menu, { display: "block" });
        gsap.fromTo(menu, { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.3 });
        gsap.fromTo(
          menu.querySelectorAll(".m-item"),
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(menu, {
          autoAlpha: 0,
          duration: 0.25,
          onComplete: () => {
            gsap.set(menu, { display: "none" });
          },
        });
      }
    },
    { dependencies: [open] }
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none"
    >
      {/* Floating Centered Pill Container */}
      <div
        ref={pillRef}
        className="pointer-events-auto relative flex w-full max-w-7xl items-center justify-between rounded-full border border-gold-400/20 bg-[#060e18]/60 px-6 py-3 backdrop-blur-xl transition-all duration-300"
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="flex items-center transition-transform hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-10 w-44 sm:h-12 sm:w-52 rounded-xl bg-white px-3 py-1 shadow-md border border-gold-400/30">
            <Image
              src="/logo_transparant.png"
              alt="Audit Network Limited"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 lg:gap-8 lg:flex">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <li
                  key={link.label}
                  className="relative group py-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="nav-link relative flex items-center gap-1.5 text-sm font-medium text-cream/90 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`text-gold-400 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown Flyout Menu */}
                  <div
                    className={`absolute left-0 top-full pt-3 w-72 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl border border-gold-400/30 bg-[#060e18]/95 p-3 backdrop-blur-2xl shadow-2xl">
                      <ul className="space-y-1">
                        {serviceSubLinks.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium text-cream/80 transition-all hover:bg-gold-400/15 hover:text-gold-400"
                              onClick={() => setServicesOpen(false)}
                            >
                              <span>{sub.label}</span>
                              <span className="text-gold-400 opacity-0 transition-opacity group-hover/item:opacity-100">
                                &rarr;
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link relative flex items-center gap-1.5 text-sm font-medium text-cream/90 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            id="nav-cta"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2.5 text-sm font-semibold text-navy-950 shadow-[0_4px_20px_rgba(212,175,102,0.35)] transition hover:scale-105 hover:shadow-[0_6px_25px_rgba(212,175,102,0.5)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 lg:hidden text-cream"
        >
          <span
            className={`absolute left-2 right-2 h-0.5 bg-cream transition-all duration-300 ${
              open ? "top-1/2 rotate-45" : "top-[14px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-0.5 bg-cream transition-all duration-300 ${
              open ? "top-1/2 -rotate-45" : "top-[24px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="pointer-events-auto absolute inset-x-4 top-20 hidden rounded-3xl border border-gold-400/20 bg-[#060e18]/95 p-6 backdrop-blur-2xl shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
        style={{ visibility: "hidden" }}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <li key={link.label} className="m-item border-b border-cream/10 pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2 font-display text-xl text-cream hover:text-gold-400"
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`text-gold-400 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Mobile Services Accordion */}
                  {mobileServicesOpen && (
                    <ul className="mt-2 space-y-2 pl-4 border-l border-gold-400/30">
                      {serviceSubLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-sm text-cream/80 hover:text-gold-400"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={link.href} className="m-item border-b border-cream/10 pb-2">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-xl text-cream hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="m-item mt-6 inline-flex w-full justify-center rounded-full bg-gold-400 py-3 font-semibold text-navy-950 shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
