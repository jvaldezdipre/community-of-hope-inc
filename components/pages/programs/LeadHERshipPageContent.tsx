"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getProgramBySlug } from "@/lib/constants";

const NOMINATIONS_FORM_URL =
  "https://docs.google.com/forms/d/1Zgi7z06LejTq1k5eHz4iYgyhcWW9Tnb0ahidj2urrlU/viewform";

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

export function LeadHERshipPageContent({
  puckContent,
}: {
  puckContent?: React.ReactNode;
} = {}) {
  const program = getProgramBySlug("leadherships")!;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: "LeadHerships", href: "/programs/leadherships" },
        ]}
      />
      <main className="min-h-screen pb-24 bg-white" style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}>
        {puckContent}
        {!puckContent && (
        <>
        {/* ─── Hero with background image ────────────────── */}
        <section
          className="relative bg-white overflow-hidden"
          style={{
            minHeight: "clamp(420px, 50vw, 580px)",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/LeadHERships-Facebook Banner Design - Edited.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div
            className="relative max-w-[1200px] mx-auto px-6 flex items-center"
            style={{
              paddingTop: "clamp(48px, 6vw, 80px)",
              paddingBottom: "clamp(48px, 6vw, 80px)",
              minHeight: "clamp(420px, 50vw, 580px)",
            }}
          >
            <motion.div
              className="max-w-[560px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span
                className="block text-[#458CFE] uppercase mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                A Community of Hope Initiative
              </span>
              <h1 className="mb-5">
                <img
                  src="/leadhership-logo .png"
                  alt="LeadHerships"
                  className="h-[150px] md:h-[200px] w-auto object-contain mix-blend-multiply"
                />
              </h1>
              <p
                className="text-[#3A3A3A] mb-4 italic"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;Inspiring, Elevating, and Empowering all women to have a seat at the table&rdquo;
              </p>
              <p
                className="text-[#3D3D3D] mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                LeadHerships is an initiative of Community of Hope designed to
                honor and empower women who are actively serving others. While we
                spotlight women, we also uplift the organizations that stand
                beside them to build stronger, more compassionate communities.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  as="a"
                  href={NOMINATIONS_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nominate an Honoree
                </Button>
                <a
                  href="tel:8609124356"
                  className="flex items-center gap-2 text-[#458CFE] hover:underline"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                  }}
                >
                  <Phone size={15} strokeWidth={1.5} />
                  860-912-4356
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        </>
        )}

        {/* ─── Back link ──────────────────────────────────── */}
        <section className="bg-white pb-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <p
              className="pt-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              <Link href="/programs" className="text-[#458CFE] hover:underline">
                &larr; Back to Programs
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
