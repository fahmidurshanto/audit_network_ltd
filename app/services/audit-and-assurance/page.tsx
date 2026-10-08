"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const subServices = [
  {
    title: "Statutory Audit",
    desc: "Rigorous, independent examination of year-end financial accounts in full compliance with UK Companies Act 2006, International Standards on Auditing (UK) and relevant reporting frameworks.",
    badge: "Compliance & Governance",
  },
  {
    title: "Group & Consolidation Audit",
    desc: "Seamless group audit coordination across parent companies, subsidiaries, and complex multi-layered structures, ensuring consolidated accuracy and harmonious stakeholder confidence.",
    badge: "Multi-Entity Oversight",
  },
  {
    title: "Component Audit",
    desc: "Targeted audit and assurance for UK operating components or overseas group reporting packs feeding into broader global consolidation engagements.",
    badge: "Cross-Border Reporting",
  },
  {
    title: "Internal Controls Review",
    desc: "Detailed diagnostic evaluations of your governance frameworks, transactional workflows, and internal segregation of duties to uncover vulnerabilities and mitigate fraud.",
    badge: "Operational Resilience",
  },
  {
    title: "Risk & Regulatory Assurance",
    desc: "Specialist assurance assignments for regulated sectors, grant recipients, financial covenants, and institutional lenders requiring independent third-party certification.",
    badge: "Strategic Assurance",
  },
];

const auditTriggers = [
  "Your company has crossed statutory turnover or asset thresholds requiring a mandatory audit.",
  "Institutional lenders, investors, or venture capital partners request independent assurance before funding.",
  "Shareholders, non-executive directors, or audit committees require objective verification of management accounts.",
  "Preparing for cross-border expansion, merger, acquisition, or restructuring.",
];

const processSteps = [
  {
    step: "01",
    title: "Review & Risk Scoping",
    desc: "We analyze your entity structure, accounting systems, operational controls, and filing timetables to establish a transparent, tailored audit strategy.",
  },
  {
    step: "02",
    title: "Planning & Coordination",
    desc: "Our directors agree clear deliverables, milestone dates, and PBC (Provided by Client) checklists to ensure seamless execution with minimal disruption to your team.",
  },
  {
    step: "03",
    title: "Testing & Substantive Audit",
    desc: "Rigorous field testing, sample verification, and technical standard reviews led by experienced qualified Chartered Certified Accountants and Registered Auditors.",
  },
  {
    step: "04",
    title: "Delivery & Boardroom Insights",
    desc: "Final audit report sign-off accompanied by an insightful Management Letter highlighting constructive control enhancements, tax allowances, and risk mitigations.",
  },
];

export default function AuditAndAssurancePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Navbar />

      <main className="min-h-screen bg-[#fbfaf7] text-navy-950 pt-28 sm:pt-36 pb-20">
        {/* =========================================================================
            1. HEADER BREADCRUMB BANNER (Executive Navy & Metallic Gold Ambient Glow)
        ========================================================================= */}
        <section className="relative px-6 lg:px-8 py-12 sm:py-16 border-b border-gold-400/30 bg-gradient-to-b from-white via-[#fcfbfa] to-[#f6f3ea]">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[360px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(212,175,102,0.22)_0%,transparent_70%)]" />

          <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="aud-hero-anim inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gradient-to-r from-gold-500/15 via-gold-400/20 to-gold-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700 shadow-sm mb-4">
                <span className="h-2 w-2 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(212,175,102,0.8)]" />
                <span>Statutory Practice</span>
              </div>
              <h1 className="aud-hero-anim font-hero text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-navy-950 font-medium">
                Audit &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-[#b8903c]">Assurance</span>
              </h1>
            </div>

            <div className="aud-hero-anim flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800/70 pb-1">
              <Link href="/" className="hover:text-gold-600 transition-colors">
                Home
              </Link>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-navy-800">Services</span>
              <span className="text-gold-500">&rsaquo;</span>
              <span className="text-gold-600 font-bold">Audit &amp; Assurance</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. TOP EXECUTIVE CONSULTATION BAR (Navy & Gold Contrast)
        ========================================================================= */}
        <section className="border-b border-gold-400/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 px-6 py-4 sm:py-5 text-white shadow-inner">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(212,175,102,0.9)] animate-pulse" />
              <p className="text-xs sm:text-sm font-medium text-gray-200">
                Registered Auditors providing partner-led statutory and group assurance across the UK and Ireland.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all"
            >
              <span>Schedule Audit Consultation</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN CONTENT (Executive Presentation)
        ========================================================================= */}
        <section className="px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl space-y-16">
            {/* Hero Image Showcase */}
            <div className="aud-reveal-section space-y-8">
              <div className="aud-col-anim relative group overflow-hidden rounded-3xl border-2 border-gold-400/40 bg-white p-2.5 shadow-2xl shadow-navy-950/10">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/services/audit-hero.jpg"
                    alt="Audit and Assurance Services London"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 85vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-navy-950/90 border border-gold-400/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
                      Independent Technical Excellence
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white drop-shadow-md">
                      Objective Judgment, Robust Scrutiny &amp; Enhanced Stakeholder Trust
                    </p>
                  </div>
                </div>
              </div>

              {/* Introductory Copy */}
              <div className="aud-col-anim space-y-5 text-base sm:text-lg text-navy-900/85 leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950">
                    Independent Audit Grounded in Professional Integrity
                  </h2>
                </div>
                <p>
                  Audit Network Limited is an independent UK firm of Chartered Certified Accountants and Registered Auditors. Since 2009, we have provided comprehensive audit and assurance services designed to strengthen financial transparency, enhance corporate governance, and give boards, shareholders, and lenders absolute confidence in reported numbers.
                </p>
                <div className="rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-7 text-white font-medium shadow-xl border-y border-r border-gold-400/30">
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-1">Our Core Commitment</p>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-100">
                    An effective audit should never feel like a tick-box compliance routine. We use our audit findings to uncover valuable operational insights, strengthen internal controls, and build long-term business resilience.
                  </p>
                </div>
              </div>
            </div>

            {/* Who This Service Is For & Typical Triggers */}
            <div className="aud-reveal-section grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="aud-col-anim rounded-3xl border border-gold-400/35 bg-white p-8 shadow-lg space-y-4 hover:border-gold-500/60 transition-all">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 bg-gold-50/80 border border-gold-400/30 rounded-full px-3 py-1">
                  Target Audience
                </span>
                <h3 className="font-display text-2xl font-semibold text-navy-950">
                  Who This Service Is For
                </h3>
                <p className="text-sm text-navy-900/80 leading-relaxed">
                  Our audit solutions are tailored for businesses of every scale requiring dependable, director-led assurance:
                </p>
                <ul className="space-y-3 text-sm text-navy-900/85 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>Mid-market and large companies requiring statutory year-end audit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>Corporate groups with UK subsidiaries and overseas parent entities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>Ambitious enterprises preparing for sale, investment, or banking facilities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>Non-profits, academies, and regulated entities with specialized audits.</span>
                  </li>
                </ul>
              </div>

              <div className="aud-col-anim rounded-3xl border border-gold-400/35 bg-white p-8 shadow-lg space-y-4 hover:border-gold-500/60 transition-all">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 bg-gold-50/80 border border-gold-400/30 rounded-full px-3 py-1">
                  Operational Needs
                </span>
                <h3 className="font-display text-2xl font-semibold text-navy-950">
                  Typical Triggers
                </h3>
                <p className="text-sm text-navy-900/80 leading-relaxed">
                  Common situations where organizations engage Audit Network Limited for specialist support:
                </p>
                <ul className="space-y-3 text-sm text-navy-900/85 pt-1">
                  {auditTriggers.map((trig, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center font-bold text-[10px] mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{trig}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Services in this Area (Cards) */}
            <div className="aud-reveal-section space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-950">
                  Services Across Audit &amp; Assurance
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subServices.map((srv) => (
                  <div
                    key={srv.title}
                    className="group rounded-2xl border border-gold-400/35 bg-white p-6 shadow-md hover:shadow-xl hover:border-gold-500 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3 py-1 mb-3">
                        {srv.badge}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-850/75 leading-relaxed mb-4">
                        {srv.desc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gold-600 group-hover:text-gold-700">
                      <span>Director-Led Engagement</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process (Review -> Plan -> Deliver) */}
            <div className="aud-reveal-section space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/80 border border-gold-400/40 rounded-full px-3.5 py-1 mb-3">
                  Structured Methodology
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950">
                  How We Deliver Your Audit
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((stp) => (
                  <div
                    key={stp.step}
                    className="relative rounded-2xl border border-gold-400/35 bg-white p-6 shadow-md hover:shadow-xl hover:border-gold-500/60 transition-all duration-300 space-y-3"
                  >
                    <span className="font-hero text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 block leading-none">
                      {stp.step}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-navy-950">
                      {stp.title}
                    </h3>
                    <p className="text-xs text-navy-850/75 leading-relaxed">
                      {stp.desc}
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
        <section className="aud-contact-anim px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-white via-[#fbfaf7] to-[#f8f6f0] border-t border-gold-400/30">
          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-gold-700 bg-gold-50/90 border border-gold-400/40 rounded-full px-3.5 py-1 mb-3">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-navy-950 tracking-tight">
                Speak to Our Registered Auditors
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
