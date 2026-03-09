import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { programs } from "@/lib/constants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const description =
  "Hope House recovery home, The Kindness Connection community outreach, and CCAR Recovery Coach certification. Three ways we serve women and families in southeastern Connecticut.";

export const metadata: Metadata = {
  title: "Programs",
  description,
};

export default function ProgramsPage() {
  return (
    <>
      <WebPageJsonLd
        name="Programs | Community of Hope Inc."
        description={description}
        path="/programs"
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
          Our Programs
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
          Three ways we serve. One mission of restoration. Explore Hope House, The Kindness Connection, and our CCAR Recovery Coach training.
        </p>
        <div className="flex flex-col gap-20">
          {programs.map((program, index) => (
            <div
              key={program.number}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                index % 2 !== 0 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[#458CFE]/30"
                    style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.85rem" }}
                  >
                    {program.number}
                  </span>
                  <span
                    className="text-[#458CFE] uppercase"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      fontWeight: 500,
                    }}
                  >
                    {program.subtitle}
                  </span>
                </div>
                <h2
                  className="text-[#1A1A1A] mb-4"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {program.title}
                </h2>
                <p
                  className="text-[#5A5A5A] mb-6"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.85,
                    fontWeight: 300,
                  }}
                >
                  {program.description}
                </p>
                <div className="bg-[#458CFE]/5 rounded-[6px] p-5">
                  <span
                    className="block text-[#458CFE] uppercase mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      fontWeight: 500,
                    }}
                  >
                    This is for you if
                  </span>
                  <p
                    className="text-[#4A4A4A]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {program.goodFor}
                  </p>
                </div>
              </div>
              <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-[320px] md:h-[400px] object-cover rounded-[8px]"
                />
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
