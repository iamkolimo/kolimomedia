import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Creative Agency Services in Nigeria",
  description:
    "Creative agency services from Abuja, Nigeria — brand films, photography, digital marketing, branding, creative direction, and web design. Four disciplines under one roof.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Services
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            One studio. Four disciplines that talk to each other.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            A creative agency and media company in Abuja, Nigeria. We pick the
            right combination for the job — sometimes one service is enough,
            sometimes the whole stack pulls together. Either way, you&apos;re
            working with one team.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {services.map((service, i) => (
              <article
                key={service.slug}
                className="grid gap-6 bg-background p-8 md:grid-cols-12 md:gap-10 md:p-12"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/70">
                    {service.summary}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    What you get
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-foreground/80"
                      >
                        <span className="size-1 rounded-full bg-accent" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-balance text-lg text-foreground/80">
              Not sure which service fits? Tell us about your project and
              we&apos;ll point you in the right direction.
            </p>
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
