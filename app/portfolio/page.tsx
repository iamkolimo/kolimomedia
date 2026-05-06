import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Kolimo Multimedia — production, digital marketing, creative direction, and web/app projects.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16 lg:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Work
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Selected projects from across the studio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            A cross-section of work from the past three years. Production,
            marketing, creative direction, and the in-between.
          </p>
        </div>
      </section>

      {/* Showcase: vertical video + stack of four photos */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <div className="grid gap-4 lg:grid-cols-[5fr_7fr]">
            {/* Vertical 9:16 video.  Drop a real file at /portfolio/showreel.mp4 to swap. */}
            <figure className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-zinc-900 to-zinc-950">
              {/* Replace this block with:
                   <video
                     src="/portfolio/showreel.mp4"
                     poster="/portfolio/showreel-poster.jpg"
                     autoPlay
                     muted
                     loop
                     playsInline
                     className="absolute inset-0 h-full w-full object-cover"
                   />
                  when the video file lands in /public/portfolio/. */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Vertical reel
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted/60">
                  9 : 16
                </span>
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(212,164,71,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(212,164,71,0.15), transparent 50%)",
                }}
                aria-hidden
              />
            </figure>

            {/* Stack of four photos.  Each tile mirrors the row height of the video. */}
            <div className="grid gap-4 lg:grid-rows-4">
              {[1, 2, 3, 4].map((n) => (
                <figure
                  key={n}
                  className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-zinc-900 to-zinc-950 lg:aspect-auto"
                >
                  {/* Replace with:
                       <Image
                         src={`/portfolio/photo-0${n}.jpg`}
                         alt="..."
                         fill
                         className="object-cover"
                       />
                      when assets land in /public/portfolio/. */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      Photo 0{n}
                    </span>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 25% 25%, rgba(212,164,71,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(212,164,71,0.1), transparent 50%)",
                    }}
                    aria-hidden
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-balance text-lg text-foreground/80">
              Have a project that needs the same treatment? We&apos;d love to
              read the brief.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
