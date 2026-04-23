import type { SVGProps } from "react";

type IconName =
  | "tv"
  | "sparkles"
  | "zap"
  | "headset"
  | "shield"
  | "bolt"
  | "refresh"
  | "whatsapp"
  | "play"
  | "check"
  | "x"
  | "menu"
  | "close"
  | "chevron-down"
  | "chevron-right"
  | "arrow-right"
  | "star"
  | "quote"
  | "facebook"
  | "instagram"
  | "twitter"
  | "telegram"
  | "youtube"
  | "mail"
  | "phone"
  | "map"
  | "globe"
  | "clock"
  | "dollar"
  | "film"
  | "trophy"
  | "users"
  | "plus"
  | "minus";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}

export default function Icon({ name, size = 20, className, ...rest }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    ...rest,
  };
  switch (name) {
    case "tv":
      return (
        <svg {...common}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M10 10l5 2-5 2z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 2l1.8 4.2L18 8l-4.2 1.8L12 14l-1.8-4.2L6 8l4.2-1.8L12 2z" />
          <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "headset":
      return (
        <svg {...common}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <rect x="3" y="14" width="5" height="6" rx="1.5" />
          <rect x="16" y="14" width="5" height="6" rx="1.5" />
          <path d="M20 20a4 4 0 0 1-4 4h-2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L4 13h7l-1 9 9-11h-7l1-9z" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 3v5h-5" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20.5 3.5A11 11 0 0 0 3.5 17.5L2 22l4.7-1.4a11 11 0 0 0 13.8-17.1z" />
          <path d="M8.5 8.5c.4-.5 1-.6 1.5-.3l.8 1.4c.2.4 0 .9-.3 1.2l-.5.5c.8 1.4 2 2.6 3.4 3.4l.5-.5c.3-.3.8-.4 1.2-.2l1.4.8c.3.3.2.9-.3 1.3a3 3 0 0 1-3.3.4c-2.3-1-4.2-3-5.2-5.2a3 3 0 0 1 .4-3.3z" fill="currentColor" stroke="none"/>
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <path d="M7 5v14l12-7L7 5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common}>
          <path d="M7 7h4v4H7c0 2 1 4 3 4v2c-4 0-6-3-6-6V9a2 2 0 0 1 3-2zM15 7h4v4h-4c0 2 1 4 3 4v2c-4 0-6-3-6-6V9a2 2 0 0 1 3-2z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2H17V2.2C16.7 2.1 15.6 2 14.4 2 11.9 2 10 3.5 10 6.9V10H7v4h3v8h3z" fill="currentColor" stroke="none"/>
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L2 3h6l4 5 6-5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common}>
          <path d="M22 3L2 11l6 2 2 6 3-4 5 4 4-16z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9V20a2 2 0 0 1-2.2 2 20 20 0 0 1-17.8-17.8A2 2 0 0 1 4 2h3.1a2 2 0 0 1 2 1.7l.6 3a2 2 0 0 1-.6 1.9L8 9.8a16 16 0 0 0 6.2 6.2l1.2-1.2a2 2 0 0 1 1.9-.6l3 .6a2 2 0 0 1 1.7 2.1z" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "dollar":
      return (
        <svg {...common}>
          <path d="M12 2v20M17 6a4 4 0 0 0-4-2H11a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-2a4 4 0 0 1-4-2" />
        </svg>
      );
    case "film":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 3v18M17 3v18M3 12h18M3 7h4M3 17h4M17 7h4M17 17h4" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
          <path d="M8 4H5v2a3 3 0 0 0 3 3M16 4h3v2a3 3 0 0 1-3 3M10 17h4l1 4H9l1-4z" />
          <path d="M12 13v4" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="4" />
          <path d="M2 22v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" />
          <path d="M17 11a4 4 0 0 0 0-8M22 22v-2a6 6 0 0 0-4-5.7" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
        </svg>
      );
    default:
      return null;
  }
}
