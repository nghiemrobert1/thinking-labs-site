/** Abstract healthcare-tech hero — mobile-first height + subtle motion. No PHI. */
export function HeroVisual() {
  const bars = [
    { h: 40, d: "0s" },
    { h: 55, d: "0.05s" },
    { h: 48, d: "0.1s" },
    { h: 70, d: "0.15s" },
    { h: 62, d: "0.2s" },
    { h: 78, d: "0.25s" },
    { h: 66, d: "0.3s" },
    { h: 85, d: "0.35s" },
    { h: 72, d: "0.4s" },
    { h: 90, d: "0.45s" },
  ];

  return (
    <div
      className="relative isolate max-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-2xl shadow-navy/30 sm:max-h-none"
      aria-hidden="true"
    >
      <div className="tl-animate-orb pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-teal/35 blur-3xl" />
      <div className="tl-animate-orb-alt pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-44 w-44 rounded-full bg-cyan/25 blur-2xl" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.2]">
        <svg
          className="tl-grid-pan absolute -top-7 left-0 h-[calc(100%+28px)] w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="tl-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="#94A3B8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tl-grid)" />
        </svg>
      </div>

      <div className="tl-scan-line pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan/20 to-transparent" />

      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 640 320"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#5EEAD4" strokeWidth="1" fill="none">
          <path className="tl-path-draw" d="M80 240 L180 160 L280 200 L380 100 L480 140 L560 80" />
          <path
            className="tl-path-draw"
            style={{ animationDelay: "0.4s" }}
            d="M120 80 L220 120 L320 60 L420 180 L520 220"
          />
        </g>
        <g fill="#2DD4BF">
          {[
            [80, 240],
            [180, 160],
            [280, 200],
            [380, 100],
            [480, 140],
            [560, 80],
          ].map(([cx, cy], i) => (
            <circle
              key={`t-${i}`}
              className="tl-node-pulse"
              style={{ animationDelay: `${i * 0.35}s` }}
              cx={cx}
              cy={cy}
              r="3.5"
            />
          ))}
        </g>
        <g fill="#A78BFA">
          {[
            [120, 80],
            [220, 120],
            [320, 60],
            [420, 180],
            [520, 220],
          ].map(([cx, cy], i) => (
            <circle
              key={`v-${i}`}
              className="tl-node-pulse"
              style={{ animationDelay: `${0.2 + i * 0.4}s` }}
              cx={cx}
              cy={cy}
              r="3"
            />
          ))}
        </g>
      </svg>

      <div className="relative z-10 grid gap-3 p-4 sm:grid-cols-2 sm:p-6">
        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm sm:p-4">
          <div className="mb-2 flex items-center justify-between sm:mb-3">
            <div className="h-2 w-20 rounded-full bg-gradient-to-r from-teal/60 to-cyan/40 sm:h-2.5 sm:w-24" />
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-teal/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            </div>
          </div>
          <div className="flex h-20 items-end gap-1 sm:h-28 sm:gap-1.5">
            {bars.map((b, i) => (
              <div
                key={i}
                className="tl-bar flex-1 rounded-t-sm bg-gradient-to-t from-teal/35 via-teal/55 to-cyan/80"
                style={{ height: `${b.h}%`, animationDelay: b.d }}
              />
            ))}
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10 sm:mt-3">
            <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-teal to-cyan/80" />
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm sm:p-4">
          <div className="mb-2 flex items-center justify-between sm:mb-3">
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-violet/60 to-violet/30 sm:h-2.5 sm:w-28" />
            <div className="h-2 w-8 rounded-full bg-white/20" />
          </div>
          <svg viewBox="0 0 200 80" className="h-20 w-full sm:h-28" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="traj" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 C30 55, 50 40, 80 45 S120 55, 140 30 S180 20, 200 25 L200 80 L0 80 Z"
              fill="url(#traj)"
            />
            <path
              className="tl-path-draw"
              d="M0 60 C30 55, 50 40, 80 45 S120 55, 140 30 S180 20, 200 25"
              fill="none"
              stroke="#C4B5FD"
              strokeWidth="2.2"
            />
            <circle
              className="tl-node-pulse"
              cx="140"
              cy="30"
              r="4"
              fill="#7C6CF0"
              stroke="#EDE9FE"
              strokeWidth="1.5"
            />
          </svg>
          <div className="mt-2 flex gap-2">
            <div className="h-5 flex-1 rounded-md bg-white/10 sm:h-6" />
            <div className="h-5 flex-1 rounded-md bg-white/10 sm:h-6" />
            <div className="h-5 w-10 rounded-md bg-violet/35 sm:h-6 sm:w-12" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-4 mb-2 flex gap-2 sm:mx-6 sm:mb-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-teal/20 bg-teal/10 px-2.5 py-1.5 sm:px-3 sm:py-2">
          <span className="h-2 w-2 rounded-full bg-teal" />
          <span className="text-[9px] font-semibold uppercase tracking-wider text-teal-100/90 sm:text-[10px]">
            Patient view
          </span>
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-violet/25 bg-violet/15 px-2.5 py-1.5 sm:px-3 sm:py-2">
          <span className="h-2 w-2 rounded-full bg-violet" />
          <span className="text-[9px] font-semibold uppercase tracking-wider text-violet-100/90 sm:text-[10px]">
            Clinician view
          </span>
        </div>
      </div>

      <p className="relative z-10 px-4 pb-3 text-[10px] font-medium tracking-wide text-slate-300/75 sm:px-6 sm:pb-4 sm:text-[11px]">
        Abstract educational dashboard silhouette — not clinical data
      </p>
    </div>
  );
}
