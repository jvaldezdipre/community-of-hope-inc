import type { Config } from "@measured/puck";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { ImageUploadField } from "@/components/admin/ImageUploadField";

/**
 * Site-wide settings edited once in the CMS and read by multiple places on
 * the website (navbar, footer, contact sidebar, etc.). These components have
 * no public route — they only live inside the /admin editor.
 */

export type GlobalSocialLinksProps = {
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  /**
   * Logo image URL. Renders in the navbar + footer. Falls back to the
   * hardcoded /coh-logo.png if empty so the site never looks broken.
   */
  logoImage: string;
  /**
   * Main phone number shown in the navbar (desktop + mobile drawer), the
   * footer's main contact line, and the sticky mobile "Call" button.
   * Falls back to 860-912-4356 if empty so callers always have a number.
   */
  mainPhone: string;
  /**
   * Kindness Connection phone number shown in the footer's Contact column.
   * Falls back to 860-856-5655 if empty.
   */
  kindnessPhone: string;
};

export type GlobalPuckProps = {
  GlobalSocialLinks: GlobalSocialLinksProps;
};

export const globalPuckComponents: Config<GlobalPuckProps>["components"] = {
  GlobalSocialLinks: {
    label: "Site-wide settings (logo + social links)",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
      logoImage: {
        type: "custom",
        label:
          "Logo image (shown in the navbar + footer on every page; leave empty to use the default)",
        render: ({ value, onChange, readOnly }) => (
          <ImageUploadField
            value={value as string | undefined}
            onChange={onChange}
            readOnly={readOnly}
          />
        ),
      },
      facebookUrl: {
        type: "text",
        label: "Facebook URL (leave empty to hide icon)",
      },
      instagramUrl: {
        type: "text",
        label: "Instagram URL (leave empty to hide icon)",
      },
      linkedinUrl: {
        type: "text",
        label: "LinkedIn URL (leave empty to hide icon)",
      },
      mainPhone: {
        type: "text",
        label:
          "Main phone number (used in navbar, footer, and sticky mobile call button — e.g. 860-912-4356)",
      },
      kindnessPhone: {
        type: "text",
        label:
          "Kindness Connection phone number (used in the footer Contact column — e.g. 860-856-5655)",
      },
    },
    defaultProps: {
      logoImage: "",
      facebookUrl: "",
      instagramUrl: "",
      linkedinUrl: "",
      mainPhone: "860-912-4356",
      kindnessPhone: "860-856-5655",
    },
    // In-editor preview: show the logo + three social icons with their URLs
    // so staff can visually confirm what they filled in. Not shown on the
    // live site — the live site reads these fields and injects them into the
    // navbar, footer, and contact sidebar via `getSocialLinks()`.
    render: ({
      logoImage,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      mainPhone,
      kindnessPhone,
    }) => (
      <div className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] p-6 max-w-lg">
        <p
          className="text-[#3D3D3D] mb-4"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
          }}
        >
          The logo shows in the navbar and footer on every page. Social links
          power the icons in the footer and the Contact page sidebar. The
          main phone is used by the navbar, footer, and sticky mobile call
          button; the Kindness Connection phone shows in the footer Contact
          column. Leave any field empty to use its default.
        </p>
        <div className="mb-5 flex items-center gap-3">
          {logoImage ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={logoImage}
              alt="Logo preview"
              className="h-10 w-auto object-contain"
            />
          ) : (
            <span
              className="text-[#3D3D3D]/60 italic"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem" }}
            >
              (no logo uploaded — using default)
            </span>
          )}
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-3">
            <Facebook size={16} className="text-[#1A1A1A]" />
            <span
              className="text-[#3D3D3D] truncate"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem" }}
            >
              {facebookUrl || "(empty — Facebook hidden)"}
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Instagram size={16} className="text-[#1A1A1A]" />
            <span
              className="text-[#3D3D3D] truncate"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem" }}
            >
              {instagramUrl || "(empty — Instagram hidden)"}
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Linkedin size={16} className="text-[#1A1A1A]" />
            <span
              className="text-[#3D3D3D] truncate"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem" }}
            >
              {linkedinUrl || "(empty — LinkedIn hidden)"}
            </span>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 mt-5 pt-5 border-t border-[#EBEBEB]">
          <li className="flex items-center gap-3">
            <span
              className="text-[#1A1A1A] uppercase"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
              }}
            >
              Main
            </span>
            <span
              className="text-[#3D3D3D]"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem" }}
            >
              {mainPhone || "(empty — using default 860-912-4356)"}
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span
              className="text-[#1A1A1A] uppercase"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                fontWeight: 500,
              }}
            >
              KC
            </span>
            <span
              className="text-[#3D3D3D]"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem" }}
            >
              {kindnessPhone || "(empty — using default 860-856-5655)"}
            </span>
          </li>
        </ul>
      </div>
    ),
  },
};
