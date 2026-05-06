"use server";

import { getSupabase } from "@/lib/supabase";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const PROJECT_TYPES = [
  "Video & Photography",
  "Digital Marketing",
  "Creative Direction",
  "Web & App Solutions",
  "Other",
] as const;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
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
      message: "Something went wrong saving your message. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}
