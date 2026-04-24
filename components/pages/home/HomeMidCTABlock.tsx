"use client";

import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function HomeMidCTABlock({
  heading,
  subheading,
  primaryButtonLabel,
  primaryButtonHref,
  primaryButtonIsPhone,
  secondaryButtonLabel,
  secondaryButtonHref,
}: {
  heading: string;
  subheading: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  primaryButtonIsPhone: boolean;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}) {
  return (
    <section className="bg-[#458CFE] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {heading && (
            <h3
              className="text-white mb-2"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              {heading}
            </h3>
          )}
          {subheading && (
            <p
              className="text-white/60"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              {subheading}
            </p>
          )}
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 shrink-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          {primaryButtonLabel && primaryButtonHref && (
            <Button href={primaryButtonHref} variant="primaryOnWhiteWithGap">
              {primaryButtonIsPhone && <Phone size={16} />}
              {primaryButtonLabel}
            </Button>
          )}
          {secondaryButtonLabel && secondaryButtonHref && (
            <Button href={secondaryButtonHref} variant="outlineOnBlueWithGap">
              {secondaryButtonLabel}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
