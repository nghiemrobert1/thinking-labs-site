import type { ReactNode } from "react";

/** Full-bleed navy contrast section for key messaging. */
export function DarkBand({
  title,
  children,
  eyebrow,
}: {
  title: string;
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-navy px-5 py-7 text-slate-100 shadow-xl shadow-navy/20 sm:px-8 sm:py-9">
      <div className="tl-animate-orb pointer-events-none absolute -left-12 -top-16 h-48 w-48 rounded-full bg-teal/25 blur-3xl" />
      <div className="tl-animate-orb-alt pointer-events-none absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-violet/30 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <div className="relative">
        {eyebrow ? (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-200/80">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {title}
        </h2>
        <div className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
