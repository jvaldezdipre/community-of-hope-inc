import "server-only";
import type { Data } from "@measured/puck";
import type { PuckProps } from "@/puck.config";
import { getSupabaseServer } from "./supabase/server";

export type PageData = Data<PuckProps>;

const EMPTY_DATA: PageData = { content: [], root: {} };

/**
 * Reads the Puck content blob for a page by slug. Returns an empty document
 * if the row doesn't exist yet (first load, before the seed migration runs).
 */
export async function getPageContent(slug: string): Promise<PageData> {
  const supabase = await getSupabaseServer();
  const { data, error } = await supabase
    .from("pages")
    .select("content")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`[cms] failed to load page "${slug}":`, error.message);
    return EMPTY_DATA;
  }
  return (data?.content as PageData | undefined) ?? EMPTY_DATA;
}
