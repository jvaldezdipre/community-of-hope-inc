"use client";

import { inputBase, inputFont, labelStyle, labelClass, type StepProps } from "../formConstants";

export function Step7Statement({ formData, update }: StepProps) {
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
        Personal Statement
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
        In your own words, share anything that will help us understand your needs, goals, and who you are.
      </p>

      <div className="flex flex-col gap-6">
        <div>
          <label className={labelClass} style={labelStyle}>
            Strengths <span className="text-[#C53030]">*</span>
          </label>
          <textarea
            rows={3}
            required
            value={formData.strengths}
            onChange={(e) => update("strengths", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="What are your strengths?"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Weaknesses <span className="text-[#C53030]">*</span>
          </label>
          <textarea
            rows={3}
            required
            value={formData.weaknesses}
            onChange={(e) => update("weaknesses", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="What are your weaknesses?"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Triggers <span className="text-[#C53030]">*</span>
          </label>
          <textarea
            rows={3}
            required
            value={formData.triggers}
            onChange={(e) => update("triggers", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="What triggers you?"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Difficulties <span className="text-[#C53030]">*</span>
          </label>
          <textarea
            rows={3}
            required
            value={formData.difficulties}
            onChange={(e) => update("difficulties", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="What difficulties are you facing?"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            What has gotten you here? <span className="text-[#C53030]">*</span>
          </label>
          <textarea
            rows={4}
            required
            value={formData.whatGotYouHere}
            onChange={(e) => update("whatGotYouHere", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Share your story — what brought you to this point?"
          />
        </div>

        {/* Goals */}
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
            Goals
          </span>
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            What are your plans while you are with us? <span className="text-[#C53030]">*</span>
          </label>
          <textarea
            rows={3}
            required
            value={formData.goalsWhileHere}
            onChange={(e) => update("goalsWhileHere", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="What do you hope to accomplish during your time at Hope House?"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            What do you plan to do after you leave us?
          </label>
          <textarea
            rows={3}
            value={formData.plansAfterLeaving}
            onChange={(e) => update("plansAfterLeaving", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Your plans for after the program"
          />
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            What are your dreams?
          </label>
          <textarea
            rows={3}
            value={formData.dreams}
            onChange={(e) => update("dreams", e.target.value)}
            className={`${inputBase} resize-none`}
            style={inputFont}
            placeholder="Dream big — what does your future look like?"
          />
        </div>

        {/* Affirmation */}
        <div className="pt-6 mt-4 border-t border-[#EBEBEB]">
          <div className="bg-[#FAF8F5] rounded-[8px] border border-[#EBEBEB] p-6 md:p-8">
            <h3
              className="text-[#1A1A1A] mb-4"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.05rem",
                fontWeight: 400,
              }}
            >
              Affirmation
            </h3>
            <p
              className="text-[#3D3D3D] mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.93rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              I am hereby applying to COH, Inc. and release this information for
              use in making a decision about my acceptance. I certify that the
              information contained in this application is true and complete. I
              further understand that any false statements or misrepresentations
              made by me on this application or any supplements thereto will be
              sufficient ground for rejection of this application or expulsion
              from COH, Inc. I have read the house rules and agree to willingly
              abide by the policies of COH, Inc. I further understand that this
              is a Christ-centered ministry with Christian values and
              expectations for my behavior.
            </p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.affirmation === "yes"}
                onChange={(e) => update("affirmation", e.target.checked ? "yes" : "")}
                className="accent-[#458CFE] mt-1 shrink-0"
                required
              />
              <span
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                I have read, understand, and agree to the above affirmation. <span className="text-[#C53030]">*</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
