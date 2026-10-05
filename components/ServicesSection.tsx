"use client";

import Link from "next/link";



interface ServiceItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "accounts-bookkeeping",
    title: "Accounts & Bookkeeping",
    description:
      "Financial reporting support under UK GAAP and IFRS, including statutory accounts preparation, consolidated reporting, management reporting and technical accounting advisory.",
    linkText: "View Accounts & Bookkeeping",
    href: "/services/accounts-bookkeeping",
    icon: (
      <svg
        className="w-10 h-10 text-navy-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {/* Calculator / Accounting Icon */}
        <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5" />
        <rect x="7" y="5" width="10" height="4" rx="1" strokeWidth="1.5" />
        <circle cx="8.5" cy="12.5" r="1" fill="currentColor" />
        <circle cx="12" cy="12.5" r="1" fill="currentColor" />
        <circle cx="15.5" cy="12.5" r="1" fill="currentColor" />
        <circle cx="8.5" cy="16" r="1" fill="currentColor" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <circle cx="15.5" cy="16" r="1" fill="currentColor" />
        <circle cx="8.5" cy="19" r="1" fill="currentColor" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
        <circle cx="15.5" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description:
      "Independent UK and Ireland audit and assurance services for companies and groups, including statutory audit, group audit, component audit, internal controls review and risk assurance.",
    linkText: "View Audit & Assurance",
    href: "/services/audit-assurance",
    icon: (
      <svg
        className="w-10 h-10 text-navy-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {/* Audit Search Document Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        />
        <circle cx="11" cy="11" r="3" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.2 13.2L16 16" />
      </svg>
    ),
  },
  {
    id: "financial-planning",
    title: "Financial Planning & Wealth Management",
    description:
      "Strategic financial planning and capital management for business owners, families, and private clients, ensuring long-term wealth protection, growth, and succession structuring.",
    linkText: "View Financial Planning",
    href: "/services/financial-planning",
    icon: (
      <svg
        className="w-10 h-10 text-navy-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {/* Growth Chart / Wealth Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v18h18M7 14l4-4 4 4 5-5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 9V4h-5"
        />
      </svg>
    ),
  },
  {
    id: "tax-services",
    title: "Tax Services",
    description:
      "UK and Ireland tax compliance and technical advisory services covering Corporation Tax, VAT, R&D tax relief, capital allowances, Patent Box, Pillar 2 / Global Minimum Tax and transfer pricing.",
    linkText: "View Tax Services",
    href: "/services/tax-services",
    icon: (
      <svg
        className="w-10 h-10 text-navy-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {/* Tax Document / Balance Scale Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m-6-6l6 6 6-6M5 7h14M3 11l4-4 4 4M13 11l4-4 4 4"
        />
      </svg>
    ),
  },
  {
    id: "advisory-services",
    title: "Advisory Services",
    description:
      "Financial and regulatory support for transactions, including buy-side financial due diligence, vendor due diligence, post-transaction reporting, growth strategy, and transaction-related regulatory filings.",
    linkText: "View Advisory Services",
    href: "/services/advisory-services",
    icon: (
      <svg
        className="w-10 h-10 text-navy-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {/* Advisory / Deal Document Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 19h.01" />
      </svg>
    ),
  },
  {
    id: "outsourced-financial-services",
    title: "Outsourced Financial Services",
    description:
      "Outsourced finance and compliance support for businesses in UK and Ireland, including bookkeeping, payroll, company secretarial work, fractional CFO services, and annual or ad hoc compliance filings.",
    linkText: "View Outsourced Services",
    href: "/services/outsourced-financial-services",
    icon: (
      <svg
        className="w-10 h-10 text-navy-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        {/* Business Process / Gear & Nodes Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative isolate bg-[#0b1b2b] py-20 sm:py-28 px-6 lg:px-8 text-navy-950"
    >

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="srv-header font-display text-sm font-semibold tracking-widest text-gold-400 uppercase mb-3">
            Our Services
          </p>
          <h2 className="srv-header text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Audit, accounting, tax and compliance services in UK and Ireland
          </h2>
          <p className="srv-header mt-5 text-base sm:text-lg leading-relaxed text-cream/80">
            A.C.T. Audit is structured around six core service areas, giving clients
            access to specialist support across recurring compliance, technical reporting
            and transaction-led requirements.
          </p>
        </div>

        {/* 3 Columns x 2 Rows Grid */}
        <div className="srv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="srv-card group flex flex-col justify-between rounded-xl bg-[#e5e4de] border border-[#d8d6cf] p-8 sm:p-9 transition-all duration-300 hover:bg-[#eae8e2] hover:border-gold-500/40 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-navy-900/5 group-hover:bg-gold-400/20 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold tracking-tight text-navy-950 mb-3 group-hover:text-navy-900 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-navy-950/75 mb-8">
                  {service.description}
                </p>
              </div>

              {/* Action Link / Button */}
              <div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white/70 px-5 py-2.5 text-xs font-semibold text-navy-900 shadow-sm transition-all duration-200 hover:bg-navy-900 hover:text-white hover:border-navy-900 group/btn"
                >
                  <span>{service.linkText}</span>
                  <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
