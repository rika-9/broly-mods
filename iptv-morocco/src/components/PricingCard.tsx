import { Link } from "react-router-dom";
import type { Plan } from "../data/plans";
import Icon from "./Icon";
import { whatsappLink } from "../config/site";

interface Props {
  plan: Plan;
  compact?: boolean;
}

export default function PricingCard({ plan, compact = false }: Props) {
  const msg = `مرحبا، أرغب في الاشتراك في باقة ${plan.nameAr} (${plan.priceDH} DH)`;
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
        plan.featured
          ? "border-neon-purple/50 bg-gradient-to-b from-neon-purple/10 via-ink-900/70 to-ink-900/40 shadow-neon-mix"
          : "border-white/10 bg-white/[0.03] hover:border-neon-purple/30 hover:-translate-y-1"
      } ${compact ? "p-5" : "p-7"}`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${
            plan.featured
              ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon-purple"
              : "bg-white/10 text-slate-200 border border-white/15"
          }`}
        >
          {plan.badge}
        </span>
      )}

      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {plan.name}
          </div>
          <div className="mt-1 text-xl font-bold text-white" dir="rtl">
            {plan.nameAr}
          </div>
        </div>
        {plan.savings && (
          <span className="chip border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
            {plan.savings}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="text-5xl font-extrabold text-white">{plan.priceDH}</span>
        <span className="mb-1.5 text-sm font-semibold text-slate-300">DH</span>
        <span className="mb-1.5 text-xs text-slate-500">/ {plan.duration}</span>
      </div>
      <div className="mt-1 text-xs text-slate-400">
        أي ما يعادل {plan.monthlyDH} DH شهرياً
      </div>

      <ul className="mt-6 space-y-2.5 text-sm text-slate-200" dir="rtl">
        {plan.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <span
              className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                plan.featured ? "bg-neon-purple/25 text-neon-blue" : "bg-white/10 text-slate-300"
              }`}
            >
              <Icon name="check" size={12} />
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-2">
        <a
          href={whatsappLink(msg)}
          target="_blank"
          rel="noreferrer"
          className={plan.featured ? "btn-primary" : "btn-outline"}
        >
          <Icon name="whatsapp" size={16} />
          اشترك الآن
        </a>
        <Link
          to="/pricing"
          className="text-center text-xs text-slate-400 hover:text-slate-200"
        >
          مقارنة الباقات
        </Link>
      </div>
    </div>
  );
}
