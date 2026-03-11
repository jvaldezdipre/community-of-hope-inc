"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { programs } from "@/lib/constants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/Button";

const programHighlights: Record<string, string[]> = {
  "the-house": [
    "12-bed faith-based residence",
    "6–18 month program",
    "Mentoring & life skills",
    "Vocational certifications",
  ],
  "kindness-connection": [
    "Food, clothing & essentials",
    "Car repairs & housing help",
    "Open to all — no referral needed",
    "Serving all of Connecticut",
  ],
  "recovery-coaching": [
    "CCAR certified training",
    "Turn experience into a career",
    "Open to residents & community",
    "Professional credential",
  ],
  leadhership: [
    "Nonprofit peer support",
    "Shared leadership growth",
    "Cross-sector collaboration",
    "Strengthening capacity",
  ],
};

export function ProgramsOverview() {
  return (
    <>
      <motion.p
        className="text-[#5A5A5A] -mt-8 mb-12 max-w-[640px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.92rem",
          lineHeight: 1.85,
          fontWeight: 300,
        }}
      >
        Each of our programs serves a different need, but they share the same foundation — faith, dignity, and the belief that no one is beyond hope. Many of the women we serve move through more than one program on their path forward.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program, i) => (
          <motion.div
            key={program.slug}
            className="rounded-[8px] border border-[#EBEBEB] overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Image banner */}
            <div className="relative h-[200px] bg-[#FAF8F5]">
              <ImageWithFallback
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[#458CFE]/30"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.85rem",
                  }}
                >
                  {program.number}
                </span>
                <span
                  className="text-[#458CFE] uppercase"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    fontWeight: 500,
                  }}
                >
                  {program.subtitle}
                </span>
              </div>

              <h2
                className="text-[#1A1A1A] mb-3"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {program.title}
              </h2>

              <p
                className="text-[#5A5A5A] mb-5"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {program.goodFor}
              </p>

              {/* Key facts */}
              <ul className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {(programHighlights[program.slug] ?? []).map((fact) => (
                  <li
                    key={fact}
                    className="text-[#5A5A5A] pl-4 relative"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                      fontWeight: 300,
                    }}
                  >
                    <span className="absolute left-0 text-[#458CFE]">
                      &bull;
                    </span>
                    {fact}
                  </li>
                ))}
              </ul>

              <Link
                href={`/programs/${program.slug}`}
                className="text-[#458CFE] hover:underline mt-auto"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Learn more &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Not sure section */}
      <motion.section
        className="mt-16 pt-16 border-t border-[#EBEBEB]"
        style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:py-12 md:px-10 text-center">
          <h2
            className="text-[#1A1A1A] mb-3"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            Not sure which program fits?
          </h2>
          <p
            className="text-[#5A5A5A] mb-8 max-w-[520px] mx-auto"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.92rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Call us or fill out a quick form — we&apos;ll help you figure out the right next step for yourself or the person you&apos;re referring.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact">
              Contact Us
            </Button>
            <a
              href="tel:8609128983"
              className="text-[#458CFE] hover:underline"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
              }}
            >
              or call 860-912-8983
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
