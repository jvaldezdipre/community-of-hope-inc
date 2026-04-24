"use client";

import { motion } from "motion/react";

export type HomeWhyUsItem = {
  number: string;
  title: string;
  description: string;
};

export function HomeWhyUsBlock({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: HomeWhyUsItem[];
}) {
  return (
    <section
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 140px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {(eyebrow || heading) && (
          <div className="mb-16 md:mb-20 max-w-[520px]">
            {eyebrow && (
              <motion.span
                className="block text-[#458CFE] uppercase mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                className="text-[#1A1A1A] whitespace-pre-line"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
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

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {items.map((item, index) => (
            <motion.div
              key={`why-${index}`}
              className="relative border-t border-[#DDD8D1] py-10 md:py-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {item.number && (
                <span
                  className="absolute top-6 right-0 text-[#458CFE]/[0.05] select-none pointer-events-none"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "7rem",
                    lineHeight: 1,
                  }}
                >
                  {item.number}
                </span>
              )}

              <div className="relative">
                {item.number && (
                  <span
                    className="block text-[#458CFE]/40 mb-4"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      fontWeight: 500,
                    }}
                  >
                    {item.number}
                  </span>
                )}
                {item.title && (
                  <h3
                    className="text-[#1A1A1A] mb-3"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p
                    className="text-[#3D3D3D] max-w-[420px]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.96rem",
                      lineHeight: 1.85,
                      fontWeight: 300,
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
