"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF8F5]" style={{ padding: "clamp(80px, 10vw, 160px) 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[360px_1fr] gap-12 md:gap-20">
          <motion.div
            className="md:sticky md:top-32 md:self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="block text-[#458CFE] uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                fontWeight: 500,
              }}
            >
              Common Questions
            </span>
            <h2
              className="text-[#1A1A1A] mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Everything you need to know.
            </h2>
            <p
              className="text-[#5A5A5A]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Still have questions? Call us at{" "}
              <a href="tel:8609128983" className="text-[#458CFE] hover:underline">
                860-912-8983
              </a>{" "}
              or send a message through our form below.
            </p>
          </motion.div>

          <div>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`border-b border-[#EBEBEB] ${index === 0 ? "border-t" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                <button
                  type="button"
                  className="w-full py-6 flex items-start justify-between gap-4 text-left cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span
                    className="text-[#1A1A1A]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.98rem",
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    className="text-[#458CFE] shrink-0 mt-0.5"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p
                          className="text-[#5A5A5A] max-w-[560px]"
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.9rem",
                            lineHeight: 1.85,
                            fontWeight: 300,
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
