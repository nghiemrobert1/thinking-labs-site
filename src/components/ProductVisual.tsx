/** Side-by-side abstract twin dashboards for Product page. No PHI. */
export function ProductVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-navy p-4 shadow-xl shadow-navy/25 sm:p-5"
      aria-hidden="true"
    >
      <div className="tl-animate-orb pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-teal/30 blur-3xl" />
      <div className="tl-animate-orb-alt pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-violet/35 blur-3xl" />

      <div className="relative grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
        {/* Patient */}
        <div className="tl-stagger-1 rounded-xl border border-teal/25 bg-white/[0.06] p-3 backdrop-blur-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal tl-node-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-100/90">
              Patient
            </span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-teal/35" />
            <div className="h-2 w-1/2 rounded-full bg-white/15" />
            <div className="mt-3 flex h-16 items-end gap-1">
              {[35, 48, 42, 60, 55, 72, 68].map((h, i) => (
                <div
                  key={i}
                  className="tl-bar flex-1 rounded-t-sm bg-gradient-to-t from-teal/30 to-cyan/70"
                  style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                />
              ))}
            </div>
            <div className="h-8 rounded-md border border-white/10 bg-white/5" />
          </div>
        </div>

        {/* Link */}
        <div className="hidden flex-col items-center justify-center gap-1 sm:flex">
          <div className="tl-link-pulse h-px w-8 bg-gradient-to-r from-teal via-white/50 to-violet" />
          <div className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-slate-200">
            Twin
          </div>
          <div className="tl-link-pulse h-px w-8 bg-gradient-to-r from-violet via-white/50 to-teal" />
        </div>

        {/* Clinician */}
        <div className="tl-stagger-2 rounded-xl border border-violet/30 bg-white/[0.06] p-3 backdrop-blur-sm">
          <div className="mb-2 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-violet tl-node-pulse"
              style={{ animationDelay: "0.4s" }}
            />
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-100/90">
              Clinician
            </span>
          </div>
          <svg viewBox="0 0 180 64" className="mb-2 h-16 w-full">
            <defs>
              <linearGradient id="pv-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 48 C25 44, 45 28, 70 34 S110 48, 130 22 S160 16, 180 20 L180 64 L0 64 Z"
              fill="url(#pv-fill)"
            />
            <path
              className="tl-path-draw"
              d="M0 48 C25 44, 45 28, 70 34 S110 48, 130 22 S160 16, 180 20"
              fill="none"
              stroke="#C4B5FD"
              strokeWidth="2"
            />
          </svg>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-7 rounded-md bg-white/10" />
            <div className="h-7 rounded-md bg-white/10" />
            <div className="h-7 rounded-md bg-violet/30" />
          </div>
        </div>
      </div>

      <p className="relative mt-3 text-center text-[10px] font-medium tracking-wide text-slate-400">
        Abstract dual-dashboard silhouette — educational framing only
      </p>
    </div>
  );
}
