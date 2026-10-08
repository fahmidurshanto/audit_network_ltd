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
  { label: "Financial Planning & Wealth Management", href: "/services/financial-planning" },
  { label: "Tax Services", href: "/services/tax-services" },
  { label: "Advisory Services", href: "/services/advisory-services", active: true },
  { label: "Outsourced Financial Services", href: "/services/outsourced-financial-services" },
];

const valuePillars = [
  {
    title: "Partner-Led Strategic Advisory",
    desc: "Direct access to seasoned Senior Chartered Practitioners, former CFOs, and restructuring experts across every engagement.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Commercial & Transaction Rigor",
    desc: "Proven methodologies for M&A deal execution, business funding, valuation, and debt restructuring.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "HMRC & Dispute Resolution",
    desc: "Authoritative, discreet representation in complex HMRC Time-to-Pay negotiations and forensic litigation disputes.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Digital & Regulatory Foresight",
    desc: "Comprehensive cyber security risk assessments and technical financial reporting under FRS 102 and IFRS.",
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
      "Audit Network Limited guided us through a complex £14M corporate merger and transaction structuring. Their advisory team provided incredible deal clarity, forensic financial due diligence, and tax-neutral execution.",
    author: "Harrison Vance",
    role: "Managing Director, Apex Industrial Group",
  },
  {
    quote:
      "When our business faced severe cash flow pressures following supply chain disruption, their turnaround advisory team negotiated a successful 24-month Time to Pay arrangement with HMRC that saved our company.",
    author: "Claire Standish",
    role: "Finance Director, Meridian Freight UK",
  },
  {
    quote:
      "Their forensic accounting team resolved an intricate shareholder dispute with total clarity. Their expert reporting and valuation model allowed us to reach an amicable buy-out without court proceedings.",
    author: "Julian Thorne",
    role: "Co-Founder, BioTech Innovations",
  },
];

type AdvisoryTab =
  | "corporate-finance"
  | "business-funding"
  | "business-rescue"
  | "strategic-advice"
  | "hmrc-negotiating"
  | "forensic-accounting"
  | "cyber-security"
  | "reporting-advisory";

export default function AdvisoryServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<AdvisoryTab>("corporate-finance");

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
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gradient-to-r from-gold-500/15 via-gold-400/20 to-gold-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700 shadow-sm mb-4">
                <span className="h-2 w-2 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(212,175,102,0.8)]" />
                <span>Strategic Solutions</span>
              </div>
              <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                Advisory <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Services</span>
              </h1>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/70 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-navy-800">Services</span>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-gold-600 font-bold">Advisory Services</span>
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
                Facing a strategic transaction, funding need, or HMRC dispute? Consult our Senior Advisors.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all"
            >
              <span>Schedule Advisory Consultation</span>
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
            <div className="space-y-8">
              <div className="relative group overflow-hidden rounded-3xl border-2 border-gold-400/40 bg-white p-2.5 shadow-2xl shadow-navy-950/10">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/services/advisory-services-hero.jpg"
                    alt="Corporate Business Advisory and Strategic Planning"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 85vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-navy-950/90 border border-gold-400/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                      Commercial Leadership &amp; Growth
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white drop-shadow-md">
                      Specialist Corporate Finance, Turnaround &amp; Strategic Advisory for UK Enterprises
                    </p>
                  </div>
                </div>
              </div>

              {/* Introduction Paragraphs */}
              <div className="space-y-5 text-base sm:text-lg text-navy-900/85 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950">
                    Comprehensive Business &amp; Financial Advisory
                  </h2>
                </div>
                <p>
                  In a rapidly evolving commercial landscape, business directors and business owners face pivotal moments—whether negotiating an acquisition, securing capital for expansion, restructuring debt, or defending complex tax positions with HMRC. High-stakes financial decisions demand authoritative, partner-led advice.
                </p>
                <p>
                  At Audit Network Limited, our senior advisory practice combines corporate finance expertise, forensic accounting rigor, and strategic business consulting to safeguard enterprise value and accelerate sustainable commercial performance.
                </p>
              </div>
            </div>

            {/* Audit Network Distinction Highlight Section (Executive Navy Container) */}
            <div className="rounded-3xl border border-gold-400/40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 sm:p-10 shadow-2xl text-white space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-gold-400" />
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  Why Choose Audit Network Limited for Advisory Services?
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Unlike traditional single-discipline consultancies, our advisory practice brings together chartered accountants, corporate financiers, restructuring specialists, and forensic analysts under one unified lead.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    01
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Partner-Led Execution</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Direct hands-on involvement from qualified Senior Chartered Practitioners on every advisory mandate from inception to transaction close.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    02
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Integrated Financial &amp; Tax Strategy</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Corporate finance and business funding solutions engineered alongside tax structuring to maximize post-tax shareholder yield.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    03
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Defensible Commercial Rigor</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Robust financial modeling, statutory reporting compliance, and robust evidence preparation for HMRC, lenders, and courts.
                  </p>
                </div>
              </div>
            </div>

            {/* =========================================================================
                4. DYNAMIC SUB-SERVICES TABS SECTION (All 8 Advisory Sub-Services)
            ========================================================================= */}
            <div className="rounded-3xl border-2 border-gold-400/40 bg-white p-6 sm:p-10 shadow-xl space-y-8">
              <div className="space-y-3">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3.5 py-1">
                  Core Advisory Capabilities
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  Explore Our Specialist Advisory Practices
                </h2>
              </div>

              {/* Sub-Services Navigation Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-gold-400/20 pb-6">
                {[
                  { id: "corporate-finance", label: "01. Corporate Finance" },
                  { id: "business-funding", label: "02. Business Funding" },
                  { id: "business-rescue", label: "03. Business Rescue & Insolvency" },
                  { id: "strategic-advice", label: "04. Strategic Business Advice" },
                  { id: "hmrc-negotiating", label: "05. Negotiating with HMRC" },
                  { id: "forensic-accounting", label: "06. Forensic Accounting" },
                  { id: "cyber-security", label: "07. Cyber Security" },
                  { id: "reporting-advisory", label: "08. Financial Reporting Advisory" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as AdvisoryTab)}
                    className={`rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                        : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 1. Corporate Finance */}
              {activeTab === "corporate-finance" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Corporate Finance &amp; M&amp;A Advisory
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Executing corporate buyouts, acquisitions, or enterprise sales requires meticulous valuation, financial structuring, and deal coordination. We act as lead advisors for mid-market UK transactions, maximizing enterprise valuation while mitigating transactional risk.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Mergers &amp; Acquisitions (M&amp;A)</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Buy-side search, target evaluation, vendor negotiations, and deal closing support.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Company Valuations &amp; Financial Due Diligence</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Independent EBITDA multiple modeling, asset valuation, and financial risk audit packs.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Pre-Sale Grooming &amp; Exit Strategy</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Strategic preparation 12-24 months prior to exit to optimize balance sheet presentation and tax efficiency.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Management Buy-Outs (MBO) &amp; Buy-Ins (MBI)</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Structuring deal terms, equity participation, vendor roll-over, and senior debt packages.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Business Funding */}
              {activeTab === "business-funding" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Commercial Business Funding &amp; Capital Structuring
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Securing capital for organic growth, capital equipment, acquisitions, or working capital requires presenting robust credit-backed financial models to institutional lenders, debt funds, and private equity investors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Debt Advisory &amp; Commercial Mortgages</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Sourcing competitive bank debt, term loans, and property development finance packages.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Working Capital &amp; Asset-Based Lending (ABL)</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Invoice discounting, confidential factoring, and inventory finance lines.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Equity Investment &amp; Venture Debt</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Preparing investment memorandums, pitch decks, and financial models for VC/PE syndicates.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Grant Funding Advisory</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Identifying statutory UK regional development grants, Innovate UK funding, and R&amp;D capital support.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Business Rescue & Insolvency */}
              {activeTab === "business-rescue" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Business Rescue, Restructuring &amp; Insolvency Advice
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    When enterprises experience acute distress, creditor pressure, or margin contraction, decisive turnaround intervention is essential. We provide immediate cash-flow stabilization, informal workout strategies, and liaison with licensed insolvency practitioners.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Turnaround Strategy &amp; Cash Triage</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Immediate 13-week liquidity control, cost-rationalization plans, and working capital preservation.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Informal Creditor Standstill Agreements</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Negotiating payment moratoriums and standstill agreements with key suppliers and debt providers.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Director Solvency Protection</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Guidance under UK Insolvency Act 1986 regarding wrongful trading risks and fiduciary duty safeguards.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>CVA &amp; Formal Insolvency Liaison</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Company Voluntary Arrangement (CVA) drafting, pre-pack administration analysis, and solvent liquidations (MVL).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Strategic Business Advice */}
              {activeTab === "strategic-advice" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Strategic Business Advice &amp; Executive Advisory
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Scaling businesses require ongoing commercial advisory beyond routine tax compliance. We act as non-executive board advisors, offering objective insight, operational diagnostic metrics, and high-level strategy formulation.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Executive Board Advisory</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Independent attendance at board meetings to guide capital allocation, risk governance, and long-term planning.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Commercial Performance Diagnostics</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        In-depth margin analysis, overhead benchmarking, and pricing strategy optimization.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Financial Modeling &amp; Scenario Planning</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Dynamic 3-statement financial models (P&amp;L, Balance Sheet, Cash Flow) for strategic expansion testing.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Key Performance Indicator (KPI) Dashboards</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Designing visual executive dashboards tracking working capital cycles, customer acquisition cost, and gross margins.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Negotiating with HMRC */}
              {activeTab === "hmrc-negotiating" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Negotiating with HMRC &amp; Dispute Resolution
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    HMRC arrears, tax audits, or statutory penalty notices require prompt, professional representation by chartered practitioners. We negotiate defensible payment arrangements and mediate complex tax disputes directly with HMRC enforcement units.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Time to Pay (TTP) Arrangements</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Formulating affordable 6-36 month instalment proposals backed by verified cash flow forecasts.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Tax Enquiry &amp; Audit Defense</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Representing clients in HMRC Code of Practice 8 &amp; 9, VAT compliance checks, and Corporation Tax enquiries.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Penalty &amp; Interest Mitigation</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Submitting formal reasonable excuse appeals to reduce or eliminate HMRC late payment penalties and surcharges.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Statutory Review &amp; Tax Tribunal Appeals</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Preparing technical appeal bundles for HMRC Internal Reviews and First-tier Tax Tribunal (FTT) hearings.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Forensic Accounting */}
              {activeTab === "forensic-accounting" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Forensic Accounting &amp; Dispute Resolution
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    In commercial litigation, fraud investigations, or shareholder disputes, objective financial investigation is paramount. Our forensic accounting specialists unravel complex ledgers, trace assets, and prepare court-admissible expert witness reports.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Commercial Litigation Support</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Quantifying loss of profit, breach of contract damages, and post-acquisition warranty claims.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Shareholder &amp; Partnership Disputes</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Independent share valuation, dividend entitlement reviews, and minority interest protection.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Fraud &amp; Financial Misconduct Audit</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Uncovering internal embezzlement, payroll fraud, fictitious vendor invoicing, and unauthorized asset transfers.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Asset Tracing &amp; Expert Witness Testimony</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Tracing hidden corporate assets, matrimonial asset valuations, and expert witness reports compliant with CPR Part 35.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 7. Cyber Security */}
              {activeTab === "cyber-security" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Cyber Security &amp; Financial IT Assurance
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Financial data breaches and ransomware present severe operational, legal, and reputational hazards. We audit your financial software infrastructure, payment gateways, and data retention policies to enforce robust cyber security compliance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Financial System Risk Audit</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Diagnostic review of access controls, multi-factor authentication, and ERP security protocols.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Data Protection &amp; GDPR Compliance</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Auditing sensitive client ledger retention, encrypted backups, and UK GDPR data processing agreements.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Payment Gateway &amp; Banking Security</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Securing automated BACS payment workflows, dual-authorization sign-offs, and fraud prevention routines.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Business Continuity &amp; Disaster Recovery</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Testing financial ledger backup restore points, cloud fail-overs, and incident response frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 8. Financial Reporting Advisory */}
              {activeTab === "reporting-advisory" && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Financial Reporting Advisory &amp; Technical Accounting
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Navigating UK GAAP (FRS 102 / FRS 105) and International Financial Reporting Standards (IFRS) requires specialized technical knowledge. We provide guidance on complex accounting treatments, revenue recognition, and group disclosures.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>FRS 102 &amp; IFRS Standard Conversions</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Managing transitions between accounting frameworks with full impact assessments on net assets and tax.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Complex Revenue Recognition &amp; Lease Accounting</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Technical memo preparation for multi-element contracts, software revenue, and IFRS 16 lease evaluations.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Group Consolidation Papers</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Drafting complex group consolidation schedules, goodwill impairment reviews, and fair value adjustments.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Boardroom Financial Reporting Packs</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Designing clear executive accounting packs for audit committees, bank syndicates, and institutional shareholders.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* =========================================================================
                5. FOUR PILLARS OF EXCELLENCE (Matching Layout & Design)
            ========================================================================= */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  Four Pillars of Audit Network Advisory Excellence
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
                    <p className="text-xs sm:text-sm text-navy-800/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =========================================================================
                6. OTHER SERVICES NAVIGATION SIDEBAR / GRID
            ========================================================================= */}
            <div className="rounded-3xl border border-gold-400/35 bg-white p-8 shadow-lg space-y-6">
              <h3 className="font-display text-xl font-semibold text-navy-950">
                Explore Full Range of Professional Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherServices.map((srv) => (
                  <Link
                    key={srv.href}
                    href={srv.href}
                    className={`flex items-center justify-between rounded-xl px-5 py-3.5 text-sm font-semibold transition-all border ${
                      srv.active
                        ? "bg-navy-950 text-gold-400 border-gold-400/60 shadow-md"
                        : "bg-[#fbfaf7] text-navy-900 border-gold-400/30 hover:border-gold-500 hover:bg-gold-50/50 hover:text-gold-700"
                    }`}
                  >
                    <span>{srv.label}</span>
                    <span className="text-gold-600 font-bold">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* =========================================================================
                7. CLIENT TESTIMONIALS & CASE STUDIES
            ========================================================================= */}
            <div className="space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3.5 py-1">
                  Advisory Proven Success
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  Client Success Stories
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.author}
                    className="flex flex-col justify-between rounded-2xl border border-gold-400/35 bg-white p-6 shadow-md hover:border-gold-500 transition-all space-y-4"
                  >
                    <p className="text-xs sm:text-sm text-navy-850/80 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t border-gold-400/20 pt-3">
                      <p className="font-display text-sm font-semibold text-navy-950">{t.author}</p>
                      <p className="text-xs text-gold-700 font-medium">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. BOTTOM CONTACT SECTION (Full-Width Luxury Container)
        ========================================================================= */}
        <section className="px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-white via-[#fbfaf7] to-[#f8f6f0] border-t border-gold-400/30">
          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3.5 py-1 mb-3">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-navy-950 tracking-tight">
                Speak to Our Advisory Team
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
