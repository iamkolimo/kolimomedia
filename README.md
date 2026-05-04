# Kolimo Multimedia — kolimomedia.com

The website for [Kolimo Multimedia](https://kolimomedia.com), a multimedia studio in Abuja, Nigeria.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Supabase** — stores contact-form submissions
- **Vercel** — hosting + CI from GitHub

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in Supabase URL + anon key
npm run dev                        # http://localhost:3000
```

## Environment variables

Set these in `.env.local` for local dev, and in **Vercel → Project Settings → Environment Variables** for production:

| Variable                          | Where to find it                                               |
| --------------------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`        | Supabase dashboard → Project Settings → API → Project URL      |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`   | Supabase dashboard → Project Settings → API → `anon` `public`  |

## Supabase setup

Run [`supabase/schema.sql`](./supabase/schema.sql) in the Supabase SQL editor. It creates:

- `contact_submissions` table (id, created_at, name, email, company, project_type, message)
- Row-Level Security: anon role can `INSERT` only — submissions are not publicly readable.

View incoming submissions in the Supabase dashboard → Table Editor → `contact_submissions`.

## Project structure

```
app/
  layout.tsx              Root layout (nav + footer)
  page.tsx                Home
  services/page.tsx
  portfolio/page.tsx
  about/page.tsx
  contact/
    page.tsx
    contact-form.tsx      Client component
    actions.ts            Server action → Supabase insert
components/
  nav.tsx
  footer.tsx
lib/
  site.ts                 Site config: copy, services, links, social
  supabase.ts             Lazy Supabase client
supabase/
  schema.sql              Table + RLS policy
```

## Brand assets to swap in later

The site ships with placeholders. Edit these to drop in real Kolimo branding:

- **Logo / wordmark** — `components/nav.tsx`, `components/footer.tsx`
- **Colors** — CSS custom properties in `app/globals.css` (look for `--accent`)
- **Copy and services** — `lib/site.ts`
- **Project images** — replace gradient placeholders in `app/page.tsx` and `app/portfolio/page.tsx` with `<Image>` tags pointing at uploaded assets
- **Favicon / social image** — `app/icon.png`, `app/opengraph-image.png`

## Deployment

Pushing to `main` on GitHub auto-deploys to Vercel. Preview deploys are created for every other branch / PR.
