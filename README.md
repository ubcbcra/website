This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Managing Events & Members via Google Forms + Sheets

Non-developers can update site content using Google Forms responses published as CSV.

### 1. Create Forms
Create two forms with these field names (order can vary but headers must match after submission):

Events form headers: `slug, title, date, category, excerpt, image, body`
Members form headers: `role, name, contact, image, description, order`

### 2. Publish the Response Sheets as CSV
In each linked responses Sheet: File → Publish to the web → Select the responses sheet tab → Format: CSV → Publish → copy URL.

The URL will look like: `https://docs.google.com/spreadsheets/d/.../pub?output=csv`

### 3. Add Environment Variables
Create `.env.local` (not committed) and add:
```
EVENTS_SHEET_CSV_URL=https://docs.google.com/...events...&output=csv
MEMBERS_SHEET_CSV_URL=https://docs.google.com/...members...&output=csv
```
Restart the dev server after changes.

### 4. How It Works
- Server components call async loaders in `src/lib/events.ts` & `src/lib/members.ts`.
- CSV is fetched (public) and parsed; minimal in-memory cache (5 min) + Next.js revalidate.
- If fetch fails or env vars absent, a fallback static dataset is used.

### 5. Editing Content
Submit a new form response or directly edit the Sheet row (headers unchanged). Changes appear within ~5 minutes (cache TTL) or after a redeploy/restart.

### 6. Requirements & Constraints
- `slug` must be unique (used in /events/[slug]).
- `date` must be ISO (YYYY-MM-DD) for correct sorting.
- `order` (members) optional numeric; lower shows earlier.
- `image` should be a full URL.
- `body` supports simple markdown-ish headings starting with `##` (rendered as h2); extend with a markdown library if needed.

### 7. Hardening Ideas
- Switch to Google Sheets API with service account for private editing.
- Add an On-Demand Revalidation route to purge cache on form submission (Apps Script webhook → /api/revalidate).
- Add validation (e.g., discard rows missing required fields) – currently basic filtering is in place.

### 8. Extending Markdown
Replace manual split logic in `events/[slug]/page.tsx` with a markdown parser (`remark`) for richer formatting when needed.

---
Need help evolving this into a full CMS or adding revalidation? Open an issue or ask for guidance.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
