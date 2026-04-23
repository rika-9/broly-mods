interface Props {
  eyebrow?: string;
  titleAr: string;
  titleEn?: string;
  descAr?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  titleAr,
  titleEn,
  descAr,
  center = true,
}: Props) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && (
        <span className="chip mb-4 border-neon-purple/30 bg-neon-purple/10 text-neon-blue">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-blue" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl" dir="rtl">
        {titleAr}
      </h2>
      {titleEn && (
        <div className="mt-1 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          {titleEn}
        </div>
      )}
      {descAr && (
        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg" dir="rtl">
          {descAr}
        </p>
      )}
    </div>
  );
}
