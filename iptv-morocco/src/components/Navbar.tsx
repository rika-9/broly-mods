import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";

const nav = [
  { to: "/", labelEn: "Home", labelAr: "الرئيسية" },
  { to: "/pricing", labelEn: "Pricing", labelAr: "الأسعار" },
  { to: "/channels", labelEn: "Channels", labelAr: "القنوات" },
  { to: "/about", labelEn: "About", labelAr: "من نحن" },
  { to: "/contact", labelEn: "Contact", labelAr: "اتصل بنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-1.5">
                    <span>{item.labelEn}</span>
                    <span className="text-[11px] text-slate-500 group-hover:text-slate-300 rtl" dir="rtl">
                      {item.labelAr}
                    </span>
                  </span>
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-neon-blue via-neon-electric to-neon-purple" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/pricing" className="btn-ghost">
            <Icon name="play" size={14} />
            عرض الباقات
          </Link>
          <Link to="/pricing" className="btn-primary">
            ابدأ الآن
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-b border-white/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-xl flex flex-col gap-1 py-3">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-200 hover:bg-white/5"
                }`
              }
            >
              <span>{item.labelEn}</span>
              <span className="text-xs text-slate-400" dir="rtl">
                {item.labelAr}
              </span>
            </NavLink>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link to="/pricing" onClick={closeMenu} className="btn-ghost justify-center">
              الباقات
            </Link>
            <Link to="/pricing" onClick={closeMenu} className="btn-primary justify-center">
              ابدأ الآن
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
