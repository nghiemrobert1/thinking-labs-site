type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  /** White-on-dark variant (footer / dark bands). */
  reversed?: boolean;
};

/**
 * Thinking Labs tL_ mark (Courier Prime Bold, outlined) + "Thinking Labs" wordmark
 * with "Healthcare Software" tagline. Coral appears only on the mark's cursor underscore.
 */
export function Logo({
  className = "",
  showWordmark = true,
  size = "md",
  reversed = false,
}: LogoProps) {
  const mark = size === "sm" ? "h-6" : size === "lg" ? "h-10" : "h-7";
  const text =
    size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={reversed ? "/brand/tl-mark-reversed.svg" : "/brand/tl-mark-color.svg"}
        alt={showWordmark ? "" : "Thinking Labs"}
        aria-hidden={showWordmark}
        className={`${mark} w-auto shrink-0`}
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`${text} font-semibold tracking-tight ${reversed ? "text-white" : "text-foreground"}`}
          >
            Thinking Labs
          </span>
          <span
            className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${reversed ? "text-slate-400" : "text-muted"}`}
          >
            Healthcare Software
          </span>
        </span>
      ) : null}
    </span>
  );
}
