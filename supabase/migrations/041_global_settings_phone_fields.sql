-- ============================================================================
-- Add mainPhone + kindnessPhone fields to the existing GlobalSocialLinks
-- block on the global-settings row. Pre-fills the admin editor with the
-- current site phone numbers so staff sees them filled in (instead of
-- empty fields) when they open Global Settings → Site-wide settings.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- This migration is OPTIONAL — the live site already works without it
-- (Navbar/Footer/StickyMobileCTA fall back to the hardcoded numbers when
-- these fields aren't set). Run it only so the admin shows the current
-- phone numbers pre-filled instead of blank.
--
-- SAFETY NOTES:
-- • Idempotent — only adds the two phone keys IF they're missing. Re-running
--   does nothing.
-- • Does NOT touch logo, Facebook URL, Instagram URL, or LinkedIn URL.
-- • Does NOT touch any other block on the global-settings row.
-- • Does NOT touch any other page (home, supporters, hope-house, etc.).
-- ============================================================================

update public.pages
set content = jsonb_set(
  content,
  '{content}',
  (
    select jsonb_agg(
      case
        when block->>'type' = 'GlobalSocialLinks'
          and (
            block->'props'->'mainPhone' is null
            or block->'props'->'kindnessPhone' is null
          )
        then jsonb_set(
          jsonb_set(
            block,
            '{props,mainPhone}',
            coalesce(block->'props'->'mainPhone', '"860-912-4356"'::jsonb)
          ),
          '{props,kindnessPhone}',
          coalesce(block->'props'->'kindnessPhone', '"860-856-5655"'::jsonb)
        )
        else block
      end
    )
    from jsonb_array_elements(content->'content') as block
  )
),
updated_at = now()
where slug = 'global-settings';
