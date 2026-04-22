"use client";

export function DatePickerField({
  value,
  onChange,
  readOnly,
}: {
  value: string | undefined;
  onChange: (v: string) => void;
  readOnly?: boolean;
}) {
  return (
    <input
      type="date"
      value={value ?? ""}
      readOnly={readOnly}
      onChange={(e) => onChange(e.target.value)}
      className="w-full text-sm px-2 py-1.5 rounded border border-[#EBEBEB] bg-white"
    />
  );
}
