"use client";

import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[#458CFE] overflow-hidden" style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <motion.h2
          className="text-white mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.25,
            fontWeight: 400,
          }}
        >
          Every woman deserves a second chance.
          <br />
          Let us be part of hers.
        </motion.h2>
        <motion.p
          className="text-white/55 mb-10 max-w-[500px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          Whether you&apos;re reaching out for help, referring a client, or supporting
          our mission — your next step matters.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <Button href="#contact" variant="primaryOnWhite">
            Get Help Now
          </Button>
          <Button href="tel:8609128983" variant="outlineOnBlueWithGap">
            <Phone size={16} />
            860-912-8983
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
