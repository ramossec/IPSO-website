import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      // bottom respeita a safe-area do iPhone (barra home).
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ipso-whatsapp text-white shadow-xl shadow-ipso-whatsapp/40 transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ipso-whatsapp opacity-30 motion-reduce:animate-none" />
    </a>
  );
}