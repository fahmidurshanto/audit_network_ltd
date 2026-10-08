"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const otherServices = [
  { label: "Accounts & Bookkeeping", href: "/services/accounts-and-bookkeeping", active: true },
  { label: "Audit & Assurance", href: "/services/audit-and-assurance" },
  { label: "Tax Services", href: "/services/tax-services" },
  { label: "Advisory Services", href: "/services/advisory-services" },
  { label: "Outsourced Financial Services", href: "/services/outsourced-financial-services" },
];

const valuePillars = [
  {
    title: "Real-Time Cloud Integration",
    desc: "Seamless synchronization with Xero, QuickBooks, and Dext for live financial oversight and zero paper backlog.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Director-Led Oversight",
    desc: "Every ledger, filing, and reconciliation is reviewed by experienced Chartered Certified Accountants.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Guaranteed Statutory Compliance",
    desc: "Full adherence to UK GAAP, FRS 102/105 standards, HMRC deadlines, and Companies House filing schedules.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Commercial Growth Focus",
    desc: "Insight-rich management accounts and monthly KPI packs that guide sound strategic expansion.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function AccountsAndBookkeepingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"bookkeeping" | "annual-accounts" | "management-reports">("bookkeeping");

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
                <span>Core Services</span>
              </div>
              <h1 className="srv-hero-anim font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                Accounts &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Bookkeeping</span>
              </h1>
            </div>

            <div className="srv-hero-anim flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/70 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-navy-800">Services</span>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-gold-600 font-bold">Accounts &amp; Bookkeeping</span>
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
                Need immediate accounting advice? Speak with our Chartered Accountants today.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all"
            >
              <span>Schedule Free Consultation</span>
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
                    src="/services/accounts-bookkeeping-hero.jpg"
                    alt="Professional Accounting and Bookkeeping"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 85vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-navy-950/90 border border-gold-400/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                      Precision Financial Administration
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white drop-shadow-md">
                      Clear, Compliant &amp; Proactive Accounting for Ambitious UK Enterprises
                    </p>
                  </div>
                </div>
              </div>

              {/* Introduction Paragraphs */}
              <div className="srv-col-anim space-y-5 text-base sm:text-lg text-navy-900/85 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950">
                    High-Precision Bookkeeping &amp; Statutory Accounting
                  </h2>
                </div>
                <p>
                  Maintaining accurate, up-to-date accounting records is the bedrock of corporate solvency, regulatory compliance, and confident commercial decision-making. At Audit Network Limited, we remove the operational burden of day-to-day financial administration, providing you with immaculate ledgers and continuous peace of mind.
                </p>
                <p>
                  Whether you are an ambitious scale-up requiring clean cloud bookkeeping, an established business preparing statutory annual filings, or an enterprise needing director-level management accounts, our qualified chartered accountants deliver reliable, cost-effective solutions tailored to your operational workflow.
                </p>
              </div>
            </div>

            {/* Interactive Tabs: Bookkeeping vs Annual Accounts vs Management Reporting */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/35 bg-white p-6 sm:p-10 shadow-xl space-y-8">
              <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab("bookkeeping")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "bookkeeping"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  01. Day-to-Day Bookkeeping
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("annual-accounts")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "annual-accounts"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  02. Statutory Annual Accounts
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("management-reports")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "management-reports"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  03. Management Reporting
                </button>
              </div>

              {/* Tab Content 1: Bookkeeping */}
              {activeTab === "bookkeeping" && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Liberate Your Time with Seamless Automated Bookkeeping
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    For business owners and finance directors, routine data entry, invoice matching, and ledger adjustments are time-consuming distractions from core commercial growth. Hiring full-time internal bookkeeping personnel can incur heavy overheads and management overhead.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Bank &amp; Credit Reconciliations</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Daily feeds connected with major UK clearing banks to maintain real-time cash balance accuracy.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Sales &amp; Purchase Ledgers</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Timely vendor payment tracking, debtor age analysis, and receipt management.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>VAT Returns &amp; MTD Compliance</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Fully reconciled Making Tax Digital (MTD) quarterly submissions direct to HMRC.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Payroll &amp; PAYE Liaison</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Harmonious journal posting between your payroll processor and trial balance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 2: Annual Accounts */}
              {activeTab === "annual-accounts" && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Punctual, Defensible Year-End Statutory Accounts
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Every UK entity registered at Companies House must prepare and file annual financial statements in strict accordance with statutory deadlines and reporting regimes. Accurate accounts protect your corporate credit rating, establish stakeholder trust, and safeguard your company from statutory penalties.
                  </p>
                  <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 text-white text-sm font-medium shadow-xl border-y border-r border-gold-400/30">
                    <p className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">Professional Standard</p>
                    <p className="text-gray-100">
                      Our chartered accounting practitioners handle full year-end drafting under FRS 102 Section 1A or FRS 105, alongside Corporation Tax (CT600) computations.
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm text-navy-900/85">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs mt-0.5">
                        ✓
                      </span>
                      <span>Full Balance Sheet, Profit &amp; Loss statements, and required disclosure notes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs mt-0.5">
                        ✓
                      </span>
                      <span>Statutory iXBRL tagged submissions to HMRC and Companies House.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs mt-0.5">
                        ✓
                      </span>
                      <span>Proactive review of tax allowances, capital expenditures, and R&amp;D incentives.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Tab Content 3: Management Reports */}
              {activeTab === "management-reports" && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Actionable Commercial Intelligence Through Monthly Management Accounts
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Looking at historical accounts once a year is like driving while only looking in the rear-view mirror. To lead confidently, business executives need dynamic monthly or quarterly management packs that reveal performance trends, profitability by service line, and cash flow forecasts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 text-center hover:border-gold-500 transition-all">
                      <span className="font-hero text-3xl font-bold text-gold-600 block mb-1">P&amp;L</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950 mb-1">Variance Analysis</p>
                      <p className="text-[11px] text-navy-800/70">Actual vs budgeted performance tracking.</p>
                    </div>
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 text-center hover:border-gold-500 transition-all">
                      <span className="font-hero text-3xl font-bold text-gold-600 block mb-1">13-WK</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950 mb-1">Cash Forecasts</p>
                      <p className="text-[11px] text-navy-800/70">Predictive liquidity and working capital modeling.</p>
                    </div>
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 text-center hover:border-gold-500 transition-all">
                      <span className="font-hero text-3xl font-bold text-gold-600 block mb-1">KPI</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950 mb-1">Boardroom Packs</p>
                      <p className="text-[11px] text-navy-800/70">Concise visual dashboards for executive committees.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Four Pillars of Excellence */}
            <div className="srv-reveal-section space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  Why Choose Audit Network Limited for Your Accounts?
                </h2>
              </div>

              <div className="srv-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
                {valuePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="srv-card-anim group rounded-2xl border border-gold-400/35 bg-white p-6 shadow-md hover:shadow-xl hover:border-gold-500 transition-all duration-300"
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
                Partner With Our Accounting Specialists
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
