"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { testimonials, trustBarStats } from "@/lib/constants";

const featured = testimonials[0]; // Miss R. — strongest story
const communityVoices = testimonials.slice(1);

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

export function StoriesPageContent() {
  return (
    <main
      className="min-h-screen pb-24 bg-white"
      style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
    >
      {/* ─── Hero (white) — centered editorial opener ─────── */}
      <section className="bg-white">
        <div
          className="max-w-[1200px] mx-auto px-6"
          style={{
            paddingTop: "clamp(32px, 4vw, 48px)",
            paddingBottom: sectionPaddingLg,
          }}
        >
          <motion.div
            className="text-center max-w-[680px] mx-auto"
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
              Real Stories, Real Hope
            </span>
            <h1
              className="text-[#1A1A1A] mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Stories of Hope
            </h1>
            <p
              className="text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Behind every number is a name. Behind every name is a story of
              courage, transformation, and second chances. These are the voices
              of women who found hope, and the people who walked alongside them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Story (beige) — spotlight card ──────── */}
      <section
        className="bg-[#FAF8F5]"
        style={{ padding: `${sectionPaddingLg} 0` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="max-w-[800px] mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span
              className="block text-[#458CFE] uppercase mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              Featured Story
            </span>

            {/* Large decorative quote mark */}
            <span
              className="block text-[#458CFE]/15 leading-none mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "5rem",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p
              className="text-[#1A1A1A] italic mb-8"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                lineHeight: 1.8,
              }}
            >
              {featured.quote}
            </p>

            {/* Initials avatar + name */}
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-[#458CFE]/10 flex items-center justify-center"
              >
                <span
                  className="text-[#458CFE]"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                  }}
                >
                  {featured.initials}
                </span>
              </div>
              <div className="text-left">
                <span
                  className="block text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.96rem",
                    fontWeight: 500,
                  }}
                >
                  {featured.name}
                </span>
                <span
                  className="block text-[#3D3D3D]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                  }}
                >
                  {featured.context}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Community Voices (white) — 2-col cards ───────── */}
      <section
        className="bg-white"
        style={{ padding: `${sectionPaddingLg} 0` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Community Voices
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityVoices.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#FAF8F5] rounded-[8px] px-8 py-8 md:py-10 relative"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Quote mark */}
                <span
                  className="block text-[#458CFE]/10 leading-none mb-3"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "3.5rem",
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#1A1A1A] italic mb-6"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#458CFE]/10 flex items-center justify-center shrink-0">
                    <span
                      className="text-[#458CFE]"
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                      }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <span
                      className="block text-[#1A1A1A]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.93rem",
                        fontWeight: 500,
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="block text-[#3D3D3D]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.84rem",
                        fontWeight: 300,
                      }}
                    >
                      {t.context}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Impact By the Numbers (dark) ──────────────────── */}
      <section
        className="bg-[#0F1D33]"
        style={{ padding: `${sectionPaddingLg} 0` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              className="block text-[#8FB8FF] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                fontWeight: 500,
              }}
            >
              The Impact
            </motion.span>
            <motion.h2
              className="text-white max-w-[550px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Every number represents a life changed.
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {trustBarStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <span
                  className="block text-[#8FB8FF] mb-2"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 400,
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-white/60 whitespace-pre-line"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vision Quote (white) — centered pull quote ───── */}
      <section
        className="bg-white"
        style={{ padding: `${sectionPaddingLg} 0` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="max-w-[700px] mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[#1A1A1A] italic"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                lineHeight: 1.7,
              }}
            >
              &ldquo;We don&apos;t just give women a place to stay. We give them
              a reason to believe they can build a life worth staying for.&rdquo;
            </p>
            <span
              className="block mt-6 text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.93rem",
                fontWeight: 300,
              }}
            >
              — Community of Hope Inc.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── Share Your Story (beige) — invitation CTA ────── */}
      <section
        className="bg-[#FAF8F5]"
        style={{ padding: `${sectionPaddingLg} 0` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="max-w-[680px] mx-auto text-center">
              <span
                className="block text-[#458CFE] uppercase mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  fontWeight: 500,
                }}
              >
                Your Voice Matters
              </span>
              <h2
                className="text-[#1A1A1A] mb-4"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Have a story to share?
              </h2>
              <p
                className="text-[#3D3D3D] mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                If you&apos;re a graduate, referral partner, donor, or someone
                whose life has been touched by Community of Hope, we&apos;d
                love to hear from you. Your story could be the one that gives
                someone else the courage to reach out.
              </p>
              <Button variant="primary" as="a" href="/contact">
                Share Your Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Bottom CTA (white) — get involved ──────────── */}
      <section
        className="bg-white"
        style={{ padding: `${sectionPaddingLg} 0` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:py-12 md:px-10 text-center shadow-sm">
              <h2
                className="text-[#1A1A1A] mb-3"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Your story could be next.
              </h2>
              <p
                className="text-[#3D3D3D] mb-8 max-w-[520px] mx-auto"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.96rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                Whether you need help, want to give back, or know someone who
                could use a second chance, Community of Hope is here.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" as="a" href="/programs">
                  Explore Programs
                </Button>
                <Button variant="outlineLight" as="a" href="/donate">
                  Donate
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            <Link href="/" className="text-[#458CFE] hover:underline">
              &larr; Back to Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
