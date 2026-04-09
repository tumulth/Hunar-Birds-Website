import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/?text=Hi%20Hunar%20Birds!%20I%27d%20like%20to%20know%20more%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-sans text-sm font-medium"
    aria-label="Talk to the Maker on WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline">Talk to the Maker</span>
  </a>
);

export default WhatsAppButton;
