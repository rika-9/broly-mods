import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Icon from "../components/Icon";
import { stats, trustBadges } from "../data/content";
import { whatsappLink } from "../config/site";

const values = [
  {
    titleAr: "شفافية",
    descAr: "أسعار واضحة، خدمة واضحة، وعقد واضح. لا رسوم خفية ولا التزامات.",
    icon: "check" as const,
  },
  {
    titleAr: "جودة",
    descAr: "خوادم مخصصة في أوروبا وشمال إفريقيا لضمان أفضل تجربة مشاهدة بدون تقطيع.",
    icon: "sparkles" as const,
  },
  {
    titleAr: "قرب من العميل",
    descAr: "دعم فني مغربي بالدارجة، العربية، الفرنسية، والإنجليزية — 24/7.",
    icon: "users" as const,
  },
  {
    titleAr: "أمان",
    descAr: "كل المعاملات مشفرة، بياناتك محمية، وحسابك خاص بك فقط.",
    icon: "shield" as const,
  },
];

export default function About() {
  return (
    <>
      <section className="relative pt-16 pb-10">
        <div className="container-xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="chip mb-5 border-neon-purple/30 bg-neon-purple/10 text-neon-blue">
              عن MoroccoTV
            </span>
            <h1
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
              dir="rtl"
            >
              نبني{" "}
              <span className="gradient-text">أفضل تجربة IPTV</span>{" "}
              في المغرب
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg" dir="rtl">
              MoroccoTV خدمة IPTV احترافية تأسست من طرف فريق مغربي شغوف بالرياضة
              والسينما. هدفنا أن نوفر للمشاهد المغربي في كل مكان — داخل المغرب أو
              في المهجر — أفضل تجربة ترفيه ممكنة بأسعار عادلة بالدرهم.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300" dir="rtl">
              منذ إطلاقنا، خدمنا أكثر من 15,000 عميل، بمعدل رضا يفوق 98%. نستثمر
              باستمرار في خوادم أقوى، قنوات جديدة، ومكتبة VOD محدثة يومياً.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/pricing" className="btn-primary">
                <Icon name="bolt" size={16} />
                ابدأ الاشتراك
              </Link>
              <Link to="/contact" className="btn-ghost">
                تواصل معنا
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/25 blur-3xl" />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.k}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${
                    i % 2 === 0
                      ? "from-neon-blue/15 to-transparent"
                      : "from-neon-purple/15 to-transparent"
                  } p-6`}
                >
                  <div className="text-3xl font-extrabold text-white sm:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-sm text-slate-300" dir="rtl">
                    {s.vAr}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="قيمنا"
            titleAr="ما الذي يميزنا"
            titleEn="Why choose us"
            descAr="نؤمن بأن الترفيه حق، والجودة واجب. نشتغل يومياً لنقدم لك خدمة لا تقبل المساومة."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.titleAr}
                className="card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple text-white">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white" dir="rtl">
                  {v.titleAr}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300" dir="rtl">
                  {v.descAr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="py-10">
        <div className="container-xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((b) => (
              <div
                key={b.titleAr}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
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

      {/* Timeline */}
      <section className="py-20">
        <div className="container-xl">
          <SectionHeading
            eyebrow="رحلتنا"
            titleAr="من الفكرة إلى +15,000 عميل"
            titleEn="Our journey"
          />
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute inset-y-0 right-5 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent sm:right-1/2" />
            {[
              { yr: "2022", titleAr: "الانطلاقة", descAr: "إطلاق MoroccoTV بـ500 قناة أولية لخدمة السوق المغربي." },
              { yr: "2023", titleAr: "التوسع", descAr: "أكثر من 5,000 عميل، إضافة مكتبة VOD ودعم 4K." },
              { yr: "2024", titleAr: "الاعتمادية", descAr: "خوادم جديدة في أوروبا، دعم 24/7، +10,000 قناة." },
              { yr: "2025", titleAr: "اليوم", descAr: "+15,000 عميل سعيد، تطبيقات مخصصة، ومكتبة تتجدد يومياً." },
            ].map((t, i) => (
              <div
                key={t.yr}
                className={`relative mb-8 flex gap-5 sm:mb-10 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:ml-auto sm:pl-10" : "sm:mr-auto sm:pr-10 sm:flex-row-reverse"
                }`}
                dir="rtl"
              >
                <div className="absolute right-3 top-4 h-3 w-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-neon-mix sm:right-auto sm:left-auto sm:-translate-x-1/2 sm:translate-y-0" style={i % 2 === 0 ? { left: "-1.25rem" } : { right: "-1.25rem" }} />
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-neon-blue">
                    {t.yr}
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">
                    {t.titleAr}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {t.descAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-xl">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-neon-purple/10 via-ink-900 to-neon-blue/10 p-10 text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl" dir="rtl">
              انضم إلى عائلة MoroccoTV
            </h3>
            <p className="max-w-md text-slate-300" dir="rtl">
              جرب الخدمة اليوم بأمان تام — ضمان استرجاع المال خلال 24 ساعة.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/pricing" className="btn-primary">
                <Icon name="bolt" size={16} /> ابدأ الآن
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline">
                <Icon name="whatsapp" size={16} /> تحدث معنا
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
