export interface ChannelCategory {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  accent: string;
  channels: Channel[];
}

export interface Channel {
  name: string;
  country?: string;
  tag?: string;
}

export const channelCategories: ChannelCategory[] = [
  {
    id: "sports",
    title: "Sports",
    titleAr: "الرياضة",
    description: "كل البطولات الكبرى، دوري أبطال أوروبا، الليغا، البريمير ليغ، كأس العالم، الكرة المغربية وأكثر.",
    accent: "from-emerald-400 to-cyan-400",
    channels: [
      { name: "beIN Sports 1", country: "QA", tag: "HD" },
      { name: "beIN Sports 2", country: "QA", tag: "HD" },
      { name: "beIN Sports 3", country: "QA", tag: "HD" },
      { name: "beIN Premium 1", country: "QA", tag: "4K" },
      { name: "beIN Premium 2", country: "QA", tag: "4K" },
      { name: "Arryadia TNT", country: "MA", tag: "HD" },
      { name: "Canal+ Sport", country: "FR", tag: "HD" },
      { name: "RMC Sport 1", country: "FR", tag: "HD" },
      { name: "Sky Sports PL", country: "UK", tag: "HD" },
      { name: "ESPN", country: "US", tag: "HD" },
      { name: "DAZN 1", country: "DE", tag: "HD" },
      { name: "Eurosport 1", country: "EU", tag: "HD" },
    ],
  },
  {
    id: "movies",
    title: "Movies & Series",
    titleAr: "أفلام ومسلسلات",
    description: "مكتبة VOD ضخمة من نتفليكس، ديزني+، آبل تيفي+ وأكثر. جديد يومياً بجودة 4K.",
    accent: "from-fuchsia-500 to-rose-500",
    channels: [
      { name: "OSN Movies", tag: "4K" },
      { name: "MBC 2", tag: "HD" },
      { name: "MBC Max", tag: "HD" },
      { name: "MBC Action", tag: "HD" },
      { name: "Fox Movies", tag: "HD" },
      { name: "Paramount+", tag: "4K" },
      { name: "HBO", tag: "4K" },
      { name: "Cinemax", tag: "HD" },
      { name: "AMC", tag: "HD" },
      { name: "Sony Channel", tag: "HD" },
      { name: "Showtime", tag: "HD" },
      { name: "Starz", tag: "HD" },
    ],
  },
  {
    id: "arabic",
    title: "Arabic",
    titleAr: "قنوات عربية",
    description: "كل القنوات المغربية والعربية: 2M, Al Aoula, MBC, Al Jazeera, Rotana وباقة من القنوات الدينية والإخبارية.",
    accent: "from-amber-400 to-red-500",
    channels: [
      { name: "Al Aoula", country: "MA", tag: "HD" },
      { name: "2M Maroc", country: "MA", tag: "HD" },
      { name: "Medi 1 TV", country: "MA", tag: "HD" },
      { name: "Tamazight TV", country: "MA", tag: "HD" },
      { name: "Al Maghribia", country: "MA", tag: "HD" },
      { name: "MBC 1", country: "SA", tag: "HD" },
      { name: "MBC 3", country: "SA", tag: "HD" },
      { name: "Rotana Cinema", country: "SA", tag: "HD" },
      { name: "Al Jazeera", country: "QA", tag: "HD" },
      { name: "Al Arabiya", country: "SA", tag: "HD" },
      { name: "Dubai TV", country: "AE", tag: "HD" },
      { name: "Abu Dhabi", country: "AE", tag: "HD" },
    ],
  },
  {
    id: "international",
    title: "International",
    titleAr: "قنوات عالمية",
    description: "فرنسية، إسبانية، إنجليزية، إيطالية، ألمانية وقنوات عالمية من كل أنحاء العالم.",
    accent: "from-sky-400 to-indigo-500",
    channels: [
      { name: "TF1", country: "FR", tag: "HD" },
      { name: "France 2", country: "FR", tag: "HD" },
      { name: "Canal+", country: "FR", tag: "HD" },
      { name: "M6", country: "FR", tag: "HD" },
      { name: "BBC One", country: "UK", tag: "HD" },
      { name: "BBC Two", country: "UK", tag: "HD" },
      { name: "ITV", country: "UK", tag: "HD" },
      { name: "RTVE La 1", country: "ES", tag: "HD" },
      { name: "RAI 1", country: "IT", tag: "HD" },
      { name: "ZDF", country: "DE", tag: "HD" },
      { name: "RTL", country: "DE", tag: "HD" },
      { name: "NBC", country: "US", tag: "HD" },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    titleAr: "قنوات الأطفال",
    description: "كرتون نتوورك، نيكولوديون، ديزني، سبيستون، وقنوات تعليمية للأطفال بكل اللغات.",
    accent: "from-pink-400 to-yellow-400",
    channels: [
      { name: "Spacetoon", tag: "HD" },
      { name: "Cartoon Network", tag: "HD" },
      { name: "Nickelodeon", tag: "HD" },
      { name: "Disney Channel", tag: "HD" },
      { name: "Disney Jr", tag: "HD" },
      { name: "Baby TV", tag: "HD" },
      { name: "Boomerang", tag: "HD" },
      { name: "MBC 3", tag: "HD" },
    ],
  },
  {
    id: "documentary",
    title: "Documentary",
    titleAr: "وثائقية",
    description: "ناشيونال جيوغرافيك، ديسكفري، بي بي سي إيرث، تاريخ، علوم، طبيعة.",
    accent: "from-teal-400 to-emerald-500",
    channels: [
      { name: "National Geographic", tag: "4K" },
      { name: "Nat Geo Wild", tag: "HD" },
      { name: "Discovery", tag: "HD" },
      { name: "Discovery Science", tag: "HD" },
      { name: "History", tag: "HD" },
      { name: "BBC Earth", tag: "HD" },
      { name: "Animal Planet", tag: "HD" },
      { name: "Al Jazeera Doc", tag: "HD" },
    ],
  },
];

export const featuredMovies = [
  { title: "Oppenheimer", year: 2023, rating: "9.1", genre: "Biography", grad: "from-orange-500 to-red-700" },
  { title: "Dune: Part Two", year: 2024, rating: "8.8", genre: "Sci‑Fi", grad: "from-amber-600 to-orange-900" },
  { title: "The Batman", year: 2022, rating: "8.4", genre: "Action", grad: "from-zinc-700 to-red-900" },
  { title: "Interstellar", year: 2014, rating: "9.0", genre: "Sci‑Fi", grad: "from-slate-800 to-indigo-900" },
  { title: "Money Heist", year: 2021, rating: "8.9", genre: "Crime", grad: "from-red-600 to-rose-900" },
  { title: "Squid Game", year: 2021, rating: "8.6", genre: "Thriller", grad: "from-pink-600 to-emerald-700" },
  { title: "Breaking Bad", year: 2013, rating: "9.5", genre: "Drama", grad: "from-yellow-500 to-emerald-900" },
  { title: "Peaky Blinders", year: 2022, rating: "8.7", genre: "Drama", grad: "from-neutral-800 to-amber-900" },
  { title: "Stranger Things", year: 2024, rating: "8.6", genre: "Sci‑Fi", grad: "from-rose-700 to-indigo-900" },
  { title: "House of Dragon", year: 2024, rating: "8.5", genre: "Fantasy", grad: "from-red-700 to-yellow-900" },
  { title: "The Last of Us", year: 2023, rating: "8.8", genre: "Drama", grad: "from-emerald-700 to-stone-900" },
  { title: "Loki", year: 2023, rating: "8.2", genre: "Marvel", grad: "from-lime-600 to-green-900" },
];

export const liveNow = [
  { channel: "beIN Sports 1", title: "Real Madrid vs Barcelona", time: "LIVE", viewers: "2.1M", grad: "from-blue-700 to-indigo-900" },
  { channel: "Canal+ Sport", title: "PSG vs Marseille", time: "LIVE", viewers: "980K", grad: "from-sky-700 to-cyan-900" },
  { channel: "MBC 2", title: "Inception", time: "21:30", viewers: "450K", grad: "from-purple-700 to-pink-900" },
  { channel: "National Geographic", title: "Planet Earth III", time: "22:00", viewers: "220K", grad: "from-emerald-700 to-teal-900" },
];
