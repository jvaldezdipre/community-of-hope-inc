"use client";

import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/browser";

export function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = getSupabaseBrowser();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-[#458CFE] hover:underline"
      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem" }}
    >
      Sign out
    </button>
  );
}
