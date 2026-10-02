type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

/** Twin-node mark: two linked hubs (patient/clinician) in a navy tile. */
export function Logo({
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const mark =
    size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-8 w-8";
  const text =
    size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className={`${mark} shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={showWordmark}
        role={showWordmark ? "presentation" : "img"}
      >
        {!showWordmark ? <title>Thinking Labs</title> : null}
        <defs>
          <linearGradient id="tl-mark-ring" x1="8" y1="8" x2="40" y2="40">
            <stop stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#7C6CF0" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="13" fill="#0B1F3A" />
        <rect
          x="1.25"
          y="1.25"
          width="45.5"
          height="45.5"
          rx="11.75"
          stroke="url(#tl-mark-ring)"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <circle
          className="tl-mark-orbit"
          cx="24"
          cy="24"
          r="14"
          stroke="#2DD4BF"
          strokeWidth="1.25"
          strokeDasharray="3 5"
          opacity="0.55"
        />
        <circle cx="17" cy="24" r="5" fill="#14B8A6" opacity="0.95" />
        <circle cx="31" cy="24" r="5" fill="#7C6CF0" opacity="0.95" />
        <path
          d="M22 24h4"
          stroke="#E2E8F0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="24" r="1.8" fill="#ECFEFF" />
        <circle cx="31" cy="24" r="1.8" fill="#F5F3FF" />
        <circle cx="24" cy="12" r="1.6" fill="#5EEAD4" />
        <circle cx="24" cy="36" r="1.6" fill="#A78BFA" />
      </svg>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`${text} font-semibold tracking-tight text-foreground`}
          >
            Thinking Labs
          </span>
          <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/80 sm:inline">
            Inc.
          </span>
        </span>
      ) : null}
    </span>
  );
}
