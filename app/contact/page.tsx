import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/pages/home/ContactForm";

const description =
  "Contact Community of Hope Inc. in Groton, CT. Reach us by phone, form, or visit. Main line 860-912-8983, Kindness Connection 860-856-5655. We're here to help.";

export const metadata: Metadata = {
  title: "Contact",
  description,
};

export default function ContactPage() {
  return (
    <>
      <WebPageJsonLd
        name="Contact | Community of Hope Inc."
        description={description}
        path="/contact"
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
          Contact Us
        </h1>
        <p
          className="text-[#5A5A5A] mb-12 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Whether you&apos;re seeking help, making a referral, or want to get involved — we&apos;re here. Fill out the form below or call us.
        </p>

        <div className="grid md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-start">
          <div className="min-w-0">
            <ContactForm variant="standalone" />
          </div>
          <aside className="bg-[#FAF8F5] rounded-[8px] border border-[#EBEBEB] p-6 md:p-8 md:sticky md:top-[140px]">
            <span
              className="block text-[#458CFE] uppercase mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              Reach us directly
            </span>
            <div className="flex flex-col gap-6">
              <div>
                <span
                  className="block text-[#1A1A1A] mb-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                  }}
                >
                  Main
                </span>
                <a
                  href="tel:8609128983"
                  className="text-[#458CFE] hover:underline transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
                >
                  860-912-8983
                </a>
              </div>
              <div>
                <span
                  className="block text-[#1A1A1A] mb-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                  }}
                >
                  Kindness Connection
                </span>
                <a
                  href="tel:8608565655"
                  className="text-[#458CFE] hover:underline transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
                >
                  860-856-5655
                </a>
              </div>
            </div>
          </aside>
        </div>
      </PageLayout>
    </>
  );
}
