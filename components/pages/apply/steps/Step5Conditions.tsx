"use client";

import { motion } from "motion/react";
import { inputBase, inputFont, labelStyle, labelClass, ease, type StepProps } from "../formConstants";

export function Step5Conditions({ formData, update }: StepProps) {
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
        Treatment History
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
        Please list your most recent mental health and substance abuse treatment.
      </p>

      <div className="flex flex-col gap-6">
        {/* Currently in treatment */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Are you currently in treatment?
          </label>
          <div className="flex items-center gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="currentlyInTreatment"
                value="yes"
                checked={formData.currentlyInTreatment === "yes"}
                onChange={(e) => update("currentlyInTreatment", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="currentlyInTreatment"
                value="no"
                checked={formData.currentlyInTreatment === "no"}
                onChange={(e) => update("currentlyInTreatment", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
            </label>
          </div>
        </div>

        {formData.currentlyInTreatment === "yes" && (
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            {/* Facility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={labelStyle}>
                  Name of Current Facility
                </label>
                <input
                  type="text"
                  value={formData.facilityName}
                  onChange={(e) => update("facilityName", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                  placeholder="Facility name"
                />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>
                  City, State
                </label>
                <input
                  type="text"
                  value={formData.facilityCityState}
                  onChange={(e) => update("facilityCityState", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                  placeholder="City, ST"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={labelStyle}>
                  Date Admitted
                </label>
                <input
                  type="date"
                  value={formData.dateAdmitted}
                  onChange={(e) => update("dateAdmitted", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>
                  Date of Completion
                </label>
                <input
                  type="date"
                  value={formData.dateCompletion}
                  onChange={(e) => update("dateCompletion", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                />
              </div>
            </div>

            {/* Case manager + Counselor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={labelStyle}>
                  Case Manager&apos;s Name &amp; Phone #
                </label>
                <input
                  type="text"
                  value={formData.treatmentCaseManager}
                  onChange={(e) => update("treatmentCaseManager", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                  placeholder="Name and phone"
                />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>
                  Counselor&apos;s Name &amp; Phone #
                </label>
                <input
                  type="text"
                  value={formData.treatmentCounselor}
                  onChange={(e) => update("treatmentCounselor", e.target.value)}
                  className={inputBase}
                  style={inputFont}
                  placeholder="Name and phone"
                />
              </div>
            </div>

            {/* Projected commencement */}
            <div>
              <label className={labelClass} style={labelStyle}>
                Projected Commencement Date
              </label>
              <input
                type="date"
                value={formData.projectedCommencementDate}
                onChange={(e) => update("projectedCommencementDate", e.target.value)}
                className={inputBase}
                style={inputFont}
              />
            </div>
          </motion.div>
        )}

        {/* Housing options */}
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
            Housing &amp; Recovery History
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            What are your housing options besides COH House?
          </label>
          <textarea
            rows={2}
            value={formData.housingOptionsBesidesCOH}
            onChange={(e) => update("housingOptionsBesidesCOH", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Other housing options available to you"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Did you successfully complete the program? If not, explain why.
          </label>
          <textarea
            rows={2}
            value={formData.completedProgram}
            onChange={(e) => update("completedProgram", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Yes/No — explain if not completed"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Where did you go when you left there?
          </label>
          <input
            type="text"
            value={formData.whereAfterLeaving}
            onChange={(e) => update("whereAfterLeaving", e.target.value)}
            className={inputBase}
            style={inputFont}
            placeholder="Where did you go after leaving?"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              How long did you maintain sobriety?
            </label>
            <input
              type="text"
              value={formData.sobrietyDuration}
              onChange={(e) => update("sobrietyDuration", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="e.g. 6 months, 2 years"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              What went wrong?
            </label>
            <input
              type="text"
              value={formData.whatWentWrong}
              onChange={(e) => update("whatWentWrong", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="What led to relapse?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
