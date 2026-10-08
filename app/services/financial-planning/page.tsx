"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const otherServices = [
  { label: "Accounts & Bookkeeping", href: "/services/accounts-and-bookkeeping" },
  { label: "Audit & Assurance", href: "/services/audit-and-assurance" },
  { label: "Financial Planning & Wealth Management", href: "/services/financial-planning", active: true },
  { label: "Tax Services", href: "/services/tax-services" },
  { label: "Advisory Services", href: "/services/advisory-services" },
  { label: "Outsourced Financial Services", href: "/services/outsourced-financial-services" },
];

const valuePillars = [
  {
    title: "Chartered & Certified Standard",
    desc: "Adherence to rigorous UK regulatory ethical guidelines, fiduciary excellence, and continuous professional accreditation.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Uncompromising Independence",
    desc: "Whole-of-market selection for investments, pensions, and asset protection without institutional tied-provider bias.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "360° Corporate & Private Synergy",
    desc: "Seamless integration between corporate profit extraction, commercial asset growth, and private family estate planning.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Proactive Wealth Preservation",
    desc: "Tailored strategies for Inheritance Tax (IHT) mitigation, trust structures, business relief (BPR), and legacy protection.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Audit Network Limited transformed our long-term wealth strategy. Their dual expertise in corporate accounting and private wealth meant our business exit and pension structures were handled with complete tax efficiency.",
    author: "Richard & Eleanor Vance",
    role: "Founders, Apex Logistics Group",
  },
  {
    quote:
      "As business owners, separating personal wealth from enterprise risk felt overwhelming. Their team provided clear, independent guidance on shareholder protection and key person insurance that gave us total confidence.",
    author: "Marcus Thorne",
    role: "Managing Director, Thorne BioTech",
  },
  {
    quote:
      "Their advice on estate planning and inheritance tax saving strategies ensured our family wealth was protected across generations without sacrificing liquidity for our current investments.",
    author: "Claire & Harrison Sterling",
    role: "Private Wealth Clients, London",
  },
];

export default function FinancialPlanningPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"family" | "business" | "specialist">("family");

  return (
    <div ref={containerRef}>
      <Navbar />

      <main className="min-h-screen bg-[#fbfaf7] text-navy-950 pt-28 sm:pt-36 pb-20">
        {/* =========================================================================
            1. HEADER BREADCRUMB BANNER (Executive Navy & Gold Ambient Glow)
        ========================================================================= */}
        <section className="relative px-6 lg:px-8 py-12 sm:py-16 border-b border-gold-400/30 bg-gradient-to-b from-white via-[#fcfbfa] to-[#f6f3ea]">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[360px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(212,175,102,0.22)_0%,transparent_70%)]" />

          <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="srv-hero-anim inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gradient-to-r from-gold-500/15 via-gold-400/20 to-gold-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700 shadow-sm mb-4">
                <span className="h-2 w-2 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(212,175,102,0.8)]" />
                <span>Core Wealth Advisory</span>
              </div>
              <h1 className="srv-hero-anim font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                Financial Planning &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Wealth Management</span>
              </h1>
            </div>

            <div className="srv-hero-anim flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/70 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-navy-800">Services</span>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-gold-600 font-bold">Financial Planning &amp; Wealth Management</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. TOP CONSULTATION BAR (Navy & Gold Executive Contrast)
        ========================================================================= */}
        <section className="border-b border-gold-400/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 px-6 py-4 sm:py-5 text-white shadow-inner">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(212,175,102,0.9)] animate-pulse" />
              <p className="text-xs sm:text-sm font-medium text-gray-200">
                Seeking confidential advice on pensions, wealth preservation, or business exit planning? Speak with our Senior Advisers today.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all"
            >
              <span>Schedule Private Meeting</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN CONTENT LAYOUT (Executive Presentation)
        ========================================================================= */}
        <section className="px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl space-y-16">
            {/* Hero Image Showcase with Overlay Badge */}
            <div className="srv-reveal-section space-y-8">
              <div className="srv-col-anim relative group overflow-hidden rounded-3xl border-2 border-gold-400/40 bg-white p-2.5 shadow-2xl shadow-navy-950/10">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/services/financial-planning-hero.jpg"
                    alt="Financial Planning and Wealth Management Advisory"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 85vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-navy-950/90 border border-gold-400/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                      Strategic Capital &amp; Family Wealth Advisory
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white drop-shadow-md">
                      Independent, Chartered Guidance for Long-Term Wealth Accumulation &amp; Protection
                    </p>
                  </div>
                </div>
              </div>

              {/* Introduction Paragraphs */}
              <div className="srv-col-anim space-y-5 text-base sm:text-lg text-navy-900/85 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950">
                    Chartered Financial Planning &amp; Wealth Preservation
                  </h2>
                </div>
                <p>
                  A robust financial legacy requires foresight, disciplined strategy, and unbiased execution. At Audit Network Limited, our in-house wealth management advisers work alongside corporate tax, audit, and accounting teams to provide comprehensive, independent financial strategies tailored to your personal goals and commercial enterprise.
                </p>
                <p>
                  Whether you are optimizing tax-efficient profit extraction from your business, structuring a multi-generational estate plan, or managing a high-net-worth pension portfolio, we deliver clear roadmap execution with continuous director-led oversight.
                </p>
              </div>
            </div>

            {/* Audit Network Difference Highlight Section (Executive Navy Container) */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 sm:p-10 shadow-2xl text-white space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-gold-400" />
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  The Audit Network Distinction: Independent &amp; Fully Integrated
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Choosing a financial adviser is one of the most critical decisions for your business and family. Audit Network Limited combines chartered advisory standards with complete whole-of-market independence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    01
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Chartered Standard</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Recognised gold standard for ethical code of conduct, rigorous technical competence, and fiduciary excellence.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    02
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Whole-of-Market Advice</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Completely independent advice with no tied products or restricted platform mandates, ensuring solutions built strictly for your needs.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    03
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Corporate &amp; Personal Synergy</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Working hand-in-hand with our corporate accounting and tax advisory specialists to align corporate liquidity with personal family goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Service Categories Tabs */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/35 bg-white p-6 sm:p-10 shadow-xl space-y-8">
              <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab("family")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "family"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  01. Personal &amp; Family Wealth
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("business")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "business"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  02. Business Leaders &amp; Executives
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("specialist")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "specialist"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  03. Trustees &amp; Legal Support
                </button>
              </div>

              {/* Tab 1: Personal & Family Wealth */}
              {activeTab === "family" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Comprehensive Financial Strategy for You &amp; Your Family
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    From capital growth to securing your family estate against unexpected life events and future tax burdens, we build tailored wealth strategies designed to stand the test of time.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Investments &amp; Portfolio Management</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Custom asset allocation across ISAs, general investment accounts, offshore bonds, and structured funds aligned with your risk tolerance.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Pensions &amp; Retirement Planning</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        SIPP/SSAS consolidation, annual and lifetime allowance planning, tax-efficient drawdown, and pension income forecasting.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Inheritance Tax (IHT) &amp; Estate Planning</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Structuring lifetime gifting, Family Investment Companies (FICs), trust administration, and Business Property Relief (BPR).
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Family &amp; Asset Protection</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Bespoke life assurance, critical illness cover, and income protection to ensure family stability under all contingencies.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Business Leaders & Executives */}
              {activeTab === "business" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Integrating Corporate Enterprise with Personal Wealth
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Business owners face complex financial decisions where corporate earnings intersect with personal taxation. We help business leaders convert enterprise growth into lasting personal wealth.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">PROTECTION</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Key Person &amp; Shareholder Cover</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Cross-option agreements, relevant life policies, and key person protection to safeguard enterprise equity.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">EXTRACTION</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Tax-Efficient Profits</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Dividend structuring, executive pension contributions, and pre-sale capital wealth extraction.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">PENSIONS</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Workplace Schemes</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Group personal pension setup, auto-enrolment compliance, and executive benefit package design.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Trustees & Legal Support */}
              {activeTab === "specialist" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Specialist Fiduciary &amp; Trustee Wealth Advisory
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    For individuals, solicitors, and institutional bodies managing capital on behalf of third parties or charitable entities, we provide expert fiduciary investment modeling and compliance support.
                  </p>

                  <div className="space-y-3 text-sm text-navy-900/85">
                    <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-5 space-y-1 text-white shadow-md">
                      <h4 className="font-semibold text-gold-400">Trustee &amp; Charity Financial Planning</h4>
                      <p className="text-xs text-gray-200">
                        Investment policy statement (IPS) formulation, liquidity reserves management, and independent governance reporting for charitable boards.
                      </p>
                    </div>

                    <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-5 space-y-1 text-white shadow-md">
                      <h4 className="font-semibold text-gold-400">Court of Protection &amp; Professional Deputies</h4>
                      <p className="text-xs text-gray-200">
                        Specialist wealth preservation modeling for deputies, solicitors, and vulnerable clients managing personal injury or clinical negligence awards.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Value Pillars Grid */}
            <div className="srv-reveal-section space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  Why Choose Audit Network Limited for Wealth Management?
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {valuePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="group rounded-2xl border border-gold-400/35 bg-white p-6 shadow-md hover:shadow-xl hover:border-gold-500 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-navy-950 to-navy-900 border border-gold-400/40 text-gold-400 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-navy-950 transition-all duration-300 shadow-md">
                      {pillar.icon}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy-950 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-850/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonials Section */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/35 bg-gradient-to-b from-[#fbfaf7] via-white to-[#f7f6f2] p-8 sm:p-10 shadow-xl space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3.5 py-1 mb-1">Client Endorsements</span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  What Our Wealth Clients Say
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-gold-400/30 bg-white p-6 shadow-md hover:shadow-xl hover:border-gold-500/60 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-1 text-gold-500 text-sm">
                        {"\u2605\u2605\u2605\u2605\u2605"}
                      </div>
                      <p className="text-xs sm:text-sm text-navy-900/80 italic leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-100 mt-4">
                      <p className="font-semibold text-xs text-navy-950">{t.author}</p>
                      <p className="text-[11px] text-gold-700 font-medium">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. BOTTOM CONTACT SECTION (Full-Width Light Luxury Container)
        ========================================================================= */}
        <section className="srv-contact-anim px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-white via-[#fbfaf7] to-[#f8f6f0] border-t border-gold-400/30">
          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3.5 py-1 mb-3">
                Begin Your Engagement
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-navy-950 tracking-tight">
                Consult With Our Wealth Management Specialists
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 mx-auto mt-4" />
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
