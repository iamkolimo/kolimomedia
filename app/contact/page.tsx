import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Creative Agency in Abuja, Nigeria",
  description:
    "Brief our Abuja studio. Production, digital marketing, creative direction, branding, web or app — we'd love to hear about your project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Contact
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Tell us about your project.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Big idea, small idea, half-formed idea — we read everything. The
              more context you can share, the more useful our first reply will
              be.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-foreground hover:text-accent"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  Studio
                </dt>
                <dd className="mt-1 text-foreground/80">{site.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  Social
                </dt>
                <dd className="mt-1 flex flex-wrap gap-3">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    Instagram
                  </a>
                  <span className="text-muted">·</span>
                  <a
                    href={site.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    X / Twitter
                  </a>
                  <span className="text-muted">·</span>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-border bg-zinc-950/40 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
