/** Clinical educational twin hero — vitals/labs panels + kidney motif. No PHI, no finance charts. */
export function HeroVisual() {
  return (
    <div
      className="relative isolate max-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-2xl shadow-navy/30 sm:max-h-none"
      aria-hidden="true"
    >
      <div className="tl-animate-orb pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
      <div className="tl-animate-orb-alt pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-violet/35 blur-3xl" />

      {/* Soft anatomical grid (clinical, not ticker) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.14]">
        <svg className="tl-grid-pan absolute -top-7 left-0 h-[calc(100%+28px)] w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tl-clin-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#94A3B8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tl-clin-grid)" />
        </svg>
      </div>

      {/* Abstract twin kidneys + care network (tasteful, non-gore) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        viewBox="0 0 640 320"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* left kidney bean */}
        <ellipse cx="200" cy="160" rx="52" ry="70" fill="none" stroke="#2DD4BF" strokeWidth="1.5" opacity="0.7" transform="rotate(-18 200 160)" />
        <ellipse cx="200" cy="160" rx="28" ry="40" fill="#14B8A6" opacity="0.12" transform="rotate(-18 200 160)" />
        {/* right kidney bean */}
        <ellipse cx="440" cy="160" rx="52" ry="70" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" transform="rotate(18 440 160)" />
        <ellipse cx="440" cy="160" rx="28" ry="40" fill="#7C6CF0" opacity="0.12" transform="rotate(18 440 160)" />
        {/* twin link */}
        <path className="tl-path-draw" d="M250 160 H390" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
        <circle className="tl-node-pulse" cx="320" cy="160" r="5" fill="#5EEAD4" />
        {/* care nodes */}
        <circle className="tl-node-pulse" cx="160" cy="90" r="3" fill="#5EEAD4" style={{ animationDelay: "0.3s" }} />
        <circle className="tl-node-pulse" cx="480" cy="90" r="3" fill="#C4B5FD" style={{ animationDelay: "0.6s" }} />
        <circle className="tl-node-pulse" cx="160" cy="240" r="3" fill="#5EEAD4" style={{ animationDelay: "0.9s" }} />
        <circle className="tl-node-pulse" cx="480" cy="240" r="3" fill="#C4B5FD" style={{ animationDelay: "1.2s" }} />
        <path d="M160 90 L200 120 M480 90 L440 120 M160 240 L200 200 M480 240 L440 200" stroke="#64748B" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="relative z-10 grid gap-3 p-4 sm:grid-cols-2 sm:p-6">
        {/* Patient — vitals / labs education cards (not bars) */}
        <div className="rounded-xl border border-teal/25 bg-white/[0.07] p-3 backdrop-blur-sm sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-100/90">
              Patient · labs & habits
            </span>
            <span className="rounded-full bg-teal/20 px-2 py-0.5 text-[9px] font-semibold text-teal-100">
              Learn
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "eGFR", hint: "kidney filter" },
              { label: "BP", hint: "blood pressure" },
              { label: "A1c", hint: "metabolic" },
              { label: "Habits", hint: "daily inputs" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="tl-stagger-1 rounded-lg border border-white/10 bg-navy/40 px-2.5 py-2"
              >
                <p className="text-[11px] font-semibold text-teal-100">{chip.label}</p>
                <p className="mt-0.5 text-[9px] text-slate-400">{chip.hint}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-1.5 w-3/5 rounded-full bg-teal/70" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinician — educational trajectory (smooth care curve, not ticker) */}
        <div className="rounded-xl border border-violet/30 bg-white/[0.07] p-3 backdrop-blur-sm sm:p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-100/90">
              Clinician · trajectory
            </span>
            <span className="rounded-full bg-violet/25 px-2 py-0.5 text-[9px] font-semibold text-violet-100">
              Review
            </span>
          </div>
          <svg viewBox="0 0 200 72" className="h-[4.5rem] w-full sm:h-24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="egfr-band" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* reference band (education range) */}
            <rect x="0" y="28" width="200" height="18" fill="#14B8A6" opacity="0.08" />
            <path
              d="M0 50 C40 48, 70 42, 100 38 S160 30, 200 34 L200 72 L0 72 Z"
              fill="url(#egfr-band)"
            />
            <path
              className="tl-path-draw"
              d="M0 50 C40 48, 70 42, 100 38 S160 30, 200 34"
              fill="none"
              stroke="#C4B5FD"
              strokeWidth="2.2"
            />
            <circle className="tl-node-pulse" cx="100" cy="38" r="4" fill="#7C6CF0" stroke="#EDE9FE" strokeWidth="1.5" />
            <text x="8" y="18" fill="#94A3B8" fontSize="8" fontFamily="system-ui">Educational curve</text>
          </svg>
          <div className="mt-1 flex gap-2">
            <div className="flex-1 rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-[9px] text-slate-300">
              Context notes
            </div>
            <div className="rounded-md border border-violet/30 bg-violet/20 px-2 py-1.5 text-[9px] font-semibold text-violet-100">
              Doctor decides
            </div>
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
        Abstract educational twin — not clinical data · not a device
      </p>
    </div>
  );
}
