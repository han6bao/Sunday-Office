#!/usr/bin/env python3
"""Build the Sunday Office website (static) from the landing canvas files."""
import re, os, shutil, hashlib, base64, json, sys

SP = '/tmp/claude-0/-home-claude/644c3e14-1a34-5cf4-9fa1-5bfca8fd03af/scratchpad'
SRC = SP + '/landing/project'
OUT = sys.argv[1] if len(sys.argv) > 1 else SP + '/web/site'
WEB = SP + '/web'
SITE = 'https://sundayoffice.agency'

shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(OUT + '/assets', exist_ok=True)
os.makedirs(OUT + '/work/img', exist_ok=True)

# blob id -> local file (matched by sha256 against the artifact's asset list)
BLOB = {}
for l in open(SP + '/blobmap.txt'):
    i, ext, path = l.split(None, 2)
    BLOB[i] = path.strip()
used_names = {}
def asset(i):
    src = BLOB[i]
    base = os.path.basename(src)
    name = base
    if name in used_names and used_names[name] != i:
        stem, ext = os.path.splitext(base); name = stem + '-' + i[:6] + ext
    used_names[name] = i
    dst = OUT + '/assets/' + name
    if not os.path.exists(dst): shutil.copy(src, dst)
    return '/assets/' + name
def blobs(s):
    return re.sub(r'/_blob/([0-9a-f]{32})', lambda m: asset(m.group(1)), s)

SLUGS = ['ellis','essential-brows','leon-thomas','jaydyn-scream','elena-qiu','selaras-haus','chutneys','nine-vicious','exhibition','jaydyn-f','kenshi-killz','still-different','dj-wzrd']
def links(s):
    s = re.sub(r'p-([a-z0-9-]+)\.dc\.html', lambda m: '/work/' + m.group(1), s)
    return s

FAV = open('/home/claude/sunday-office/public/favicon.svg').read() if os.path.exists('/home/claude/sunday-office/public/favicon.svg') else None

def head(title, desc, path, og='/og-card.jpg'):
    return f'''<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{SITE}{path}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Sunday Office">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{SITE}{path}">
<meta property="og:image" content="{SITE}{og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#9b87a0">'''

# ---------------- landing ----------------
s = open(SRC + '/Main.dc.html').read()
helmet = re.search(r'<helmet>(.*?)</helmet>', s, re.S).group(1)
body = re.search(r'</helmet>(.*?)</x-dc>', s, re.S).group(1)
script = re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>', s, re.S).group(1)

# menu + service links: old site pages are gone, so point them at things on this page
SVC = {'logo-identity': 'B', 'branding': 'B', 'websites': 'W', 'website-makeover': 'W', 'photography': 'P', 'headshots': 'P',
       'digitals': 'P', 'moving-image': 'P', 'creative-direction-content': 'C', 'social-packs': 'C', 'launch-a-product': 'C'}
def svc(m):
    k = SVC.get(m.group(1))
    if not k: raise SystemExit('unmapped link ' + m.group(0))
    return "'#svc-" + k + "'"
script = re.sub(r"'https://sundayoffice\.agency/([a-z-]+)'", svc, script)
body = body.replace('href="https://sundayoffice.agency/#work"', 'href="#dial"')
body = body.replace('href="https://sundayoffice.agency/#about-hana"', 'href="#svc-about"')
assert 'sundayoffice.agency/' not in body.replace('hello@sundayoffice.agency', '').replace('mailto:', ''), 'old site link left in markup'

# inquiry form: send through /api/inquiry instead of opening the mail app
old_btn = '<a class="opt opt-main" href="{{sendHref}}" style="justify-content: center">Send inquiry</a>'
assert old_btn in body
body = body.replace(old_btn, '<button type="submit" class="opt opt-main" style="justify-content: center" disabled="{{sendBusy}}">{{sendLabel}}</button></div>\n<sc-if value="{{hasMsg}}" hint-placeholder-val="{{ false }}"><p class="fld wide prefill" role="status">{{msg}}</p></sc-if>\n<div style="display:none">')
body = body.replace('disabled="{{sendBusy}}"', '{{BUSY}}')  # placeholder, handled below
old_ns = "noSubmit: (e) => { if (e && e.preventDefault) e.preventDefault(); },"
assert old_ns in script
script = script.replace(old_ns, '''noSubmit: (e) => { if (e && e.preventDefault) e.preventDefault(); if (st.sending) return;
  if (!f.name.trim() || !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(f.email.trim())) { this.setState({ msg: 'Please add your name and an email I can reply to.' }); return; }
  const mailto = 'mailto:hello@sundayoffice.agency?subject=' + encodeURIComponent('New inquiry from ' + (f.name || 'the website') + (f.business ? ' \\u00b7 ' + f.business : '')) + '&body=' + encodeURIComponent(ib);
  this.setState({ sending: true, msg: '' });
  fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
    .then((r) => r.json().catch(() => ({})))
    .then((d) => { if (d && d.ok) { this.setState({ sending: false, sent: true, msg: 'Thank you, ' + f.name.split(' ')[0] + '. Your note is on its way to me, and I\\u2019ll reply within 2 to 3 business days.', f: { name: '', email: '', business: '', website: '', need: '', timeline: '', about: '' }, prefilled: false }); } else { this.setState({ sending: false, msg: 'Something went wrong sending that. Opening your email app instead so nothing gets lost.' }); window.location.href = mailto; } })
    .catch(() => { this.setState({ sending: false, msg: 'Something went wrong sending that. Opening your email app instead so nothing gets lost.' }); window.location.href = mailto; });
},
sendLabel: st.sending ? 'Sending\\u2026' : 'Send inquiry',
hasMsg: !!st.msg,
msg: st.msg || '',''')
body = body.replace('{{BUSY}}', '')
old_ab = "about: quizAbout + (f.about || '')"
assert old_ab in script
script = script.replace(old_ab, "about: (f.about || '').indexOf(quizAbout) === 0 ? f.about : quizAbout + (f.about || '')")
# the stray wrapper opened above closes the original </div>
body = blobs(links(body))
helmet = blobs(helmet)
script = blobs(links(script))

# service links + About from the menu
glue = r'''
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href^="#svc-"]');
  if (!a) return;
  e.preventDefault();
  var k = a.getAttribute('href').slice(5), c = window.__soComp;
  if (!c) return;
  if (k === 'about') { c.setState({ about: true, open: false }); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  c.setState({ vault: k, vtick: Date.now(), open: false });
});
'''

title = 'Sunday Office · Creative studio in Seattle'
desc = 'Sunday Office is a one-person creative studio in Seattle, founded by Hana Hong. Brand identity, websites, photography, video and content, all made in one place.'
ld = {"@context": "https://schema.org", "@type": "ProfessionalService", "name": "Sunday Office", "url": SITE + "/",
      "email": "hello@sundayoffice.agency", "founder": {"@type": "Person", "name": "Hana Hong"},
      "areaServed": "Seattle, Washington", "address": {"@type": "PostalAddress", "addressLocality": "Seattle", "addressRegion": "WA", "addressCountry": "US"},
      "sameAs": ["https://www.instagram.com/sundayoffice.ag"]}
html = f'''<!doctype html>
<html lang="en">
<head>
{head(title, desc, '/')}
<script type="application/ld+json">{json.dumps(ld)}</script>
{helmet}
<style>@media (max-width:760px){{.dbox{{left:auto !important;margin:0 auto}}}}
.nojs{{max-width:640px;margin:0 auto;padding:60px 24px;color:#fff;font-family:Manrope,Arial,sans-serif}}</style>
</head>
<body>
<div id="app"><noscript><div class="nojs"><h1>Sunday Office</h1><p>A one-person creative studio in Seattle. Email <a href="mailto:hello@sundayoffice.agency">hello@sundayoffice.agency</a>.</p></div></noscript></div>
<template id="tpl">{body}</template>
<script src="/dc.js"></script>
<script>
{script}
{glue}
dcMount(Component, document.getElementById('tpl'), document.getElementById('app'));
</script>
</body>
</html>
'''
open(OUT + '/index.html', 'w').write(html)

# ---------------- project pages ----------------
seen = {}
def data_img(m):
    mime, b64 = m.group(1), m.group(2)
    raw = base64.b64decode(b64)
    h = hashlib.sha1(raw).hexdigest()[:12]
    ext = {'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp'}[mime]
    name = f'{h}.{ext}'
    if name not in seen:
        open(OUT + '/work/img/' + name, 'wb').write(raw); seen[name] = 1
    return '/work/img/' + name

sitemap = [SITE + '/']
for slug in SLUGS:
    p = open(f'{SRC}/p-{slug}.dc.html').read()
    t = re.search(r'<title>(.*?)</title>', p).group(1)
    ph = re.search(r'<helmet>(.*?)</helmet>', p, re.S).group(1)
    pb = re.search(r'</helmet>(.*?)</x-dc>', p, re.S).group(1)
    ps = re.search(r'componentDidMount\(\) \{\n(.*?)\n\}\nrenderVals', p, re.S).group(1)
    pb = pb.replace('href="Main.dc.html" aria-label="Sunday Office home"', 'href="/" aria-label="Sunday Office home"')
    pb = pb.replace('<a class="back" href="Main.dc.html">', '<a class="back" href="/#dial">')
    pb = pb.replace('<a class="cta" href="Main.dc.html">', '<a class="cta" href="/#inquiry">')
    assert 'Main.dc.html' not in pb, slug
    pb = re.sub(r'data:(image/[a-z]+);base64,([A-Za-z0-9+/=]+)', data_img, pb)
    ph = re.sub(r'data:(image/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)', data_img, ph)
    pb = blobs(links(pb)); ph = blobs(ph)
    ps = ps.replace('if (window.__soLB) return; window.__soLB = 1;', '')
    sub = re.search(r'<p class="ssub">(.*?)</p>', pb, re.S)
    d = re.sub(r'<[^>]+>', '', sub.group(1)).strip() if sub else t
    if len(d) > 158: d = d[:155].rsplit(' ', 1)[0] + '…'
    hero = re.search(r'<img class="hero[^"]*" src="([^"]+)"', pb)
    og = hero.group(1) if hero else '/og-card.jpg'
    page = f'''<!doctype html>
<html lang="en">
<head>
{head(t, d.replace('"', '&quot;'), '/work/' + slug, og)}
{ph}
</head>
<body>
{pb}
<script>
(function () {{
{ps}
}})();
</script>
</body>
</html>
'''
    open(f'{OUT}/work/{slug}.html', 'w').write(page)
    sitemap.append(f'{SITE}/work/{slug}')

# favicon, og card, robots, sitemap, runtime
for f in ['favicon.svg', 'og-card.jpg']:
    shutil.copy('/home/claude/sunday-office/public/' + f, OUT + '/' + f)
shutil.copy(WEB + '/dc.js', OUT + '/dc.js')
open(OUT + '/robots.txt', 'w').write(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n')
open(OUT + '/sitemap.xml', 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(f'  <url><loc>{u}</loc></url>\n' for u in sitemap) + '</urlset>\n')
open(OUT + '/404.html', 'w').write(f'''<!doctype html><html lang="en"><head>{head('Page not found · Sunday Office', 'This page moved.', '/404')}
<meta http-equiv="refresh" content="0; url=/"></head><body style="margin:0;background:#9b87a0;color:#fff;font-family:Arial,sans-serif"><p style="padding:40px">This page moved. <a style="color:#fff" href="/">Go to Sunday Office →</a></p></body></html>''')
print('ok', OUT, len(used_names), 'assets', len(seen), 'project images')
