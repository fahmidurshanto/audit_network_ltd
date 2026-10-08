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

    const subject = encodeURIComponent(`New Enquiry from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Telephone: ${formData.telephone}
Organization: ${formData.organization || "N/A"}
Sector: ${formData.businessSector || "N/A"}
Location: ${[formData.city, formData.country, formData.postcode].filter(Boolean).join(", ") || "N/A"}
Preferred Contact: ${formData.preferredContact === "contact" ? "Direct Contact" : "Schedule Appointment"}

Message:
${formData.message}`);

    const recipientEmail = "behzad.faiz@auditnetwork.co.uk"; // Replace with your actual receiving email
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div
      className={`rounded-3xl border border-gold-400/30 bg-white p-6 sm:p-10 shadow-2xl shadow-navy-950/5 text-navy-950 ${className}`}
    >
      {/* Form Header */}
      <div className="mb-8 text-center sm:text-left">
        {title && (
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-navy-950 mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-sm sm:text-base leading-relaxed text-navy-800/80 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-gold-400/40 bg-gold-400/10 p-8 text-center space-y-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-950 shadow-md">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-semibold text-navy-950">
            Thank You for Your Enquiry
          </h3>
          <p className="text-sm text-navy-850/85 max-w-lg mx-auto">
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
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy-950 bg-navy-950 px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Preferred Contact Mode Toggle */}
          <div className="rounded-2xl border border-gray-200 bg-[#fbfaf7] p-4 sm:p-5 mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gold-600 mb-3">
              How can we best assist you?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  formData.preferredContact === "contact"
                    ? "border-gold-500 bg-white shadow-sm text-navy-950 font-semibold"
                    : "border-gray-200 bg-transparent text-navy-800/70 hover:border-gold-400/50"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value="contact"
                  checked={formData.preferredContact === "contact"}
                  onChange={handleChange}
                  className="accent-gold-500"
                />
                <span className="text-sm">Contact me directly</span>
              </label>

              <label
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  formData.preferredContact === "appointment"
                    ? "border-gold-500 bg-white shadow-sm text-navy-950 font-semibold"
                    : "border-gray-200 bg-transparent text-navy-800/70 hover:border-gold-400/50"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value="appointment"
                  checked={formData.preferredContact === "appointment"}
                  onChange={handleChange}
                  className="accent-gold-500"
                />
                <span className="text-sm">Schedule an appointment</span>
              </label>
            </div>
          </div>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-xs font-medium text-navy-900 mb-2">
                First Name <span className="text-gold-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g. John"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xs font-medium text-navy-900 mb-2">
                Last Name <span className="text-gold-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g. Smith"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Email & Telephone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-navy-900 mb-2">
                Email Address <span className="text-gold-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john.smith@company.co.uk"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-xs font-medium text-navy-900 mb-2">
                Telephone <span className="text-gold-600">*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+44 20 1234 5678"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Organization Name & Business Sector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="organization" className="block text-xs font-medium text-navy-900 mb-2">
                Organization Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Acme Holdings Ltd"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <div>
              <label htmlFor="businessSector" className="block text-xs font-medium text-navy-900 mb-2">
                Your Business Sector
              </label>
              <select
                id="businessSector"
                name="businessSector"
                value={formData.businessSector}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
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
            <label className="block text-xs font-medium text-navy-900 mb-2">
              Location Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country (e.g. UK)"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City (e.g. London)"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Postcode (e.g. EC1V 2NX)"
                className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-navy-900 mb-2">
              Tell us more about how we can help you... <span className="text-gold-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about your accounting, audit, tax, or advisory requirements..."
              className="w-full rounded-xl border border-gray-200 bg-[#fbfaf7] px-4 py-3 text-sm text-navy-950 placeholder-gray-400 transition focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-navy-900 to-navy-950 text-white border border-gold-400/40 py-4 text-base font-semibold shadow-[0_4px_20px_rgba(11,27,43,0.15)] transition-all hover:bg-gold-500 hover:from-gold-400 hover:to-gold-500 hover:text-navy-950 hover:shadow-[0_6px_30px_rgba(212,175,102,0.4)] disabled:opacity-60"
            >
              {loading ? (
                <span>Submitting enquiry...</span>
              ) : (
                <>
                  <span>Submit Enquiry</span>
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
