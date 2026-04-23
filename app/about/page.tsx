import type { Metadata } from "next";
import Link from "next/link";
import { Render } from "@measured/puck/rsc";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { AboutTrustFooter } from "@/components/pages/about/AboutTrustFooter";
import { getPageContent } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Community of Hope Inc. is a faith-based nonprofit in Groton, CT. Learn about our 15+ years of service, Hope House, Executive Director Annette Eldridge, and our mission to restore hope and rebuild lives.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const pageData = await getPageContent("about");

  return (
    <>
      <WebPageJsonLd
        name="About Us | Community of Hope Inc."
        description={description}
        path="/about"
      />
      <main className="min-h-screen" style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}>
        {/* Hero + Leadership + Partners: all CMS-editable via Puck */}
        <div className="max-w-[1200px] mx-auto px-6">
          <Render config={puckConfig} data={pageData} />
        </div>

        {/* Trust footer + back link (not yet CMS-wrapped) */}
        <div className="max-w-[1200px] mx-auto px-6">
          <AboutTrustFooter />
          <p
            className="mt-12 pb-24 text-[#3D3D3D]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
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
