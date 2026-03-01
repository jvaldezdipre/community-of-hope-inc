"use client";

import { motion } from "motion/react";
import { differentiators } from "@/lib/constants";

export function WhyUs() {
  return (
    <section
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 140px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-[520px]">
          <motion.span
            className="block text-[#458CFE] uppercase mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              fontWeight: 500,
            }}
          >
            Why Community of Hope
          </motion.span>
          <motion.h2
            className="text-[#1A1A1A]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              lineHeight: 1.2,
              fontWeight: 400,
            }}
          >
            Not just sober living.
            <br />A place to become whole.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.number}
              className="relative border-t border-[#DDD8D1] py-10 md:py-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <span
                className="absolute top-6 right-0 text-[#458CFE]/[0.05] select-none pointer-events-none"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "7rem",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </span>

              <div className="relative">
                <span
                  className="block text-[#458CFE]/40 mb-4"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    fontWeight: 500,
                  }}
                >
                  {item.number}
                </span>
                <h3
                  className="text-[#1A1A1A] mb-3"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#5A5A5A] max-w-[420px]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.85,
                    fontWeight: 300,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
