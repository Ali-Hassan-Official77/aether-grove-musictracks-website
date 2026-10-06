# Aether Grove — Rock Music Network

A production-ready Next.js music discovery frontend powered by Audius.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 3
- Audius API
- Edge-compatible server routes
- Custom light/dark theme system
- Responsive persistent audio player

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and add your Audius credentials:

```env
AUDIUS_API_KEY=...
AUDIUS_BEARER_TOKEN=...
AUDIUS_API_BASE_URL=https://api.audius.co/v1
AUDIUS_APP_NAME=Aether Grove
```

Do not expose `AUDIUS_BEARER_TOKEN` through a `NEXT_PUBLIC_` variable.

## Production checks

```bash
npm run typecheck
npm run build
```

## Main routes

- `/` — premium signal homepage
- `/search` — discovery/search
- `/track/[id]` — track detail
- `/library` — local My Crate
- `/about` — network story
- `/pricing` — artist options
- `/contact` — contact form

## Notes

Artwork is served from Audius when available, with a local SVG fallback. The audio player streams through a server route so private credentials are not placed in browser code.
