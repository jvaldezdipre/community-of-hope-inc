import type { Config } from "@measured/puck";
import { Facebook, Instagram, Linkedin } from "lucide-react";

/**
 * Site-wide settings edited once in the CMS and read by multiple places on
 * the website (footer, contact sidebar, etc.). These components have no
 * public route — they only live inside the /admin editor.
 */

export type GlobalSocialLinksProps = {
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
};

export type GlobalPuckProps = {
  GlobalSocialLinks: GlobalSocialLinksProps;
};

export const globalPuckComponents: Config<GlobalPuckProps>["components"] = {
  GlobalSocialLinks: {
    label: "Social media links",
    permissions: {
      delete: false,
      duplicate: false,
      drag: false,
      insert: false,
    },
    fields: {
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
    },
    defaultProps: {
      facebookUrl: "",
      instagramUrl: "",
      linkedinUrl: "",
    },
    // In-editor preview: show the three icons + their URL beside them so
    // staff can visually confirm what they filled in. Not shown on the live
    // site — the live site reads these fields and injects them into the
    // footer + contact sidebar via `getGlobalSettings()`.
    render: ({ facebookUrl, instagramUrl, linkedinUrl }) => (
      <div className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] p-6 max-w-lg">
        <p
          className="text-[#3D3D3D] mb-4"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
          }}
        >
          These links power the social icons in the footer (every page) and
          the Contact page sidebar. Leave a field empty to hide that icon
          everywhere.
        </p>
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
      </div>
    ),
  },
};
