export function PageHero({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-6 sm:p-8 card-glow">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,240,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div
        className="tl-animate-orb pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-teal/20 blur-3xl"
        aria-hidden
      />
      <div
        className="tl-animate-orb-alt pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-violet/15 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <div className="card-accent-bar mb-4 h-1 w-16 rounded-full" aria-hidden />
        <h1 className="tl-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="tl-lead mt-3 max-w-2xl text-base text-muted sm:text-lg">
          {lead}
        </p>
      </div>
    </div>
  );
}
