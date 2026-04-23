import "server-only";
import type { Data } from "@measured/puck";
import type { PuckProps, GlobalSocialLinksProps } from "@/puck.config";
import { getSupabaseServer } from "./supabase/server";

export type PageData = Data<PuckProps>;

const EMPTY_DATA: PageData = { content: [], root: {} };

export type SocialLinks = {
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
};

const EMPTY_SOCIAL: SocialLinks = {
  facebook: null,
  instagram: null,
  linkedin: null,
};

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

/**
 * Reads the global-settings Puck row and extracts the social URLs from the
 * GlobalSocialLinks component inside it. Empty strings are normalized to null
 * so callers can do truthy checks to hide icons.
 */
export async function getSocialLinks(): Promise<SocialLinks> {
  const data = await getPageContent("global-settings");
  const socialItem = data.content.find((c) => c.type === "GlobalSocialLinks");
  if (!socialItem) return EMPTY_SOCIAL;

  const props = socialItem.props as GlobalSocialLinksProps & { id: string };
  return {
    facebook: props.facebookUrl?.trim() || null,
    instagram: props.instagramUrl?.trim() || null,
    linkedin: props.linkedinUrl?.trim() || null,
  };
}
