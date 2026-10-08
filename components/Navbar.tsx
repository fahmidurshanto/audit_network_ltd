"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const serviceSubLinks = [
  { label: "Accounts & Bookkeeping", href: "/services/accounts-and-bookkeeping" },
  { label: "Audit & Assurance", href: "/services/audit-and-assurance" },
  { label: "Financial Planning & Wealth Management", href: "/services/financial-planning" },
  { label: "Tax Services", href: "/services/tax-services" },
  { label: "Advisory Services", href: "/services/advisory-services" },
  { label: "Outsourced Financial Services", href: "/services/outsourced-financial-services" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
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
          maxWidth: "1280px",
          backgroundColor: "#ffffff",
          borderColor: "rgba(212, 175, 102, 0.5)",
          boxShadow: "0 15px 35px -10px rgba(11, 27, 43, 0.15), 0 0 20px rgba(212, 175, 102, 0.12)",
          paddingLeft: "28px",
          paddingRight: "28px",
          paddingTop: "12px",
          paddingBottom: "12px",
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(pillRef.current, {
          maxWidth: "1400px",
          backgroundColor: "#ffffff",
          borderColor: "rgba(212, 175, 102, 0.35)",
          boxShadow: "0 10px 30px -10px rgba(11, 27, 43, 0.08)",
          paddingLeft: "36px",
          paddingRight: "36px",
          paddingTop: "16px",
          paddingBottom: "16px",
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
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none"
    >
      {/* Floating Centered Pill Container - 100% Solid Opaque White Background */}
      <div
        ref={pillRef}
        className="pointer-events-auto relative flex w-full max-w-[1400px] items-center justify-between rounded-full border border-gold-400/35 bg-white px-8 sm:px-10 py-3.5 sm:py-4 shadow-xl shadow-navy-950/5 transition-all duration-300"
        style={{ backgroundColor: "#ffffff", opacity: 1 }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="flex items-center transition-transform hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-11 w-48 sm:h-13 sm:w-56 rounded-xl bg-white px-3.5 py-1.5 shadow-sm border border-gold-400/30">
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
        <ul className="hidden items-center gap-7 lg:gap-10 lg:flex">
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
                    className="nav-link relative flex items-center gap-1.5 text-[15px] font-semibold text-navy-950 transition-colors hover:text-gold-600"
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`text-gold-500 transition-transform duration-200 ${
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

                  {/* Dropdown Flyout Menu - 100% Solid Pure White Background Without Any Opacity */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-84 min-w-[340px] z-[9999] ${
                      servicesOpen
                        ? "block pointer-events-auto"
                        : "hidden pointer-events-none"
                    }`}
                    style={{ opacity: 1, isolation: "isolate" }}
                  >
                    <div 
                      className="rounded-2xl border-2 border-gold-400 bg-white p-3 shadow-[0_25px_60px_rgba(6,14,24,0.3)]"
                      style={{ backgroundColor: "#ffffff", background: "#ffffff", opacity: 1, backdropFilter: "none", WebkitBackdropFilter: "none" }}
                    >
                      <ul className="divide-y divide-gray-100 space-y-1 bg-white" style={{ backgroundColor: "#ffffff", background: "#ffffff", opacity: 1 }}>
                        {serviceSubLinks.map((sub) => (
                          <li key={sub.href} className="bg-white" style={{ backgroundColor: "#ffffff", background: "#ffffff", opacity: 1 }}>
                            <Link
                              href={sub.href}
                              className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#f6f2e8] hover:text-gold-700"
                              style={{ backgroundColor: "#ffffff" }}
                              onClick={() => setServicesOpen(false)}
                            >
                              <span>{sub.label}</span>
                              <span className="text-gold-600 text-base font-bold transition-transform group-hover/item:translate-x-1">
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
                  className="nav-link relative flex items-center gap-1.5 text-sm font-semibold text-navy-950 transition-colors hover:text-gold-600"
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
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-navy-900 to-navy-950 text-white border border-gold-400/40 px-7 py-3 text-[15px] font-semibold shadow-[0_4px_18px_rgba(11,27,43,0.18)] transition hover:bg-gold-500 hover:from-gold-400 hover:to-gold-500 hover:text-navy-950 hover:shadow-[0_8px_28px_rgba(212,175,102,0.45)] hover:scale-105"
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
          className="relative h-10 w-10 lg:hidden text-navy-950"
        >
          <span
            className={`absolute left-2 right-2 h-0.5 bg-navy-950 transition-all duration-300 ${
              open ? "top-1/2 rotate-45" : "top-[14px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-0.5 bg-navy-950 transition-all duration-300 ${
              open ? "top-1/2 -rotate-45" : "top-[24px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer - 100% Solid White Background */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="pointer-events-auto absolute inset-x-4 top-20 hidden rounded-3xl border border-gold-400/30 bg-white p-6 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto opacity-100"
        style={{ visibility: "hidden", backgroundColor: "#ffffff", opacity: 1 }}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <li key={link.label} className="m-item border-b border-gray-100 pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2 font-display text-xl text-navy-950 hover:text-gold-600"
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`text-gold-500 transition-transform duration-200 ${
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
                    <ul className="mt-2 space-y-1.5 pl-4 py-2 rounded-xl bg-white border-l-2 border-gold-400/50 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
                      {serviceSubLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-sm font-semibold text-navy-950 hover:text-gold-600"
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
              <li key={link.href} className="m-item border-b border-gray-100 pb-2">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-xl text-navy-950 hover:text-gold-600"
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
          className="m-item mt-6 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-gold-400 to-gold-500 py-3 font-semibold text-navy-950 shadow-lg hover:brightness-105"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
