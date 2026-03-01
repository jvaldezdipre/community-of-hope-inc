"use client";

import { motion } from "motion/react";
import { processSteps } from "@/lib/constants";

export function DarkSection() {
  return (
    <section className="bg-[#0F1D33]" style={{ padding: "clamp(80px, 10vw, 160px) 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            className="block text-[#8FB8FF] uppercase mb-4"
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
            How It Works
          </motion.span>
          <motion.h2
            className="text-white max-w-[550px] mx-auto"
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
            From your first call to a brand new life.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-0 h-[1px] bg-white/10" />
              )}
              <div className="text-center">
                <motion.span
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#8FB8FF]/30 text-[#8FB8FF] mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.3rem",
                  }}
                >
                  {step.number}
                </motion.span>
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/50 max-w-[260px] mx-auto"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
