"use client";

import { useRef, useState } from "react";
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
    .slice(0, 48) || "image";
  return `${Date.now()}-${safeBase}${ext}`;
}

export function ImageUploadField({
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
    setUploading(true);
    try {
      const supabase = getSupabaseBrowser();
      const path = slugifyFileName(file.name);
      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, {
          cacheControl: "31536000",
          upsert: false,
          contentType: file.type,
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
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={value}
          alt="Event image preview"
          className="w-full max-h-48 object-contain rounded border border-[#EBEBEB] bg-[#FAF8F5]"
        />
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
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
          {uploading ? "Uploading..." : value ? "Replace image" : "Upload image"}
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
        placeholder="Or paste an image URL / path"
        value={value ?? ""}
        onChange={handleUrlChange}
        readOnly={readOnly}
        className="text-xs px-2 py-1.5 rounded border border-[#EBEBEB] bg-white"
      />

      {error && <p className="text-xs text-[#B3261E]">{error}</p>}
    </div>
  );
}
