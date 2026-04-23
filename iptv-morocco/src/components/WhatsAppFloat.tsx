import { whatsappLink } from "../config/site";
import Icon from "./Icon";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping" aria-hidden />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)] ring-4 ring-emerald-500/20 transition-transform group-hover:scale-105">
        <Icon name="whatsapp" size={26} />
      </span>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink-800/95 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
        تحدث معنا على WhatsApp
      </span>
    </a>
  );
}
