type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md";
};

export function Logo({
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const mark = size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const text = size === "sm" ? "text-base" : "text-lg";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className={`${mark} shrink-0`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={!showWordmark}
        role={showWordmark ? "presentation" : "img"}
      >
        {!showWordmark ? <title>Thinking Labs</title> : null}
        <rect width="48" height="48" rx="12" fill="#0B1F3A" />
        <circle
          cx="24"
          cy="24"
          r="11"
          stroke="#2DD4BF"
          strokeWidth="2"
          opacity="0.9"
        />
        <circle cx="24" cy="24" r="4" fill="#7C6CF0" />
        <path
          d="M24 8v5M24 35v5M8 24h5M35 24h5M13.5 13.5l3.5 3.5M31 31l3.5 3.5M13.5 34.5l3.5-3.5M31 17l3.5-3.5"
          stroke="#5EEAD4"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.75"
        />
        <circle cx="24" cy="13" r="1.5" fill="#5EEAD4" />
        <circle cx="35" cy="24" r="1.5" fill="#A78BFA" />
        <circle cx="24" cy="35" r="1.5" fill="#5EEAD4" />
      </svg>
      {showWordmark ? (
        <span
          className={`${text} font-semibold tracking-tight text-foreground`}
        >
          Thinking Labs
        </span>
      ) : null}
    </span>
  );
}
