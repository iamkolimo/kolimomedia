import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — Notes from a Creative Agency in Nigeria",
  description:
    "Notes on creative work, briefs, and the craft of building brands — from Kolimo Multimedia, a creative agency in Abuja, Nigeria.",
  alternates: { canonical: "/journal" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16 lg:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Journal
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Notes on the work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Short pieces on creative practice &mdash; briefs, projects, the
            craft. Written from our Abuja studio.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <ul className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="group flex flex-col gap-3 bg-background p-8 transition hover:bg-background/80 md:p-12"
                >
                  <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span aria-hidden>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-foreground/70">
                    {post.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm text-accent">
                    Read
                    <span
                      aria-hidden
                      className="transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
