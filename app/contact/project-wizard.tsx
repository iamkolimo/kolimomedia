"use client";

import { useActionState, useState } from "react";
import { BUDGET_RANGES, PROJECT_TYPES, TIMELINES } from "@/lib/enquiry";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

const STEPS = [
  { n: 1, label: "The work" },
  { n: 2, label: "The project" },
  { n: 3, label: "You" },
] as const;

export function ProjectWizard() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [stepError, setStepError] = useState("");

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/5 p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Brief received
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          Thanks. We&apos;ll be in touch.
        </h3>
        <p className="mt-3 text-foreground/70">
          We read every brief. Expect a reply from a real person within two
          working days.
        </p>
      </div>
    );
  }

  const next = () => {
    if (step === 1 && !projectType) {
      setStepError("Pick the closest fit. You can change your mind later.");
      return;
    }
    if (step === 2 && !message.trim()) {
      setStepError("A few sentences is enough. It makes our first reply useful.");
      return;
    }
    setStepError("");
    setStep(step + 1);
  };

  const back = () => {
    setStepError("");
    setStep(step - 1);
  };

  return (
    <form action={formAction} className="space-y-8">
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

      {/* Values from earlier steps ride along as hidden fields so the final
          submit carries the whole wizard. */}
      <input type="hidden" name="projectType" value={projectType} />
      <input type="hidden" name="budget" value={budget} />
      <input type="hidden" name="timeline" value={timeline} />
      {step !== 2 && <input type="hidden" name="message" value={message} />}

      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {STEPS[step - 1].label} · Step {step} of {STEPS.length}
        </p>
        <div className="flex gap-1.5" aria-hidden>
          {STEPS.map((s) => (
            <span
              key={s.n}
              className={`h-1 w-8 rounded-full transition ${
                s.n <= step ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1 — what do you need */}
      {step === 1 && (
        <fieldset>
          <legend className="text-xl font-medium tracking-tight">
            What kind of work do you need?
          </legend>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {PROJECT_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setProjectType(t);
                  setStepError("");
                }}
                aria-pressed={projectType === t}
                className={`rounded-xl border px-5 py-4 text-left text-sm transition ${
                  projectType === t
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border text-foreground/80 hover:border-accent/60"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {/* Step 2 — the project */}
      {step === 2 && (
        <div className="space-y-6">
          <label className="block">
            <span className="text-xl font-medium tracking-tight">
              Tell us about the project.
            </span>
            <textarea
              name="message"
              rows={5}
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.trim()) setStepError("");
              }}
              maxLength={4000}
              placeholder="What you're making, who it's for, and anything already decided."
              className="mt-4 block w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent"
            />
          </label>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Budget (optional)
              </span>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-2 block h-12 w-full appearance-none rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition focus:border-accent"
              >
                <option value="">Select one…</option>
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Timeline (optional)
              </span>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="mt-2 block h-12 w-full appearance-none rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition focus:border-accent"
              >
                <option value="">Select one…</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}

      {/* Step 3 — about you */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <p className="text-xl font-medium tracking-tight">
              Where should we send our reply?
            </p>
            <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-muted">
              {[projectType, budget, timeline].filter(Boolean).map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-border px-3 py-1"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Your name <span className="text-accent">*</span>
              </span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="mt-2 block h-12 w-full rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Email <span className="text-accent">*</span>
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="mt-2 block h-12 w-full rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition focus:border-accent"
              />
            </label>
          </div>
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Company / brand (optional)
            </span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              className="mt-2 block h-12 w-full rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition focus:border-accent"
            />
          </label>
        </div>
      )}

      {(stepError || state.status === "error") && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {stepError || (state.status === "error" ? state.message : "")}
        </p>
      )}

      <div className="flex items-center gap-4">
        {step > 1 && (
          <button
            type="button"
            onClick={back}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            <span aria-hidden>←</span>
            Back
          </button>
        )}
        {step < STEPS.length ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            Continue
            <span aria-hidden>→</span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send brief"}
            {!pending && <span aria-hidden>→</span>}
          </button>
        )}
        {step === STEPS.length && (
          <p className="text-xs text-muted">We reply within two working days.</p>
        )}
      </div>
    </form>
  );
}
