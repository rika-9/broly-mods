import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="container-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-neon-mix">
          <Icon name="tv" size={28} />
        </div>
        <div className="text-6xl font-extrabold gradient-text sm:text-7xl">404</div>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl" dir="rtl">
          الصفحة غير موجودة
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-300" dir="rtl">
          يبدو أن هذه القناة خارج الخدمة. ارجع إلى الصفحة الرئيسية واختر محتوى آخر.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Icon name="arrow-right" size={14} />
            العودة للرئيسية
          </Link>
          <Link to="/channels" className="btn-ghost">
            استعراض القنوات
          </Link>
        </div>
      </div>
    </section>
  );
}
