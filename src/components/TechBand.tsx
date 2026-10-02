/** Inner-page band: twin kidneys + care labels (clinical, not ticker). */
export function TechBand() {
  return (
    <div
      className="mb-8 overflow-hidden rounded-xl border border-border/80 bg-navy-mid/95 shadow-md"
      aria-hidden="true"
    >
      <div className="relative h-20 sm:h-24">
        <div className="tl-animate-orb absolute -left-8 top-0 h-28 w-28 rounded-full bg-teal/25 blur-2xl" />
        <div className="tl-animate-orb-alt absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-violet/30 blur-2xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-45"
          viewBox="0 0 800 96"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="300" cy="48" rx="28" ry="36" fill="none" stroke="#2DD4BF" strokeWidth="1.5" transform="rotate(-16 300 48)" />
          <ellipse cx="500" cy="48" rx="28" ry="36" fill="none" stroke="#A78BFA" strokeWidth="1.5" transform="rotate(16 500 48)" />
          <path className="tl-path-draw" d="M328 48 H472" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
          <circle className="tl-node-pulse" cx="400" cy="48" r="4" fill="#5EEAD4" />
          <circle className="tl-node-pulse" cx="220" cy="48" r="2.5" fill="#2DD4BF" style={{ animationDelay: "0.4s" }} />
          <circle className="tl-node-pulse" cx="580" cy="48" r="2.5" fill="#A78BFA" style={{ animationDelay: "0.8s" }} />
          <path d="M220 48 H272 M528 48 H580" stroke="#64748B" strokeWidth="1" opacity="0.6" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-between px-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300/80 sm:px-6">
          <span>Educational twin</span>
          <span className="hidden sm:inline">Patient · Clinician</span>
          <span>Doctor decides</span>
        </div>
      </div>
    </div>
  );
}
