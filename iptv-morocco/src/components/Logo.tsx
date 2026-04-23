interface LogoProps {
  size?: number;
  withText?: boolean;
  className?: string;
}

export default function Logo({ size = 36, withText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.5" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="58" height="58" rx="14" fill="#0a0c14" stroke="url(#logoGrad)" strokeWidth="2" />
        <rect x="11" y="15" width="42" height="28" rx="5" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5" />
        <path d="M26 23 L40 29 L26 35 Z" fill="url(#logoGrad)" />
        <rect x="23" y="48" width="18" height="2.5" rx="1.25" fill="url(#logoGrad)" />
      </svg>
      {withText && (
        <div className="leading-none">
          <div className="font-display text-lg font-bold tracking-tight">
            <span className="text-white">Morocco</span>
            <span className="gradient-text">TV</span>
          </div>
          <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Premium IPTV
          </div>
        </div>
      )}
    </div>
  );
}
