-- ============================================================================
-- Stories Rounds 1+2: Seed the Hero + Featured Story blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Hero + Featured Story are CMS-managed. Remaining sections (Community
-- Voices, Impact by Numbers, Vision Quote, Share Your Story, Bottom CTA)
-- still render from the fallback in StoriesPageContent.tsx until future
-- rounds replace them.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'stories',
  '{
    "content": [
      {
        "type": "StoriesHeroBlock",
        "props": {
          "id": "StoriesHeroBlock-main",
          "backgroundImage": "/testimonial2.webp",
          "eyebrow": "Real Stories, Real Hope",
          "title": "Stories of Hope",
          "description": "Behind every number is a name. Behind every name is a story of courage, transformation, and second chances. These are the voices of women who found hope, and the people who walked alongside them."
        }
      },
      {
        "type": "StoriesFeaturedStoryBlock",
        "props": {
          "id": "StoriesFeaturedStoryBlock-main",
          "eyebrow": "Featured Story",
          "quote": "When I came to Hope House, I was homeless and suicidal. I had nothing. Through the love and structure here, I earned my CNA license, got a car, found an apartment, and rebuilt my relationship with my children. Community of Hope saved my life.",
          "photo": "",
          "initials": "MR",
          "name": "Miss R.",
          "context": "Hope House Graduate"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
