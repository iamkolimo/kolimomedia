"use client";

import MuxPlayer from "@mux/mux-player-react";
import type { CSSProperties } from "react";

const playerStyle = {
  "--controls": "none",
  "--media-object-fit": "cover",
  height: "100%",
  width: "100%",
} as CSSProperties;

export function ShowreelPlayer({ playbackId }: { playbackId: string }) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      autoPlay
      muted
      loop
      playsInline
      nohotkeys
      disableTracking
      className="absolute inset-0 h-full w-full"
      style={playerStyle}
    />
  );
}
