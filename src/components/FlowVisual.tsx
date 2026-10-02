/** Connected three-step flow graphic for How it works. Copy lives beside/in page. */
export function FlowVisual() {
  const nodes = [
    { label: "Patient entry", color: "bg-teal", ring: "border-teal/40" },
    { label: "Clinician view", color: "bg-violet", ring: "border-violet/40" },
    { label: "Later: AI path", color: "bg-cyan", ring: "border-cyan/40" },
  ];

  return (
    <div
      className="card-glow relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-6"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(20,184,166,0.12), transparent 40%), radial-gradient(circle at 80% 50%, rgba(124,108,240,0.12), transparent 40%)",
        }}
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex flex-1 items-center gap-3 sm:flex-col sm:gap-3">
            <div className="flex items-center gap-3 sm:flex-col">
              <div
                className={`tl-stagger-${i + 1} relative flex h-12 w-12 items-center justify-center rounded-full border-2 ${n.ring} bg-navy shadow-md`}
              >
                <span className={`h-3 w-3 rounded-full ${n.color} tl-node-pulse`} />
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
        Educational path — no outcome promises · doctor decides
      </p>
    </div>
  );
}
