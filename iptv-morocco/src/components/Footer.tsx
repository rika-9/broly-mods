import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { site, whatsappLink } from "../config/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-950/60">
      <div className="container-xl py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              أفضل خدمة IPTV في المغرب. +10,000 قناة، أفلام ومسلسلات بجودة 4K،
              دعم 24/7 عبر WhatsApp.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { href: site.socials.facebook, name: "facebook" as const },
                { href: site.socials.instagram, name: "instagram" as const },
                { href: site.socials.twitter, name: "twitter" as const },
                { href: site.socials.telegram, name: "telegram" as const },
                { href: site.socials.youtube, name: "youtube" as const },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-neon-purple/50 hover:text-white hover:shadow-neon-purple"
                >
                  <Icon name={s.name} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="link-underline hover:text-white">Home</Link></li>
              <li><Link to="/pricing" className="link-underline hover:text-white">Pricing</Link></li>
              <li><Link to="/channels" className="link-underline hover:text-white">Channels</Link></li>
              <li><Link to="/about" className="link-underline hover:text-white">About</Link></li>
              <li><Link to="/contact" className="link-underline hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/contact" className="link-underline hover:text-white">مركز المساعدة</Link></li>
              <li><Link to="/pricing#faq" className="link-underline hover:text-white">الأسئلة الشائعة</Link></li>
              <li><a href={whatsappLink()} target="_blank" rel="noreferrer" className="link-underline hover:text-white">WhatsApp</a></li>
              <li><a href={`mailto:${site.email}`} className="link-underline hover:text-white">{site.email}</a></li>
              <li><Link to="/about" className="link-underline hover:text-white">شروط الاستخدام</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              النشرة البريدية
            </h4>
            <p className="mb-3 text-sm text-slate-400">
              احصل على عروض حصرية وتحديثات القنوات الجديدة.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-purple focus:outline-none"
              />
              <button type="submit" className="btn-primary !px-4 !py-2.5">
                <Icon name="arrow-right" size={14} />
              </button>
            </form>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
              <span className="chip">
                <Icon name="shield" size={12} /> SSL
              </span>
              <span className="chip">
                <Icon name="bolt" size={12} /> تفعيل فوري
              </span>
              <span className="chip">
                <Icon name="refresh" size={12} /> ضمان 24h
              </span>
            </div>
          </div>
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-2">
            <Icon name="map" size={12} /> {site.address} · Made with <span className="text-neon-purple">♥</span> in Morocco
          </p>
        </div>
      </div>
    </footer>
  );
}
