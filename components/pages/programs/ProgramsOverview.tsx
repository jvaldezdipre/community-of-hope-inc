"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { programs, type Program } from "@/lib/constants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

function ProgramBlock({ program, index }: { program: Program; index: number }) {
  return (
    <motion.div
      key={program.slug}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        index % 2 !== 0 ? "md:[direction:rtl]" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[#458CFE]/30"
            style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.85rem" }}
          >
            {program.number}
          </span>
          <span
            className="text-[#458CFE] uppercase"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            {program.subtitle}
          </span>
        </div>
        <h2
          className="text-[#1A1A1A] mb-4"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          {program.title}
        </h2>
        <p
          className="text-[#5A5A5A] mb-6"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.92rem",
            lineHeight: 1.85,
            fontWeight: 300,
          }}
        >
          {program.description}
        </p>
        <div className="bg-[#458CFE]/5 rounded-[6px] p-5 mb-6">
          <span
            className="block text-[#458CFE] uppercase mb-2"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            This is for you if
          </span>
          <p
            className="text-[#4A4A4A]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            {program.goodFor}
          </p>
        </div>
        <Link
          href={`/programs/${program.slug}`}
          className="text-[#458CFE] hover:underline"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 500,
          }}
        >
          Learn more →
        </Link>
      </div>
      <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
        <ImageWithFallback
          src={program.image}
          alt={program.title}
          className="w-full h-[320px] md:h-[400px] object-cover rounded-[8px]"
        />
      </div>
    </motion.div>
  );
}

export function ProgramsOverview() {
  return (
    <div className="flex flex-col gap-20">
      {programs.map((program, index) => (
        <ProgramBlock key={program.slug} program={program} index={index} />
      ))}
    </div>
  );
}
