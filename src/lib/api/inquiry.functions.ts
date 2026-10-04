import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

// Inquiries from the site, delivered to the Sunday Office inbox via Resend.
// Reads RESEND_API_KEY / INQUIRY_TO / INQUIRY_FROM from the platform env
// (website_secrets); nothing secret lives in this file.

const inquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().optional(),
  business: z.string().optional(),
  website: z.string().optional(),
  based: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  need: z.string().optional(),
  about: z.string().optional(),
  else: z.string().optional(),
});

const esc = (v: string | undefined | null) =>
  (v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("\n", "<br/>");

export const sendInquiry = createServerFn({ method: "POST" })
  .inputValidator(inquirySchema)
  .handler(async ({ data }) => {
    const { RESEND_API_KEY, INQUIRY_TO, INQUIRY_FROM } = bindings();
    if (!RESEND_API_KEY || !INQUIRY_TO) {
      return { ok: false, notConfigured: true };
    }

    const rows: Array<[string, string]> = [
      ["Name", data.name],
      ["Email", data.email],
      ["Business / Project", data.business],
      ["Website / Instagram", data.website],
      ["Based", data.based],
      ["Timeline", data.timeline],
      ["Investment range", data.budget],
      ["What they think they need", data.need],
      ["About the work", data.about],
      ["Anything else", data.else],
    ].filter((pair): pair is [string, string] => Boolean(pair[1]));

    const rowHtml = rows
      .map(
        ([key, value]) =>
          `<tr><td style="padding:12px 16px 12px 0;vertical-align:top;color:#6b5678;font-family:Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid #e6dcea"><strong>${esc(key)}</strong></td><td style="padding:12px 0;vertical-align:top;color:#151213;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;border-bottom:1px solid #e6dcea">${esc(value)}</td></tr>`,
      )
      .join("");

    const html = `<div style="background:#efe5f3;padding:36px 16px">
  <div style="max-width:560px;margin:0 auto;background:#fbf7fd;border-radius:10px;overflow:hidden;border:1px solid #e0d3e6">
    <div style="background:#151213;padding:26px 32px">
      <p style="margin:0;color:#f3ead9;font-family:Georgia,serif;font-size:13px;letter-spacing:0.32em;text-transform:uppercase">Sunday Office</p>
      <p style="margin:6px 0 0;color:rgba(243,234,217,0.7);font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase">New inquiry</p>
    </div>
    <div style="padding:28px 32px 32px">
      <h1 style="margin:0 0 20px;color:#151213;font-family:Georgia,serif;font-size:24px;font-weight:400">${esc(data.name)} wants to start something.</h1>
      <table style="width:100%;border-collapse:collapse">${rowHtml}</table>
      <p style="margin:24px 0 0;color:#8b779a;font-family:Helvetica,Arial,sans-serif;font-size:12px">Hit reply to answer ${esc(data.name)} directly.</p>
    </div>
  </div>
</div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: INQUIRY_FROM ?? "Sunday Office <onboarding@resend.dev>",
        to: [INQUIRY_TO],
        reply_to: data.email || undefined,
        subject: `New inquiry from ${data.name}${data.business ? " · " + data.business : ""}`,
        html,
      }),
    });

    const body = (await res.json().catch(() => ({}))) as { message?: string; id?: string };
    if (!res.ok) {
      return { ok: false, error: body?.message ?? `Email failed (${res.status})` };
    }
    return { ok: true, id: body?.id };
  });