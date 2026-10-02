/** Care-path steps with clinical icons (patient → clinician → later AI). */
export function FlowVisual() {
  const nodes = [
    {
      label: "Patient entry",
      ring: "border-teal/40",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3.5" stroke="#2DD4BF" strokeWidth="1.6" />
          <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" stroke="#2DD4BF" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Clinician view",
      ring: "border-violet/40",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#A78BFA" strokeWidth="1.6" />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="#A78BFA" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Later: AI path",
      ring: "border-cyan/40",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <ellipse cx="12" cy="12" rx="7" ry="9" stroke="#22D3EE" strokeWidth="1.6" />
          <path d="M12 3v18M5 12h14" stroke="#22D3EE" strokeWidth="1.2" opacity="0.7" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="card-glow relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-6"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(20,184,166,0.1), transparent 40%), radial-gradient(circle at 80% 50%, rgba(124,108,240,0.1), transparent 40%)",
        }}
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex flex-1 items-center gap-3 sm:flex-col sm:gap-3">
            <div className="flex items-center gap-3 sm:flex-col">
              <div
                className={`tl-stagger-${i + 1} relative flex h-12 w-12 items-center justify-center rounded-full border-2 ${n.ring} bg-navy shadow-md`}
              >
                {n.icon}
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-card text-[10px] font-bold text-foreground shadow ring-1 ring-border">
                  {i + 1}
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground sm:text-center">
                {n.label}
              </p>
            </div>
            {i < nodes.length - 1 ? (
              <div className="ml-5 h-8 w-px bg-gradient-to-b from-teal/50 to-violet/50 sm:ml-0 sm:h-px sm:w-full sm:bg-gradient-to-r">
                <div className="tl-flow-dot hidden h-1.5 w-1.5 rounded-full bg-teal sm:block" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <p className="relative mt-4 text-center text-[11px] text-muted">
        Educational care path — no outcome promises · doctor decides
      </p>
    </div>
  );
}
