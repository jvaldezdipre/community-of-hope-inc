"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { footerQuickLinks, footerServiceAreas } from "@/lib/constants";

export function Footer() {
  return (
    <motion.footer
      className="bg-[#0F1D33] border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1fr_auto_auto_auto] gap-10 md:gap-16 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/coh-logo.png"
                alt="Community of Hope"
                width={36}
                height={36}
                className="h-9 w-9 object-contain shrink-0"
              />
              <span
                className="text-white"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "0.95rem",
                }}
              >
                Community of Hope
              </span>
            </div>
            <p
              className="text-white/40 max-w-[280px]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              A faith-based nonprofit dedicated to restoring hope and rebuilding lives
              for women in southeastern Connecticut.
            </p>
          </div>

          {/* Contact */}
          <div>
            <span
              className="block text-white/40 uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              Contact
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="tel:8609128983"
                className="text-white/70 hover:text-white transition-colors"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                }}
              >
                860-912-8983
              </a>
              <span
                className="text-white/70"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                }}
              >
                Kindness Connection: 860-856-5655
              </span>
              <span
                className="text-white/70"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                }}
              >
                20 Grove Ave, Groton, CT 06340
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span
              className="block text-white/40 uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              Quick Links
            </span>
            <div className="flex flex-col gap-2">
              {footerQuickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div>
            <span
              className="block text-white/40 uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              We Serve
            </span>
            <div className="flex flex-col gap-2">
              {footerServiceAreas.map((area) => (
                <span
                  key={area}
                  className="text-white/70"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span
            className="text-white/30"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 300,
            }}
          >
            Community of Hope Inc. &middot; 501(c)(3) Public Charity &middot; EIN
            26-0109933
          </span>
          <span
            className="text-white/20"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 300,
            }}
          >
            Website by Developed Motive
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
