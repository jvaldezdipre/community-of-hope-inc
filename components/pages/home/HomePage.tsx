import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/constants";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { WhyUs } from "./WhyUs";
import { Testimonials } from "./Testimonials";
import { MidCTA } from "./MidCTA";
import { Programs } from "./Programs";
import { AboutSection } from "./AboutSection";
import { DarkSection } from "./DarkSection";
import { FAQ } from "./FAQ";
import { ContactForm } from "./ContactForm";
import { FinalCTA } from "./FinalCTA";

export function HomePage() {
  return (
    <>
      <FAQPageJsonLd faqs={faqs} />
      <Hero />
      <TrustBar />
      <WhyUs />
      <Testimonials />
      <MidCTA />
      <Programs />
      <AboutSection />
      <DarkSection />
      <FAQ />
      <ContactForm />
      <FinalCTA />
    </>
  );
}
