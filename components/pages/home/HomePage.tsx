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

export function HomePage({
  puckContent,
}: {
  puckContent?: React.ReactNode;
} = {}) {
  // All 11 sections are CMS-managed. If the home row hasn't been seeded yet,
  // fall back to the full hardcoded page so the site never looks empty.
  if (puckContent) {
    return <>{puckContent}</>;
  }

  return (
    <>
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
