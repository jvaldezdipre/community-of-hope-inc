/**
 * Single source of truth for pages exposed in the admin page switcher.
 * Add a new page by dropping a row in here once its Puck content is wired up.
 * The dropdown in the editor header and the [slug] route guard both read this.
 */

export type EditablePage = {
  slug: string;
  label: string;
};

export const EDITABLE_PAGES: EditablePage[] = [
  { slug: "events", label: "Events" },
];

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
