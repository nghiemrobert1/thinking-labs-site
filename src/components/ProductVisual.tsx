/** Dual educational dashboards — CKD twin care vibe, not finance charts. No PHI. */
export function ProductVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-navy p-4 shadow-xl shadow-navy/25 sm:p-5"
      aria-hidden="true"
    >
      <div className="tl-animate-orb pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-teal/25 blur-3xl" />
      <div className="tl-animate-orb-alt pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-violet/30 blur-3xl" />

      <div className="relative grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
        {/* Patient */}
        <div className="tl-stagger-1 rounded-xl border border-teal/25 bg-white/[0.07] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal tl-node-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-100/90">
              Patient
            </span>
          </div>
          {/* soft kidney glyph */}
          <svg viewBox="0 0 64 64" className="mb-2 h-10 w-10 opacity-80" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="32" rx="16" ry="22" fill="none" stroke="#2DD4BF" strokeWidth="2" transform="rotate(-20 32 32)" />
            <ellipse cx="32" cy="32" rx="7" ry="11" fill="#14B8A6" opacity="0.25" transform="rotate(-20 32 32)" />
          </svg>
          <div className="space-y-2">
            {["Today’s habits", "Lab context", "Questions for visit"].map((row) => (
              <div
                key={row}
                className="flex items-center gap-2 rounded-md border border-white/10 bg-navy/50 px-2.5 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                <span className="text-[10px] text-slate-200">{row}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Twin link */}
        <div className="hidden flex-col items-center justify-center gap-2 sm:flex">
          <div className="tl-link-pulse h-px w-8 bg-gradient-to-r from-teal via-white/50 to-violet" />
          <div className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-slate-100">
            Twin
          </div>
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
            <circle cx="8" cy="14" r="5" fill="#14B8A6" opacity="0.9" />
            <circle cx="20" cy="14" r="5" fill="#7C6CF0" opacity="0.9" />
            <path d="M13 14h2" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="tl-link-pulse h-px w-8 bg-gradient-to-r from-violet via-white/50 to-teal" />
        </div>

        {/* Clinician */}
        <div className="tl-stagger-2 rounded-xl border border-violet/30 bg-white/[0.07] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet tl-node-pulse" style={{ animationDelay: "0.4s" }} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-100/90">
              Clinician
            </span>
          </div>
          <svg viewBox="0 0 180 56" className="mb-2 h-14 w-full">
            <rect x="0" y="22" width="180" height="14" fill="#14B8A6" opacity="0.1" />
            <path
              className="tl-path-draw"
              d="M0 40 C35 38, 60 32, 90 28 S140 22, 180 26"
              fill="none"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
            <circle cx="90" cy="28" r="3.5" fill="#7C6CF0" />
          </svg>
          <div className="space-y-1.5">
            {["Shared trajectory view", "Conversation prompts", "Care decision stays with you"].map(
              (row) => (
                <div
                  key={row}
                  className="rounded-md border border-white/10 bg-navy/50 px-2.5 py-1.5 text-[10px] text-slate-200"
                >
                  {row}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <p className="relative mt-3 text-center text-[10px] font-medium tracking-wide text-slate-400">
        Educational dual dashboards — not clinical data · doctor decides
      </p>
    </div>
  );
}
