import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-ipso-whatsapp text-white shadow-xl shadow-ipso-whatsapp/40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ipso-whatsapp opacity-30" />
    </a>
  );
}