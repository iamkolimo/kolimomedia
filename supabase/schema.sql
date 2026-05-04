-- Kolimo Multimedia — contact submissions table
-- Run this in the Supabase SQL editor (or apply via the Supabase MCP).

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  project_type text,
  message text not null
);

-- Enable Row Level Security so the anon key can ONLY insert, never read.
alter table public.contact_submissions enable row level security;

-- Anyone with the anon key can submit a new row.
create policy "anon can insert contact submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- No SELECT/UPDATE/DELETE policy for anon — submissions are private.
-- View them in the Supabase dashboard, or via the service role key.

-- Optional: index for sorting by date in the dashboard.
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
