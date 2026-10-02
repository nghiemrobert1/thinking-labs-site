export function PageHero({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <div className="relative mb-10 overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 sm:p-8 card-glow">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,240,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/15 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <div className="card-accent-bar mb-4 h-1 w-16 rounded-full" aria-hidden />
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{lead}</p>
      </div>
    </div>
  );
}
