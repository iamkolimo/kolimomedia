import Link from "next/link";
import Image from "next/image";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label={site.name} className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt={site.name}
                width={1695}
                height={512}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-balance text-2xl font-medium leading-snug">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-muted">
              Building brands from {site.location} since {site.founded}.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Sitemap
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Get in touch
            </h3>
            <address className="not-italic">
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-accent"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-muted">{site.location}</li>
              </ul>
            </address>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-3 py-1 hover:border-accent hover:text-accent"
              >
                Instagram
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-3 py-1 hover:border-accent hover:text-accent"
              >
                X / Twitter
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-3 py-1 hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kolimo Multimedia. All rights reserved.</p>
          <p className="font-mono">Made in Abuja.</p>
        </div>
      </div>
    </footer>
  );
}
