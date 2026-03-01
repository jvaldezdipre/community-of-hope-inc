"use client";

import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
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
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1707409066859-a90674383d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBmcmllbmRzaGlwJTIwc3VwcG9ydCUyMGVtYnJhY2V8ZW58MXx8fHwxNzcyMzc3MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community of Hope women supporting each other"
              className="w-full h-[400px] md:h-[520px] object-cover rounded-[8px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-[8px]">
              <p
                className="text-white/90 italic"
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
                className="text-white/50 mt-2 block"
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
