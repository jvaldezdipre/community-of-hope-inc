-- Pages table: one row per CMS-managed page.
-- `content` holds the Puck JSON tree for that page.
create table if not exists public.pages (
  slug text primary key,
  content jsonb not null default '{"content":[],"root":{}}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

-- Keep updated_at accurate on every write.
create or replace function public.pages_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists pages_touch_updated_at on public.pages;
create trigger pages_touch_updated_at
  before update on public.pages
  for each row execute function public.pages_touch_updated_at();

-- Row Level Security
-- Reads: public (the live website needs to render pages to anonymous visitors).
-- Writes: restricted to users whose JWT metadata grants editWebsiteContent.
-- Matches the dashboard's user_has_permission() pattern defined in
-- coh-dashboard/supabase/migrations/20260419_permission_rls.sql.
alter table public.pages enable row level security;

drop policy if exists "pages are publicly readable" on public.pages;
create policy "pages are publicly readable"
  on public.pages for select
  using (true);

drop policy if exists "editors can insert pages" on public.pages;
create policy "editors can insert pages"
  on public.pages for insert to authenticated
  with check (public.user_has_permission('editWebsiteContent'));

drop policy if exists "editors can update pages" on public.pages;
create policy "editors can update pages"
  on public.pages for update to authenticated
  using (public.user_has_permission('editWebsiteContent'))
  with check (public.user_has_permission('editWebsiteContent'));

drop policy if exists "editors can delete pages" on public.pages;
create policy "editors can delete pages"
  on public.pages for delete to authenticated
  using (public.user_has_permission('editWebsiteContent'));

-- Seed the events page with the current hardcoded copy so nothing breaks
-- on first load before staff edits anything.
insert into public.pages (slug, content)
values (
  'events',
  '{
    "content": [
      {"type":"Heading","props":{"id":"heading-seed","text":"Events"}},
      {"type":"Paragraph","props":{"id":"paragraph-seed","text":"Join us at upcoming fundraisers, community gatherings, and events that support our mission."}}
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do nothing;
