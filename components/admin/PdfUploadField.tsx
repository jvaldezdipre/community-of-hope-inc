"use client";

import { useRef, useState } from "react";
import { FileText } from "lucide-react";
import { getSupabaseBrowser } from "@/lib/supabase/browser";

const BUCKET = "events";

function slugifyFileName(name: string) {
  const dot = name.lastIndexOf(".");
  const base = dot === -1 ? name : name.slice(0, dot);
  const ext = dot === -1 ? "" : name.slice(dot).toLowerCase();
  const safeBase = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "flyer";
  return `${Date.now()}-${safeBase}${ext}`;
}

/** Pulls a human-friendly file name out of a stored URL/path for the preview. */
function displayName(value: string) {
  try {
    const path = value.startsWith("http") ? new URL(value).pathname : value;
    const last = path.split("/").pop() || value;
    return decodeURIComponent(last);
  } catch {
    return value;
  }
}

export function PdfUploadField({
  value,
  onChange,
  readOnly,
}: {
  value: string | undefined;
  onChange: (v: string) => void;
  readOnly?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setError(null);
    if (file.type && file.type !== "application/pdf") {
      setError("Please choose a PDF file.");
      return;
    }
    setUploading(true);
    try {
      const supabase = getSupabaseBrowser();
      const path = slugifyFileName(file.name);
      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, {
          cacheControl: "31536000",
          upsert: false,
          contentType: file.type || "application/pdf",
        });
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
      onChange(data.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className="flex flex-col gap-2">
      {value && (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-3 py-2 rounded border border-[#EBEBEB] bg-[#FAF8F5] text-[#458CFE] hover:underline truncate"
        >
          <FileText size={14} strokeWidth={1.5} className="shrink-0" />
          <span className="truncate">{displayName(value)}</span>
        </a>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        disabled={readOnly || uploading}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      <div className="flex gap-2">
        <button
          type="button"
          disabled={readOnly || uploading}
          onClick={() => fileInputRef.current?.click()}
          className="flex-1 text-sm px-3 py-2 rounded border border-[#EBEBEB] bg-white hover:bg-[#FAF8F5] disabled:opacity-50"
        >
          {uploading ? "Uploading..." : value ? "Replace PDF" : "Upload PDF"}
        </button>
        {value && !readOnly && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-sm px-3 py-2 rounded border border-[#EBEBEB] bg-white hover:bg-[#FAF8F5] text-[#B3261E]"
          >
            Remove
          </button>
        )}
      </div>

      <input
        type="text"
        placeholder="Or paste a PDF URL / path"
        value={value ?? ""}
        onChange={handleUrlChange}
        readOnly={readOnly}
        className="text-xs px-2 py-1.5 rounded border border-[#EBEBEB] bg-white"
      />

      {error && <p className="text-xs text-[#B3261E]">{error}</p>}
    </div>
  );
}
