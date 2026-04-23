/**
 * Single source of truth for pages exposed in the admin page switcher.
 * Add a new page by dropping a row in here once its Puck content is wired up.
 * The dropdown in the editor header and the [slug] route guard both read this.
 */

export type EditablePage = {
  slug: string;
  label: string;
  /**
   * Puck category keys this page is allowed to pull components from.
   * Everything else is hidden from the left sidebar drawer while editing
   * this page (e.g. Donate shouldn't expose the Events category).
   * Category keys match those defined in puck.config.tsx.
   */
  puckCategories: string[];
};

export const EDITABLE_PAGES: EditablePage[] = [
  { slug: "events", label: "Events", puckCategories: ["chrome", "events"] },
  { slug: "donate", label: "Donate", puckCategories: ["chrome", "donate"] },
  { slug: "contact", label: "Contact", puckCategories: ["chrome", "contact"] },
  { slug: "about", label: "About", puckCategories: ["chrome", "about"] },
  {
    slug: "programs",
    label: "Programs (overview)",
    puckCategories: ["chrome", "programs"],
  },
  {
    slug: "global-settings",
    label: "Global settings",
    puckCategories: ["global"],
  },
];

export function getAllowedCategoriesForSlug(slug: string): string[] {
  return EDITABLE_PAGES.find((p) => p.slug === slug)?.puckCategories ?? [];
}

/**
 * Where /admin drops staff after login. Change to "home" once the home page
 * is wrapped in Puck.
 */
export const DEFAULT_ADMIN_SLUG = "events";

export function isEditableSlug(slug: string): boolean {
  return EDITABLE_PAGES.some((p) => p.slug === slug);
}

export function getPageLabel(slug: string): string {
  return EDITABLE_PAGES.find((p) => p.slug === slug)?.label ?? slug;
}
