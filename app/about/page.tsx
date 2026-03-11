import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
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
      <PageLayout>
        <AboutPageTitle />
        <AboutHero />
        <AboutLeadership />
        <AboutPartners />
        <AboutTrustFooter />
        <p
          className="mt-12 text-[#5A5A5A]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          <Link href="/" className="text-[#458CFE] hover:underline">
            ← Back to home
          </Link>
        </p>
      </PageLayout>
    </>
  );
}
