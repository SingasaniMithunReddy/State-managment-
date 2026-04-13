# HireJob.ai Portal -  Frontend

A frontend-only hiring portal built with  standalone components, route-based pages, mock data, and localStorage-powered interactions.

## What is included

- Landing page with featured jobs and product messaging
- Jobs listing page with client-side filters
- Job detail page
- Saved jobs page
- Application tracker page
- Employer marketing page
- Demo dashboard
- Login and register demo screens
- Portfolio-style case study page
- No backend code

## Tech choices

-  standalone APIs
- Angular Router for SPA navigation
- Signals and computed state
- Built-in control flow (`@if`, `@for`)
- localStorage for saved jobs and application tracking

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## Build

```bash
npm run build:prod
```

The production files are generated in `dist/hirejob-ai-portal`.

## Domain-ready deployment files added

This project now includes the pieces needed to deploy the Angular SPA on a real custom domain such as `hirejob.ai`.

### Added files

- `vercel.json` for Vercel SPA rewrites
- `public/_redirects` for Netlify or Cloudflare Pages SPA fallback
- `public/_headers` for a small set of security headers

### Why these files matter

Angular uses client-side routing, so direct visits to routes like:

- `/jobs`
- `/case-study`
- `/dashboard`

must return `index.html` from the host. Without that rewrite/fallback rule, refreshes on nested routes will fail with a 404.

## Deploy to a real domain

### Option 1: Vercel

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. In the Vercel project, add the custom domain `hirejob.ai`.
4. Copy the DNS records Vercel gives you into your domain registrar.
5. After DNS is verified, open `https://hirejob.ai`.

The included `vercel.json` handles Angular route rewrites.

### Option 2: Netlify or Cloudflare Pages

1. Connect the GitHub repo.
2. Use the build command:

```bash
npm install && npm run build:prod
```

3. Publish the folder:

```bash
dist/hirejob-ai-portal
```

4. Add the custom domain `hirejob.ai` in the hosting dashboard.
5. Update DNS at your registrar.

The included `public/_redirects` file provides SPA fallback routing.

## Suggested next steps

- Connect job listings to a real API
- Add authentication and employer/jobseeker roles
- Integrate resume upload
- Add Angular Material or a design system
- Add unit tests and e2e coverage
- Add environment files for staging and production domains
