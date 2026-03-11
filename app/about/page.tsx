import type { Metadata } from "next";
import Link from "next/link";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { AboutPageTitle } from "@/components/pages/about/AboutPageTitle";
import { AboutHero } from "@/components/pages/about/AboutHero";
import { AboutLeadership } from "@/components/pages/about/AboutLeadership";
import { AboutPartners } from "@/components/pages/about/AboutPartners";
import { AboutTrustFooter } from "@/components/pages/about/AboutTrustFooter";

const description =
  "Community of Hope Inc. is a faith-based nonprofit in Groton, CT. Learn about our 15+ years of service, Hope House, Executive Director Annette Eldridge, and our mission to restore hope and rebuild lives.";

export const metadata: Metadata = {
  title: "About Us",
  description,
};

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd
        name="About Us | Community of Hope Inc."
        description={description}
        path="/about"
      />
      <main className="min-h-screen" style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}>
        {/* White — Title + Story */}
        <div className="max-w-[1200px] mx-auto px-6 pb-16">
          <AboutPageTitle />
          <AboutHero />
        </div>

        {/* White — Leadership */}
        <div className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <AboutLeadership />
          </div>
        </div>

        {/* White — Partners */}
        <div className="max-w-[1200px] mx-auto px-6" style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}>
          <AboutPartners />
          <AboutTrustFooter />
          <p
            className="mt-12 pb-24 text-[#5A5A5A]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            <Link href="/" className="text-[#458CFE] hover:underline">
              &larr; Back to home
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
