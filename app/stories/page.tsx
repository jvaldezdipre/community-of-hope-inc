import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { testimonials } from "@/lib/constants";

const description =
  "Read real stories from Hope House graduates, referral partners, and women who rebuilt their lives with Community of Hope Inc. in Groton, CT.";

export const metadata: Metadata = {
  title: "Stories",
  description,
};

export default function StoriesPage() {
  return (
    <>
      <WebPageJsonLd
        name="Stories | Community of Hope Inc."
        description={description}
        path="/stories"
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
          Stories
        </h1>
        <p
          className="text-[#5A5A5A] mb-16 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Real voices from women who found hope, referral partners who trust us, and graduates who are now giving back.
        </p>
        <div className="flex flex-col gap-12">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="pl-6 border-l-4 border-[#458CFE]/30 py-2"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <p
                className="text-[#1A1A1A] mb-4 italic"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                &quot;{t.quote}&quot;
              </p>
              <footer className="text-[#5A5A5A]" style={{ fontSize: "0.88rem", fontWeight: 300 }}>
                — {t.name}, {t.context}
              </footer>
            </blockquote>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
