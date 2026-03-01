"use client";

import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function MidCTA() {
  return (
    <section className="bg-[#458CFE] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3
            className="text-white mb-2"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            Need to refer a client or find help for someone you love?
          </h3>
          <p
            className="text-white/60"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
          >
            We&apos;re here 24/7. Call us or fill out our referral form below.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 shrink-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <Button href="tel:8609128983" variant="primaryOnWhiteWithGap">
            <Phone size={16} />
            Call Now
          </Button>
          <Button href="#contact" variant="outlineOnBlueWithGap">
            Refer Someone
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
