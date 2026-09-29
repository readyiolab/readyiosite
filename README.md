# Readyio website (`readyio.com`)

Next.js 16 marketing site: home, services, for founders, contact, legal pages, HTML sitemap, and the **blog listing** at `/blog`. Individual articles live on `blog.readyio.com` (see `../readyiosite-blog`).

Production deployment: see [`../deploy/DEPLOYMENT.md`](../deploy/DEPLOYMENT.md).

## Local development

Start the API first (`cd ../Backend && npm run dev`, port 4000), then:

```bash
npm install
echo REVALIDATE_SECRET=<same value as Backend/.env> > .env.local
npm run dev               # http://localhost:8080
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 8080 |
| `npm run build` | Production build (needs the API reachable at `CMS_API_URL`) |
| `npm start` | Serve the build on port 8080 |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript checks |

## Environment

| Variable | Dev (`.env.development`) | Prod (`.env.production`) | Used for |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://readyio.com` | `https://readyio.com` | Canonical URLs, metadata, sitemap |
| `NEXT_PUBLIC_API_URL` | `http://localhost:4000` | `https://api.readyio.com` | Contact form, newsletter, chatbot, booking (browser) |
| `NEXT_PUBLIC_BLOG_URL` | `http://localhost:8081` | `https://blog.readyio.com` | Article links, `/blog/:slug` redirect |
| `CMS_API_URL` | `http://localhost:4000/api` | `http://127.0.0.1:4000/api` | Server-side blog listing fetches |
| `REVALIDATE_SECRET` | `.env.local` | `.env.local` | Protects `POST /api/revalidate` |

`NEXT_PUBLIC_*` values are compiled into the bundle, so rebuild after changing them. `.env.local` is never committed; see [`.env.example`](.env.example).

## How the blog listing stays fresh

- `/blog` fetches published articles from the CMS and caches them for 5 minutes (cache tag `articles`).
- When an article changes, the API calls `POST /api/revalidate` with the `x-revalidate-secret` header, which clears the cache immediately.
- `/blog/<slug>` permanently redirects to `https://blog.readyio.com/<slug>` (configured in `next.config.ts`).

## Structure

```
app/            Routes (App Router), sitemap.ts, robots.ts, api/revalidate
components/     pages/ (page bodies), site/ (nav, footer, chatbot…), blog/, ui/ (shadcn)
lib/            api.ts (forms → API), blog.ts (CMS fetches), site.ts (URLs, nav), metadata helpers
public/         Static assets
```
