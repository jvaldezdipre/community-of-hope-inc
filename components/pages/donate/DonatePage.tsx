"use client";

import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const fullBleedStyle = {
  width: "100vw",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
} as const;

const impactItems = [
  { amount: "$25", description: "Provides a week of meals for a resident" },
  { amount: "$100", description: "Covers certification and job training supplies" },
  { amount: "$500", description: "Sponsors one month of housing at Hope House" },
];

export function DonatePage() {
  return (
    <>
      {/* Hero — cream full-bleed */}
      <section
        className="bg-[#FAF8F5]"
        style={{
          ...fullBleedStyle,
          padding: "clamp(80px, 10vw, 160px) 0",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
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
            Support Our Mission
          </motion.span>
          <motion.h1
            className="text-[#1A1A1A] mb-6 max-w-[720px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Every gift helps a woman rebuild her life.
          </motion.h1>
          <motion.p
            className="text-[#5A5A5A] max-w-[640px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Your donation goes directly to Hope House, Kindness Connection, and our recovery programs. Community of Hope Inc. is a 501(c)(3) public charity — your gift is tax-deductible to the fullest extent of the law.
          </motion.p>
        </div>
      </section>

      {/* Two giving option cards */}
      <section className="max-w-[1200px] mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Card 1 — Zeffy */}
          <motion.div
            className="bg-white border-2 border-[#458CFE]/30 rounded-[8px] p-8 shadow-[0_4px_24px_rgba(69,140,254,0.08)] flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="inline-block text-[#458CFE] uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
              }}
            >
              Recommended — Zero Fees
            </span>
            <h2
              className="text-[#1A1A1A] mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.35rem, 2.2vw, 1.65rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Donate Online
            </h2>
            <p
              className="text-[#5A5A5A] mb-8 flex-1"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              100% of your donation goes directly to our mission. No platform fees, no processing fees.
            </p>
            <Button
              variant="primary"
              href="#"
              className="inline-flex mt-auto"
            >
              Donate via Zeffy
            </Button>
          </motion.div>

          {/* Card 2 — PayPal */}
          <motion.div
            className="bg-white border border-[#EBEBEB] rounded-[8px] p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h2
              className="text-[#1A1A1A] mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.35rem, 2.2vw, 1.65rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Donate via PayPal
            </h2>
            <p
              className="text-[#5A5A5A] mb-8 flex-1"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Quick and secure giving through PayPal.
            </p>
            <Button
              variant="outlineLight"
              href="https://www.paypal.com/donate/?hosted_button_id=PT3GR48DP4N9Y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-auto"
            >
              Donate via PayPal
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact section */}
      <section
        className="bg-[#458CFE]/5 px-6 pb-20 md:pb-28 pt-16 md:pt-20"
        style={{
          ...fullBleedStyle,
        }}
      >
        <div className="max-w-[1200px] mx-auto">
        <motion.h2
          className="text-[#1A1A1A] text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.6rem, 2.8vw, 2.1rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Your generosity in action.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.amount}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <span
                className="block text-[#458CFE] mb-3"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 400,
                }}
              >
                {item.amount}
              </span>
              <p
                className="text-[#5A5A5A] max-w-[260px] mx-auto"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Trust — 501(c)(3) statement (no dark background) */}
      <section
        style={{
          ...fullBleedStyle,
          padding: "clamp(80px, 10vw, 160px) 0",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heart
              size={28}
              className="text-[#458CFE]/70 mx-auto mb-6"
              strokeWidth={1.5}
              aria-hidden
            />
            <p
              className="text-[#5A5A5A] max-w-[640px] mx-auto"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Community of Hope Inc. is a registered 501(c)(3) public charity. All donations are tax-deductible to the fullest extent of the law.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
