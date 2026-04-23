/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0c14",
          800: "#0f1220",
          700: "#151932",
          600: "#1f2547",
        },
        neon: {
          blue: "#22d3ee",
          electric: "#3b82f6",
          purple: "#a855f7",
          violet: "#8b5cf6",
          pink: "#ec4899",
        },
      },
      boxShadow: {
        "neon-blue": "0 0 24px rgba(34, 211, 238, 0.45), 0 0 60px rgba(59, 130, 246, 0.25)",
        "neon-purple": "0 0 24px rgba(168, 85, 247, 0.45), 0 0 60px rgba(139, 92, 246, 0.25)",
        "neon-mix": "0 0 30px rgba(34, 211, 238, 0.35), 0 0 60px rgba(168, 85, 247, 0.3)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at top, rgba(139,92,246,0.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(34,211,238,0.2), transparent 60%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.75, filter: "brightness(1)" },
          "50%": { opacity: 1, filter: "brightness(1.25)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
