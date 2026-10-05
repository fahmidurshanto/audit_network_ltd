import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HelpBannerSection from "@/components/HelpBannerSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <HelpBannerSection />
        <ServicesSection />
      </main>
    </>
  );
}


