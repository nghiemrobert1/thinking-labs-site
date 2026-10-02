/** Decorative tech band for inner pages — abstract only, no PHI. */
export function TechBand() {
  return (
    <div
      className="mb-8 overflow-hidden rounded-xl border border-border/80 bg-navy-mid/95 shadow-md"
      aria-hidden="true"
    >
      <div className="relative h-20 sm:h-24">
        <div className="tl-animate-orb absolute -left-8 top-0 h-28 w-28 rounded-full bg-teal/30 blur-2xl" />
        <div className="tl-animate-orb-alt absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-violet/35 blur-2xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 800 96"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="band-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
              <stop offset="40%" stopColor="#2dd4bf" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="tl-path-draw"
            d="M0 60 C120 40, 200 70, 320 48 S480 30, 560 55 S700 70, 800 42"
            fill="none"
            stroke="url(#band-line)"
            strokeWidth="2"
          />
          <g fill="#5EEAD4">
            <circle className="tl-node-pulse" cx="160" cy="52" r="3" />
            <circle
              className="tl-node-pulse"
              style={{ animationDelay: "0.5s" }}
              cx="400"
              cy="40"
              r="3.5"
            />
            <circle
              className="tl-node-pulse"
              style={{ animationDelay: "1s" }}
              cx="640"
              cy="58"
              r="3"
            />
          </g>
        </svg>
        <div className="absolute inset-0 flex items-center justify-between px-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300/70 sm:px-6">
          <span>Educational twin</span>
          <span className="hidden sm:inline">Patient · Clinician</span>
          <span>Doctor decides</span>
        </div>
      </div>
    </div>
  );
}
