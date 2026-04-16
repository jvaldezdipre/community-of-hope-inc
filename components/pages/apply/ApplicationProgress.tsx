"use client";

import { motion } from "motion/react";
import { ease, TOTAL_STEPS, getStepLabel } from "./formConstants";

type ApplicationProgressProps = {
  step: number;
};

export function ApplicationProgress({ step }: ApplicationProgressProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[#458CFE]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
          }}
        >
          Step {step} of {TOTAL_STEPS}
        </span>
        <span
          className="text-[#ADADAD]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 300,
          }}
        >
          {getStepLabel(step)}
        </span>
      </div>
      <div className="h-1 bg-[#EBEBEB] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#458CFE] rounded-full"
          initial={false}
          animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.4, ease }}
        />
      </div>
    </div>
  );
}
