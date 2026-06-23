-- ============================================================================
-- Allow PDF flyers to be uploaded into the `events` storage bucket.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
-- The `events` bucket (created in 002_events_storage.sql) was image-only with a
-- 5 MB cap. Event flyers are PDFs and can run larger, so this:
--   • adds application/pdf to the allowed MIME types, and
--   • raises the per-upload size limit to 20 MB.
-- The existing editor-only upload/update/delete RLS policies are bucket-wide
-- (bucket_id = 'events'), so they already cover PDFs — nothing else to change.
-- ============================================================================

update storage.buckets
set
  file_size_limit = 20971520,  -- 20 MB cap per upload
  allowed_mime_types = array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/avif',
    'application/pdf'
  ]
where id = 'events';
