"use client";

import { inputBase, inputFont, labelStyle, labelClass, type StepProps } from "../formConstants";

export function Step1ContactInfo({ formData, update }: StepProps) {
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
        Contact &amp; Worker Info
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
        Let&apos;s start with how to reach you and your support team.
      </p>

      <div className="flex flex-col gap-6">
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              First Name <span className="text-[#C53030]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="First name"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Last Name <span className="text-[#C53030]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Home Phone
            </label>
            <input
              type="tel"
              value={formData.homePhone}
              onChange={(e) => update("homePhone", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Home phone"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Cell Phone <span className="text-[#C53030]">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.cellPhone}
              onChange={(e) => update("cellPhone", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Cell phone"
            />
          </div>
        </div>

        {/* Divider — Worker info */}
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
            Your Worker
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Worker&apos;s Name
            </label>
            <input
              type="text"
              value={formData.workerName}
              onChange={(e) => update("workerName", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Worker's name"
            />
          </div>
          <div className="grid grid-cols-[1fr_80px] gap-3">
            <div>
              <label className={labelClass} style={labelStyle}>
                Worker&apos;s Phone
              </label>
              <input
                type="tel"
                value={formData.workerPhone}
                onChange={(e) => update("workerPhone", e.target.value)}
                className={inputBase}
                style={inputFont}
                placeholder="Phone"
              />
            </div>
            <div>
              <label className={labelClass} style={labelStyle}>
                Ext
              </label>
              <input
                type="text"
                value={formData.workerExt}
                onChange={(e) => update("workerExt", e.target.value)}
                className={inputBase}
                style={inputFont}
                placeholder="Ext"
              />
            </div>
          </div>
        </div>

        {/* Divider — Case Manager */}
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
            Case Manager
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Case Manager Name
            </label>
            <input
              type="text"
              value={formData.caseManagerName}
              onChange={(e) => update("caseManagerName", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Name"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Agency
            </label>
            <input
              type="text"
              value={formData.caseManagerAgency}
              onChange={(e) => update("caseManagerAgency", e.target.value)}
              className={inputBase}
              style={inputFont}
              placeholder="Agency"
            />
          </div>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Case Manager Phone
          </label>
          <input
            type="tel"
            value={formData.caseManagerPhone}
            onChange={(e) => update("caseManagerPhone", e.target.value)}
            className={inputBase}
            style={inputFont}
            placeholder="Phone number"
          />
        </div>

        {/* Divider — Release & Logistics */}
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
            Release &amp; Logistics
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Projected Release Date
            </label>
            <input
              type="date"
              value={formData.projectedReleaseDate}
              onChange={(e) => update("projectedReleaseDate", e.target.value)}
              className={inputBase}
              style={inputFont}
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Is this a definite date?
            </label>
            <div className="flex items-center gap-6 pt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isDefiniteDate"
                  value="yes"
                  checked={formData.isDefiniteDate === "yes"}
                  onChange={(e) => update("isDefiniteDate", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isDefiniteDate"
                  value="no"
                  checked={formData.isDefiniteDate === "no"}
                  onChange={(e) => update("isDefiniteDate", e.target.value)}
                  className="accent-[#458CFE]"
                />
                <span style={{ ...inputFont, fontWeight: 400 }}>No</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Pick Up Time
          </label>
          <input
            type="text"
            value={formData.pickUpTime}
            onChange={(e) => update("pickUpTime", e.target.value)}
            className={inputBase}
            style={inputFont}
            placeholder="e.g. 10:00 AM"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Facility or Home Address
          </label>
          <textarea
            rows={2}
            value={formData.facilityAddress}
            onChange={(e) => update("facilityAddress", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Current facility or home address"
          />
        </div>

        {/* Main Goal */}
        <div className="pt-4 mt-2 border-t border-[#EBEBEB]">
          <label className={labelClass} style={labelStyle}>
            Main Goal <span className="text-[#C53030]">*</span>
          </label>
          <select
            required
            value={formData.mainGoal}
            onChange={(e) => update("mainGoal", e.target.value)}
            className={`${inputBase} appearance-none`}
            style={inputFont}
          >
            <option value="" disabled>
              Select your main goal...
            </option>
            <option value="Identity">Identity</option>
            <option value="Inner Healing">Inner Healing</option>
            <option value="Employment">Employment</option>
            <option value="Future Housing">Future Housing</option>
            <option value="Reconciliation">Reconciliation</option>
          </select>
        </div>
      </div>
    </div>
  );
}
