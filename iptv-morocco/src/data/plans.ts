export interface Plan {
  id: string;
  name: string;
  nameAr: string;
  duration: string;
  months: number;
  priceDH: number;
  monthlyDH: number;
  savings?: string;
  featured?: boolean;
  badge?: string;
  highlights: string[];
}

export const plans: Plan[] = [
  {
    id: "m1",
    name: "Starter",
    nameAr: "شهر واحد",
    duration: "1 Month",
    months: 1,
    priceDH: 80,
    monthlyDH: 80,
    highlights: [
      "+10,000 قناة مباشرة",
      "جودة Full HD / 4K",
      "خوادم مستقرة بدون تقطيع",
      "دعم على جميع الأجهزة",
    ],
  },
  {
    id: "m3",
    name: "Quarterly",
    nameAr: "3 أشهر",
    duration: "3 Months",
    months: 3,
    priceDH: 200,
    monthlyDH: 67,
    savings: "وفر 17%",
    highlights: [
      "كل ما في باقة الشهر",
      "VOD: أفلام ومسلسلات",
      "beIN Sports وكل قنوات الرياضة",
      "دعم 24/7 عبر WhatsApp",
    ],
  },
  {
    id: "m6",
    name: "Premium",
    nameAr: "6 أشهر",
    duration: "6 Months",
    months: 6,
    priceDH: 350,
    monthlyDH: 58,
    savings: "وفر 27%",
    featured: true,
    badge: "الأكثر مبيعاً",
    highlights: [
      "كل ما سبق",
      "جودة 4K UHD بالكامل",
      "EPG وأرشيف 7 أيام",
      "تفعيل فوري خلال دقائق",
      "أولوية الدعم الفني",
    ],
  },
  {
    id: "m12",
    name: "Ultimate",
    nameAr: "12 شهر",
    duration: "12 Months",
    months: 12,
    priceDH: 600,
    monthlyDH: 50,
    savings: "وفر 37%",
    badge: "أفضل قيمة",
    highlights: [
      "كل ما سبق",
      "شهرين مجاناً",
      "تحديث القنوات تلقائياً",
      "اشتراك ثاني بسعر مخفض",
      "أولوية قصوى للدعم",
    ],
  },
];

export const featureMatrix = [
  { label: "+10,000 قناة", values: [true, true, true, true] },
  { label: "جودة Full HD", values: [true, true, true, true] },
  { label: "جودة 4K UHD", values: [false, true, true, true] },
  { label: "VOD أفلام & مسلسلات", values: [true, true, true, true] },
  { label: "EPG + أرشيف 7 أيام", values: [false, false, true, true] },
  { label: "دعم 24/7 WhatsApp", values: [true, true, true, true] },
  { label: "أولوية الدعم", values: [false, false, true, true] },
  { label: "تفعيل فوري", values: [true, true, true, true] },
  { label: "ضمان استرجاع 24 ساعة", values: [true, true, true, true] },
];
