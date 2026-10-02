/** Abstract healthcare-tech hero: gradient mesh, grid, dashboard silhouette. No PHI. */
export function HeroVisual() {
  return (
    <div
      className="relative isolate overflow-hidden rounded-2xl border border-border/80 bg-navy shadow-xl shadow-navy/20"
      aria-hidden="true"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-teal/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-violet/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-cyan/20 blur-2xl" />

      {/* Subtle grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tl-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="#94A3B8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tl-grid)" />
      </svg>

      {/* Network nodes */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 640 320"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#5EEAD4" strokeWidth="1" fill="none" opacity="0.55">
          <path d="M80 240 L180 160 L280 200 L380 100 L480 140 L560 80" />
          <path d="M120 80 L220 120 L320 60 L420 180 L520 220" />
        </g>
        <g fill="#2DD4BF">
          <circle cx="80" cy="240" r="3.5" />
          <circle cx="180" cy="160" r="3.5" />
          <circle cx="280" cy="200" r="3.5" />
          <circle cx="380" cy="100" r="4" />
          <circle cx="480" cy="140" r="3.5" />
          <circle cx="560" cy="80" r="3.5" />
        </g>
        <g fill="#A78BFA">
          <circle cx="120" cy="80" r="3" />
          <circle cx="220" cy="120" r="3" />
          <circle cx="320" cy="60" r="3.5" />
          <circle cx="420" cy="180" r="3" />
          <circle cx="520" cy="220" r="3" />
        </g>
      </svg>

      {/* Dashboard silhouette cards */}
      <div className="relative z-10 grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-teal/50" />
            <div className="h-2 w-10 rounded-full bg-white/20" />
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {[40, 55, 48, 70, 62, 78, 66, 85, 72, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-teal/40 to-cyan/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
            <div className="h-1.5 w-2/3 rounded-full bg-teal/60" />
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-28 rounded-full bg-violet/50" />
            <div className="h-2 w-8 rounded-full bg-white/20" />
          </div>
          <svg viewBox="0 0 200 80" className="h-24 w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="traj" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 C30 55, 50 40, 80 45 S120 55, 140 30 S180 20, 200 25 L200 80 L0 80 Z"
              fill="url(#traj)"
            />
            <path
              d="M0 60 C30 55, 50 40, 80 45 S120 55, 140 30 S180 20, 200 25"
              fill="none"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
            <circle cx="140" cy="30" r="3.5" fill="#7C6CF0" stroke="#EDE9FE" strokeWidth="1" />
          </svg>
          <div className="mt-2 flex gap-2">
            <div className="h-6 flex-1 rounded-md bg-white/10" />
            <div className="h-6 flex-1 rounded-md bg-white/10" />
            <div className="h-6 w-10 rounded-md bg-violet/30" />
          </div>
        </div>
      </div>

      <p className="relative z-10 px-5 pb-4 text-[11px] font-medium tracking-wide text-slate-300/80 sm:px-6">
        Abstract educational dashboard silhouette — not clinical data
      </p>
    </div>
  );
}
