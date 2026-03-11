"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { aboutDetails } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white overflow-hidden"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_420px] gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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
              About Us
            </span>
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Built on faith.
              <br />
              Driven by love.
            </h2>
            <p
              className="text-[#5A5A5A] mb-5"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Community of Hope Inc. was founded over 15 years ago with one belief:
              every woman — no matter how broken, how lost, how far gone — deserves a
              real chance at a new life. Under the leadership of Executive Director
              Annette Eldridge, we&apos;ve grown from a single home into a comprehensive
              recovery and community outreach organization.
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
              Hope House is more than a program — it&apos;s a family. Women share meals,
              hold each other accountable, and walk together through the hardest season
              of their lives. Our approach combines faith-based mentoring, life skills
              development, vocational training, and genuine community.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-[#EBEBEB]">
              {aboutDetails.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                >
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
                </motion.div>
              ))}
            </div>

            <p
              className="mt-8"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              <Link href="/about" className="text-[#458CFE] hover:underline">
                Learn our story, watch our video, and meet our team →
              </Link>
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full rounded-[8px] overflow-hidden bg-black" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/Xs3JhtwBFSE?start=267"
                title="Community of Hope video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-6 p-6 bg-[#FAF8F5] rounded-[8px] border border-[#EBEBEB]">
              <p
                className="text-[#1A1A1A] italic"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                &quot;We don&apos;t just help women survive. We help them become who they were
                always meant to be.&quot;
              </p>
              <span
                className="text-[#5A5A5A] mt-2 block"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                }}
              >
                — Annette Eldridge, Executive Director
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
