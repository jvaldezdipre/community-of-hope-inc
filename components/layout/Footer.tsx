"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { footerQuickLinks, footerServiceAreas } from "@/lib/constants";
import { SocialIcons, type SocialLinksShape } from "@/components/ui/SocialIcons";

const DEFAULT_LOGO = "/coh-logo.png";

export function Footer({
  socialLinks,
  logoUrl,
}: {
  socialLinks?: SocialLinksShape;
  logoUrl?: string;
}) {
  const resolvedLogo = logoUrl?.trim() || DEFAULT_LOGO;
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolvedLogo}
                alt="Community of Hope"
                className="h-9 w-auto max-w-[140px] object-contain shrink-0"
              />
              <span
                className="text-white"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1rem",
                }}
              >
                Community of Hope
              </span>
            </div>
            <p
              className="text-white/58 max-w-[280px]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
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
              className="block text-white/58 uppercase mb-4"
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
                href="tel:8609124356"
                className="text-white/82 hover:text-white transition-colors"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                }}
              >
                860-912-4356
              </a>
              <span
                className="text-white/82"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                }}
              >
                Kindness Connection: 860-856-5655
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span
              className="block text-white/58 uppercase mb-4"
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
                  className="text-white/82 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
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
              className="block text-white/58 uppercase mb-4"
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
                  className="text-white/82"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-white/8">
          <span
            className="text-white/58 uppercase"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            Follow Us
          </span>
          <SocialIcons variant="dark" links={socialLinks} />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span
            className="text-white/45"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.84rem",
              fontWeight: 300,
            }}
          >
            Community of Hope Inc. &middot; 501(c)(3) Public Charity &middot; EIN
            26-0109933
          </span>
          <span
            className="text-white/35"
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
