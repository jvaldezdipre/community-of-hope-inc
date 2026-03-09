import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { aboutDetails } from "@/lib/constants";

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
        <h1
          className="text-[#1A1A1A] mb-4"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          About Us
        </h1>
        <p
          className="text-[#458CFE] uppercase mb-6"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            fontWeight: 500,
          }}
        >
          Built on faith. Driven by love.
        </p>
        <div className="prose prose-neutral max-w-none">
          <p
            className="text-[#5A5A5A] mb-5"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Community of Hope Inc. was founded over 15 years ago with one belief: every woman — no matter how broken, how lost, how far gone — deserves a real chance at a new life. Under the leadership of Executive Director Annette Eldridge, we&apos;ve grown from a single home into a comprehensive recovery and community outreach organization.
          </p>
          <p
            className="text-[#5A5A5A] mb-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Hope House is more than a program — it&apos;s a family. Women share meals, hold each other accountable, and walk together through the hardest season of their lives. Our approach combines faith-based mentoring, life skills development, vocational training, and genuine community.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 pt-6 border-t border-[#EBEBEB]">
          {aboutDetails.map((item) => (
            <div key={item.label}>
              <span
                className="block text-[#1A1A1A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
              <span
                className="text-[#5A5A5A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <p
          className="mt-10 text-[#5A5A5A]"
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
