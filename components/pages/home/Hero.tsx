"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const headingLine1 = "A safe place to";
const headingLine2 = "rebuild your life.";

function AnimatedText({
  text,
  startDelay = 0,
}: {
  text: string;
  startDelay?: number;
}) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: startDelay + i * 0.035,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

export function Hero() {
  const line1Duration = headingLine1.length * 0.035 + 0.4;
  const line2Start = 0.3 + line1Duration * 0.6;
  const line2Duration = headingLine2.length * 0.035 + 0.4;
  const headingEnd = line2Start + line2Duration;

  return (
    <section className="relative bg-[#0D0D0D] overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          aria-hidden
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        {/* Dark patch to cover watermark in bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-32 h-12 bg-[#000000]"
          aria-hidden
        />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 max-w-[780px] mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          className="inline-block text-[#8FB8FF] mb-6 uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            fontWeight: 500,
          }}
        >
          Women&apos;s Recovery Home &mdash; Groton, CT
        </motion.span>

        {/* Heading with letter-by-letter animation */}
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            lineHeight: 1.12,
            fontWeight: 400,
          }}
        >
          <span className="block">
            <AnimatedText text={headingLine1} startDelay={0.3} />
          </span>
          <span className="block">
            <AnimatedText text={headingLine2} startDelay={line2Start} />
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-white/60 mb-10 max-w-[560px] mx-auto"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: headingEnd + 0.1,
            ease: "easeOut",
          }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.08rem",
            lineHeight: 1.85,
            fontWeight: 300,
          }}
        >
          Hope House is a faith-based, family-style recovery home for women
          overcoming addiction, homelessness, and domestic violence in
          southeastern Connecticut. Beds available now.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: headingEnd + 0.35,
            ease: "easeOut",
          }}
        >
          <Button href="#contact" variant="primary">
            Get Help Now
          </Button>
          <Button href="#programs" variant="outlineOnDark">
            Learn About Our Programs
          </Button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: headingEnd + 0.6,
            ease: "easeOut",
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
            }}
          >
            501(c)(3) Public Charity
          </span>
          <span className="hidden sm:inline" style={{ fontSize: "0.78rem" }}>
            /
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
            }}
          >
            15+ Years Serving CT
          </span>
          <span className="hidden sm:inline" style={{ fontSize: "0.78rem" }}>
            /
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
            }}
          >
            Faith-Based & Mentor-Driven
          </span>
        </motion.div>
      </div>
    </section>
  );
}
