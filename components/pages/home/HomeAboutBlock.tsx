"use client";

import Link from "next/link";
import { motion } from "motion/react";

export type HomeAboutDetail = {
  label: string;
  value: string;
};

export function HomeAboutBlock({
  eyebrow,
  heading,
  bodyParagraph1,
  bodyParagraph2,
  details,
  linkLabel,
  linkHref,
  videoEmbedUrl,
  videoTitle,
  pullQuote,
  pullQuoteAttribution,
}: {
  eyebrow: string;
  heading: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
  details: HomeAboutDetail[];
  linkLabel: string;
  linkHref: string;
  videoEmbedUrl: string;
  videoTitle: string;
  pullQuote: string;
  pullQuoteAttribution: string;
}) {
  return (
    <section
      id="about"
      className="bg-white overflow-hidden"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_420px] gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {eyebrow && (
              <span
                className="block text-[#458CFE] uppercase mb-4"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2
                className="text-[#1A1A1A] mb-6 whitespace-pre-line"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                {heading}
              </h2>
            )}
            {bodyParagraph1 && (
              <p
                className="text-[#3D3D3D] mb-5"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                {bodyParagraph1}
              </p>
            )}
            {bodyParagraph2 && (
              <p
                className="text-[#3D3D3D] mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                {bodyParagraph2}
              </p>
            )}

            {details.length > 0 && (
              <div className="flex flex-wrap gap-6 pt-6 border-t border-[#EBEBEB]">
                {details.map((item, i) => (
                  <motion.div
                    key={`detail-${i}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  >
                    <span
                      className="block text-[#1A1A1A]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[#3D3D3D]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                      }}
                    >
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {linkLabel && linkHref && (
              <p
                className="mt-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                <Link href={linkHref} className="text-[#458CFE] hover:underline">
                  {linkLabel} &rarr;
                </Link>
              </p>
            )}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {videoEmbedUrl && (
              <div
                className="relative w-full rounded-[8px] overflow-hidden bg-black"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={videoEmbedUrl}
                  title={videoTitle || "About video"}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
            {(pullQuote || pullQuoteAttribution) && (
              <div className="mt-6 p-6 bg-[#FAF8F5] rounded-[8px] border border-[#EBEBEB]">
                {pullQuote && (
                  <p
                    className="text-[#1A1A1A] italic"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;{pullQuote}&rdquo;
                  </p>
                )}
                {pullQuoteAttribution && (
                  <span
                    className="text-[#3D3D3D] mt-2 block"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.84rem",
                      fontWeight: 300,
                    }}
                  >
                    &mdash; {pullQuoteAttribution}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
