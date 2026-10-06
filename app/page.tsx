import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HelpBannerSection from "@/components/HelpBannerSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <HelpBannerSection />
        <ServicesSection />
        <ReviewsSection />

        {/* Contact Form Section */}
        <section id="contact-section" className="bg-[#0b1b2b] py-20 px-4 sm:px-6 lg:px-8 border-t border-navy-800/40">
          <div className="mx-auto max-w-4xl">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}





