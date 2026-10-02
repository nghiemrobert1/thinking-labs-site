import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Thinking Labs — Educational CKD twin dashboards";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0B1F3A 0%, #143356 45%, #0F766E 100%)",
          color: "#F8FAFC",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#0B1F3A",
              border: "2px solid #2DD4BF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "#14B8A6",
              }}
            />
            <div style={{ width: 10, height: 3, background: "#E2E8F0" }} />
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "#7C6CF0",
              }}
            />
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>Thinking Labs</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
            Educational twin dashboards for cardio-kidney-metabolic care
          </div>
          <div style={{ fontSize: 24, color: "#CBD5E1", maxWidth: 800 }}>
            Patient + clinician views · Not a medical device · Doctor decides
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "#94A3B8",
            letterSpacing: 1,
          }}
        >
          Thinking Labs, Inc. · Educational / demonstrator software
        </div>
      </div>
    ),
    { ...size }
  );
}
