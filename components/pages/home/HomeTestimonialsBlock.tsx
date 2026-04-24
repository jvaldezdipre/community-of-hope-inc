"use client";

import { motion } from "motion/react";

export type HomeTestimonial = {
  quote: string;
  name: string;
  context: string;
  initials: string;
};

function TestimonialCard({ t }: { t: HomeTestimonial }) {
  return (
    <div className="w-[340px] flex-shrink-0 border border-[#EBEBEB] rounded-[8px] p-8 md:p-10 flex flex-col">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, j) => (
          <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#458CFE">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {t.quote && (
        <p
          className="text-[#4A4A4A] flex-1 mb-8"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.96rem",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          &quot;{t.quote}&quot;
        </p>
      )}

      <div className="flex items-center gap-3 pt-6 border-t border-[#EBEBEB]">
        <div className="w-10 h-10 rounded-full bg-[#458CFE]/10 flex items-center justify-center">
          <span
            className="text-[#458CFE]"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.75rem",
            }}
          >
            {t.initials}
          </span>
        </div>
        <div>
          {t.name && (
            <span
              className="block text-[#1A1A1A]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.93rem",
                fontWeight: 500,
              }}
            >
              {t.name}
            </span>
          )}
          {t.context && (
            <span
              className="block text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.84rem",
                fontWeight: 300,
              }}
            >
              {t.context}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function HomeTestimonialsBlock({
  eyebrow,
  heading,
  testimonials,
}: {
  eyebrow: string;
  heading: string;
  testimonials: HomeTestimonial[];
}) {
  // Marquee duplicates the list so the -50% translate loops seamlessly.
  const marquee = testimonials.length > 0 ? [...testimonials, ...testimonials] : [];

  return (
    <section
      id="testimonials"
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {(eyebrow || heading) && (
          <div className="text-center mb-16 md:mb-20">
            {eyebrow && (
              <motion.span
                className="block text-[#458CFE] uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                {eyebrow}
              </motion.span>
            )}
            {heading && (
              <motion.h2
                className="text-[#1A1A1A] max-w-[600px] mx-auto whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                {heading}
              </motion.h2>
            )}
          </div>
        )}
      </div>

      {marquee.length > 0 && (
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 35,
            }}
          >
            {marquee.map((t, i) => (
              <TestimonialCard key={`m-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
