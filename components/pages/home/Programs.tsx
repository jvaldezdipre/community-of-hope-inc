"use client";

import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { motion } from "motion/react";
import { programs } from "@/lib/constants";

export function Programs() {
  return (
    <section
      id="programs"
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 md:mb-20">
          <motion.span
            className="block text-[#458CFE] uppercase mb-4"
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
            Our Programs
          </motion.span>
          <motion.h2
            className="text-[#1A1A1A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              lineHeight: 1.2,
              fontWeight: 400,
            }}
          >
            Four ways we serve.
            <br />
            One mission of restoration.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-20">
          {programs.map((program, index) => (
            <div
              key={program.slug}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                index % 2 !== 0 ? "md:[direction:rtl]" : ""
              }`}
            >
              <motion.div
                className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className="flex items-center gap-3 mb-4">
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
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      fontWeight: 500,
                    }}
                  >
                    {program.subtitle}
                  </span>
                </div>
                <h3
                  className="text-[#1A1A1A] mb-4"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {program.title}
                </h3>
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
                <Link
                  href={`/programs/${program.slug}`}
                  className="text-[#458CFE] hover:underline mt-2 inline-block"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  Learn more →
                </Link>
              </motion.div>
              <motion.div
                className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-[320px] md:h-[400px] object-cover rounded-[8px]"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
