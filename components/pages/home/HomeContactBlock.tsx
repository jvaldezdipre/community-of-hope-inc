"use client";

import { Phone, Clock, Shield } from "lucide-react";
import { motion } from "motion/react";
import { ContactForm } from "./ContactForm";

// 3 fixed badges. Icons + the third badge's phone-link behavior are locked;
// only the title/subtitle text is editable from the CMS. If a field is left
// blank, the original hardcoded copy renders so the page never looks empty.
const FALLBACK = {
  badge1Title: "Response within 24 hours",
  badge1Subtitle: "Urgent situations receive same-day attention",
  badge2Title: "Confidential & compassionate",
  badge2Subtitle: "Your information is secure and never shared",
  badge3Title: "Prefer to talk?",
};

export function HomeContactBlock({
  eyebrow,
  heading,
  body,
  phoneNumber,
  badge1Title,
  badge1Subtitle,
  badge2Title,
  badge2Subtitle,
  badge3Title,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  phoneNumber: string;
  badge1Title?: string;
  badge1Subtitle?: string;
  badge2Title?: string;
  badge2Subtitle?: string;
  badge3Title?: string;
}) {
  const telHref = phoneNumber ? `tel:${phoneNumber.replace(/[^0-9]/g, "")}` : "";

  const badges = [
    {
      icon: <Clock size={18} className="text-[#458CFE]" />,
      title: badge1Title || FALLBACK.badge1Title,
      subtitle: badge1Subtitle || FALLBACK.badge1Subtitle,
      showPhoneLink: false,
    },
    {
      icon: <Shield size={18} className="text-[#458CFE]" />,
      title: badge2Title || FALLBACK.badge2Title,
      subtitle: badge2Subtitle || FALLBACK.badge2Subtitle,
      showPhoneLink: false,
    },
    {
      icon: <Phone size={18} className="text-[#458CFE]" />,
      title: badge3Title || FALLBACK.badge3Title,
      subtitle: "",
      showPhoneLink: true,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white overflow-hidden"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_480px] gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                className="text-[#1A1A1A] mb-5 whitespace-pre-line"
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
            {body && (
              <p
                className="text-[#3D3D3D] mb-10 max-w-[420px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {body}
              </p>
            )}

            <div className="flex flex-col gap-5">
              {badges.map((badge, i) => (
                <motion.div
                  key={`badge-${i}`}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#458CFE]/8 flex items-center justify-center shrink-0">
                    {badge.icon}
                  </div>
                  <div>
                    <span
                      className="block text-[#1A1A1A]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.93rem",
                        fontWeight: 500,
                      }}
                    >
                      {badge.title}
                    </span>
                    <span
                      className="text-[#3D3D3D]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        fontWeight: 300,
                      }}
                    >
                      {badge.showPhoneLink && phoneNumber ? (
                        <>
                          Call{" "}
                          <a
                            href={telHref}
                            className="text-[#458CFE] hover:underline"
                          >
                            {phoneNumber}
                          </a>
                        </>
                      ) : (
                        badge.subtitle
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <ContactForm variant="standalone" />
        </div>
      </div>
    </section>
  );
}
