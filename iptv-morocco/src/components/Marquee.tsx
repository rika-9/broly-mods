import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({ children, className = "", pauseOnHover = true }: Props) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className={`flex shrink-0 gap-4 pr-4 animate-marquee ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`flex shrink-0 gap-4 pr-4 animate-marquee ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
