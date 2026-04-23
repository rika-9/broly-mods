import { useState } from "react";
import Icon from "./Icon";

interface Props {
  q: string;
  a: string;
  defaultOpen?: boolean;
}

export default function FaqItem({ q, a, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`rounded-2xl border transition-all ${
        open
          ? "border-neon-purple/40 bg-neon-purple/5"
          : "border-white/10 bg-white/[0.03]"
      }`}
      dir="rtl"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white sm:text-base">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
            open
              ? "border-neon-purple/60 bg-neon-purple/20 text-neon-blue rotate-45"
              : "border-white/15 bg-white/5 text-slate-300"
          }`}
        >
          <Icon name="plus" size={14} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{a}</div>
      </div>
    </div>
  );
}
