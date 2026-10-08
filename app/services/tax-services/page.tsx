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
  { label: "Tax Services", href: "/services/tax-services", active: true },
  { label: "Advisory Services", href: "/services/advisory-services" },
  { label: "Outsourced Financial Services", href: "/services/outsourced-financial-services" },
];

const valuePillars = [
  {
    title: "Proactive HMRC Risk Mitigation",
    desc: "Rigorous statutory compliance and robust defense structures to prevent costly HMRC disputes and tax penalties.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Maximized Statutory Reliefs",
    desc: "Comprehensive identification of R&D tax incentives, Capital Allowances, and Business Property Reliefs to preserve cash flow.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transactional Precision",
    desc: "Tax-neutral group reorganizations, M&A tax due diligence, and pre-sale grooming for optimal enterprise exit value.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Private & Corporate Synergy",
    desc: "Harmonizing corporate tax strategies with high-net-worth personal tax, dividend extraction, and family estate planning.",
    icon: (
      <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0H8m4 0h4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Audit Network Limited handled our complex corporate restructuring and R&D tax claim flawlessly. Their proactive advice reduced our tax liability while ensuring full compliance with HMRC guidelines.",
    author: "Dominic Sterling",
    role: "CFO, Nexus Advanced Materials Ltd",
  },
  {
    quote:
      "Navigating IR35 and employment tax status across our contractor network was daunting until we partnered with Audit Network. Their thorough audits gave our board absolute legal peace of mind.",
    author: "Samantha Croft",
    role: "HR & Finance Director, Veloce Digital",
  },
  {
    quote:
      "When we received an aspect enquiry from HMRC regarding land VAT, Audit Network's tax specialists stepped in immediately, resolving the query without any financial penalties.",
    author: "Edward Montagu",
    role: "Managing Director, Montagu Real Estate",
  },
];

export default function TaxServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"corporate" | "rd-vat" | "employment" | "private-hmrc">("corporate");

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
                <span>Specialist Advisory</span>
              </div>
              <h1 className="srv-hero-anim font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                Tax Services &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Strategic Advisory</span>
              </h1>
            </div>

            <div className="srv-hero-anim flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/70 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-navy-800">Services</span>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-gold-600 font-bold">Tax Services</span>
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
                Facing an HMRC enquiry, year-end tax deadline, or planning a corporate transaction? Speak with our Chartered Tax Advisers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all"
            >
              <span>Consult Tax Specialist</span>
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
                    src="/services/financial-reporting.jpg"
                    alt="Corporate Tax Advisory and HMRC Compliance"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 85vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-navy-950/90 border border-gold-400/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                      Proactive Tax Optimization &amp; Defense
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white drop-shadow-md">
                      Protect Commercial Assets, Eliminate Tax Leakage &amp; Ensure Ironclad HMRC Compliance
                    </p>
                  </div>
                </div>
              </div>

              {/* Introduction Paragraphs */}
              <div className="srv-col-anim space-y-5 text-base sm:text-lg text-navy-900/85 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950">
                    Strategic Tax Planning &amp; Advisory
                  </h2>
                </div>
                <p>
                  The UK tax landscape is subject to constant legislative shifts, stricter enforcement, and complex reporting standards. For corporate entities and high-net-worth individuals, tax is not merely an annual compliance exercise—it is a central commercial factor that directly impacts profitability, cash flow, and asset value.
                </p>
                <p>
                  At Audit Network Limited, our senior tax advisers work proactively with business directors, entrepreneurs, and private clients. We deliver technical tax precision combined with commercial vision—helping you claim full statutory reliefs, execute tax-neutral corporate transactions, and defend your business against HMRC scrutiny.
                </p>
              </div>
            </div>

            {/* Audit Network Distinction / Highlight Box (Executive Navy Container) */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 sm:p-10 shadow-2xl text-white space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-gold-400" />
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  The Audit Network Tax Advantage
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Our tax specialists combine technical rigor with deep industry insight. We ensure your corporate and personal tax positions are robustly documented, defensible under audit, and optimized for sustainable growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    01
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Director-Led Counsel</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Direct access to experienced Chartered Tax Advisers (CTA) who tailor solutions to your precise commercial architecture.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    02
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Holistic Integration</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Seamless synchronization between corporate tax filings, management accounts, statutory audit, and private estate planning.
                  </p>
                </div>

                <div className="rounded-2xl border border-gold-400/30 bg-navy-900/90 p-6 space-y-2.5 shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-base">
                    03
                  </div>
                  <h4 className="font-display text-lg font-semibold text-gold-400">Defense Assurance</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Proven track record in handling HMRC enquiries, voluntary disclosures, COP8/COP9 proceedings, and technical dispute resolutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Service Categories Tabs */}
            <div className="srv-reveal-section rounded-3xl border border-gold-400/35 bg-white p-6 sm:p-10 shadow-xl space-y-8">
              <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab("corporate")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "corporate"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  01. Corporate Tax &amp; M&amp;A
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("rd-vat")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "rd-vat"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  02. R&amp;D Tax &amp; VAT
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("employment")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "employment"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  03. Employment Tax &amp; IR35
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("private-hmrc")}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "private-hmrc"
                      ? "bg-navy-950 text-gold-400 border border-gold-400/60 shadow-lg"
                      : "bg-white text-navy-800 border border-gold-400/30 hover:bg-gold-50/70 hover:text-gold-700 hover:border-gold-400"
                  }`}
                >
                  04. Private Client &amp; HMRC Defense
                </button>
              </div>

              {/* Tab 1: Corporate Tax & M&A */}
              {activeTab === "corporate" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Corporate Tax Planning, M&amp;A Due Diligence &amp; Restructuring
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    We manage your end-to-end corporate tax liabilities, identifying strategic opportunities to reduce tax leakage during annual compliance, business acquisitions, demergers, and capital investments.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Corporate Tax Compliance (CT600)</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Punctual statutory tax computation, group relief claims, loss utilization strategies, and HMRC filing.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>M&amp;A Tax Due Diligence &amp; Deal Structuring</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Pre-sale grooming, Business Asset Disposal Relief (BADR), buyer tax risk reviews, and transaction structuring.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Corporate Restructuring &amp; Demergers</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Tax-neutral group rationalization, share-for-share exchanges, and statutory clearance applications to HMRC.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500/50 transition-all">
                      <div className="flex items-center gap-2 font-semibold text-navy-950 text-sm">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs">
                          ✓
                        </span>
                        <span>Capital Allowances &amp; Property Reliefs</span>
                      </div>
                      <p className="text-xs text-navy-800/70 leading-relaxed pl-7">
                        Maximizing tax write-offs on commercial property acquisitions, plant &amp; machinery, and fixtures.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: R&D Tax & VAT */}
              {activeTab === "rd-vat" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Innovation R&amp;D Tax Reliefs, VAT &amp; Cross-Border Taxes
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Unlocking cash incentives for innovative UK enterprises while providing robust indirect tax compliance across complex UK and international supply chains.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">R&amp;D RELIEF</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Innovation Incentives</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Technical project scoping, qualifying cost extraction, and fully defensible R&amp;D claim submission under SME and RDEC schemes.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">VAT / INDIRECT</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Property &amp; Transaction VAT</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Option to tax elections, Partial Exemption (PE) calculations, commercial property acquisitions, and Making Tax Digital (MTD).
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">GLOBAL TAX</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Cross-Border Advisory</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Double tax treaties, transfer pricing documentation, withholding tax mitigation, and international expansion structuring.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Employment Tax & IR35 */}
              {activeTab === "employment" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Workforce Employment Tax, IR35 &amp; Share Schemes
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Protecting employers from payroll non-compliance while helping ambitious UK companies implement tax-efficient equity incentive schemes to retain key talent.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">IR35 COMPLIANCE</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Off-Payroll Reviews</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Contractor status determinations, CEST assessments, and workforce employment status risk management.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">EMI SCHEMES</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Share Options</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        Enterprise Management Incentives (EMI), growth share design, HMRC share valuation, and equity plan administration.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold-400/30 bg-[#fbfaf7] p-5 space-y-2 hover:border-gold-500 transition-all">
                      <span className="font-hero text-2xl font-bold text-gold-600 block mb-1">BENEFITS &amp; P11D</span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-950">Salary Sacrifice</p>
                      <p className="text-[11px] text-navy-800/70 leading-relaxed">
                        P11D filings, company car tax optimization, electric vehicle schemes, and National Minimum Wage (NMW) compliance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Private Client & HMRC Defense */}
              {activeTab === "private-hmrc" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    Private Client Tax Planning &amp; HMRC Dispute Defense
                  </h3>
                  <p className="text-base text-navy-900/80 leading-relaxed">
                    Protecting family wealth across generations while providing robust legal and technical defense during HMRC tax enquiries.
                  </p>

                  <div className="space-y-3 text-sm text-navy-900/85">
                    <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-5 space-y-1 text-white shadow-md">
                      <h4 className="font-semibold text-gold-400">Inheritance Tax (IHT) &amp; Capital Gains Tax (CGT)</h4>
                      <p className="text-xs text-gray-200">
                        Structuring Family Investment Companies (FICs), trust tax filings, 60-day CGT property reporting, and Business Property Relief (BPR).
                      </p>
                    </div>

                    <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-5 space-y-1 text-white shadow-md">
                      <h4 className="font-semibold text-gold-400">HMRC Enquiries, COP8 &amp; COP9 Defense</h4>
                      <p className="text-xs text-gray-200">
                        Full representation for aspect enquiries, voluntary tax disclosures, Code of Practice 8/9 investigations, and penalty mitigation.
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
                  Why Partner with Audit Network Limited for Tax Advisory?
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
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3.5 py-1 mb-1">Client Case Studies</span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  What Our Tax Clients Say
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
                Consult With Our Chartered Tax Specialists
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
