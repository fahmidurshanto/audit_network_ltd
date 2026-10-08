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
  { label: "Advisory Services", href: "/services/advisory-services" },
  { label: "Outsourced Financial Services", href: "/services/outsourced-financial-services", active: true },
];

const valuePillars = [
  {
    title: "Turnkey Virtual Finance Function",
    desc: "Complete business process outsourcing (BPO) combining sales ledgers, purchase ledgers, and credit control under one unified team.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0H8m4 0h4" />
      </svg>
    ),
  },
  {
    title: "Predictive Cash & Liquidity Control",
    desc: "13-week rolling cash flow forecasts, scenario modeling, bank reconciliation, and proactive working capital management.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Executive Management Information",
    desc: "Boardroom-ready KPI packs, variance reporting against budgets, and online reconciled balance sheet access.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Fractional FD & CFO Advisory",
    desc: "Senior strategic leadership for scaling enterprises, bank negotiations, M&A prep, and audit deliverables management without full-time C-suite cost.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Outsourcing our entire finance function to Audit Network Limited was a game-changer. We gained top-tier management reporting, seamless payroll, and 13-week cash forecasting at a fraction of the cost of an internal team.",
    author: "Jonathan Davies",
    role: "CEO, Vantage Tech Solutions",
  },
  {
    quote:
      "Their Fractional FD advisory transformed our board meetings. With real-time KPI dashboards and bank reconciliations always up to date, we can execute strategic expansion plans with absolute clarity.",
    author: "Elena Rostova",
    role: "Managing Director, Apex Global Logistics",
  },
  {
    quote:
      "From debtor management to VAT filings and year-end audit support, Audit Network operates seamlessly as our internal finance department. We can finally focus on business growth.",
    author: "Markus Sterling",
    role: "Founder, Sterling Property Group",
  },
];

export default function OutsourcedFinancialServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"virtual-dept" | "supplier-debtor" | "payment-cashflow" | "compliance-fd">("virtual-dept");

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
                <span>Turnkey Finance Function</span>
              </div>
              <h1 className="srv-hero-anim font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                Outsourced Financial Services &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Virtual Finance Department</span>
              </h1>
            </div>

            <div className="srv-hero-anim flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/70 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-navy-800">Services</span>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-gold-600 font-bold">Outsourced Financial Services</span>
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
                Looking to streamline your finance department or hire a Fractional FD/CFO? Speak with our Head of Outsourcing today.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all"
            >
              <span>Explore Virtual Finance</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN CONTENT LAYOUT (Executive Presentation - Expanded Max-W-7XL Width)
        ========================================================================= */}
        <section className="px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl space-y-16">
            {/* Hero Image Showcase with Overlay Badge */}
            <div className="srv-reveal-section space-y-8">
              <div className="srv-col-anim relative group overflow-hidden rounded-3xl border-2 border-gold-400/40 bg-white p-2.5 shadow-2xl shadow-navy-950/10">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/services/outsourced-financial-hero.jpg"
                    alt="Outsourced Financial Services and Virtual Finance Department"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1280px) 100vw, 90vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-navy-950/90 border border-gold-400/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                      Business Process Outsourcing (BPO) &amp; Virtual FD
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white drop-shadow-md">
                      Scale Your Business with a Complete Modern Virtual Finance Department &amp; Executive Oversight
                    </p>
                  </div>
                </div>
              </div>

              {/* Introduction Paragraphs */}
              <div className="srv-col-anim space-y-5 text-base sm:text-lg text-navy-900/85 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950">
                    We Build Your Virtual Finance Department With You
                  </h2>
                </div>
                <p>
                  Managing an internal finance department can be a major operational burden for growing businesses. From managing purchase ledgers and chasing debtors to bank reconciliations, VAT filings, and executive reporting, hiring full-time internal personnel incurs significant fixed overheads and management complexity.
                </p>
                <p>
                  At Audit Network Limited, we provide a complete, hybrid Virtual Finance Department solution. Combining state-of-the-art cloud technology (Xero, Dext, automated payment gateways) with the director-led expertise of Chartered Certified Accountants, we deliver real-time financial control, 13-week cash flow predictability, and strategic Fractional CFO oversight.
                </p>
              </div>
            </div>

            {/* Audit Network Distinction Highlight Section (Executive Navy Container) */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 sm:p-10 shadow-2xl text-white space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-gold-400" />
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  Why Outsource Your Finance Department to Audit Network Limited?
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Outsourcing your financial operations provides immediate flexibility, cost savings, and access to senior accounting leadership without the fixed overhead of an in-house team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    01
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Hybrid Tech &amp; Expert Team</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Seamless cloud integration paired with dedicated UK chartered accounting practitioners to manage your daily finance operations.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    02
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Operational Scalability</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Easily scale up or down your financial processing, payroll, and reporting support as your enterprise grows.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    03
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Boardroom Transparency</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Timely, insightful management accounts, 13-week cash forecasts, and reconciled balance sheet access for confident decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Service Categories Tabs */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/35 bg-white p-6 sm:p-10 shadow-xl space-y-8">
              <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab("virtual-dept")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "virtual-dept"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  01. Virtual Finance Department
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("supplier-debtor")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "supplier-debtor"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  02. Supplier &amp; Customer Controls
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("payment-cashflow")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "payment-cashflow"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  03. Payment &amp; Cash Flow Forecasting
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("compliance-fd")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "compliance-fd"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  04. Compliance &amp; Fractional FD/CFO
                </button>
              </div>

              {/* Tab 1: Virtual Finance Department */}
              {activeTab === "virtual-dept" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    A Full-Service Hybrid Finance Function Built For Growth
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    We replace or augment your in-house bookkeeping and finance personnel with an expert outsourced function, taking responsibility for daily ledgers, document retention, and financial reporting.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Complete Ledgers Administration</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Sales ledger, purchase ledger, journal entries, and automated bank reconciliation under Xero/Dext.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Document &amp; Invoice Retention</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Digital filing and receipt processing fully compliant with HMRC Making Tax Digital (MTD) standards.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Monthly Management Accounting</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        P&amp;L variance analysis, balance sheet reconciliations, and executive summary packs.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Multi-Currency &amp; Cross-Border Function</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Handling multi-currency accounts and UK subsidiary finance functions for international businesses.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Supplier & Customer Controls */}
              {activeTab === "supplier-debtor" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Supplier &amp; Customer Relationship Management
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Maintaining healthy commercial relationships depends on structured purchase approval controls and active debtor collection frameworks.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">PURCHASE</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Purchase Controls</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Approval workflows, 3-way invoice matching, and supplier payment run scheduling.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">DEBTORS</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Credit Control &amp; Collections</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Proactive aged debtor tracking, polite reminder schedules, and credit terms enforcement.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">AUDIT-READY</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Invoice Retention</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Cloud storage for all sales and purchase records, ready for statutory audit and ad-hoc inspection.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Payment & Cash Flow Forecasting */}
              {activeTab === "payment-cashflow" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Proactive Liquidity &amp; 13-Week Cash Flow Forecasting
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Cash flow is the lifeblood of enterprise longevity. We build dynamic liquidity forecast models that anticipate working capital requirements.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">13-WEEK</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Cash Forecast Models</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Rolling 13-week liquidity models with scenario sensitivity testing for expansion or capital outlay.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">BANK RECON</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Daily Reconciliation</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Continuous bank feed synchronization and instant resolution of unallocated items.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">WORKING CAPITAL</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Payment Allocations</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Auditable payment allocation workflows protecting cash reserves while maintaining vendor trust.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Compliance & Fractional FD/CFO */}
              {activeTab === "compliance-fd" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Compliance Management &amp; Fractional FD / CFO Advisory
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Gain senior executive financial leadership to present to bank managers, investors, and auditors—without the overhead of a full-time Finance Director.
                  </p>

                  <div className="space-y-3 text-sm text-navy-900/85">
                    <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-5 space-y-1 text-white shadow-md">
                      <h4 className="font-semibold text-gold-400">Fractional FD &amp; CFO Strategic Guidance</h4>
                      <p className="text-xs text-gray-200">
                        Attending board meetings, guiding debt/equity funding negotiations, establishing commercial KPIs, and advising on strategic expansion.
                      </p>
                    </div>

                    <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-5 space-y-1 text-white shadow-md">
                      <h4 className="font-semibold text-gold-400">Audit Deliverables &amp; Statutory Compliance</h4>
                      <p className="text-xs text-gray-200">
                        Preparing year-end audit packs, managing statutory auditor enquiries on your behalf, and executing VAT/payroll compliance.
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
                  Why Choose Audit Network Limited for Financial Outsourcing?
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
                  What Our Outsourcing Clients Say
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
                Consult With Our Head of Financial Outsourcing
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
