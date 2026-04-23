import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Icon from "../components/Icon";
import { channelCategories, featuredMovies } from "../data/channels";
import { whatsappLink } from "../config/site";

export default function Channels() {
  const [active, setActive] = useState<string>("all");
  const categories = useMemo(
    () =>
      active === "all"
        ? channelCategories
        : channelCategories.filter((c) => c.id === active),
    [active]
  );

  return (
    <>
      <section className="relative pt-16 pb-10">
        <div className="container-xl text-center">
          <span className="chip mb-5 border-neon-purple/30 bg-neon-purple/10 text-neon-blue">
            <Icon name="tv" size={12} /> +10,000 قناة
          </span>
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            dir="rtl"
          >
            القنوات والمحتوى
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300 sm:text-lg" dir="rtl">
            استعرض مكتبة القنوات والمحتوى الهائلة لدينا. رياضة، أفلام، مسلسلات،
            قنوات عربية وعالمية — كل شيء بجودة 4K.
          </p>
        </div>
      </section>

      {/* Featured Movies rail */}
      <section className="py-10">
        <div className="container-xl">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <div className="chip mb-2 border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300">
                <Icon name="film" size={12} /> Trending
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl" dir="rtl">
                أفلام ومسلسلات رائجة
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {featuredMovies.map((m) => (
              <div
                key={m.title}
                className="group relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${m.grad}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute right-2 top-2 rounded-md border border-white/20 bg-black/40 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur">
                  {m.year}
                </div>
                <div className="absolute left-2 top-2 flex items-center gap-0.5 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-bold text-amber-400 backdrop-blur">
                  <Icon name="star" size={10} />
                  {m.rating}
                </div>
                <div className="absolute inset-x-2 bottom-2">
                  <div className="text-[11px] font-semibold text-emerald-300">
                    {m.genre}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-bold text-white">
                    {m.title}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur">
                    <Icon name="play" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8">
        <div className="container-xl">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActive("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === "all"
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon-mix"
                  : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
              }`}
            >
              كل الفئات
            </button>
            {channelCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === c.id
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon-mix"
                    : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {c.titleAr}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + channels */}
      <section className="py-8">
        <div className="container-xl space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <div
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${cat.accent} bg-clip-text px-3 py-1 text-xs font-bold uppercase tracking-wider text-transparent`}
                  >
                    <span>{cat.title}</span>
                  </div>
                  <h2 className="mt-1 text-3xl font-bold text-white" dir="rtl">
                    {cat.titleAr}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-300" dir="rtl">
                    {cat.description}
                  </p>
                </div>
                <span className="chip">{cat.channels.length}+ قناة</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {cat.channels.map((ch) => (
                  <div
                    key={ch.name}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-neon-purple/40 hover:shadow-neon-purple"
                  >
                    <div
                      className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${cat.accent} opacity-15 blur-2xl transition-opacity group-hover:opacity-30`}
                    />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${cat.accent} text-white text-sm font-bold`}
                        >
                          {ch.name.slice(0, 2).toUpperCase()}
                        </div>
                        {ch.tag && (
                          <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-white">
                            {ch.tag}
                          </span>
                        )}
                      </div>
                      <div className="mt-3">
                        <div className="text-sm font-semibold text-white">
                          {ch.name}
                        </div>
                        <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-400">
                          <span className="h-1 w-1 rounded-full bg-red-400 animate-pulse" />
                          <span>LIVE</span>
                          {ch.country && (
                            <>
                              <span>·</span>
                              <span>{ch.country}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-xl">
          <SectionHeading
            eyebrow="جاهز للمشاهدة؟"
            titleAr="اشترك الآن وابدأ التمتع بكل هذه القنوات"
            descAr="تفعيل خلال دقائق، دون الحاجة لبطاقة ائتمان — يمكنك الدفع عبر CashPlus أو التحويل البنكي."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/pricing" className="btn-primary">
              <Icon name="bolt" size={16} />
              عرض الباقات
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline">
              <Icon name="whatsapp" size={16} />
              استفسر على WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
