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
        <section id="contact-section" className="bg-[#f7f6f2] py-20 px-4 sm:px-6 lg:px-8 border-t border-gold-400/20">
          <div className="mx-auto w-full max-w-7xl">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}





