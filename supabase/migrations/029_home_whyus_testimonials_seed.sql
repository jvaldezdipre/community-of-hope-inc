-- ============================================================================
-- Home Round 2: Add Why Us + Testimonials blocks.
-- ============================================================================
-- Paste into Supabase → SQL Editor → New query → Run.
--
-- Full replace of home row with Hero + Trust Bar + Why Us + Testimonials
-- seeded. Remaining sections (MidCTA, Programs, AboutSection, DarkSection,
-- FAQ, ContactForm, FinalCTA) still render from the hardcoded components.
-- ============================================================================

insert into public.pages (slug, content)
values (
  'home',
  '{
    "content": [
      {
        "type": "HomeHeroBlock",
        "props": {
          "id": "HomeHeroBlock-main",
          "videoSrc": "/herovideo.mp4",
          "eyebrow": "Women\u2019s Recovery Home \u2014 Groton, CT",
          "headingLine1": "A safe place to",
          "headingLine2": "rebuild your life.",
          "subheading": "Hope House is a faith-based, family-style recovery home for women overcoming addiction, homelessness, and domestic violence in southeastern Connecticut. Beds available now.",
          "primaryButtonLabel": "Get Help Now",
          "primaryButtonHref": "#contact",
          "secondaryButtonLabel": "Learn About Our Programs",
          "secondaryButtonHref": "#programs",
          "trustSignals": [
            { "text": "501(c)(3) Public Charity" },
            { "text": "15+ Years Serving CT" },
            { "text": "Faith-Based & Mentor-Driven" }
          ]
        }
      },
      {
        "type": "HomeTrustBarBlock",
        "props": {
          "id": "HomeTrustBarBlock-main",
          "stats": [
            { "number": "15+", "label": "Years Serving\nSoutheastern CT" },
            { "number": "12", "label": "Beds at\nHope House" },
            { "number": "300+", "label": "Women''s Lives\nTransformed" },
            { "number": "4", "label": "Recovery & Community\nPrograms" }
          ]
        }
      },
      {
        "type": "HomeWhyUsBlock",
        "props": {
          "id": "HomeWhyUsBlock-main",
          "eyebrow": "Why Community of Hope",
          "heading": "Not just sober living.\nA place to become whole.",
          "items": [
            {
              "number": "01",
              "title": "Family, Not a Facility",
              "description": "Hope House isn''t an institution. It''s a home. Women live together as a family, sharing meals, responsibilities, and genuine connection. We believe recovery happens in relationship, not isolation."
            },
            {
              "number": "02",
              "title": "Faith-Centered Recovery",
              "description": "Our program is rooted in faith, not as a requirement, but as a foundation. Women are invited into a community that believes in second chances, unconditional love, and the possibility of total transformation."
            },
            {
              "number": "03",
              "title": "From Crisis to Career",
              "description": "We don''t just provide shelter. Our women earn certifications like CNA licenses and CCAR Recovery Coach credentials. They leave with skills, confidence, and a real path forward."
            },
            {
              "number": "04",
              "title": "Mentors Who''ve Been There",
              "description": "Our mentors and staff include women who have walked the same road. They understand the struggle because they''ve lived it, and they know what it takes to build a new life."
            }
          ]
        }
      },
      {
        "type": "HomeTestimonialsBlock",
        "props": {
          "id": "HomeTestimonialsBlock-main",
          "eyebrow": "Stories of Transformation",
          "heading": "Real lives. Real change.\nReal hope.",
          "testimonials": [
            {
              "quote": "When I came to Hope House, I was homeless and suicidal. I had nothing. Through the love and structure here, I earned my CNA license, got a car, found an apartment, and rebuilt my relationship with my children. Community of Hope saved my life.",
              "name": "Miss R.",
              "context": "Hope House Graduate",
              "initials": "MR"
            },
            {
              "quote": "I''ve referred several clients to Community of Hope over the years. What sets them apart is the family model. It''s not just a bed and rules. The women genuinely support each other, and the staff walks alongside them every step. It''s the kind of program I wish existed in every county.",
              "name": "Licensed Social Worker",
              "context": "Referral Partner, New London County",
              "initials": "SW"
            },
            {
              "quote": "I didn''t think I deserved help. I didn''t think anyone would want me. But from day one, they treated me like I mattered. They helped me get clean, get certified, and get my life back. I''m now a Recovery Coach helping other women because of what Hope House gave me.",
              "name": "Program Graduate",
              "context": "Now a CCAR Certified Recovery Coach",
              "initials": "PG"
            }
          ]
        }
      }
    ],
    "root": {}
  }'::jsonb
)
on conflict (slug) do update set
  content = excluded.content,
  updated_at = now();
