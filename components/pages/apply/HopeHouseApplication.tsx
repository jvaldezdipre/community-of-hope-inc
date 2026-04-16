"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TOTAL_STEPS,
  ease,
  initialFormData,
  type ApplicationFormData,
} from "./formConstants";
import { ApplicationLanding } from "./ApplicationLanding";
import { ApplicationProgress } from "./ApplicationProgress";
import { ApplicationNav } from "./ApplicationNav";
import { Step1ContactInfo } from "./steps/Step1ContactInfo";
import { Step2PersonalInfo } from "./steps/Step2PersonalInfo";
import { Step3FamilyInfo } from "./steps/Step3FamilyInfo";
import { Step4SubstanceAbuse } from "./steps/Step4SubstanceAbuse";
import { Step5Conditions } from "./steps/Step5Conditions";
import { Step6Legal } from "./steps/Step6Legal";
import { Step7Statement } from "./steps/Step7Statement";

function encodeForNetlify(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function HopeHouseApplication() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof ApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const nextStep = () => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    scrollToTop();
  };
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    scrollToTop();
  };

  const handleSubmit = async () => {
    if (formData.affirmation !== "yes") return;
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForNetlify({
          "form-name": "hope-house-application",
          "bot-field": "",
          ...formData,
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setSubmitted(true);
      scrollToTop();
    } catch (err) {
      setError(
        "Something went wrong submitting your application. Please try again or call us directly at 860-912-4356."
      );
      console.error("Application form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!started) {
    return <ApplicationLanding onStart={() => { setStarted(true); scrollToTop(); }} />;
  }

  if (submitted) {
    return (
      <main
        className="min-h-screen bg-white pb-24"
        style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
      >
        <div className="max-w-[720px] mx-auto px-6">
          <motion.div
            className="text-center py-16"
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
            <h2
              className="text-[#1A1A1A] mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Application received.
            </h2>
            <p
              className="text-[#3D3D3D] mb-2 max-w-[480px] mx-auto"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Thank you for completing your application. Our team will review it
              and reach out to schedule an interview.
            </p>
            <p
              className="text-[#3D3D3D] mb-8 max-w-[480px] mx-auto"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              If you need to reach us sooner, call{" "}
              <a href="tel:8609124356" className="text-[#458CFE] hover:underline">
                860-912-4356
              </a>
              .
            </p>
            <a
              href="/programs/hope-house"
              className="inline-flex items-center justify-center bg-[#458CFE] text-white px-8 py-3 rounded-full hover:bg-[#3170DE] transition-colors"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              Back to Hope House
            </a>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-white pb-24"
      style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
    >
      <div className="max-w-[720px] mx-auto px-6">
        <ApplicationProgress step={step} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease }}
          >
            {step === 1 && <Step1ContactInfo formData={formData} update={update} />}
            {step === 2 && <Step2PersonalInfo formData={formData} update={update} />}
            {step === 3 && <Step3FamilyInfo formData={formData} update={update} />}
            {step === 4 && <Step4SubstanceAbuse formData={formData} update={update} />}
            {step === 5 && <Step5Conditions formData={formData} update={update} />}
            {step === 6 && <Step6Legal formData={formData} update={update} />}
            {step === 7 && <Step7Statement formData={formData} update={update} />}
          </motion.div>
        </AnimatePresence>

        {error && (
          <p
            className="text-center mt-6"
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

        <ApplicationNav
          step={step}
          onPrev={prevStep}
          onNext={nextStep}
          onBackToOverview={() => { setStarted(false); scrollToTop(); }}
          onSubmit={handleSubmit}
          submitting={submitting}
        />
      </div>
    </main>
  );
}
