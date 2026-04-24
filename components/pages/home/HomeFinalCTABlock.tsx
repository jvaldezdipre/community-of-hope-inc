"use client";

import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function HomeFinalCTABlock({
  heading,
  body,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  secondaryButtonIsPhone,
}: {
  heading: string;
  body: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  secondaryButtonIsPhone: boolean;
}) {
  return (
    <section
      className="bg-[#458CFE] overflow-hidden"
      style={{ padding: "clamp(60px, 8vw, 100px) 0" }}
    >
      <div className="max-w-[800px] mx-auto px-6 text-center">
        {heading && (
          <motion.h2
            className="text-white mb-4 whitespace-pre-line"
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
            {heading}
          </motion.h2>
        )}
        {body && (
          <motion.p
            className="text-white/55 mb-10 max-w-[500px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            {body}
          </motion.p>
        )}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          {primaryButtonLabel && primaryButtonHref && (
            <Button href={primaryButtonHref} variant="primaryOnWhite">
              {primaryButtonLabel}
            </Button>
          )}
          {secondaryButtonLabel && secondaryButtonHref && (
            <Button href={secondaryButtonHref} variant="outlineOnBlueWithGap">
              {secondaryButtonIsPhone && <Phone size={16} />}
              {secondaryButtonLabel}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
