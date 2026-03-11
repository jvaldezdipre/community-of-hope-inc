"use client";

import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const impactItems = [
  { amount: "$25", description: "Provides a week of meals for a resident" },
  { amount: "$100", description: "Covers certification and job training supplies" },
  { amount: "$500", description: "Sponsors one month of housing at Hope House" },
];

export function DonatePage() {
  return (
    <>
      {/* Two giving option cards */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-24">
        {/* Zeffy — primary */}
        <motion.div
          className="bg-white border-2 border-[#458CFE]/30 rounded-[8px] p-8 shadow-[0_4px_24px_rgba(69,140,254,0.08)] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
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
            100% of your donation goes directly to our mission. No platform
            fees, no processing fees.
          </p>
          <Button variant="primary" href="#" className="inline-flex mt-auto">
            Donate via Zeffy
          </Button>
        </motion.div>

        {/* PayPal */}
        <motion.div
          className="bg-white border border-[#EBEBEB] rounded-[8px] p-8 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
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

      {/* Impact section */}
      <motion.section
        className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] px-6 py-12 md:py-16 mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.h2
          className="text-[#1A1A1A] text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          Your generosity in action.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {impactItems.map((item, i) => (
            <motion.div
              key={item.amount}
              className="text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut" }}
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
      </motion.section>

      {/* Trust footer */}
      <motion.div
        className="text-center pb-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
          Community of Hope Inc. is a registered 501(c)(3) public charity. All
          donations are tax-deductible to the fullest extent of the law.
        </p>
      </motion.div>
    </>
  );
}
