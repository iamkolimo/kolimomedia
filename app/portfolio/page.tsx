import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Kolimo Multimedia — video, photography, digital marketing, creative direction, and web/app projects.",
};

const projects = [
  { title: "Project Title 01", category: "Creative Direction", year: "2026", aspect: "aspect-[4/5]" },
  { title: "Project Title 02", category: "Video & Photography", year: "2026", aspect: "aspect-[16/10]" },
  { title: "Project Title 03", category: "Video & Photography", year: "2025", aspect: "aspect-[1/1]" },
  { title: "Project Title 04", category: "Digital Marketing", year: "2025", aspect: "aspect-[16/10]" },
  { title: "Project Title 05", category: "Web & App Solutions", year: "2025", aspect: "aspect-[4/5]" },
  { title: "Project Title 06", category: "Digital Marketing", year: "2024", aspect: "aspect-[1/1]" },
  { title: "Project Title 07", category: "Creative Direction", year: "2024", aspect: "aspect-[16/10]" },
  { title: "Project Title 08", category: "Video & Photography", year: "2024", aspect: "aspect-[4/5]" },
  { title: "Project Title 09", category: "Web & App Solutions", year: "2023", aspect: "aspect-[1/1]" },
];

const categories = [
  "All",
  "Video & Photography",
  "Digital Marketing",
  "Creative Direction",
  "Web & App Solutions",
];

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Work
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Selected projects from across the studio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            A cross-section of work from the past three years. Video,
            photography, marketing, creative direction, and the in-between.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition hover:border-accent hover:text-accent"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-xl border border-border bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 ${p.aspect}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                    <span>{p.category}</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">{p.year}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium tracking-tight">
                    {p.title}
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

          <div className="mt-20 rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Placeholder
            </p>
            <p className="mx-auto mt-3 max-w-md text-foreground/70">
              Replace these tiles with your actual project images and details.
              Each tile can link to a case-study page.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Commission a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
