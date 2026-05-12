import { Resend } from "resend";

let _client: Resend | null = null;

export function getResend(): Resend | null {
  if (_client) return _client;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  _client = new Resend(apiKey);
  return _client;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderContactEmail(input: {
  name: string;
  email: string;
  company: string | null;
  projectType: string | null;
  message: string;
}): { subject: string; html: string; text: string } {
  const { name, email, company, projectType, message } = input;
  const subject = `New project enquiry from ${name}`;

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#64748b;font-size:13px;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:6px 0;color:#0f172a;font-size:14px;">${value}</td></tr>`;

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <tr><td style="padding:24px 24px 8px 24px;">
      <p style="margin:0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">New enquiry</p>
      <h1 style="margin:6px 0 0 0;color:#0f172a;font-size:20px;font-weight:600;">${escapeHtml(name)}</h1>
    </td></tr>
    <tr><td style="padding:16px 24px;border-top:1px solid #e2e8f0;">
      <table style="width:100%;border-collapse:collapse;">
        ${row("From", `${escapeHtml(name)} &lt;<a href="mailto:${escapeHtml(email)}" style="color:#0f172a;">${escapeHtml(email)}</a>&gt;`)}
        ${company ? row("Company", escapeHtml(company)) : ""}
        ${projectType ? row("Project type", escapeHtml(projectType)) : ""}
      </table>
    </td></tr>
    <tr><td style="padding:8px 24px 24px 24px;border-top:1px solid #e2e8f0;">
      <p style="margin:0 0 8px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
      <div style="color:#0f172a;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
    </td></tr>
    <tr><td style="padding:16px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px;">
      Hit reply to respond to ${escapeHtml(name)} directly. Full submission is also stored in Supabase.
    </td></tr>
  </table>
</body></html>`;

  const text = [
    `New project enquiry from ${name}`,
    "",
    `From: ${name} <${email}>`,
    company ? `Company: ${company}` : null,
    projectType ? `Project type: ${projectType}` : null,
    "",
    "Message:",
    message,
    "",
    "(Hit reply to respond directly.)",
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, html, text };
}
