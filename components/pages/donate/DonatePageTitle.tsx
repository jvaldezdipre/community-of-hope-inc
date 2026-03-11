"use client";

import { motion } from "motion/react";

export function DonatePageTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h1
        className="text-[#1A1A1A] mb-4"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        Donate
      </h1>
      <p
        className="text-[#5A5A5A] mb-16 max-w-[640px]"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          fontWeight: 300,
        }}
      >
        Every gift helps a woman rebuild her life. Your donation goes directly to Hope House, Kindness Connection, and our recovery programs.
      </p>
    </motion.div>
  );
}
