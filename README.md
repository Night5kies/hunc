# HUNC Website

Next.js website for the Harvard Undergraduate Negotiation Club built by Kevin McLeod in 2025

## Stack
- Next.js 15
- React 19
- Payload CMS 3
- Supabase Postgres for production database
- Supabase Storage (S3-compatible) for production media uploads
- Framer Motion for animations
- `scroll-carousel` for past event image carousels

## Local Development
1. Create `.env.local` from `.env.example`.
2. Set at minimum:
   - `PAYLOAD_SECRET`
   - `DATABASE_URI=file:./payload.db` for local SQLite
3. Optional for testing production-like storage/database locally:
   - `DATABASE_URL`
   - `S3_BUCKET`
   - `S3_REGION`
   - `S3_ENDPOINT`
   - `S3_ACCESS_KEY_ID`
   - `S3_SECRET_ACCESS_KEY`
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```
6. Open:
   - Site: `http://localhost:3000`
   - Payload admin: `http://localhost:3000/admin`

## Scripts
- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run generate:types` - regenerate Payload types
- `npm run generate:importmap` - regenerate Payload admin import map

## Payload CMS
Payload config entrypoint:
- [payload.config.ts](C:\Users\night\Code\Personal Projects\hunc\payload.config.ts)

### Globals
Singleton content edited once and rendered site-wide / page-wide.
- `home`
- `about`

### Collections
Repeatable documents.
- `users`
- `media`
- `schedule-events`
- `past-events`
- `partners`
- `negotiation-simulations`

### Pages Currently Backed by Payload
- `/` homepage
- `/about`
- `/schedule`
- `/past-events`
- `/negotiation-simulations`

## Media Uploads
- Local dev can use the local `media/` folder.
- Production media is configured to use Supabase Storage through the S3-compatible endpoint.
- Public media URLs are generated from Supabase public object URLs.
- The Supabase `media` bucket should be public for the current implementation.

## Production Setup
Recommended hosting setup:
- Vercel for app hosting
- Supabase Postgres for database
- Supabase Storage for uploaded media

Required production environment variables:
```env
PAYLOAD_SECRET=...
DATABASE_URL=...
S3_BUCKET=media
S3_REGION=us-east-1
S3_ENDPOINT=https://<project-ref>.storage.supabase.co/storage/v1/s3
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
```

Notes:
- `DATABASE_URL` should use the Supabase Postgres pooler transaction connection string for Vercel/serverless usage.
- Do not commit `.env.local` or real secrets.
- If running on Windows, avoid keeping the repo in OneDrive. Next.js build artifacts can fail there due to file locking.

## Content Notes
- Past events use `scroll-carousel`. Each event should have at least 3 images or the carousel layout will look wrong.
- The homepage partners section is driven by the `partners` collection.
- The homepage current initiatives section is driven by the `home` global.
- `home` and `about` are globals because they represent single pages, not repeatable entries.

## Repo Structure
- `src/app/(site)` - public website routes
- `src/app/(payload)` - Payload admin and API routes
- `src/collections` - Payload collection schemas
- `src/globals` - Payload global schemas
- `src/lib` - shared helpers

## Maintenance
When Payload schema changes:
1. Update the relevant file in `src/collections` or `src/globals`.
2. Run:
   ```bash
   npm run generate:types
   npm run generate:importmap
   ```
3. Restart the dev server if admin behavior or generated fields look stale.
