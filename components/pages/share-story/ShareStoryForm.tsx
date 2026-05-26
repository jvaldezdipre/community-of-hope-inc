"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import { notifyNetlifyForm } from "@/lib/notifyNetlify";

const relationshipOptions: { value: string; label: string }[] = [
  { value: "alumna", label: "Hope House alumna" },
  { value: "resident", label: "Current Hope House resident" },
  { value: "family", label: "Family member" },
  { value: "partner", label: "Partner organization" },
  { value: "supporter", label: "Donor or supporter" },
];

function ShareStoryFormInner() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    submitterName: "",
    relationship: "",
    email: "",
    phone: "",
    quote: "",
    consentToPublish: false,
    consentToUseName: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check — silently accept bot submissions without touching the DB
    if (honeypot) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!formData.consentToPublish) {
      setError(
        "We can only accept your story when you give us permission to share it. Please check the consent box to continue."
      );
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const { error: insertErr } = await supabase.from("testimonials").insert({
        submitter_name: formData.submitterName,
        relationship: formData.relationship,
        email: formData.email || null,
        phone: formData.phone || null,
        quote: formData.quote,
        consent_to_publish: formData.consentToPublish,
        consent_to_use_name: formData.consentToUseName,
        status: "pending",
        source: token ? "invitation" : "public_form",
        invitation_token: token || null,
        created_by: "website",
        is_new: true,
        pii_class: "standard",
      });
      if (insertErr) throw insertErr;
      void notifyNetlifyForm("testimonial-submission", {
        submitterName: formData.submitterName,
        relationship: formData.relationship,
        email: formData.email,
        phone: formData.phone,
        quote: formData.quote,
        consentToPublish: formData.consentToPublish,
        consentToUseName: formData.consentToUseName,
        source: token ? "invitation" : "public_form",
      });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(
        "Something went wrong sending your story. Please try again or call us directly at 860-912-4356."
      );
      console.error("Share story form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="bg-[#FAF8F5] rounded-[8px] p-8 md:p-12 text-center"
        initial={{ opacity: 0, scale: 0.96 }}
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
        <h2
          className="text-[#1A1A1A] mb-4"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)",
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          Thank you for trusting us with your story.
        </h2>
        <p
          className="text-[#3D3D3D] max-w-[480px] mx-auto"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.96rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          We&apos;ve received what you sent. Someone from our team will read it
          carefully and reach out if we have any questions. Nothing will be
          published without your permission.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-[#FAF8F5] rounded-[8px] p-8 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {token && (
        <div
          className="mb-6 p-4 rounded-[6px] bg-[#458CFE]/8 border border-[#458CFE]/20"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.88rem",
            lineHeight: 1.65,
            fontWeight: 300,
            color: "#3D3D3D",
          }}
        >
          This form came from a personal invitation from our team. Thank you for
          taking the time.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Honeypot — hidden from humans, bots fill it */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
          <label>
            Website (leave this empty)
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
            />
          </label>
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
            Your name
          </label>
          <input
            type="text"
            required
            value={formData.submitterName}
            onChange={(e) =>
              setFormData({ ...formData, submitterName: e.target.value })
            }
            className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
            placeholder="Full name or first name"
          />
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
            How you&apos;re connected to Community of Hope
          </label>
          <select
            required
            value={formData.relationship}
            onChange={(e) =>
              setFormData({ ...formData, relationship: e.target.value })
            }
            className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#458CFE]/40 transition-colors appearance-none"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
          >
            <option value="" disabled>
              Select one...
            </option>
            {relationshipOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
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
              Email{" "}
              <span className="text-[#ADADAD]" style={{ fontWeight: 300 }}>
                (optional)
              </span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
              }}
              placeholder="So we can follow up if needed"
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
              Phone{" "}
              <span className="text-[#ADADAD]" style={{ fontWeight: 300 }}>
                (optional)
              </span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
              }}
              placeholder="Phone number"
            />
          </div>
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
            Your story
          </label>
          <p
            className="text-[#6B6B6B] mb-3"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.84rem",
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            What was your life like when you came to Hope House? What changed?
            Where are you now? Share as much or as little as you want.
          </p>
          <textarea
            rows={10}
            required
            value={formData.quote}
            onChange={(e) =>
              setFormData({ ...formData, quote: e.target.value })
            }
            className="w-full bg-white border border-[#EBEBEB] rounded-[6px] px-4 py-3 text-[#1A1A1A] placeholder:text-[#ADADAD] focus:outline-none focus:border-[#458CFE]/40 transition-colors resize-y"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
            placeholder="Write in your own words..."
          />
        </div>

        <div className="mb-8 p-5 rounded-[6px] bg-white border border-[#EBEBEB]">
          <h3
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            Your permission
          </h3>

          <label className="flex items-start gap-3 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consentToPublish}
              onChange={(e) =>
                setFormData({ ...formData, consentToPublish: e.target.checked })
              }
              className="mt-1 w-4 h-4 rounded border-[#EBEBEB] accent-[#458CFE] shrink-0"
            />
            <span
              className="text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              <span style={{ fontWeight: 500, color: "#1A1A1A" }}>
                I give Community of Hope permission to share my story publicly
              </span>{" "}
              &mdash; on the website, in newsletters, or in materials that
              encourage other women.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consentToUseName}
              onChange={(e) =>
                setFormData({ ...formData, consentToUseName: e.target.checked })
              }
              className="mt-1 w-4 h-4 rounded border-[#EBEBEB] accent-[#458CFE] shrink-0"
            />
            <span
              className="text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              <span style={{ fontWeight: 500, color: "#1A1A1A" }}>
                It&apos;s OK to use my name
              </span>{" "}
              alongside my story. If you leave this unchecked, we&apos;ll keep
              you anonymous (e.g., &ldquo;a 2025 Hope House alumna&rdquo;).
            </span>
          </label>
        </div>

        <Button type="submit" variant="primaryFull" disabled={submitting}>
          {submitting ? "Sending..." : "Share My Story"}
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
          className="text-center text-[#ADADAD] mt-6"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.82rem",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Your information is confidential. Nothing is published without your
          explicit permission.
        </p>
      </form>
    </motion.div>
  );
}

export function ShareStoryForm() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#FAF8F5] rounded-[8px] p-8 md:p-10 min-h-[400px]" />
      }
    >
      <ShareStoryFormInner />
    </Suspense>
  );
}
