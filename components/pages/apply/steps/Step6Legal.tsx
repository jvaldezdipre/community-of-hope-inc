"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { inputBase, inputFont, labelStyle, labelClass, ease, type StepProps } from "../formConstants";

const INCOME_SOURCES = [
  "A veteran's disability payment",
  "Alimony",
  "Other spousal support",
  "Annuities",
  "Child support",
  "Contributions from other people",
  "Dividends (investments)",
  "Earned/Employee income",
  "Food stamps",
  "General assistance",
  "HUSKY/S-CHIP",
  "Savings / Interest (Bank)",
  "Medicaid",
  "Medicare",
  "No financial resources",
  "Other",
  "Other TANF-Funded Services",
  "Pension from a former job",
  "Pension/retirement",
  "Private disability insurance",
  "Railroad retirement",
  "Rental income",
  "Retirement disability",
  "Retirement income from Social Security",
  "SAGA",
  "Section 8, public housing or rental assistance",
  "Self employment wages",
  "Special supplemental nutrition program",
  "SSDI",
  "SSI",
  "State disability",
  "TANF",
  "TANF child care services",
  "TANF transportation services",
  "Unemployment insurance/compensation",
  "Veteran's administration medical services",
  "Veteran's pension",
  "Worker's compensation",
];

export function Step6Legal({ formData, update }: StepProps) {
  const [incomeChecked, setIncomeChecked] = useState<Set<string>>(
    () => new Set(formData.incomeSources ? formData.incomeSources.split(",").map((s) => s.trim()).filter(Boolean) : [])
  );

  const toggleIncome = (source: string) => {
    const next = new Set(incomeChecked);
    if (next.has(source)) {
      next.delete(source);
    } else {
      next.add(source);
    }
    setIncomeChecked(next);
    update("incomeSources", Array.from(next).join(", "));
  };

  return (
    <div>
      <h2
        className="text-[#1A1A1A] mb-2"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        Legal, Education &amp; Employment
      </h2>
      <p
        className="text-[#3D3D3D] mb-8"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        Almost there. This section covers your legal history, education, work experience, and income.
      </p>

      <div className="flex flex-col gap-6">
        {/* ─── Legal Matters ──────────────────────────────── */}
        <span
          className="block text-[#458CFE] uppercase"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            fontWeight: 500,
          }}
        >
          Legal Matters
        </span>

        <div>
          <label className={labelClass} style={labelStyle}>
            Do you have any outstanding warrants or current charges pending?
          </label>
          <textarea
            rows={2}
            value={formData.outstandingWarrants}
            onChange={(e) => update("outstandingWarrants", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Describe any outstanding warrants or pending charges"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Have you ever been arrested?
          </label>
          <div className="flex items-center gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="everArrested"
                value="yes"
                checked={formData.everArrested === "yes"}
                onChange={(e) => update("everArrested", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="everArrested"
                value="no"
                checked={formData.everArrested === "no"}
                onChange={(e) => update("everArrested", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
            </label>
          </div>
        </div>

        {formData.everArrested === "yes" && (
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div>
              <label className={labelClass} style={labelStyle}>
                What were the charges and convictions?
              </label>
              <textarea
                rows={2}
                value={formData.chargesConvictions}
                onChange={(e) => update("chargesConvictions", e.target.value)}
                className={`${inputBase} resize-none`}
                style={inputFont}
                placeholder="Charges and convictions"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={labelStyle}>
                  Arrest Date
                </label>
                <input
                  type="date"
                  value={formData.arrestDate}
                  onChange={(e) => update("arrestDate", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>
                  Sentence (years &amp; months)
                </label>
                <input
                  type="text"
                  value={formData.sentence}
                  onChange={(e) => update("sentence", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                  placeholder="e.g. 2 years, 6 months"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={labelStyle}>
                  Parole or Probation Time
                </label>
                <input
                  type="text"
                  value={formData.paroleTime}
                  onChange={(e) => update("paroleTime", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                  placeholder="Duration"
                />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>
                  Parole/Probation Officer Name &amp; Phone
                </label>
                <input
                  type="text"
                  value={formData.paroleOfficer}
                  onChange={(e) => update("paroleOfficer", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                  placeholder="Name and phone number"
                />
              </div>
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>
                Parole or probation conditions (counseling/treatment)
              </label>
              <textarea
                rows={2}
                value={formData.paroleConditions}
                onChange={(e) => update("paroleConditions", e.target.value)}
                className={`${inputBase} resize-none`}
                style={inputFont}
                placeholder="Required counseling, treatment, etc."
              />
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>
                Date you will be off parole or probation
              </label>
              <input
                type="date"
                value={formData.paroleEndDate}
                onChange={(e) => update("paroleEndDate", e.target.value)}
                className={inputBase}
                style={inputFont}
              />
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>
                History of arrests and convictions
              </label>
              <textarea
                rows={3}
                value={formData.arrestHistory}
                onChange={(e) => update("arrestHistory", e.target.value)}
                className={`${inputBase} resize-none`}
                style={inputFont}
                placeholder="List prior arrests and convictions"
              />
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>
                Have you had any disciplinary reports during incarceration?
              </label>
              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="disciplinaryReports"
                    value="yes"
                    checked={formData.disciplinaryReports === "yes"}
                    onChange={(e) => update("disciplinaryReports", e.target.value)}
                    className="accent-[#458CFE]"
                  />
                  <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="disciplinaryReports"
                    value="no"
                    checked={formData.disciplinaryReports === "no"}
                    onChange={(e) => update("disciplinaryReports", e.target.value)}
                    className="accent-[#458CFE]"
                  />
                  <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
                </label>
              </div>
            </div>

            {formData.disciplinaryReports === "yes" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease }}
              >
                <label className={labelClass} style={labelStyle}>
                  What were the reports for and the outcome?
                </label>
                <textarea
                  rows={2}
                  value={formData.disciplinaryDetails}
                  onChange={(e) => update("disciplinaryDetails", e.target.value)}
                  className={`${inputBase} resize-none`}
                  style={inputFont}
                  placeholder="Reports and consequences"
                />
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ─── Education ─────────────────────────────────── */}
        <div className="pt-4 mt-2 border-t border-[#EBEBEB]">
          <span
            className="block text-[#458CFE] uppercase mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            Education &amp; Job Interests
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Last Grade Completed
            </label>
            <select
              value={formData.lastGradeCompleted}
              onChange={(e) => update("lastGradeCompleted", e.target.value)}
              className={`${inputBase} appearance-none`}
              style={inputFont}
            >
              <option value="" disabled>Select...</option>
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade / GED</option>
              <option value="College 1">College — 1 year</option>
              <option value="College 2">College — 2 years</option>
              <option value="College 3">College — 3 years</option>
              <option value="College 4">College — 4 years (degree)</option>
            </select>
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Other (trade school, etc.)
            </label>
            <input
              type="text"
              value={formData.otherEducation}
              onChange={(e) => update("otherEducation", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Trade school, certifications, etc."
            />
          </div>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            List significant jobs you have held
          </label>
          <textarea
            rows={3}
            value={formData.significantJobs}
            onChange={(e) => update("significantJobs", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Job titles, employers, and dates"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            What would you like to do in the future?
          </label>
          <textarea
            rows={2}
            value={formData.futurePlans}
            onChange={(e) => update("futurePlans", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Career goals, interests, dreams"
          />
        </div>

        {/* ─── Current Employment ─────────────────────────── */}
        <div className="pt-4 mt-2 border-t border-[#EBEBEB]">
          <span
            className="block text-[#458CFE] uppercase mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            Current Employment
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Currently working part-time?
            </label>
            <div className="flex items-center gap-6 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="workingPartTime"
                  value="yes"
                  checked={formData.workingPartTime === "yes"}
                  onChange={(e) => update("workingPartTime", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="workingPartTime"
                  value="no"
                  checked={formData.workingPartTime === "no"}
                  onChange={(e) => update("workingPartTime", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
              </label>
            </div>
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Currently working full-time?
            </label>
            <div className="flex items-center gap-6 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="workingFullTime"
                  value="yes"
                  checked={formData.workingFullTime === "yes"}
                  onChange={(e) => update("workingFullTime", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="workingFullTime"
                  value="no"
                  checked={formData.workingFullTime === "no"}
                  onChange={(e) => update("workingFullTime", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
              </label>
            </div>
          </div>
        </div>

        {formData.workingPartTime === "yes" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <label className={labelClass} style={labelStyle}>
              Part-time employer, city, and state
            </label>
            <input
              type="text"
              value={formData.partTimeEmployer}
              onChange={(e) => update("partTimeEmployer", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Employer name, city, state"
            />
          </motion.div>
        )}

        {formData.workingFullTime === "yes" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <label className={labelClass} style={labelStyle}>
              Full-time employer, city, and state
            </label>
            <input
              type="text"
              value={formData.fullTimeEmployer}
              onChange={(e) => update("fullTimeEmployer", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Employer name, city, state"
            />
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Past Job 1 — Employer &amp; Dates
            </label>
            <input
              type="text"
              value={formData.pastJob1}
              onChange={(e) => update("pastJob1", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Employer name — dates"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Past Job 2 — Employer &amp; Dates
            </label>
            <input
              type="text"
              value={formData.pastJob2}
              onChange={(e) => update("pastJob2", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Employer name — dates"
            />
          </div>
        </div>

        {/* ─── Income Sources ─────────────────────────────── */}
        <div className="pt-4 mt-2 border-t border-[#EBEBEB]">
          <span
            className="block text-[#458CFE] uppercase mb-2"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            Income Sources
          </span>
          <p
            className="text-[#3D3D3D] mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Check all that apply.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {INCOME_SOURCES.map((source) => (
            <label key={source} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={incomeChecked.has(source)}
                onChange={() => toggleIncome(source)}
                className="accent-[#458CFE] shrink-0"
              />
              <span
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                }}
              >
                {source}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
