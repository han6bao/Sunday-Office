// Inquiry form -> Resend email. Reads RESEND_API_KEY, INQUIRY_TO, INQUIRY_FROM from Vercel env.
const esc = (v) =>
  String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("\n", "<br/>");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }
  let data = req.body;
  if (typeof data === "string") {
    try { data = JSON.parse(data); } catch { data = {}; }
  }
  data = data || {};
  const pick = (k) => (typeof data[k] === "string" ? data[k].slice(0, 5000) : "");
  const d = {
    name: pick("name"), email: pick("email"), business: pick("business"), website: pick("website"),
    based: pick("based"), timeline: pick("timeline"), budget: pick("budget"), need: pick("need"),
    about: pick("about"), else: pick("else"),
  };
  if (!d.name) {
    res.status(400).json({ ok: false, error: "Name is required" });
    return;
  }
  const { RESEND_API_KEY, INQUIRY_TO, INQUIRY_FROM } = process.env;
  if (!RESEND_API_KEY || !INQUIRY_TO) {
    res.status(200).json({ ok: false, notConfigured: true });
    return;
  }
  const rows = [
    ["Name", d.name], ["Email", d.email], ["Business / Project", d.business], ["Website / Instagram", d.website],
    ["Based", d.based], ["Timeline", d.timeline], ["Investment range", d.budget],
    ["What they think they need", d.need], ["About the work", d.about], ["Anything else", d.else],
  ].filter((r) => r[1]);
  const rowHtml = rows
    .map(([k, v]) => `<tr><td style="padding:12px 16px 12px 0;vertical-align:top;color:#6b5678;font-family:Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid #e6dcea"><strong>${esc(k)}</strong></td><td style="padding:12px 0;vertical-align:top;color:#151213;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;border-bottom:1px solid #e6dcea">${esc(v)}</td></tr>`)
    .join("");
  const html = `<div style="background:#efe5f3;padding:36px 16px"><div style="max-width:560px;margin:0 auto;background:#fbf7fd;border-radius:10px;overflow:hidden;border:1px solid #e0d3e6"><div style="background:#151213;padding:26px 32px"><p style="margin:0;color:#f3ead9;font-family:Georgia,serif;font-size:13px;letter-spacing:0.32em;text-transform:uppercase">Sunday Office</p><p style="margin:6px 0 0;color:rgba(243,234,217,0.7);font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase">New inquiry</p></div><div style="padding:28px 32px 32px"><h1 style="margin:0 0 20px;color:#151213;font-family:Georgia,serif;font-size:24px;font-weight:400">${esc(d.name)} wants to start something.</h1><table style="width:100%;border-collapse:collapse">${rowHtml}</table><p style="margin:24px 0 0;color:#8b779a;font-family:Helvetica,Arial,sans-serif;font-size:12px">Hit reply to answer ${esc(d.name)} directly.</p></div></div></div>`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: INQUIRY_FROM || "Sunday Office <onboarding@resend.dev>",
      to: [INQUIRY_TO],
      reply_to: d.email || undefined,
      subject: `New inquiry from ${d.name}${d.business ? " · " + d.business : ""}`,
      html,
    }),
  });
  const body = await r.json().catch(() => ({}));
  if (!r.ok) {
    res.status(200).json({ ok: false, error: body?.message || `Email failed (${r.status})` });
    return;
  }
  res.status(200).json({ ok: true, id: body?.id });
}
