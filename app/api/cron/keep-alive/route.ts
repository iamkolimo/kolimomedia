import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

// Supabase's free tier pauses a project after ~7 days with no database
// activity. Vercel Cron hits this route weekly so the project never goes
// to sleep between real visits. See vercel.json for the schedule.
export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "";
  if (!userAgent.startsWith("vercel-cron/")) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const { error } = await getSupabase()
      .from("contact_submissions")
      .select("id", { count: "exact", head: true });

    if (error) throw error;
  } catch (e) {
    console.error("[cron/keep-alive] Supabase ping failed:", e);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
}
