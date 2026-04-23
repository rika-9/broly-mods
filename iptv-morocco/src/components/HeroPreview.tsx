import Icon from "./Icon";

const shows = [
  { title: "Oppenheimer", grad: "from-orange-500 to-red-700", tag: "4K" },
  { title: "Dune II", grad: "from-amber-600 to-orange-900", tag: "4K" },
  { title: "Interstellar", grad: "from-slate-800 to-indigo-900", tag: "4K" },
  { title: "Peaky Blinders", grad: "from-neutral-800 to-amber-900", tag: "HD" },
  { title: "Money Heist", grad: "from-red-600 to-rose-900", tag: "HD" },
  { title: "House of Dragon", grad: "from-red-700 to-yellow-900", tag: "4K" },
];

const channels = [
  { name: "beIN 1", grad: "from-blue-600 to-blue-900" },
  { name: "MBC 2", grad: "from-purple-600 to-pink-800" },
  { name: "2M", grad: "from-red-600 to-rose-900" },
  { name: "Canal+", grad: "from-sky-600 to-cyan-900" },
  { name: "Nat Geo", grad: "from-amber-500 to-yellow-800" },
  { name: "OSN", grad: "from-fuchsia-600 to-purple-900" },
];

export default function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[48px] bg-gradient-to-br from-neon-blue/20 via-neon-electric/10 to-neon-purple/30 blur-3xl" />

      {/* Device frame */}
      <div className="relative rounded-[26px] border border-white/10 bg-ink-900/80 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Top chrome */}
        <div className="flex items-center justify-between px-3 py-2 text-[10px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
          </div>
          <div className="font-mono tracking-wider">moroccotv.ma/app</div>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Screen */}
        <div className="overflow-hidden rounded-[18px] border border-white/5 bg-ink-950">
          {/* Hero feature */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-fuchsia-800 to-rose-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22p%22 width=%228%22 height=%228%22 patternUnits=%22userSpaceOnUse%22><circle cx=%221%22 cy=%221%22 r=%220.5%22 fill=%22rgba(255,255,255,0.05)%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23p)%22/></svg>')]" />
            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              LIVE · beIN Sports 1
            </div>
            <div className="absolute right-3 top-3 rounded-md border border-white/20 bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
              4K UHD
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                UEFA Champions League
              </div>
              <div className="mt-0.5 text-sm font-bold text-white sm:text-lg">
                Real Madrid vs Manchester City
              </div>
              <div className="mt-2 flex items-center gap-2">
                <button className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] font-bold text-black">
                  <Icon name="play" size={10} /> Watch
                </button>
                <button className="flex items-center gap-1.5 rounded-md border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  <Icon name="plus" size={10} /> My List
                </button>
              </div>
            </div>
          </div>

          {/* Channels strip */}
          <div className="border-t border-white/5 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] font-semibold text-slate-200">القنوات المباشرة</div>
              <div className="text-[10px] text-slate-500">view all →</div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {channels.map((c) => (
                <div
                  key={c.name}
                  className={`group relative aspect-video overflow-hidden rounded-md bg-gradient-to-br ${c.grad} p-1.5 text-[9px] font-bold text-white/90`}
                >
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">{c.name}</div>
                  <div className="absolute bottom-1 left-1 flex items-center gap-0.5">
                    <span className="h-1 w-1 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-[8px] font-semibold uppercase">live</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VOD rail */}
          <div className="border-t border-white/5 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] font-semibold text-slate-200">Trending — أفلام ومسلسلات</div>
              <div className="text-[10px] text-slate-500">see more →</div>
            </div>
            <div className="flex gap-2 overflow-hidden">
              {shows.map((s) => (
                <div
                  key={s.title}
                  className={`relative aspect-[2/3] w-[calc(100%/4.5)] shrink-0 overflow-hidden rounded-md bg-gradient-to-br ${s.grad} p-1.5 text-[9px] font-bold text-white`}
                >
                  <div className="absolute right-1 top-1 rounded bg-black/50 px-1 text-[8px]">{s.tag}</div>
                  <div className="absolute bottom-1 left-1 right-1 truncate">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="pointer-events-none absolute -left-4 top-10 hidden animate-float-slow rounded-xl border border-white/10 bg-ink-900/90 p-3 text-xs shadow-neon-blue backdrop-blur md:block">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-blue/20 text-neon-blue">
            <Icon name="tv" size={16} />
          </div>
          <div>
            <div className="font-bold text-white">+10,000</div>
            <div className="text-[10px] text-slate-400">قناة مباشرة</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-2 bottom-16 hidden animate-float-slower rounded-xl border border-white/10 bg-ink-900/90 p-3 text-xs shadow-neon-purple backdrop-blur md:block">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-purple/20 text-neon-purple">
            <Icon name="sparkles" size={16} />
          </div>
          <div>
            <div className="font-bold text-white">4K UHD</div>
            <div className="text-[10px] text-slate-400">جودة سينمائية</div>
          </div>
        </div>
      </div>
    </div>
  );
}
