-- ============================================================================
-- Stories Rounds 5+6 (final): Vision Quote + Share Your Story + Bottom CTA.
-- Stories page is now fully CMS-managed across 7 blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of stories row with all 7 blocks seeded.
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
      },
      {
        "type": "StoriesCommunityVoicesBlock",
        "props": {
          "id": "StoriesCommunityVoicesBlock-main",
          "heading": "Community Voices",
          "voices": [
            {
              "quote": "I''ve referred several clients to Community of Hope over the years. What sets them apart is the family model. It''s not just a bed and rules. The women genuinely support each other, and the staff walks alongside them every step. It''s the kind of program I wish existed in every county.",
              "photo": "",
              "initials": "SW",
              "name": "Licensed Social Worker",
              "context": "Referral Partner, New London County"
            },
            {
              "quote": "I didn''t think I deserved help. I didn''t think anyone would want me. But from day one, they treated me like I mattered. They helped me get clean, get certified, and get my life back. I''m now a Recovery Coach helping other women because of what Hope House gave me.",
              "photo": "",
              "initials": "PG",
              "name": "Program Graduate",
              "context": "Now a CCAR Certified Recovery Coach"
            }
          ]
        }
      },
      {
        "type": "StoriesImpactBlock",
        "props": {
          "id": "StoriesImpactBlock-main",
          "backgroundImage": "/testimonial1.webp",
          "eyebrow": "The Impact",
          "heading": "Every number represents a life changed.",
          "stats": [
            { "number": "15+", "label": "Years Serving\nSoutheastern CT" },
            { "number": "12", "label": "Beds at\nHope House" },
            { "number": "300+", "label": "Women''s Lives\nTransformed" },
            { "number": "4", "label": "Recovery & Community\nPrograms" }
          ]
        }
      },
      {
        "type": "StoriesVisionQuoteBlock",
        "props": {
          "id": "StoriesVisionQuoteBlock-main",
          "quote": "We don''t just give women a place to stay. We give them a reason to believe they can build a life worth staying for.",
          "attribution": "Community of Hope Inc."
        }
      },
      {
        "type": "StoriesShareYourStoryBlock",
        "props": {
          "id": "StoriesShareYourStoryBlock-main",
          "eyebrow": "Your Voice Matters",
          "heading": "Have a story to share?",
          "description": "If you''re a graduate, referral partner, donor, or someone whose life has been touched by Community of Hope, we''d love to hear from you. Your story could be the one that gives someone else the courage to reach out.",
          "buttonLabel": "Share Your Story",
          "buttonHref": "/contact"
        }
      },
      {
        "type": "StoriesBottomCTABlock",
        "props": {
          "id": "StoriesBottomCTABlock-main",
          "heading": "Your story could be next.",
          "description": "Whether you need help, want to give back, or know someone who could use a second chance, Community of Hope is here.",
          "primaryButtonLabel": "Explore Programs",
          "primaryButtonHref": "/programs",
          "secondaryButtonLabel": "Donate",
          "secondaryButtonHref": "/donate"
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
