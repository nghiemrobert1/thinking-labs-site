import type { ReactNode } from "react";

export function InfoCard({
  title,
  children,
  accent = "teal",
  className = "",
}: {
  title: string;
  children: ReactNode;
  accent?: "teal" | "violet" | "navy";
  className?: string;
}) {
  const bar =
    accent === "violet"
      ? "from-violet to-violet/40"
      : accent === "navy"
        ? "from-navy-mid to-teal"
        : "from-teal to-cyan";

  return (
    <article
      className={`card-glow tl-lift group overflow-hidden rounded-xl border border-border bg-card ${className}`}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${bar}`} aria-hidden />
      <div className="p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
      </div>
    </article>
  );
}
