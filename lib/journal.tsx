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
    slug: "brand-film-vs-documentary",
    title: "Brand film vs documentary: which does your project need?",
    description:
      "Half the briefs we get for a documentary really want a brand film, and vice versa. Telling the line between them, and why pitching the wrong one matters.",
    publishedAt: "2026-06-22",
    readingTime: "4 min read",
    body: (
      <>
        <p>
          Half the briefs we get from Nigerian brands for &ldquo;a
          documentary&rdquo; really want a brand film with documentary energy.
          Half the briefs for &ldquo;a brand film&rdquo; really want something
          closer to documentary. They are not the same thing, and pitching the
          wrong one is the difference between a film people watch once and a
          film people share.
        </p>

        <h2>What a brand film is</h2>
        <p>
          A brand film exists to make the brand feel something specific. The
          audience is people the brand wants to reach. The story is
          constructed to lead them somewhere: a feeling, an idea, a call.
          Voiceover, music, and cuts are written and edited to land that
          feeling on a schedule.
        </p>
        <p>
          A brand film answers to the brand first. The talent serves the
          story, not the other way around. Length is usually short: 30 seconds
          for a campaign cutdown, 90 seconds for a launch, three minutes if
          the brand has earned that much of your attention. Anything longer
          is a sign the script wasn&rsquo;t tight enough.
        </p>
        <p>
          Examples we make often: launch films, manifesto films, hero films
          for a new product, recruitment films, anniversary pieces.
        </p>

        <h2>What a documentary is</h2>
        <p>
          A documentary exists to tell a true story the filmmaker thinks is
          worth telling. The audience is people who want to learn or feel
          something they did not before. The story is shaped, but not
          constructed: you do not know the ending when you start.
        </p>
        <p>
          A documentary answers to the subject first. The brand or sponsor
          may be in the credits, but they are not the protagonist. The
          protagonist is a person, a place, a moment, a problem. Length runs
          from a 12-minute short to feature-length. Anything much shorter is
          not really a documentary, it is a documentary-style brand film,
          which is fine, but call it that.
        </p>
        <p>
          Examples we make often: founder documentaries, impact stories from
          the field, short docs for awards or grants, longer pieces for
          festivals.
        </p>

        <h2>The honest middle ground</h2>
        <p>
          A lot of agency work lives between the two. A founder profile film
          is documentary in style, brand film in purpose: the subject is
          real, the interview is unscripted, but the cut is shaped to land a
          specific feeling about the brand. We make a lot of these.
        </p>
        <p>
          This middle ground is fine, as long as everyone agrees on which
          side it leans. A documentary that quietly turns into a brand film
          breaks trust with the audience. A brand film that pretends to be a
          documentary feels manipulative. The way to keep both honest is to
          be clear about what the film is, from the brief, through
          production, into how you describe it on the site.
        </p>

        <h2>How to know which you need</h2>
        <p>Ask three questions in this order.</p>

        <h3>Is there a real story already happening, with or without you?</h3>
        <p>
          If yes, documentary. If you are inventing the story to serve a
          brand message, brand film.
        </p>

        <h3>Who is the protagonist?</h3>
        <p>
          If the brand or product is the protagonist, brand film. If a
          person, place, or community is, documentary.
        </p>

        <h3>Are you comfortable not knowing how it ends?</h3>
        <p>
          If yes, documentary. If you need to know the message lands a
          specific way, brand film.
        </p>

        <p>
          If you answered yes to the first two and no to the third, you want
          a documentary-style brand film. Call it that and brief accordingly.
          We wrote a{" "}
          <a href="/journal/how-to-brief-a-creative-agency-in-nigeria">
            separate note
          </a>{" "}
          on what makes a brief work, if it helps.
        </p>

        <h2>What each costs differently</h2>
        <p>
          Brand films are scoped. We agree on a shot list, a script, and a
          shoot day count. The cost is the cost.
        </p>
        <p>
          Documentaries are scoped with more honesty about the unknown. We
          agree on the access, the territory, the team, and the number of
          shoot days. We do not know what we will get. The cost is the cost
          of putting that team on the ground for that time. If you want a
          documentary scoped like a brand film, you are buying a brand film.
        </p>
        <p>
          This is the one thing more first-time clients get wrong than
          anything else. Documentaries cost what they cost because you cannot
          script reality. If the budget needs to be known to the cent before
          you start, you are making a brand film. That is fine. Just brief
          accordingly.
        </p>
      </>
    ),
  },
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
          redoing it. After ten years of reading briefs from across Nigeria,
          from founders, marketing leads, ministries, brands two weeks old and
          brands two decades in, these are the parts that matter.
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
          seen on Instagram for inspiration.&rdquo; Now we know who
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
          agency. You need a vendor.
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
          round of questions, usually within 24 hours. If it&rsquo;s the
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
