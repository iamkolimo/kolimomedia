import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShowreelPlayer } from "./showreel-player";

export const metadata: Metadata = {
  title: "Selected Work from Our Abuja Studio",
  description:
    "Selected work from Kolimo Multimedia, a creative agency in Abuja, Nigeria — production, digital marketing, creative direction, and web/app projects.",
  alternates: { canonical: "/portfolio" },
};

const photos = [
  {
    src: "/portfolio/photo-01.jpg",
    alt: "Founder mapping truck-centre logistics on a whiteboard — Moniepoint brand film.",
  },
  {
    src: "/portfolio/photo-02.jpg",
    alt: "Restaurateur watching the open kitchen at Chef Stone — Moniepoint brand film.",
  },
  {
    src: "/portfolio/photo-03.jpg",
    alt: "Keynote on stage at DevFest Lagos — event coverage.",
  },
  {
    src: "/portfolio/photo-04.jpg",
    alt: "Aerial view of the Lagos waterfront and skyline.",
  },
  {
    src: "/portfolio/photo-05.jpg",
    alt: "Signature cocktail at Marks at the Park — hospitality campaign.",
  },
  {
    src: "/portfolio/photo-06.jpg",
    alt: "Selected work from the Kolimo Multimedia studio.",
  },
];

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

      {/* Showcase: vertical video + grid of six photos */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <div className="grid gap-4 lg:grid-cols-[5fr_7fr]">
            {/* Vertical 9:16 reel — hosted on Mux. */}
            <figure className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-black">
              <ShowreelPlayer playbackId="00QItCw01SzTNB9SIDfJB3A4RihSIg6mgrN5W5ZdbvS5Q" />
            </figure>

            {/* Six photos in a responsive grid. */}
            <div className="grid gap-4 sm:grid-cols-2">
              {photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-zinc-900 to-zinc-950"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
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
