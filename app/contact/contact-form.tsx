"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const PROJECT_TYPES = [
  "Production",
  "Digital Marketing",
  "Creative Direction",
  "Web & App Solutions",
  "Other",
] as const;

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/5 p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Message received
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mt-3 text-foreground/70">
          We read every brief. Expect a reply from a real person within two
          working days.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot — visually hidden, off-screen, skipped by keyboard and screen
          readers. Real users never see it; bots that fill every input get
          silently dropped by the action. */}
      <div
        className="pointer-events-none absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Company / brand (optional)" name="company" autoComplete="organization" />
        <SelectField label="Project type" name="projectType" options={PROJECT_TYPES} />
      </div>

      <TextareaField
        label="Tell us about your project"
        name="message"
        required
        rows={6}
        placeholder="A few sentences on what you're working on, who it's for, and any timing or budget context."
      />

      {state.status === "error" && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {state.message}
        </p>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
          {!pending && <span aria-hidden>→</span>}
        </button>
        <p className="text-xs text-muted">
          We reply within two working days.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 block h-12 w-full rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 block h-12 w-full appearance-none rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition focus:border-accent"
      >
        <option value="">Select one…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
  rows = 5,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent"
      />
    </label>
  );
}
