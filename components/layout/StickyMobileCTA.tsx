import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#EBEBEB] px-4 py-3 flex gap-3">
      <Button href="tel:8609128983" variant="stickyOutline">
        <Phone size={15} />
        Call
      </Button>
      <Button href="#contact" variant="stickyPrimary">
        Get Help Now
      </Button>
    </div>
  );
}
