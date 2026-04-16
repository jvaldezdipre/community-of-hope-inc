"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Shield, Heart, Clock } from "lucide-react";
import { ease, sectionPaddingLg } from "./formConstants";

type ApplicationLandingProps = {
  onStart: () => void;
};

export function ApplicationLanding({ onStart }: ApplicationLandingProps) {
  return (
    <main
      className="min-h-screen bg-white pb-24"
      style={{ paddingTop: "clamp(100px, 12vw, 160px)" }}
    >
      {/* Hero */}
      <section className="bg-white">
        <div
          className="max-w-[1200px] mx-auto px-6"
          style={{ paddingTop: "clamp(32px, 4vw, 48px)", paddingBottom: sectionPaddingLg }}
        >
          <motion.div
            className="text-center max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
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
              Hope House Admission
            </span>
            <h1
              className="text-[#1A1A1A] mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Apply to Hope House
            </h1>
            <p
              className="text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Hope House is a 12-bed, faith-based recovery residence for women 18
              and older. This application is the first step toward safe housing,
              mentoring, and a fresh start. It takes about 15 to 20 minutes to
              complete. Your information is confidential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eligibility + Zero Tolerance */}
      <section className="bg-[#FAF8F5]" style={{ padding: `${sectionPaddingLg} 0` }}>
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h2
              className="text-[#1A1A1A] mb-8 text-center"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Before you begin
            </h2>

            {/* Eligibility */}
            <div className="bg-white rounded-[8px] border border-[#EBEBEB] p-6 md:p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#458CFE]/8 flex items-center justify-center shrink-0">
                  <Heart size={16} className="text-[#458CFE]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                  }}
                >
                  To be eligible
                </h3>
              </div>
              <p
                className="text-[#3D3D3D]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                A woman (18 or older) needs to provide proof that she has been
                sober from all forms of substance abuse and has the desire to
                live a sober, productive lifestyle. You must be ready to leave
                your old life behind and focus entirely on your recovery and
                personal growth. No relationships allowed during the program.
              </p>
            </div>

            {/* Zero Tolerance */}
            <div className="bg-white rounded-[8px] border border-[#EBEBEB] p-6 md:p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#458CFE]/8 flex items-center justify-center shrink-0">
                  <Shield size={16} className="text-[#458CFE]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                  }}
                >
                  Two zero tolerance rules
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p
                    className="text-[#1A1A1A] mb-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    Sobriety
                  </p>
                  <p
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.93rem",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    Using any substance, legal or not, is not allowed on premises
                    or while in residence. Testing is conducted regularly, and
                    residents who are found using or refuse a test will be asked
                    to leave.
                  </p>
                </div>
                <div>
                  <p
                    className="text-[#1A1A1A] mb-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    Peace
                  </p>
                  <p
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.93rem",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    Peace is an integral part of recovery. Anyone who does not
                    promote peace or who disturbs the peaceful atmosphere of the
                    home may not stay.
                  </p>
                </div>
              </div>
            </div>

            {/* Time estimate */}
            <div className="bg-white rounded-[8px] border border-[#EBEBEB] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#458CFE]/8 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#458CFE]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                  }}
                >
                  What to expect
                </h3>
              </div>
              <p
                className="text-[#3D3D3D]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.93rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                This application has 7 sections and takes about 15 to 20 minutes
                to complete. It must be completed by the applicant without
                assistance. Your information is confidential. After you submit,
                we will review your application and call you to schedule an
                interview.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center justify-center bg-[#458CFE] text-white px-10 py-4 rounded-full hover:bg-[#3170DE] transition-colors"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              I Understand — Start Application
            </button>
            <p
              className="text-[#ADADAD] mt-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.84rem",
                fontWeight: 300,
              }}
            >
              Prefer to talk first?{" "}
              <a href="tel:8609124356" className="text-[#458CFE] hover:underline">
                Call 860-912-4356
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back link */}
      <section className="bg-white pt-12">
        <div className="max-w-[800px] mx-auto px-6">
          <Link
            href="/programs/hope-house"
            className="text-[#458CFE] hover:underline"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
          >
            &larr; Back to Hope House
          </Link>
        </div>
      </section>
    </main>
  );
}
