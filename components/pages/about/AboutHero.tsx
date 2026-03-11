"use client";

import { motion } from "motion/react";
import { aboutStory, aboutMilestones } from "@/lib/constants";

const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/Xs3JhtwBFSE?start=267";

export function AboutHero() {
  return (
    <section>
      <motion.p
        className="text-[#5A5A5A] mb-10 max-w-[640px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.9,
          fontWeight: 300,
        }}
      >
        Community of Hope Inc. was founded over 15 years ago with one belief:
        every woman — no matter how broken, how lost, how far gone — deserves a
        real chance at a new life. Under the leadership of Executive Director
        Annette Eldridge, we&apos;ve grown from a single home into a
        comprehensive recovery and community outreach organization.
      </motion.p>

      <div className="grid md:grid-cols-[1fr_400px] gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className="text-[#5A5A5A] mb-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            {aboutStory}
          </p>
          <div className="flex flex-wrap gap-8">
            {aboutMilestones.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              >
                <span
                  className="block text-[#458CFE] mb-1"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="text-[#5A5A5A]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative w-full rounded-[8px] overflow-hidden bg-black"
          style={{ paddingBottom: "56.25%" }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Community of Hope video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
