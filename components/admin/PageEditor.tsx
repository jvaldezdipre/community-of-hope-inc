"use client";

import "@measured/puck/puck.css";
import { useRouter } from "next/navigation";
import { Puck, type Data } from "@measured/puck";
import { puckConfig, type PuckProps } from "@/puck.config";
import { getSupabaseBrowser } from "@/lib/supabase/browser";

type PageData = Data<PuckProps>;

export function PageEditor({
  slug,
  initialData,
}: {
  slug: string;
  initialData: PageData;
}) {
  const router = useRouter();

  async function handlePublish(data: PageData) {
    const supabase = getSupabaseBrowser();
    const { error } = await supabase
      .from("pages")
      .upsert({ slug, content: data }, { onConflict: "slug" });

    if (error) {
      alert(`Save failed: ${error.message}`);
      return;
    }
    router.refresh();
    alert("Saved. Changes are live on the website.");
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <Puck
      config={puckConfig}
      data={initialData}
      metadata={{ today }}
      onPublish={handlePublish}
    />
  );
}
