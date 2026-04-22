"use client";

import "@measured/puck/puck.css";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Puck, type Data } from "@measured/puck";
import { puckConfig, type PuckProps } from "@/puck.config";
import { getSupabaseBrowser } from "@/lib/supabase/browser";
import { getAllowedCategoriesForSlug } from "@/lib/editable-pages";
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

  /**
   * Filter the Puck categories so only ones allowed on this page show up
   * in the left sidebar drawer. All components stay registered so rendering
   * still works regardless of which slug is loaded.
   */
  const scopedConfig = useMemo(() => {
    const allowed = getAllowedCategoriesForSlug(slug);
    const scopedCategories = {
      ...Object.fromEntries(
        Object.entries(puckConfig.categories ?? {}).map(([key, cat]) => [
          key,
          { ...cat, visible: allowed.includes(key) },
        ]),
      ),
      // Puck auto-generates an "other" category for uncategorized components.
      // Force it hidden so legacy components don't leak into the drawer.
      other: { visible: false, components: [] as string[] },
    };
    return { ...puckConfig, categories: scopedCategories };
  }, [slug]);

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
      config={scopedConfig}
      data={initialData}
      metadata={{ today }}
      onPublish={handlePublish}
      overrides={overrides}
    />
  );
}
