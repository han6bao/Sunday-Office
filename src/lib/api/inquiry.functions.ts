import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

// Office Hours inquiries — delivered to the office inbox via Resend.
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
      ["Budget", data.budget],
      ["What they think they need", data.need],
      ["About the work", data.about],
      ["Anything else", data.else],
    ].filter((pair): pair is [string, string] => Boolean(pair[1]));

    const rowHtml = rows
      .map(
        ([key, value]) =>
          `<tr><td style="padding:10px 14px 10px 0;vertical-align:top;color:#7f6a37;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid #eee6d6"><strong>${esc(key)}</strong></td><td style="padding:10px 0;vertical-align:top;color:#191a1a;border-bottom:1px solid #eee6d6">${esc(value)}</td></tr>`,
      )
      .join("");

    const html = `<div style="background:#f4f2ec;padding:32px 16px;font-family:Georgia,serif">
  <div style="max-width:560px;margin:0 auto;background:#fffdf8;border:1px solid #e4ddd0;padding:32px">
    <p style="margin:0 0 6px;color:#7f6a37;font-size:11px;letter-spacing:0.2em;text-transform:uppercase">Sunday Office — Office Hours</p>
    <h1 style="margin:0 0 20px;color:#191a1a;font-size:20px;font-weight:600">New inquiry from the site</h1>
    <table style="width:100%;border-collapse:collapse">${rowHtml}</table>
    <p style="margin:22px 0 0;color:#83857c;font-size:12px">Sent via sunday-office-agency.higgsfield.app · reply to ${esc(data.email) || "the address above"}</p>
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
        subject: `New Sunday Office inquiry — ${data.name}`,
        html,
      }),
    });

    const body = (await res.json().catch(() => ({}))) as { message?: string; id?: string };
    if (!res.ok) {
      return { ok: false, error: body?.message ?? `Email failed (${res.status})` };
    }
    return { ok: true, id: body?.id };
  });