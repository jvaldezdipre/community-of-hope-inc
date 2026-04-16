"use client";

import { motion } from "motion/react";
import { inputBase, inputFont, labelStyle, labelClass, ease, type StepProps } from "../formConstants";

export function Step2PersonalInfo({ formData, update }: StepProps) {
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
        Personal Info &amp; Living Situation
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
        Tell us about yourself and where you are right now.
      </p>

      <div className="flex flex-col gap-6">
        {/* Middle initial + DOB */}
        <div className="grid grid-cols-[80px_1fr_1fr] sm:grid-cols-[80px_1fr_1fr] gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              M.I.
            </label>
            <input
              type="text"
              maxLength={1}
              value={formData.middleInitial}
              onChange={(e) => update("middleInitial", e.target.value.toUpperCase())}
              className={inputBase}
              style={inputFont}
              placeholder="M"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Date of Birth <span className="text-[#C53030]">*</span>
            </label>
            <input
              type="date"
              required
              value={formData.dateOfBirth}
              onChange={(e) => update("dateOfBirth", e.target.value)}
              className={inputBase}
              style={inputFont}
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Insurance #
            </label>
            <input
              type="text"
              value={formData.insuranceNumber}
              onChange={(e) => update("insuranceNumber", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Insurance number"
            />
          </div>
        </div>

        {/* Husky D + Cash Assistance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Husky D?
            </label>
            <div className="flex items-center gap-6 pt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="huskyD"
                  value="yes"
                  checked={formData.huskyD === "yes"}
                  onChange={(e) => update("huskyD", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="huskyD"
                  value="no"
                  checked={formData.huskyD === "no"}
                  onChange={(e) => update("huskyD", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
              </label>
            </div>
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Cash Assistance?
            </label>
            <div className="flex items-center gap-6 pt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="cashAssistance"
                  value="yes"
                  checked={formData.cashAssistance === "yes"}
                  onChange={(e) => update("cashAssistance", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="cashAssistance"
                  value="no"
                  checked={formData.cashAssistance === "no"}
                  onChange={(e) => update("cashAssistance", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Clinical Treatment */}
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
            Clinical Treatment
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Are you currently in clinical treatment? <span className="text-[#C53030]">*</span>
          </label>
          <div className="flex items-center gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="inClinicalTreatment"
                value="yes"
                checked={formData.inClinicalTreatment === "yes"}
                onChange={(e) => update("inClinicalTreatment", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="inClinicalTreatment"
                value="no"
                checked={formData.inClinicalTreatment === "no"}
                onChange={(e) => update("inClinicalTreatment", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
            </label>
          </div>
        </div>

        {formData.inClinicalTreatment === "yes" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <label className={labelClass} style={labelStyle}>
              List your doctor, psychiatrist, and/or therapist
            </label>
            <textarea
              rows={3}
              value={formData.treatmentProviders}
              onChange={(e) => update("treatmentProviders", e.target.value)}
              className={`${inputBase} resize-none`}
              style={inputFont}
              placeholder="Name(s), specialty, and contact info"
            />
          </motion.div>
        )}

        {/* Living Situation */}
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
            Current Living Situation
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Current Home Address <span className="text-[#C53030]">*</span>
          </label>
          <textarea
            rows={2}
            required
            value={formData.currentAddress}
            onChange={(e) => update("currentAddress", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Street, city, state, zip"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            How long have you been in your current living situation? <span className="text-[#C53030]">*</span>
          </label>
          <select
            required
            value={formData.livingSituationDuration}
            onChange={(e) => update("livingSituationDuration", e.target.value)}
            className={`${inputBase} appearance-none`}
            style={inputFont}
          >
            <option value="" disabled>Select one...</option>
            <option value="1 week or less">1 week or less</option>
            <option value="More than 1 week, but less than 1 month">More than 1 week, but less than 1 month</option>
            <option value="1 to 3 months">1 to 3 months</option>
            <option value="More than 3 months, but less than 1 year">More than 3 months, but less than 1 year</option>
            <option value="1 year or longer">1 year or longer</option>
          </select>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Street, city, state &amp; zip of last permanent address
          </label>
          <input
            type="text"
            value={formData.lastPermanentAddress}
            onChange={(e) => update("lastPermanentAddress", e.target.value)}
            className={inputBase}
            style={inputFont}
            placeholder="Last permanent address"
          />
        </div>
      </div>
    </div>
  );
}
