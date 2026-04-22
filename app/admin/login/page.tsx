"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/browser";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialError =
    searchParams.get("error") === "forbidden"
      ? "Your account doesn't have permission to manage website content."
      : "";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialError);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const supabase = getSupabaseBrowser();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setSubmitting(false);
      setError(signInError.message);
      return;
    }

    router.push("/admin/pages");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] px-4">
      <div className="w-full max-w-sm bg-white rounded-[8px] border border-[#EBEBEB] p-8">
        <div className="text-center mb-6">
          <h1
            className="text-[#1A1A1A]"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.6rem",
              fontWeight: 400,
            }}
          >
            Community of Hope
          </h1>
          <p
            className="text-[#3D3D3D] mt-1"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", fontWeight: 300 }}
          >
            Website content editor
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-[#1A1A1A] mb-1.5"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-[6px] border border-[#EBEBEB] px-3 py-2 text-[#1A1A1A] focus:outline-none focus:border-[#458CFE]"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}
            />
          </div>
          <div>
            <label
              className="block text-[#1A1A1A] mb-1.5"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-[6px] border border-[#EBEBEB] px-3 py-2 text-[#1A1A1A] focus:outline-none focus:border-[#458CFE]"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}
            />
          </div>

          {error && (
            <p
              className="text-[#B3261E]"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem" }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-[6px] bg-[#458CFE] text-white py-2.5 disabled:opacity-60 hover:bg-[#3A78D9] transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 500 }}
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
