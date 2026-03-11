"use client";

import { motion } from "motion/react";
import { communityPartners } from "@/lib/constants";

export function AboutPartners() {
  return (
    <section>
      <motion.h2
        className="text-[#1A1A1A] mb-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        Community Partners
      </motion.h2>
      <motion.p
        className="text-[#5A5A5A] mb-10 max-w-[640px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        Groups we work closely with and would recommend.
      </motion.p>
      <div className="grid gap-8 sm:grid-cols-2">
        {communityPartners.map((partner, i) => (
          <motion.div
            key={partner.name}
            className="p-6 rounded-[8px] border border-[#EBEBEB] bg-[#FAFAFA]/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#458CFE] hover:underline block mb-3"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              {partner.name}
            </a>
            <p
              className="text-[#5A5A5A] m-0"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              {partner.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
