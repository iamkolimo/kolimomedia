import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kolimo Multimedia is a creative studio in Abuja, Nigeria. Building brands through photography, video, branding, and design since 2014.",
};

const principles = [
  {
    title: "Strategy first, craft always",
    body: "Every shoot, every layout, every animation starts with a sharp brief. The best-looking work is also the most considered.",
  },
  {
    title: "One studio, one voice",
    body: "Whether you book us for a logo or a six-month campaign, you get the same team thinking about your brand end-to-end.",
  },
  {
    title: "Made for the long run",
    body: "Brand systems that survive a rebrand, content systems that survive a calendar slip. We design things to last.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            About
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            A multimedia studio building brands worth watching, from {site.location}.
          </h1>

          <div className="mt-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-foreground/80">
                Kolimo Multimedia was founded in {site.founded} as a one-stop
                shop for organisations that want to build their brand and reach
                their audience. We pair strategic thinking with serious craft —
                photography, video, branding, 3D, web, and social — so every
                touchpoint pulls in the same direction.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                We work with brands of all sizes: ambitious local businesses,
                established institutions, and the people behind them. The work
                is varied; the standard is not.
              </p>
            </div>

            <aside className="md:col-span-5">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                <div className="bg-background p-6">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Founded
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold">{site.founded}</dd>
                </div>
                <div className="bg-background p-6">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Based in
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold">Abuja</dd>
                </div>
                <div className="bg-background p-6">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Disciplines
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold">6</dd>
                </div>
                <div className="bg-background p-6">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Working with
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold">Brands &amp; people</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            How we work
          </p>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Three things we keep coming back to.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {principles.map((p, i) => (
              <article key={p.title} className="bg-background p-8">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-border bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-10 md:flex-row md:items-center md:justify-between md:p-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Working together
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Have a brief? We&apos;d love to read it.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
