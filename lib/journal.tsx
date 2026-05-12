import type { ReactNode } from "react";

export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  body: ReactNode;
};

export const posts: JournalPost[] = [
  {
    slug: "how-to-brief-a-creative-agency-in-nigeria",
    title: "How to brief a creative agency in Nigeria",
    description:
      "What to put in your first email, and what to leave out. Notes from ten years of reading briefs.",
    publishedAt: "2026-05-12",
    readingTime: "3 min read",
    body: (
      <>
        <p>
          When the right brief lands in our inbox, the project tends to run
          itself. When the wrong one does, we spend the first three weeks
          redoing it. After ten years of reading briefs from across Nigeria —
          from founders, marketing leads, ministries, brands two weeks old and
          brands two decades in — these are the parts that matter.
        </p>

        <h2>What to put in</h2>

        <h3>Outcome, not output.</h3>
        <p>
          &ldquo;We need a 60-second commercial&rdquo; tells us what to make.
          &ldquo;We need to reach mid-market families across Abuja and Lagos
          with a campaign for our new product&rdquo; tells us <em>why</em>, and
          often suggests a different output entirely. Lead with the outcome.
          Let us argue for the right format.
        </p>

        <h3>Who you&rsquo;re talking to.</h3>
        <p>
          A specific person, not a demographic. &ldquo;Office workers,
          25&ndash;45&rdquo; is a hundred million people. &ldquo;Tomi, marketing
          manager at a mid-sized fintech in Lekki who picks reels she&rsquo;s
          seen on Instagram for inspiration&rdquo; &mdash; now we know who
          we&rsquo;re making this for.
        </p>

        <h3>What you can&rsquo;t change.</h3>
        <p>
          The non-negotiables. Brand colours that have to stay. A spokesperson
          who has to be in the film. A legal disclaimer that must run on every
          cut. List them up front. The earlier we know, the less we waste.
        </p>

        <h3>Timeline and budget.</h3>
        <p>
          Both, even ballpark. A six-week timeline and a six-month timeline are
          different projects. Same goes for budget. We won&rsquo;t quote you
          up; we&rsquo;ll quote you accurately. Ranges are fine.
        </p>

        <h3>What you&rsquo;ve already tried.</h3>
        <p>
          Old campaigns, old assets, what worked and what didn&rsquo;t. We
          learn more from your last three years than from a research deck.
        </p>

        <h2>What to leave out</h2>

        <h3>The &ldquo;how&rdquo;.</h3>
        <p>
          Don&rsquo;t write the storyboard for us. Don&rsquo;t specify the
          music genre, the colour grade, the font. That&rsquo;s our job. If
          you&rsquo;ve already designed the project, you don&rsquo;t need an
          agency &mdash; you need a vendor.
        </p>

        <h3>A pitch deck for the project.</h3>
        <p>
          A brief is a working document, not a sales document. Save the polish
          for the campaign itself.
        </p>

        <h3>Filler.</h3>
        <p>
          Five pages of brand history we can read on your website. Skip.
        </p>

        <h2>What happens after you hit send</h2>
        <p>
          We read it. If something&rsquo;s missing or unclear, we send back one
          round of questions &mdash; usually within 24 hours. If it&rsquo;s the
          right fit, we propose a scope: timeline, deliverables, cost, and a
          single person who&rsquo;ll own the project from your side and ours.
          If it&rsquo;s not the right fit, we say so, and where possible we
          point you to someone we trust who handles that kind of work.
        </p>
        <p>That&rsquo;s it. No pitch theatre, no four-week chemistry meetings.</p>
      </>
    ),
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
