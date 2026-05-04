"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex size-9 items-center justify-center rounded-full border border-border md:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && mounted && createPortal(
        <div className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden">
          <div className="flex h-16 items-center justify-between border-b border-border/60 px-6">
            <Link
              href="/"
              aria-label={site.name}
              onClick={() => setOpen(false)}
              className="inline-flex items-center"
            >
              <Image
                src="/logo.svg"
                alt={site.name}
                width={320}
                height={96}
                className="h-9 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-6 py-12">
            <ul className="space-y-2">
              {navLinks
                .filter((l) => l.href !== "/")
                .map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-baseline justify-between border-b border-border/60 py-4 text-3xl font-medium tracking-tight transition ${
                          active ? "text-accent" : "hover:text-accent"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="font-mono text-xs text-muted">→</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>

            <div className="mt-auto pt-12">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90"
              >
                Start a project
                <span aria-hidden>→</span>
              </Link>
              <p className="mt-6 text-center text-sm text-muted">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
