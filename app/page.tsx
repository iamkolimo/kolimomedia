import Link from "next/link";
import { featuredWork, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Multimedia studio · {site.location} · est. {site.founded}
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Visual stories for{" "}
            <span className="text-accent">brands worth</span> watching.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
            We help organisations sharpen how they look, sound, and move —
            through branding, photography, video, and design. One studio, many
            tools, a single voice.
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

        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
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
                Six disciplines, working together.
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden whitespace-nowrap text-sm text-muted hover:text-accent md:inline-block"
            >
              All services →
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
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

      {/* Featured work */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Selected work
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Recent projects.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden whitespace-nowrap text-sm text-muted hover:text-accent md:inline-block"
            >
              View all →
            </Link>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((work) => (
              <article
                key={work.title}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-xl border border-border bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 ${work.aspect}`}
              >
                <div className="relative z-10">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    {work.category}
                  </p>
                  <h3 className="mt-2 text-lg font-medium tracking-tight">
                    {work.title}
                  </h3>
                </div>
                <div
                  className="absolute inset-0 opacity-30 transition group-hover:opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, rgba(212,164,71,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(212,164,71,0.15), transparent 50%)",
                  }}
                  aria-hidden
                />
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
