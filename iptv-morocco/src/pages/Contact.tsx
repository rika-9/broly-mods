import { useState } from "react";
import Icon from "../components/Icon";
import { site, whatsappLink } from "../config/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  const socials = [
    { name: "WhatsApp", icon: "whatsapp" as const, href: whatsappLink(), color: "from-emerald-500 to-emerald-600" },
    { name: "Facebook", icon: "facebook" as const, href: site.socials.facebook, color: "from-blue-600 to-indigo-700" },
    { name: "Instagram", icon: "instagram" as const, href: site.socials.instagram, color: "from-pink-500 via-red-500 to-amber-500" },
    { name: "Telegram", icon: "telegram" as const, href: site.socials.telegram, color: "from-sky-500 to-blue-600" },
    { name: "YouTube", icon: "youtube" as const, href: site.socials.youtube, color: "from-red-500 to-red-700" },
    { name: "Twitter", icon: "twitter" as const, href: site.socials.twitter, color: "from-slate-700 to-slate-900" },
  ];

  return (
    <>
      <section className="pt-16 pb-8">
        <div className="container-xl text-center">
          <span className="chip mb-5 border-neon-purple/30 bg-neon-purple/10 text-neon-blue">
            تواصل معنا
          </span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl" dir="rtl">
            نحن هنا من أجلك
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300 sm:text-lg" dir="rtl">
            فريق الدعم متوفر على مدار الساعة. اختر الطريقة التي تناسبك للتواصل.
          </p>
        </div>
      </section>

      {/* Quick contact */}
      <section className="py-8">
        <div className="container-xl">
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                <Icon name="whatsapp" size={22} />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                الأسرع
              </div>
              <h3 className="mt-1 text-xl font-bold text-white">WhatsApp</h3>
              <p className="mt-2 text-sm text-slate-300" dir="rtl">
                تواصل مباشر مع الدعم خلال دقائق، 24/7.
              </p>
              <div className="mt-4 text-sm font-semibold text-emerald-300">
                {site.whatsappDisplay}
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-blue/10 to-transparent p-6 transition-all hover:-translate-y-1 hover:border-neon-blue/40 hover:shadow-neon-blue"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-electric text-white">
                <Icon name="mail" size={22} />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-neon-blue">
                البريد الإلكتروني
              </div>
              <h3 className="mt-1 text-xl font-bold text-white">Email</h3>
              <p className="mt-2 text-sm text-slate-300" dir="rtl">
                للاستفسارات الرسمية والشراكات، نرد خلال 12 ساعة.
              </p>
              <div className="mt-4 text-sm font-semibold text-neon-blue">
                {site.email}
              </div>
            </a>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-purple/10 to-transparent p-6 transition-all hover:-translate-y-1 hover:border-neon-purple/40 hover:shadow-neon-purple">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple to-pink-500 text-white">
                <Icon name="map" size={22} />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-neon-purple">
                الموقع
              </div>
              <h3 className="mt-1 text-xl font-bold text-white">Location</h3>
              <p className="mt-2 text-sm text-slate-300" dir="rtl">
                خدمة عبر الإنترنت 100%، مع دعم محلي في المغرب.
              </p>
              <div className="mt-4 text-sm font-semibold text-neon-purple">
                {site.address}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Socials */}
      <section className="py-12">
        <div className="container-xl grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white" dir="rtl">
              أرسل لنا رسالة
            </h2>
            <p className="mt-2 text-sm text-slate-300" dir="rtl">
              املأ النموذج وسنتواصل معك في أقرب وقت.
            </p>

            {sent ? (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5" dir="rtl">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <Icon name="check" size={22} />
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    تم استلام رسالتك بنجاح!
                  </div>
                  <p className="mt-1 text-sm text-slate-300">
                    شكراً لتواصلك معنا. سنرد عليك خلال ساعات قليلة.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="الاسم الكامل" name="name" type="text" placeholder="يوسف..." required />
                <Field label="البريد الإلكتروني" name="email" type="email" placeholder="you@example.com" required />
                <Field label="رقم الهاتف (اختياري)" name="phone" type="tel" placeholder="+212 6XX XX XX XX" />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    الموضوع
                  </label>
                  <select
                    name="subject"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 focus:border-neon-purple focus:outline-none"
                  >
                    <option value="support" className="bg-ink-900">الدعم الفني</option>
                    <option value="billing" className="bg-ink-900">الفوترة والدفع</option>
                    <option value="new" className="bg-ink-900">اشتراك جديد</option>
                    <option value="reseller" className="bg-ink-900">برنامج الوكلاء</option>
                    <option value="other" className="bg-ink-900">آخر</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-purple focus:outline-none"
                    dir="rtl"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-slate-500" dir="rtl">
                    نحترم خصوصيتك — لن نشارك بياناتك مع أي طرف ثالث.
                  </p>
                  <button type="submit" disabled={loading} className="btn-primary">
                    {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                    {!loading && <Icon name="arrow-right" size={14} />}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white" dir="rtl">
                تابعنا على
              </h3>
              <p className="mt-2 text-sm text-slate-300" dir="rtl">
                كن أول من يعرف بالعروض الحصرية والقنوات الجديدة.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${s.color} text-white`}
                    >
                      <Icon name={s.icon} size={16} />
                    </div>
                    <span className="text-sm font-semibold text-white">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neon-purple/10 via-ink-900 to-neon-blue/10 p-6 sm:p-8" dir="rtl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple text-white">
                <Icon name="clock" size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">ساعات الدعم</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span>WhatsApp</span>
                  <span className="font-bold text-emerald-300">24/7</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span>البريد الإلكتروني</span>
                  <span className="font-bold text-neon-blue">خلال 12 ساعة</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>الدعم الفني</span>
                  <span className="font-bold text-neon-purple">7 أيام/أسبوع</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neon-purple focus:outline-none"
      />
    </div>
  );
}
