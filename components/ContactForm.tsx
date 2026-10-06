"use client";

import { useState } from "react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  isCompact?: boolean;
}

const businessSectors = [
  "Accountancy & Professional Services",
  "Financial Services & Banking",
  "Technology & Software",
  "Real Estate & Construction",
  "Retail & E-commerce",
  "Healthcare & Life Sciences",
  "Manufacturing & Engineering",
  "Charity & Non-Profit",
  "Private Client & Family Office",
  "Other",
];

export default function ContactForm({
  title = "Get in Touch with Our Specialists",
  subtitle = "Please complete the form below and indicate whether you would like us to contact you or schedule an appointment at a time convenient for you.",
  className = "",
  isCompact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    organization: "",
    country: "",
    city: "",
    postcode: "",
    businessSector: "",
    message: "",
    preferredContact: "contact", // 'contact' | 'appointment'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div
      className={`rounded-3xl border border-gold-400/20 bg-gradient-to-br from-[#0b1b2b] via-[#091523] to-[#060e18] p-6 sm:p-10 shadow-2xl text-cream ${className}`}
    >
      {/* Form Header */}
      <div className="mb-8 text-center sm:text-left">
        {title && (
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-sm sm:text-base leading-relaxed text-cream/80 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-gold-400/30 bg-gold-400/10 p-8 text-center space-y-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-950">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-white">
            Thank You for Your Enquiry
          </h3>
          <p className="text-sm text-cream/85 max-w-lg mx-auto">
            We have received your message. One of our specialist team members will review your details and be in touch shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                telephone: "",
                organization: "",
                country: "",
                city: "",
                postcode: "",
                businessSector: "",
                message: "",
                preferredContact: "contact",
              });
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-400 px-6 py-2.5 text-xs font-semibold text-gold-400 transition hover:bg-gold-400 hover:text-navy-950"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Preferred Contact Mode Toggle */}
          <div className="rounded-2xl border border-cream/10 bg-white/5 p-4 sm:p-5 mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-3">
              How can we best assist you?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  formData.preferredContact === "contact"
                    ? "border-gold-400 bg-gold-400/10 text-white"
                    : "border-cream/10 bg-transparent text-cream/70 hover:border-cream/30"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value="contact"
                  checked={formData.preferredContact === "contact"}
                  onChange={handleChange}
                  className="accent-gold-400"
                />
                <span className="text-sm font-medium">Contact me directly</span>
              </label>

              <label
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  formData.preferredContact === "appointment"
                    ? "border-gold-400 bg-gold-400/10 text-white"
                    : "border-cream/10 bg-transparent text-cream/70 hover:border-cream/30"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value="appointment"
                  checked={formData.preferredContact === "appointment"}
                  onChange={handleChange}
                  className="accent-gold-400"
                />
                <span className="text-sm font-medium">Schedule an appointment</span>
              </label>
            </div>
          </div>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-xs font-medium text-cream/80 mb-2">
                First Name <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g. John"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xs font-medium text-cream/80 mb-2">
                Last Name <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g. Smith"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
            </div>
          </div>

          {/* Email & Telephone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-cream/80 mb-2">
                Email Address <span className="text-gold-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john.smith@company.co.uk"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-xs font-medium text-cream/80 mb-2">
                Telephone <span className="text-gold-400">*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+44 20 1234 5678"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
            </div>
          </div>

          {/* Organization Name & Business Sector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="organization" className="block text-xs font-medium text-cream/80 mb-2">
                Organization Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Acme Holdings Ltd"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
            </div>

            <div>
              <label htmlFor="businessSector" className="block text-xs font-medium text-cream/80 mb-2">
                Your Business Sector
              </label>
              <select
                id="businessSector"
                name="businessSector"
                value={formData.businessSector}
                onChange={handleChange}
                className="w-full rounded-xl border border-cream/15 bg-[#0b1b2b] px-4 py-3 text-sm text-white transition focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
              >
                <option value="">Select a sector...</option>
                {businessSectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location Fields (Country, City, Postcode) */}
          <div>
            <label className="block text-xs font-medium text-cream/80 mb-2">
              Location Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country (e.g. UK)"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City (e.g. London)"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Postcode (e.g. EC1V 2NX)"
                className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-cream/80 mb-2">
              Tell us more about how we can help you... <span className="text-gold-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about your accounting, audit, tax, or advisory requirements..."
              className="w-full rounded-xl border border-cream/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-cream/30 transition focus:border-gold-400 focus:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 py-4 text-base font-semibold text-navy-950 shadow-[0_4px_25px_rgba(212,175,102,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_6px_30px_rgba(212,175,102,0.5)] disabled:opacity-60"
            >
              {loading ? (
                <span>Submitting enquiry...</span>
              ) : (
                <>
                  <span>Submit</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
