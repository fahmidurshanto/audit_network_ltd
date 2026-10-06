import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Audit Network Ltd",
  description:
    "Get in touch with Audit Network Ltd for specialist support across audit, accounting, tax, and advisory requirements in the UK and Ireland.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0b1b2b] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
