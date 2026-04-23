import Icon from "./Icon";

interface Props {
  nameAr: string;
  cityAr: string;
  roleAr: string;
  quoteAr: string;
  avatar: string;
  grad: string;
}

export default function TestimonialCard({
  nameAr,
  cityAr,
  roleAr,
  quoteAr,
  avatar,
  grad,
}: Props) {
  return (
    <div className="card relative flex h-full flex-col" dir="rtl">
      <Icon
        name="quote"
        size={28}
        className="absolute -top-3 right-5 text-neon-purple/40"
      />
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={14} />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-200 sm:text-base">
        "{quoteAr}"
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${grad} text-sm font-bold text-white shadow-lg`}
        >
          {avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{nameAr}</div>
          <div className="text-xs text-slate-400">
            {roleAr} · {cityAr}
          </div>
        </div>
      </div>
    </div>
  );
}
