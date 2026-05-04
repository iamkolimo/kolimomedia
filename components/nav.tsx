import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm tracking-widest">
          <span className="inline-block size-2 rounded-full bg-accent" aria-hidden />
          <span className="font-semibold uppercase">{site.shortName}</span>
          <span className="text-muted">/ Multimedia</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks
            .filter((l) => l.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition hover:opacity-90"
        >
          Start a project
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
