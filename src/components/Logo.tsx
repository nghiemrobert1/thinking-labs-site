import { TL_PATH } from "@/components/logoPath";

/**
 * tL_ mark, inlined so only the coral cursor can blink.
 * reversed: white letters for dark backgrounds. blink: terminal-style cursor blink.
 */
export function Logo({ reversed = false, height = 30, blink = false }: { reversed?: boolean; height?: number; blink?: boolean }) {
  return (
    <svg
      viewBox="-20.53 -148.07 401.50 213.07"
      height={height}
      width={(height * 401.5) / 213.07}
      role="img"
      aria-label="tL_ Thinking Labs"
      style={{ display: "block" }}
    >
      <path fill={reversed ? "#FFFFFF" : "#111111"} d={TL_PATH} />
      <rect className={blink ? "tl-cursor-blink" : undefined} fill="#FF5A3C" x="247.84" y="5.00" width="103.13" height="30.00" />
    </svg>
  );
}
