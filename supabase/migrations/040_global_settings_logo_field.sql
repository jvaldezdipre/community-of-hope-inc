-- ============================================================================
-- Add logoImage to the global-settings row.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Backfills the existing GlobalSocialLinks block with the current default
-- logo path so the site looks identical until Annette uploads a new logo
-- via /admin/pages/global-settings.
--
-- Idempotent — safe to re-run. Uses jsonb_set on the first content item
-- (the GlobalSocialLinks block is the only block in this row).
-- ============================================================================

update public.pages
set
  content = jsonb_set(
    content,
    '{content,0,props,logoImage}',
    '"/coh-logo.png"'::jsonb,
    true  -- create_missing: insert the key if it isn't already there
  ),
  updated_at = now()
where slug = 'global-settings';
