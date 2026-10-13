# CLAUDE.md: Mitch Fosco, Process & Automation Consulting

This repo is Mitch's website, deployed to Cloudflare Workers from GitHub (push to main deploys). It currently presents "Fosco Engineering." We are converting it into the site for a new business: small-business process and automation consulting, sold under Mitch's own name.

Read this whole file before changing anything.

---

## 1. What the business is

Mitch Fosco is a licensed Professional Engineer (Ohio, Kentucky, California) who finds the bottleneck costing a small business hours or money every week, then builds the fix at a fixed price. Clients are owner-run trade and field-service businesses with 5–50 people (HVAC, plumbing, electrical, fire and security, generator and elevator service, facility maintenance, small manufacturers, property managers).

- **Sold as:** Mitch Fosco, Process & Automation Consulting (sole proprietor, his own name)
- **One-liner:** "I find the bottleneck costing your business hours every week, then build the fix at a fixed price."
- **Lead hook:** "Most service businesses have earned money they haven't billed. I find it."
- **Pitch line:** "You don't pay for my hours. You pay for the hours you get back."

## 2. Hard rules (do not break)

1. **This business is not an engineering firm and must never look like one.** Do not offer, list or describe engineering services (power studies, arc flash, short-circuit, coordination, forensic or expert-witness work) anywhere on the live site. Mitch's employer allows outside work only if it isn't an engineering firm.
2. **Do not use "Fosco Engineering" or the word "engineering" as the business name, title, logo text, page title, meta title, schema `name`, or footer name.** "Engineer" may appear only as a personal credential in Mitch's bio, in this exact form: **"Mitch Fosco, PE (Ohio)"**. Never "PE" alone and never "engineer" as a service. (Massachusetts law: an out-of-state license must be qualified by state.)
3. **No employer or client names, logos, screenshots or code.** Case studies refer only to "a national electrical testing firm." Never mention PSG or Power Solutions Group.
4. **No absolute claims** ("100%", "zero errors", "guaranteed"). Use only the numbers in section 5.
5. **Don't break deploy.** Keep the existing Cloudflare Workers setup, build config and intake-form backend working. Don't change secrets, bindings or `wrangler` config unless a task below requires it, and ask first if it does.
6. **Ask before deleting files.** Prefer unpublishing (removing from navigation and routing, or a 301 redirect to the home page) over deletion, so the engineering content can be restored later.

## 3. Tasks, in order

Work through these in order. Before step 1, explore the repo and give Mitch a short plan (files you'll touch, anything that looks risky), then proceed.

1. **Explore.** Map the site's pages, routing, templates, styles, blog setup, FAQ schema, SEO/meta tags, sitemap and the intake form's handler. Note every place "Fosco Engineering" or engineering services appear (grep for: `Engineering`, `engineer`, `arc flash`, `short circuit`, `coordination`, `power study`, `forensic`, `expert witness`, `PE`).
2. **Unpublish engineering content.** Remove engineering service pages and blog posts from navigation, routing and the sitemap; 301-redirect their URLs to `/`. Keep the source files (move to an `archive/` folder or leave them unrouted). List what you unpublished.
3. **Rebrand.** Site name, page titles, meta titles and descriptions, Open Graph tags, header, footer, favicon alt text and schema `Organization`/`Person` data become "Mitch Fosco, Process & Automation Consulting." Keep the domain configurable; Mitch may move to a new domain, so don't hard-code `foscoengineering.com` in new code (use relative URLs or one config value).
4. **Build the new home page** from the copy in section 4, in this section order.
5. **Rework the intake form** (keep its existing backend) with these fields: Name, Business name, Role, Phone, Email, Number of employees (1–4 / 5–15 / 16–50 / 50+), Industry (dropdown: HVAC / Plumbing / Electrical / Fire & security / Field service / Manufacturing / Property management / Other), "What's slowing your business down?" (textarea). Submit button: "Book a free 30-minute call."
6. **Replace the FAQ schema** with the FAQ in section 4 (valid `FAQPage` JSON-LD matching the visible FAQ exactly).
7. **SEO pass.** Title: "Mitch Fosco | Process & Automation Consulting for Service Businesses". Meta description: "I find the bottleneck costing your business hours every week, then build the fix at a fixed price. Process and automation consulting for trade and field-service businesses." Update sitemap and robots. Keep the existing GEO/AI-readability structure (clear headings, plain-language answers).
8. **Check it.** Run the local dev server, view the page at desktop and phone width, test the form submission end to end, check every internal link, and validate the JSON-LD. Then grep again for the terms in task 1 and confirm none appear on the live site except "Mitch Fosco, PE (Ohio)" in the bio.
9. **Commit on a branch** (`services-relaunch`), summarize the changes for Mitch, and wait for his OK before merging to main (merging deploys).

## 4. Home page copy (use as written; light edits for layout only)

### Hero
**Headline:** Your business is losing hours every week. I find where, and fix it.
**Subhead:** Fixed-price process and automation consulting for trade and service businesses. I map how work really moves through your company, find the bottleneck, and build the fix.
**Primary button:** Book a free 30-minute call (scrolls to the form)
**Proof strip:** $250K+ in unbilled work recovered · 200+ hours back a year · $30K/yr in labor saved

### The problem
**Heading:** Sound familiar?
- Jobs get finished, but the invoice goes out weeks later, or never.
- The same information gets typed into three different places.
- Maintenance renewals and follow-ups slip through the cracks.
- You're doing paperwork at night because the office can't keep up.
- You pay for software nobody fully uses.

**Line under list:** Most service businesses have earned money they haven't billed. I find it.

### How it works
**Heading:** Three steps, fixed prices, no hourly billing

1. **Bottleneck Audit: $1,500 fixed.** Two weeks. I interview your team, map how a job moves from first call to paid invoice, and rank the top three fixes by hours and dollars saved. You get a fixed quote for the build. If we build together, the $1,500 is credited.
2. **Fix Build: fixed quote, typically $3,000–$8,000.** I build the top fix using tools you already have where possible, test it with your team, and hand it over with a one-page how-to. We measure before and after.
3. **Keep-Running Support: $400/month (optional).** Monitoring, fixes when something breaks, small improvements and a monthly report of hours saved.

**Line under steps:** You don't pay for my hours. You pay for the hours you get back.

### Results
**Heading:** Results

**Case study 1: Finding money the firm had already earned**
*A national electrical testing firm*
- **Problem:** Two kinds of revenue were stuck. Some projects were fully complete but never fully invoiced. Others were partially done and had stalled, so they never reached the finish line or the invoice. No one had a single view of which jobs were in which state.
- **Fix:** A live pipeline in the firm's existing database showing every project's status, completion and billing state, with flags for finished-but-unbilled work and stalled jobs.
- **Result:** **$250K+** in earned revenue identified, completed and invoiced, and a shorter cycle from field work to invoice.

**Case study 2: Two hours back on every report**
*Same firm, 100+ technical reports a year*
- **Problem:** Every report was hand-built. Staff re-typed data from the database into Word, formatted tables by hand and assembled the final PDF package by drag-and-drop. Then a reviewer checked it all for copy errors.
- **Fix:** A one-click report template that pulls data straight from the database, plus a desktop tool that assembles the client package automatically.
- **Result:** 2 hours saved per report (1 for the writer, 1 for the reviewer); 200+ hours of senior staff time recovered per year; about $30K a year in labor savings; transcription errors between database and report eliminated.

### About
**Heading:** Why work with me
I'm Mitch Fosco, PE (Ohio). I've spent ten years in technical services, building the systems that keep projects moving, from job tracking and billing pipelines to report automation. Most automation freelancers sell one tool. I start by finding what's actually broken, then pick the simplest tool that fixes it, often one you already pay for. I document everything, test before handoff and measure the result.

### FAQ
**What kinds of businesses do you work with?**
Owner-run trade and service businesses with roughly 5–50 people: HVAC, plumbing, electrical, fire and security, field service, facility maintenance, small manufacturers and property managers.

**Do I have to buy new software?**
Usually not. I start with the tools you already have, like your spreadsheets, accounting software or job management system, and only recommend something new when it clearly pays for itself.

**Why fixed prices instead of hourly?**
You know the cost before we start, and I'm paid for results, not time. Every build is scoped in writing first.

**Do you work remotely?**
Yes. I meet in person in the Boston area when it helps, and everything else works remotely.

**How long does it take?**
The audit takes two weeks. Most builds take two to six weeks depending on scope.

**Where does AI fit in?**
Where it saves real time, like reading documents, drafting follow-ups or sorting requests. I don't add AI for its own sake.

### Contact
**Heading:** Find out what's slowing you down
**Subhead:** Book a free 30-minute call. Tell me how a job moves through your business, and I'll tell you where I'd look first.
(Intake form from task 5.)

### Footer
Mitch Fosco · Process & Automation Consulting · Boston, MA · [email from existing site config]

## 5. Approved numbers (use only these)

- $250K+ in earned revenue identified, completed and invoiced
- 2 hours saved per report (1 writer + 1 reviewer)
- 200+ hours of staff time recovered per year
- About $30K a year in labor savings
- Transcription errors between database and report eliminated

## 6. Design direction

Clean, confident, practical. This audience is busy owners reading on a phone between jobs.

- Mobile-first; the hero and the call button must fit on a phone screen without scrolling.
- One accent color; plenty of white space; no stock photos of handshakes or robots.
- Big, scannable numbers in the proof strip and results.
- Fast: no heavy frameworks or animation libraries added.
- If the existing site's style works, keep it and adjust; don't rebuild the stack.

## 7. Working style

- Mitch prefers direct, compressed communication. Short summaries, no filler.
- Explain anything that changes deploy, routing or DNS before doing it.
- Never commit secrets. Never push to main without Mitch's OK.
