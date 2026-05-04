import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Kolimo Multimedia — Visual stories for brands worth watching";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          color: "#ededed",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#8a8a8a",
            fontFamily: "monospace",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#d4a447",
            }}
          />
          <span style={{ color: "#ededed", fontWeight: 700 }}>{site.shortName}</span>
          <span>/ Multimedia</span>
        </div>

        {/* Headline — pushed away from brand mark with margin-top */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 96,
            fontSize: 96,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: -2,
            gap: "0 24px",
          }}
        >
          <span>Visual</span>
          <span>stories</span>
          <span>for</span>
          <span style={{ color: "#d4a447" }}>brands</span>
          <span style={{ color: "#d4a447" }}>worth</span>
          <span>watching.</span>
        </div>

        {/* Subhead */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#a0a0a0",
            maxWidth: 900,
          }}
        >
          {`A multimedia studio in ${site.location}. Branding, photography, video, and design — since ${site.founded}.`}
        </div>

        {/* Footer pinned to bottom via marginTop: auto */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            color: "#8a8a8a",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          <span>kolimomedia.com</span>
          <span>{site.location.toUpperCase()}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
