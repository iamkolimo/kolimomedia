import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/journal";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${site.url}/journal/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "en-NG",
    author: {
      "@type": "Organization",
      "@id": `${site.url}#organization`,
      name: site.name,
    },
    publisher: { "@id": `${site.url}#organization` },
    mainEntityOfPage: `${site.url}/journal/${post.slug}`,
    image: `${site.url}/hero.jpg`,
  };

  return (
    <>
      <article>
        <header className="border-b border-border/60">
          <div className="mx-auto max-w-3xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16 lg:pt-32">
            <Link
              href="/journal"
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent"
            >
              ← Journal
            </Link>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted">
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <section>
          <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20 [&_h2]:mt-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mt-10 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:tracking-tight [&_h3]:text-foreground [&_p]:mt-6 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-foreground/80 [&_em]:italic [&_em]:text-foreground/90 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:opacity-80">
            {post.body}
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-balance text-lg text-foreground/80">
              Have a brief that needs a fresh set of eyes? We&rsquo;d love to
              read it.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
