"use server";

import { getResend, renderContactEmail } from "@/lib/resend";
import { site } from "@/lib/site";
import { getSupabase } from "@/lib/supabase";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const PROJECT_TYPES = [
  "Production",
  "Digital Marketing",
  "Creative Direction",
  "Web & App Solutions",
  "Other",
] as const;

// Mirrors the Supabase CHECK constraints in supabase/schema.sql so we reject
// oversized payloads in the action before paying the network round-trip.
const MAX_LENGTH = {
  name: 200,
  email: 320,
  company: 200,
  projectType: 100,
  message: 5000,
} as const;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — a hidden field real users never see. Bots tend to fill every
  // input on the page. Pretend success so the bot moves on without retrying.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim() || null;
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email and a short message.",
    };
  }

  if (
    name.length > MAX_LENGTH.name ||
    email.length > MAX_LENGTH.email ||
    message.length > MAX_LENGTH.message ||
    (company && company.length > MAX_LENGTH.company) ||
    projectType.length > MAX_LENGTH.projectType
  ) {
    return {
      status: "error",
      message: "One of the fields is too long. Please tighten it up and resend.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That doesn't look like a valid email." };
  }

  if (projectType && !PROJECT_TYPES.includes(projectType as (typeof PROJECT_TYPES)[number])) {
    return { status: "error", message: "Invalid project type." };
  }

  const { error } = await getSupabase().from("contact_submissions").insert({
    name,
    email,
    company,
    project_type: projectType || null,
    message,
  });

  if (error) {
    return {
      status: "error",
      message:
        "Something went wrong saving your message. Please try again or email us directly.",
    };
  }

  // Notify the studio inbox. Best-effort: the lead is already safe in Supabase,
  // so we don't fail the form if the email send is misconfigured.
  const resend = getResend();
  if (resend) {
    const { subject, html, text } = renderContactEmail({
      name,
      email,
      company,
      projectType: projectType || null,
      message,
    });
    try {
      await resend.emails.send({
        from: "Kolimo Contact Form <onboarding@resend.dev>",
        to: site.notificationEmail,
        replyTo: email,
        subject,
        html,
        text,
      });
    } catch (e) {
      console.error("[contact] Failed to send notification email:", e);
    }
  } else {
    console.warn(
      "[contact] RESEND_API_KEY not set — submission saved to Supabase but no notification email sent."
    );
  }

  return { status: "success" };
}
