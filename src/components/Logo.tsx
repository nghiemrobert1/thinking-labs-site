/* eslint-disable @next/next/no-img-element */
export function Logo({ reversed = false, height = 30 }: { reversed?: boolean; height?: number }) {
  return (
    <img
      src={reversed ? "/brand/logo-rev.svg" : "/brand/logo-black.svg"}
      alt="tL_ Thinking Labs"
      style={{ height, width: "auto" }}
    />
  );
}
