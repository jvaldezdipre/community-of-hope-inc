import Link from "next/link";
import { LogoSlot } from "./LogoSlot";

export type FeaturedPartnershipPartner = {
  name: string;
  logo: string;
};

export function SupportersFeaturedPartnership({
  eyebrow,
  headline,
  body,
  linkLabel,
  linkHref,
  partners,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  linkLabel: string;
  linkHref: string;
  partners: FeaturedPartnershipPartner[];
}) {
  return (
    <section
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[380px_1fr] gap-10 md:gap-16 items-center bg-white rounded-[8px] border border-[#EBEBEB] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col items-center gap-8">
            {partners.map((p, i) => (
              <div key={`partner-${i}`} className="flex flex-col items-center">
                <LogoSlot name={p.name} logo={p.logo || null} size="lg" />
                {!p.logo && p.name && (
                  <span
                    className="text-[#1A1A1A] text-center mt-2"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "0.95rem",
                      fontWeight: 400,
                    }}
                  >
                    {p.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div>
            {eyebrow && (
              <span
                className="block text-[#458CFE] uppercase mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  fontWeight: 500,
                }}
              >
                {eyebrow}
              </span>
            )}
            {headline && (
              <h2
                className="text-[#1A1A1A] mb-5"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {headline}
              </h2>
            )}
            {body && (
              <p
                className="text-[#3D3D3D] mb-6"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.96rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {body}
              </p>
            )}
            {linkLabel && linkHref && (
              <Link
                href={linkHref}
                className="text-[#458CFE] hover:underline"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                }}
              >
                {linkLabel} &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
