import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1F3A",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "#14B8A6",
            }}
          />
          <div style={{ width: 14, height: 5, background: "#E2E8F0", borderRadius: 4 }} />
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "#7C6CF0",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
