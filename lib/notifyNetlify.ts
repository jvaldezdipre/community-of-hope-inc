/**
 * Fires a copy of a form submission to Netlify Forms so Netlify's built-in
 * "email me on submission" feature can notify Annette. Forms are POSTed to
 * Supabase as the source of truth (that's what the dashboard reads); this
 * helper is purely an additional notification channel.
 *
 * POSTs to `/__forms.html` (a static file in /public) rather than `/`
 * because on a Next.js site the App Router intercepts POST to `/` and
 * returns 405 before Netlify's form handler can see the request. The
 * static stub file path bypasses Next.js entirely.
 *
 * Fire-and-forget — never throws. A Netlify outage or network blip must not
 * break the primary Supabase submission flow.
 */
export async function notifyNetlifyForm(
  formName: string,
  data: Record<string, string | boolean | null | undefined>
): Promise<void> {
  try {
    const body = new URLSearchParams();
    body.set("form-name", formName);
    for (const [key, value] of Object.entries(data)) {
      if (value == null || value === "") continue;
      body.set(key, typeof value === "boolean" ? (value ? "yes" : "no") : value);
    }
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
  } catch (err) {
    console.warn("[notifyNetlifyForm] notification POST failed:", err);
  }
}
