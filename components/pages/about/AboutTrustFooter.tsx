"use client";

import { motion } from "motion/react";
import { footerServiceAreas } from "@/lib/constants";

export function AboutTrustFooter() {
  return (
    <section
      className="mt-16 rounded-[8px] overflow-hidden"
      style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}
    >
      <motion.div
        className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <span
              className="block text-[#458CFE] uppercase mb-2"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              Status
            </span>
            <span
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
              }}
            >
              501(c)(3) Public Charity · EIN 26-0109933
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          >
            <span
              className="block text-[#458CFE] uppercase mb-2"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              Service Area
            </span>
            <span
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
              }}
            >
              {footerServiceAreas[0]}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
          >
            <span
              className="block text-[#458CFE] uppercase mb-2"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              Phone
            </span>
            <a
              href="tel:8609128983"
              className="text-[#458CFE] hover:underline"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
              }}
            >
              860-912-8983
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
