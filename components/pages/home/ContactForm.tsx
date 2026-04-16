"use client";

import { useState } from "react";
import { Phone, Clock, Shield } from "lucide-react";
import { motion } from "motion/react";
import { contactTypeOptions } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type ContactFormProps = {
  /** When true, renders only the form card (no section wrapper, no left column). For use on /contact page. */
  variant?: "default" | "standalone";
};

function encodeForNetlify(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForNetlify({
          "form-name": "contact",
          "bot-field": "",
          ...formData,
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setSubmitted(true);
    } catch (err) {
      setError(
        "Something went wrong sending your message. Please try again or call us directly at 860-912-4356."
      );
      console.error("Contact form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const badges = [
    {
      icon: <Clock size={18} className="text-[#458CFE]" />,
      title: "Response within 24 hours",
      subtitle: "Urgent situations receive same-day attention",
    },
    {
      icon: <Shield size={18} className="text-[#458CFE]" />,
      title: "Confidential & compassionate",
      subtitle: "Your information is secure and never shared",
    },
    {
      icon: <Phone size={18} className="text-[#458CFE]" />,
      title: "Prefer to talk?",
      subtitle: "call",
    },
  ];

  const formCard = (
    <motion.div
      className="bg-[#FAF8F5] rounded-[8px] p-8 md:p-10"
      initial={{ opacity: 0, y: variant === "standalone" ? 20 : 50 }}
      {...(variant === "standalone"
        ? { animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut" } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] } })}
    >
            {submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-16 h-16 rounded-full bg-[#458CFE]/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#458CFE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="text-[#1A1A1A] mb-3"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                  }}
                >
                  Message received.
                </h3>
                <p
                  className="text-[#3D3D3D]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.96rem",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  We&apos;ll be in touch within 24 hours.
                  <br />
                  For urgent needs, call{" "}
                  <a href="tel:8609124356" className="text-[#458CFE]">
                    860-912-4356
                  </a>
                  .
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="mb-6">
                  <label
                    className="block text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
                    placeholder="Full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label
                      className="block text-[#1A1A1A] mb-2"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#1A1A1A] mb-2"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                    }}
                  >
                    I am...
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#458CFE]/40 transition-colors appearance-none"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
                  >
                    <option value="" disabled>
                      Select one...
                    </option>
                    {contactTypeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label
                    className="block text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                    }}
                  >
                    Message{" "}
                    <span className="text-[#ADADAD]" style={{ fontWeight: 300 }}>
                      (optional)
                    </span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors resize-none"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
                    placeholder="Tell us a little about your situation or how you'd like to help..."
                  />
                </div>

                <Button type="submit" variant="primaryFull" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                {error && (
                  <p
                    className="text-center mt-4"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 400,
                      color: "#C53030",
                    }}
                  >
                    {error}
                  </p>
                )}

                <p
                  className="text-center text-[#ADADAD] mt-4"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.84rem",
                    fontWeight: 300,
                  }}
                >
                  Your information is confidential and secure.
                </p>
              </form>
            )}
    </motion.div>
  );

  if (variant === "standalone") {
    return formCard;
  }

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
            <span
              className="block text-[#458CFE] uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                fontWeight: 500,
              }}
            >
              Get In Touch
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
              Ready to reach out?
              <br />
              We&apos;re here for you.
            </h2>
            <p
              className="text-[#3D3D3D] mb-10 max-w-[420px]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Whether you&apos;re seeking help for yourself, referring a client, or want
              to support our mission, fill out this form or call us directly. There&apos;s
              no wrong way to start.
            </p>

            <div className="flex flex-col gap-5">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.title}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: "easeOut" }}
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
                      {badge.subtitle === "call" ? (
                        <>
                          Call{" "}
                          <a href="tel:8609124356" className="text-[#458CFE] hover:underline">
                            860-912-4356
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

          {formCard}
        </div>
      </div>
    </section>
  );
}
