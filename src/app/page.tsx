import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}
