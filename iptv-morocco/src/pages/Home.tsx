import { Link } from "react-router-dom";
import HeroPreview from "../components/HeroPreview";
import Icon from "../components/Icon";
import FeatureCard from "../components/FeatureCard";
import PricingCard from "../components/PricingCard";
import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
import FaqItem from "../components/FaqItem";
import Marquee from "../components/Marquee";
import { plans } from "../data/plans";
import {
  features,
  extraFeatures,
  testimonials,
  faqs,
  stats,
  trustBadges,
} from "../data/content";
import { channelCategories, liveNow } from "../data/channels";
import { whatsappLink } from "../config/site";

export default function Home() {
  const channelBrands = channelCategories.flatMap((c) => c.channels.slice(0, 5));

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 md:pb-24">
        <div className="container-xl grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="relative z-10">
            <span className="chip mb-5 border-neon-purple/30 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>الخدمة #1 في المغرب · تفعيل فوري</span>
            </span>

            <h1
              className="text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl md:text-6xl"
              dir="rtl"
            >
              أفضل خدمة{" "}
              <span className="gradient-text">IPTV</span> في{" "}
              <span className="relative">
                المغرب
                <span className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              dir="rtl"
            >
              +10,000 قناة مباشرة، مكتبة ضخمة من الأفلام والمسلسلات، جودة 4K
              UHD، بدون تقطيع، ودعم مغربي على مدار 24 ساعة. ابتداءً من{" "}
              <span className="font-bold text-white">80 درهم</span> فقط.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/pricing" className="btn-primary text-base !px-6 !py-3.5">
                <Icon name="bolt" size={16} />
                ابدأ الآن
              </Link>
              <Link to="/pricing" className="btn-ghost text-base !px-6 !py-3.5">
                <Icon name="dollar" size={16} />
                عرض الباقات
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-base !px-6 !py-3.5"
              >
                <Icon name="whatsapp" size={16} />
                استفسر على WhatsApp
              </a>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
                >
                  <div className="text-lg font-bold text-white sm:text-xl">{s.k}</div>
                  <div className="mt-0.5 text-[11px] text-slate-400" dir="rtl">
                    {s.vAr}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {["from-emerald-500 to-cyan-500", "from-fuchsia-500 to-pink-500", "from-amber-500 to-red-500", "from-sky-500 to-indigo-500"].map(
                    (g, i) => (
                      <div
                        key={i}
                        className={`h-7 w-7 rounded-full border-2 border-ink-950 bg-gradient-to-br ${g}`}
                      />
                    )
                  )}
                </div>
                <span>
                  <span className="font-bold text-white">+15,000</span> عميل راضٍ
                </span>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <span className="ms-1 font-semibold text-white">4.9/5</span>
              </div>
            </div>
          </div>

          <HeroPreview />
        </div>
      </section>

      {/* ============ CHANNEL LOGOS MARQUEE ============ */}
      <section className="py-8">
        <div className="container-xl mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-white/10" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Trusted channels
          </span>
          <span className="h-px w-10 bg-white/10" />
        </div>
        <Marquee>
          {channelBrands.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
              {c.name}
            </div>
          ))}
        </Marquee>
      </section>

      {/* ============ LIVE NOW STRIP ============ */}
      <section className="py-12">
        <div className="container-xl">
          <div className="flex items-end justify-between">
            <div>
              <div className="chip mb-2 border-red-500/30 bg-red-500/10 text-red-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" /> LIVE NOW
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl" dir="rtl">
                يُبَث الآن على MoroccoTV
              </h2>
            </div>
            <Link
              to="/channels"
              className="hidden text-sm font-semibold text-slate-300 hover:text-white sm:inline-flex items-center gap-1"
            >
              كل البرامج <Icon name="chevron-right" size={14} />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {liveNow.map((l) => (
              <div
                key={l.title}
                className="group relative aspect-video overflow-hidden rounded-xl border border-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${l.grad}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  {l.time}
                </div>
                <div className="absolute right-3 top-3 rounded-md border border-white/20 bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                  {l.viewers} 👥
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    {l.channel}
                  </div>
                  <div className="mt-0.5 font-bold text-white">{l.title}</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                    <Icon name="play" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" className="py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="لماذا MoroccoTV"
            titleAr="مميزات لا مثيل لها"
            titleEn="Why choose us"
            descAr="تجربة مشاهدة احترافية مصممة خصيصاً للمشاهد المغربي، بدعم محلي وأسعار منافسة بالدرهم."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <FeatureCard
                key={f.title}
                titleAr={f.titleAr}
                title={f.title}
                descAr={f.descAr}
                icon={f.icon as "tv" | "sparkles" | "zap" | "headset"}
                index={i}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extraFeatures.map((f) => (
              <div
                key={f.titleAr}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                dir="rtl"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neon-purple/20 text-neon-blue">
                  <Icon name="check" size={14} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{f.titleAr}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-slate-400">
                    {f.descAr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING PREVIEW ============ */}
      <section className="py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="باقات الاشتراك"
            titleAr="أسعار مغربية، جودة عالمية"
            titleEn="Pricing in DH"
            descAr="اختر الباقة التي تناسبك. كل الباقات تشمل جميع القنوات وجودة 4K والدعم الفني."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <PricingCard key={p.id} plan={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/pricing" className="btn-ghost">
              مقارنة مفصلة للباقات
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CONTENT CATEGORIES ============ */}
      <section className="py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="المحتوى"
            titleAr="كل ما تبحث عنه في مكان واحد"
            titleEn="Channels & Content"
            descAr="من الرياضة إلى الأفلام، من القنوات المغربية إلى العالمية — مكتبة لا نهائية من الترفيه."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {channelCategories.slice(0, 4).map((cat) => (
              <Link
                key={cat.id}
                to={`/channels#${cat.id}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-neon-purple/40 hover:shadow-neon-mix"
              >
                <div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${cat.accent} opacity-25 blur-3xl transition-opacity group-hover:opacity-50`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {cat.title}
                      </div>
                      <h3 className="mt-1 text-2xl font-bold text-white" dir="rtl">
                        {cat.titleAr}
                      </h3>
                    </div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-lg`}
                    >
                      <Icon
                        name={
                          cat.id === "sports"
                            ? "trophy"
                            : cat.id === "movies"
                            ? "film"
                            : cat.id === "arabic"
                            ? "tv"
                            : "globe"
                        }
                        size={22}
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300" dir="rtl">
                    {cat.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cat.channels.slice(0, 6).map((ch) => (
                      <span
                        key={ch.name}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200"
                      >
                        {ch.name}
                      </span>
                    ))}
                    <span className="rounded-md bg-neon-purple/15 px-2.5 py-1 text-[11px] font-semibold text-neon-blue">
                      +{cat.channels.length - 6} أخرى
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGES ============ */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((b) => (
              <div
                key={b.titleAr}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-5"
                dir="rtl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-blue">
                  <Icon
                    name={
                      b.icon === "shield"
                        ? "shield"
                        : b.icon === "bolt"
                        ? "bolt"
                        : b.icon === "refresh"
                        ? "refresh"
                        : "whatsapp"
                    }
                    size={22}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{b.titleAr}</div>
                  <div className="mt-0.5 text-xs text-slate-400">{b.descAr}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="آراء العملاء"
            titleAr="ماذا يقول عملاؤنا"
            titleEn="Testimonials"
            descAr="+15,000 عميل سعيد في المغرب والمهجر. شاهد كيف يستمتع الناس بـ MoroccoTV."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.nameAr} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="الأسئلة الشائعة"
            titleAr="إجابات على أسئلتك"
            titleEn="FAQ"
            descAr="إذا لم تجد إجابتك هنا، تواصل معنا على WhatsApp وسنرد خلال دقائق."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-3">
            {faqs.map((f, i) => (
              <FaqItem key={f.qAr} q={f.qAr} a={f.aAr} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20">
        <div className="container-xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neon-purple/10 via-ink-900 to-neon-blue/10 p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-neon-purple/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-neon-blue/30 blur-3xl" />
            <div className="relative">
              <h3
                className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                dir="rtl"
              >
                جاهز لتجربة <span className="gradient-text">أفضل IPTV</span> في المغرب؟
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-slate-300" dir="rtl">
                احصل على اشتراكك الآن وابدأ المشاهدة خلال دقائق. ضمان استرجاع المال
                خلال 24 ساعة.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link to="/pricing" className="btn-primary !px-7 !py-4 text-base">
                  <Icon name="bolt" size={18} />
                  اشترك الآن
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline !px-7 !py-4 text-base"
                >
                  <Icon name="whatsapp" size={18} />
                  تحدث معنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
