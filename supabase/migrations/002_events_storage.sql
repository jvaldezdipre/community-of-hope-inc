-- ============================================================================
-- Storage bucket for event imagery uploaded from the Puck editor.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
-- Creates the `events` bucket (public read) + RLS so only users with the
-- editWebsiteContent permission can upload / replace / delete files.
-- ============================================================================

-- Create the bucket. Public so the website can <img src=...> the public URL
-- directly; writes are still gated by RLS below.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'events',
  'events',
  true,
  5242880,  -- 5 MB cap per upload
  array['image/jpeg','image/png','image/webp','image/gif','image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Public read: anonymous visitors can see event images on the live website.
drop policy if exists "events images are publicly readable" on storage.objects;
create policy "events images are publicly readable"
  on storage.objects for select
  using (bucket_id = 'events');

-- Upload: editors only.
drop policy if exists "editors can upload event images" on storage.objects;
create policy "editors can upload event images"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'events'
    and public.user_has_permission('editWebsiteContent')
  );

-- Update / replace existing files.
drop policy if exists "editors can update event images" on storage.objects;
create policy "editors can update event images"
  on storage.objects for update to authenticated
  using (
    bucket_id = 'events'
    and public.user_has_permission('editWebsiteContent')
  )
  with check (
    bucket_id = 'events'
    and public.user_has_permission('editWebsiteContent')
  );

-- Delete.
drop policy if exists "editors can delete event images" on storage.objects;
create policy "editors can delete event images"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'events'
    and public.user_has_permission('editWebsiteContent')
  );
