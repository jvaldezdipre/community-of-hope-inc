import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { ShareStoryForm } from "@/components/pages/share-story/ShareStoryForm";

export const metadata: Metadata = {
  title: "Share Your Story",
  description:
    "Share your Hope House story with us. Your words may encourage another woman to take her first step.",
  alternates: { canonical: "/share-story" },
  robots: { index: false, follow: false },
};

export default function ShareStoryPage() {
  return (
    <PageLayout>
      <div className="max-w-[720px] mx-auto">
        <span
          className="block text-[#458CFE] uppercase mb-4"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            fontWeight: 500,
          }}
        >
          Your Story Matters
        </span>
        <h1
          className="text-[#1A1A1A] mb-5"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 400,
            lineHeight: 1.25,
          }}
        >
          Share your story.
        </h1>
        <p
          className="text-[#3D3D3D] mb-10"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.85,
            fontWeight: 300,
          }}
        >
          Your words may be exactly what another woman needs to take her first
          step. Write as much or as little as feels right &mdash; there are no
          right answers, only your truth. We&apos;ll review what you send before
          anything is published, and nothing goes public without your permission.
        </p>

        <ShareStoryForm />
      </div>
    </PageLayout>
  );
}
