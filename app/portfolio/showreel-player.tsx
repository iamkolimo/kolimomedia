"use client";

import MuxPlayer, { type MuxCSSProperties } from "@mux/mux-player-react";

const playerStyle: MuxCSSProperties = {
  "--controls": "none",
  "--media-object-fit": "cover",
  height: "100%",
  width: "100%",
};

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
