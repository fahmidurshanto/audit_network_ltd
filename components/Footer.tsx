"use client";

import Link from "next/link";
import Image from "next/image";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Accounts & Bookkeeping", href: "/services/accounts-and-bookkeeping" },
  { name: "Audit & Assurance", href: "/services/audit-and-assurance" },
  { name: "Financial Planning & Wealth Management", href: "/services/financial-planning" },
  { name: "Tax Services", href: "/services/tax-services" },
  { name: "Advisory Services", href: "/services/advisory-services" },
  { name: "Outsourced Financial Services", href: "/services/outsourced-financial-services" },
];

export default function Footer() {
  return (
    <footer className="relative isolate bg-[#f7f6f2] text-navy-950 overflow-hidden border-t border-gold-400/30">
      {/* Top Left Geometry Accent */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-16 w-32 bg-gold-400/10 -z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        }}
      />

      {/* Top Right Geometric Overlay Accent matching reference layout */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 opacity-30">
        <div
          className="absolute right-0 top-0 h-full w-full bg-gradient-to-bl from-gold-400/30 via-gold-200/20 to-transparent"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />
        <div
          className="absolute right-0 top-0 h-48 w-48 bg-gradient-to-bl from-gold-500/20 to-transparent"
          style={{ clipPath: "polygon(100% 20%, 30% 100%, 100% 100%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-200">
          {/* Column 1: Company Info & Details (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <div className="relative h-12 w-52 rounded-xl bg-white px-3 py-1.5 shadow-sm border border-gold-400/30">
                <Image
                  src="/logo_transparant.png"
                  alt="Audit Network Limited"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
            </Link>

            <div className="space-y-3 text-sm text-navy-800/80 leading-relaxed max-w-md">
              <p className="font-semibold text-navy-950">Company Details</p>
              <ul className="space-y-1.5 text-xs text-navy-900/90">
                <li>
                  <span className="font-semibold text-gold-600">Company Number:</span> 06858174
                </li>
                <li>
                  <span className="font-semibold text-navy-950">Incorporated:</span> 2009
                </li>
                <li>
                  <span className="font-semibold text-navy-950">Nature of Business:</span> Accounting and auditing activities
                </li>
                <li>
                  <span className="font-semibold text-navy-950">Registered in:</span> United Kingdom
                </li>
                <li className="pt-1 text-navy-800/70">
                  <span className="font-semibold text-navy-950">Registered office address:</span> 23 Mountside, Stanmore, Middlesex, HA7 2DS
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Explore Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-display text-lg font-semibold text-navy-950">
              Explore:
            </h3>

            <ul className="space-y-2.5 text-sm text-navy-800/80">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-gold-600 transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <span className="text-gold-500 group-hover:text-gold-600 transition-colors font-bold">&rsaquo;</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services List (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-display text-lg font-semibold text-navy-950">
              Our Services:
            </h3>

            <ul className="space-y-2.5 text-sm text-navy-800/80">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-gold-600 transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <span className="text-gold-500 group-hover:text-gold-600 transition-colors font-bold">&rsaquo;</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information & Social Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-display text-lg font-semibold text-navy-950">
              Contact Us:
            </h3>

            <div className="space-y-4 text-sm text-navy-900">


              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gold-400/15 text-gold-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-800/60 uppercase tracking-wider font-semibold">Email Us</p>
                  <a
                    href="mailto:contact@auditnetwork.co.uk"
                    className="text-sm font-semibold text-navy-950 underline decoration-gold-400 underline-offset-4 hover:text-gold-600 transition-colors"
                  >
                    contact@auditnetwork.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-800/60">
          <p>
            &copy; {new Date().getFullYear()} Audit Network Ltd. All rights reserved.
          </p>
          <p>
            Designed &amp; Developed for Audit Network Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
