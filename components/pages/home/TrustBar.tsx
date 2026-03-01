"use client";

import { motion } from "motion/react";
import { trustBarStats } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="bg-white border-b border-[#EBEBEB]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#EBEBEB]">
          {trustBarStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:px-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            >
              <span
                className="block text-[#458CFE] mb-2"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 400,
                }}
              >
                {stat.number}
              </span>
              <span
                className="text-[#5A5A5A] whitespace-pre-line"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.5,
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
