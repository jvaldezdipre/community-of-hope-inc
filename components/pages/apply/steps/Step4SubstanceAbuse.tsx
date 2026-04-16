"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { inputBase, inputFont, labelStyle, labelClass, ease, type StepProps } from "../formConstants";

const substanceFields = [
  { key: "alcoholLastUse", label: "Alcohol" },
  { key: "cocaineLastUse", label: "Cocaine" },
  { key: "crackLastUse", label: "Crack" },
  { key: "hallucinogensLastUse", label: "Hallucinogens" },
  { key: "inhalantsLastUse", label: "Inhalants" },
  { key: "opiatesLastUse", label: "Opiates" },
  { key: "rxDrugsLastUse", label: "Rx Drugs" },
  { key: "sedativesLastUse", label: "Sedatives" },
  { key: "overCounterLastUse", label: "Over the Counter" },
  { key: "otherDrugLastUse", label: "Other" },
] as const;

const CONDITIONS = [
  "Criminal activity",
  "Divorced/separated",
  "Domestic violence",
  "Relationship issues",
  "Family abuse",
  "History of abuse",
  "Generational drug/alcohol use",
  "Loss of a loved one",
  "Prescribed narcotics",
  "Loss of income/unemployment",
  "Loss of public assistance",
  "Loss of transportation",
  "Homelessness",
  "Mental health/illness",
  "Physical illness",
  "Stress",
  "Hopelessness",
  "Gambling",
  "Anxiety/fear",
  "Spiritual depravity",
  "Didn't know where to get help",
  "Sleep difficulties",
  "Not ready to stop using",
  "Associated stigma",
  "Insurance coverage issues",
  "Cost of treatment",
];

export function Step4SubstanceAbuse({ formData, update }: StepProps) {
  // Parse conditions from comma-separated strings
  const [checked, setChecked] = useState<Set<string>>(
    () => new Set(formData.conditionsContributing ? formData.conditionsContributing.split(",").map((s) => s.trim()).filter(Boolean) : [])
  );
  const [consequences, setConsequences] = useState<Set<string>>(
    () => new Set(formData.conditionsConsequences ? formData.conditionsConsequences.split(",").map((s) => s.trim()).filter(Boolean) : [])
  );

  const toggleCondition = (condition: string) => {
    const next = new Set(checked);
    if (next.has(condition)) {
      next.delete(condition);
      // Also remove from consequences if unchecked
      const nextC = new Set(consequences);
      nextC.delete(condition);
      setConsequences(nextC);
      update("conditionsConsequences", Array.from(nextC).join(", "));
    } else {
      next.add(condition);
    }
    setChecked(next);
    update("conditionsContributing", Array.from(next).join(", "));
  };

  const toggleConsequence = (condition: string) => {
    const next = new Set(consequences);
    if (next.has(condition)) {
      next.delete(condition);
    } else {
      next.add(condition);
    }
    setConsequences(next);
    update("conditionsConsequences", Array.from(next).join(", "));
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
        Substance Abuse History &amp; Medical
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
        Your history helps us understand how to best support you.
      </p>

      <div className="flex flex-col gap-6">
        {/* Substance use dates */}
        <div>
          <span
            className="block text-[#458CFE] uppercase mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            Substance Use — Date of Last Use
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {substanceFields.map(({ key, label }) => (
              <div key={key}>
                <label className={labelClass} style={labelStyle}>
                  {label}
                </label>
                <input
                  type="date"
                  value={formData[key]}
                  onChange={(e) => update(key, e.target.value)}
                  className={inputBase}
                  style={inputFont}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Drug of choice / age / consumption */}
        <div className="pt-4 mt-2 border-t border-[#EBEBEB]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className={labelClass} style={labelStyle}>
                Drug of Choice
              </label>
              <input
                type="text"
                value={formData.drugOfChoice}
                onChange={(e) => update("drugOfChoice", e.target.value)}
                className={inputBase}
                style={inputFont}
                placeholder="Primary substance"
              />
            </div>
            <div>
              <label className={labelClass} style={labelStyle}>
                Age of First Use
              </label>
              <input
                type="number"
                min={0}
                max={99}
                value={formData.ageOfFirstUse}
                onChange={(e) => update("ageOfFirstUse", e.target.value)}
                className={inputBase}
                style={inputFont}
                placeholder="Age"
              />
            </div>
            <div>
              <label className={labelClass} style={labelStyle}>
                Daily Consumption
              </label>
              <input
                type="text"
                value={formData.dailyConsumption}
                onChange={(e) => update("dailyConsumption", e.target.value)}
                className={inputBase}
                style={inputFont}
                placeholder="Amount/frequency"
              />
            </div>
          </div>
        </div>

        {/* Mental Health */}
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
            Mental Health
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Do you have a mental health diagnosis?
          </label>
          <div className="flex items-center gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="mentalHealthDiagnosis"
                value="yes"
                checked={formData.mentalHealthDiagnosis === "yes"}
                onChange={(e) => update("mentalHealthDiagnosis", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="mentalHealthDiagnosis"
                value="no"
                checked={formData.mentalHealthDiagnosis === "no"}
                onChange={(e) => update("mentalHealthDiagnosis", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
            </label>
          </div>
        </div>

        {formData.mentalHealthDiagnosis === "yes" && (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div>
              <label className={labelClass} style={labelStyle}>
                What is your diagnosis?
              </label>
              <input
                type="text"
                value={formData.mentalHealthDetails}
                onChange={(e) => update("mentalHealthDetails", e.target.value)}
                className={inputBase}
                style={inputFont}
                placeholder="Diagnosis"
              />
            </div>
            <div>
              <label className={labelClass} style={labelStyle}>
                Are you on medications for this diagnosis?
              </label>
              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mentalHealthMedications"
                    value="yes"
                    checked={formData.mentalHealthMedications === "yes"}
                    onChange={(e) => update("mentalHealthMedications", e.target.value)}
                    className="accent-[#458CFE]"
                  />
                  <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mentalHealthMedications"
                    value="no"
                    checked={formData.mentalHealthMedications === "no"}
                    onChange={(e) => update("mentalHealthMedications", e.target.value)}
                    className="accent-[#458CFE]"
                  />
                  <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}

        {/* Medical Problems */}
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
            Medical
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Do you have any current medical problems?
          </label>
          <div className="flex items-center gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="medicalProblems"
                value="yes"
                checked={formData.medicalProblems === "yes"}
                onChange={(e) => update("medicalProblems", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="medicalProblems"
                value="no"
                checked={formData.medicalProblems === "no"}
                onChange={(e) => update("medicalProblems", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
            </label>
          </div>
        </div>

        {formData.medicalProblems === "yes" && (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div>
              <label className={labelClass} style={labelStyle}>
                What is your diagnosis?
              </label>
              <input
                type="text"
                value={formData.medicalDetails}
                onChange={(e) => update("medicalDetails", e.target.value)}
                className={inputBase}
                style={inputFont}
                placeholder="Medical diagnosis"
              />
            </div>
            <div>
              <label className={labelClass} style={labelStyle}>
                Are you on medications for this?
              </label>
              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="medicalMedications"
                    value="yes"
                    checked={formData.medicalMedications === "yes"}
                    onChange={(e) => update("medicalMedications", e.target.value)}
                    className="accent-[#458CFE]"
                  />
                  <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="medicalMedications"
                    value="no"
                    checked={formData.medicalMedications === "no"}
                    onChange={(e) => update("medicalMedications", e.target.value)}
                    className="accent-[#458CFE]"
                  />
                  <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}

        {/* All Medications */}
        <div>
          <label className={labelClass} style={labelStyle}>
            List all medications and dosages you are presently taking and what they are for
          </label>
          <textarea
            rows={4}
            value={formData.allMedications}
            onChange={(e) => update("allMedications", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Medication name — dosage — what it's for (one per line)"
          />
        </div>

        {/* Spiritual Life */}
        <div>
          <label className={labelClass} style={labelStyle}>
            What is your current spiritual life and affiliations?
          </label>
          <textarea
            rows={3}
            value={formData.spiritualLife}
            onChange={(e) => update("spiritualLife", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Share about your faith, church, spiritual practices..."
          />
        </div>

        {/* Conditions Contributing to Addictive Lifestyle */}
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
            Conditions Contributing to Addictive Lifestyle
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
            Check the conditions that led to your substance abuse. If a condition was a <strong>consequence</strong> of your substance abuse, also check the &quot;C&quot; box.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {CONDITIONS.map((condition) => (
            <div key={condition} className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={checked.has(condition)}
                  onChange={() => toggleCondition(condition)}
                  className="accent-[#458CFE] shrink-0"
                />
                <span
                  className="text-[#1A1A1A] truncate"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                  }}
                >
                  {condition}
                </span>
              </label>
              {checked.has(condition) && (
                <label className="flex items-center gap-1 cursor-pointer shrink-0" title="Mark as consequence">
                  <input
                    type="checkbox"
                    checked={consequences.has(condition)}
                    onChange={() => toggleConsequence(condition)}
                    className="accent-[#C53030] shrink-0"
                  />
                  <span
                    className="text-[#C53030]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    C
                  </span>
                </label>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
