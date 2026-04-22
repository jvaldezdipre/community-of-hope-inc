"use client";

import "@measured/puck/puck.css";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Puck, type Data } from "@measured/puck";
import { puckConfig, type PuckProps } from "@/puck.config";
import { getSupabaseBrowser } from "@/lib/supabase/browser";
import { EditorHeader } from "./EditorHeader";

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

  const overrides = useMemo(
    () => ({
      header: ({ actions }: { actions: React.ReactNode; children: React.ReactNode }) => (
        <EditorHeader currentSlug={slug} actions={actions} />
      ),
    }),
    [slug],
  );

  return (
    <Puck
      config={puckConfig}
      data={initialData}
      metadata={{ today }}
      onPublish={handlePublish}
      overrides={overrides}
    />
  );
}
