import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const DEFAULT_PHONE = "860-912-4356";

export function StickyMobileCTA({ mainPhone }: { mainPhone?: string } = {}) {
  const resolvedPhone = mainPhone?.trim() || DEFAULT_PHONE;
  const phoneTel = `tel:${resolvedPhone.replace(/[^0-9]/g, "")}`;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#EBEBEB] px-4 py-3 flex gap-3">
      <Button href={phoneTel} variant="stickyOutline">
        <Phone size={15} />
        Call
      </Button>
      <Button href="#contact" variant="stickyPrimary">
        Get Help Now
      </Button>
    </div>
  );
}
