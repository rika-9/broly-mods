import Icon from "./Icon";

interface Props {
  titleAr: string;
  title: string;
  descAr: string;
  icon: "tv" | "sparkles" | "zap" | "headset";
  index?: number;
}

const accents: Record<string, string> = {
  tv: "from-neon-blue to-neon-electric",
  sparkles: "from-neon-purple to-pink-500",
  zap: "from-amber-400 to-orange-500",
  headset: "from-emerald-400 to-teal-500",
};

export default function FeatureCard({ titleAr, title, descAr, icon, index = 0 }: Props) {
  return (
    <div
      className="card group relative overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${accents[icon]} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
      />
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accents[icon]} text-white shadow-neon-mix`}
      >
        <Icon name={icon} size={22} />
      </div>
      <div className="mt-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {title}
        </div>
        <h3 className="mt-1 text-xl font-bold text-white" dir="rtl">
          {titleAr}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300" dir="rtl">
          {descAr}
        </p>
      </div>
    </div>
  );
}
