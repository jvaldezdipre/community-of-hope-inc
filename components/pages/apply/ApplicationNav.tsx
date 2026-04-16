"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { TOTAL_STEPS } from "./formConstants";

type ApplicationNavProps = {
  step: number;
  onPrev: () => void;
  onNext: () => void;
  onBackToOverview: () => void;
  onSubmit?: () => void;
  submitting?: boolean;
};

export function ApplicationNav({
  step,
  onPrev,
  onNext,
  onBackToOverview,
  onSubmit,
  submitting = false,
}: ApplicationNavProps) {
  return (
    <div className="flex items-center justify-between mt-10 pt-8 border-t border-[#EBEBEB]">
      {step > 1 ? (
        <button
          type="button"
          onClick={onPrev}
          className="flex items-center gap-2 text-[#3D3D3D] hover:text-[#1A1A1A] transition-colors"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 400,
          }}
        >
          <ChevronLeft size={16} strokeWidth={1.75} />
          Back
        </button>
      ) : (
        <button
          type="button"
          onClick={onBackToOverview}
          className="flex items-center gap-2 text-[#3D3D3D] hover:text-[#1A1A1A] transition-colors"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 400,
          }}
        >
          <ChevronLeft size={16} strokeWidth={1.75} />
          Back to overview
        </button>
      )}

      {step < TOTAL_STEPS ? (
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 bg-[#458CFE] text-white px-8 py-3 rounded-full hover:bg-[#3170DE] transition-colors"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          Continue
          <ChevronRight size={16} strokeWidth={1.75} />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="flex items-center gap-2 bg-[#458CFE] text-white px-8 py-3 rounded-full hover:bg-[#3170DE] transition-colors disabled:opacity-60"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      )}
    </div>
  );
}
