import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/site";

const FloatingWhatsAppButton = () => (
  <a
    href={buildWhatsAppUrl(
      "Hi Hunar Birds! I would like to know more about your handmade products.",
    )}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(142,70%,40%)] px-4 py-3 font-sans text-sm font-medium text-[hsl(0,0%,100%)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    aria-label="Talk to the Maker on WhatsApp"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline">Talk to the Maker</span>
  </a>
);

export default FloatingWhatsAppButton;
