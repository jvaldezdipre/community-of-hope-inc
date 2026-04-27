"use client";

const MIN = 40;
const MAX = 200;
const DEFAULT_PREVIEW = 80;

/**
 * Slider for the logo size on supporter rows.
 *
 * The field stores a single number:
 *  - `0` (or unset) → use the block's preset size (no override)
 *  - `40–200`        → exact pixel height
 *
 * We use `0` as the "untouched" sentinel so the field types as plain
 * `Field<number>` for Puck — keeps the shared `supporterArrayFields` builder
 * clean across every block that uses it.
 */
export function LogoHeightSlider({
  value,
  onChange,
  readOnly,
}: {
  value: number | undefined;
  onChange: (v: number | undefined) => void;
  readOnly?: boolean;
}) {
  const isCustom = typeof value === "number" && value >= MIN && value <= MAX;
  const sliderValue = isCustom ? (value as number) : DEFAULT_PREVIEW;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#3D3D3D]">
          {isCustom ? `${sliderValue}px` : `Default size (${DEFAULT_PREVIEW}px)`}
        </span>
        {isCustom && !readOnly && (
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="text-xs text-[#458CFE] hover:underline"
          >
            Reset to default
          </button>
        )}
      </div>
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={4}
        value={sliderValue}
        disabled={readOnly}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#458CFE]"
      />
      <div className="flex items-center justify-between text-[10px] text-[#3D3D3D]/60">
        <span>Smaller ({MIN}px)</span>
        <span>Bigger ({MAX}px)</span>
      </div>
    </div>
  );
}
