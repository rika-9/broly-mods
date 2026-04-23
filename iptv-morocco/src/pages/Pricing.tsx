import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import SectionHeading from "../components/SectionHeading";
import FaqItem from "../components/FaqItem";
import Icon from "../components/Icon";
import { plans, featureMatrix } from "../data/plans";
import { faqs } from "../data/content";
import { whatsappLink } from "../config/site";

export default function Pricing() {
  return (
    <>
      <section className="relative pt-16 pb-10">
        <div className="container-xl text-center">
          <span className="chip mb-5 border-neon-purple/30 bg-neon-purple/10 text-neon-blue">
            <Icon name="dollar" size={12} /> الأسعار بالدرهم المغربي
          </span>
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            dir="rtl"
          >
            باقات <span className="gradient-text">شفافة</span> وأسعار منافسة
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300 sm:text-lg" dir="rtl">
            نفس الخدمة في كل الباقات — تختلف فقط في مدة الاشتراك. كلما طالت المدة،
            كلما وفرت أكثر.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <PricingCard key={p.id} plan={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16">
        <div className="container-xl">
          <SectionHeading
            eyebrow="مقارنة"
            titleAr="قارن بين الباقات"
            titleEn="Feature comparison"
            descAr="كل ما تحصل عليه في كل باقة، بوضوح تام."
          />

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04]">
                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-400" dir="rtl">
                      الميزة
                    </th>
                    {plans.map((p) => (
                      <th key={p.id} className="px-5 py-4 text-center">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {p.name}
                        </div>
                        <div className="mt-1 text-base font-bold text-white" dir="rtl">
                          {p.nameAr}
                        </div>
                        <div className="mt-1 text-xs text-neon-blue">
                          {p.priceDH} DH
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {featureMatrix.map((row) => (
                    <tr key={row.label} className="hover:bg-white/[0.02]">
                      <td className="px-5 py-3.5 text-right text-slate-200" dir="rtl">
                        {row.label}
                      </td>
                      {row.values.map((v, i) => (
                        <td key={i} className="px-5 py-3.5 text-center">
                          {v ? (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                              <Icon name="check" size={14} />
                            </span>
                          ) : (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-slate-500">
                              <Icon name="minus" size={14} />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-10">
        <div className="container-xl">
          <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white" dir="rtl">
                طرق دفع متعددة
              </h3>
              <p className="mt-2 text-sm text-slate-300" dir="rtl">
                ادفع بالطريقة التي تناسبك. كل المعاملات مؤمنة ومحمية بتشفير SSL.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {[
                  "Visa",
                  "Mastercard",
                  "PayPal",
                  "CashPlus",
                  "Wafacash",
                  "Bank Transfer",
                ].map((m) => (
                  <div
                    key={m}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-center text-xs font-semibold text-slate-200"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4" dir="rtl">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                  <Icon name="shield" size={18} />
                </div>
                <div>
                  <div className="font-bold text-white">ضمان استرجاع المال</div>
                  <div className="mt-1 text-xs text-slate-300">
                    إذا لم تعجبك الخدمة، نسترجع مبلغك كاملاً خلال 24 ساعة بدون أي
                    أسئلة.
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-start gap-3 rounded-xl border border-neon-blue/20 bg-neon-blue/5 p-4" dir="rtl">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neon-blue/20 text-neon-blue">
                  <Icon name="bolt" size={18} />
                </div>
                <div>
                  <div className="font-bold text-white">تفعيل فوري</div>
                  <div className="mt-1 text-xs text-slate-300">
                    بعد تأكيد الدفع، نرسل لك بيانات الدخول عبر WhatsApp خلال دقائق.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container-xl">
          <SectionHeading
            eyebrow="الأسئلة الشائعة"
            titleAr="كل ما تريد معرفته"
            titleEn="FAQ"
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-3">
            {faqs.map((f, i) => (
              <FaqItem key={f.qAr} q={f.qAr} a={f.aAr} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-xl">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-neon-purple/10 via-ink-900 to-neon-blue/10 p-10 text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl" dir="rtl">
              لديك سؤال قبل الاشتراك؟
            </h3>
            <p className="max-w-md text-slate-300" dir="rtl">
              فريقنا جاهز للإجابة على أسئلتك عبر WhatsApp خلال دقائق.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary">
                <Icon name="whatsapp" size={16} />
                تحدث معنا
              </a>
              <Link to="/contact" className="btn-ghost">
                صفحة الاتصال
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
