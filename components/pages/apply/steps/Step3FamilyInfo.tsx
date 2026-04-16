"use client";

import { inputBase, inputFont, labelStyle, labelClass, type StepProps } from "../formConstants";

export function Step3FamilyInfo({ formData, update }: StepProps) {
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
        Family Information
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
        Tell us about your family and support system.
      </p>

      <div className="flex flex-col gap-6">
        {/* Marital Status */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Marital Status <span className="text-[#C53030]">*</span>
          </label>
          <select
            required
            value={formData.maritalStatus}
            onChange={(e) => update("maritalStatus", e.target.value)}
            className={`${inputBase} appearance-none`}
            style={inputFont}
          >
            <option value="" disabled>Select one...</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>

        {/* Live with parents */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Do you live with your parents?
          </label>
          <input
            type="text"
            value={formData.liveWithParents}
            onChange={(e) => update("liveWithParents", e.target.value)}
            className={inputBase}
            style={inputFont}
            placeholder="Yes/No — add details if relevant"
          />
        </div>

        {/* Siblings */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Do you have siblings? (How many, ages, genders)
          </label>
          <textarea
            rows={2}
            value={formData.siblings}
            onChange={(e) => update("siblings", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="e.g. 2 sisters (ages 25, 30), 1 brother (age 22)"
          />
        </div>

        {/* Spouse */}
        {(formData.maritalStatus === "Married" || formData.maritalStatus === "Separated") && (
          <div>
            <label className={labelClass} style={labelStyle}>
              Spouse&apos;s Name
            </label>
            <input
              type="text"
              value={formData.spouseName}
              onChange={(e) => update("spouseName", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Spouse's full name"
            />
          </div>
        )}

        {/* Children */}
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
            Children
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Do you have children? (Ages of all)
          </label>
          <textarea
            rows={2}
            value={formData.children}
            onChange={(e) => update("children", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="e.g. Yes — daughter (7), son (3)"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Current living arrangements of your children
          </label>
          <textarea
            rows={2}
            value={formData.childrenLivingArrangements}
            onChange={(e) => update("childrenLivingArrangements", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="e.g. With their father, with grandparents, in foster care"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Do your plans include family reunification?
          </label>
          <input
            type="text"
            value={formData.familyReunification}
            onChange={(e) => update("familyReunification", e.target.value)}
            className={inputBase}
            style={inputFont}
            placeholder="Yes/No — share any details"
          />
        </div>

        {/* Support system */}
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
            Support System
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Is your family supportive of your recovery?
          </label>
          <input
            type="text"
            value={formData.familySupportive}
            onChange={(e) => update("familySupportive", e.target.value)}
            className={inputBase}
            style={inputFont}
            placeholder="Yes/No — share any details"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Are your family and friends a positive or negative influence?
          </label>
          <div className="flex items-center gap-6 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="familyInfluence"
                value="Positive"
                checked={formData.familyInfluence === "Positive"}
                onChange={(e) => update("familyInfluence", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>Positive</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="familyInfluence"
                value="Negative"
                checked={formData.familyInfluence === "Negative"}
                onChange={(e) => update("familyInfluence", e.target.value)}
                className="accent-[#458CFE]"
              />
              <span style={{ ...inputFont, fontWeight: 400 }}>Negative</span>
            </label>
          </div>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Anything else about your family situation?
          </label>
          <textarea
            rows={3}
            value={formData.familyNotes}
            onChange={(e) => update("familyNotes", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Any additional details you'd like to share..."
          />
        </div>
      </div>
    </div>
  );
}
