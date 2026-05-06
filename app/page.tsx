import Link from "next/link";
import Image from "next/image";
import { services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        {/* Atmospheric photo backdrop — fades into the dark on every edge so it
            reads as part of the page, not a pasted-on box. */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[65%_center]"
          />

          {/* Mobile / tablet: dark at top (where text sits), photo softens upward
              from the bottom. */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, var(--background) 0%, var(--background) 28%, rgba(10,10,10,0.85) 45%, rgba(10,10,10,0.45) 65%, rgba(10,10,10,0.15) 100%)",
            }}
          />

          {/* Desktop: dark on the left (where text sits), photo emerges to the right. */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--background) 0%, var(--background) 32%, rgba(10,10,10,0.85) 48%, rgba(10,10,10,0.35) 70%, rgba(10,10,10,0.1) 100%)",
            }}
          />

          {/* Bottom edge fade — blends into the next section seamlessly. */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 lg:h-40"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--background))",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex min-h-[78vh] flex-col justify-end pb-20 pt-32 lg:min-h-[82vh] lg:max-w-2xl lg:justify-center lg:pb-32 lg:pt-32">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Multimedia studio · {site.location} · est. {site.founded}
            </p>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Visual stories for{" "}
              <span className="text-accent">brands worth</span> watching.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              We help organisations sharpen how they look, sound, and move —
              across video, photography, digital marketing, creative direction
              and web. One studio, many tools, a single voice.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90"
              >
                Start a project
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition hover:border-accent hover:text-accent"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                What we do
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Four disciplines, one studio.
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden whitespace-nowrap text-sm text-muted hover:text-accent md:inline-block"
            >
              All services →
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {services.map((service, i) => (
              <article
                key={service.slug}
                className="group flex flex-col gap-3 bg-background p-8 transition hover:bg-background/80"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-muted opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {service.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-border bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-10 md:flex-row md:items-center md:justify-between md:p-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Ready when you are
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s build something worth watching.
              </h2>
            </div>
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
