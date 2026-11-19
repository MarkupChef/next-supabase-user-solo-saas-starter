# Project Agent Guide

## Project

This starter is a standalone SaaS with one account per user. It uses Next.js App Router, React, TypeScript, Tailwind CSS, local shadcn-style components, Supabase Auth and Postgres, and next-intl. Plan and billing pages are placeholders.

The project follows Feature-Sliced Design (FSD). Use the existing FSD structure when implementing new features.

## Project map

- `app/[locale]/(auth)/` contains public authentication pages and route handlers.
- `app/[locale]/(app)/` contains protected profile, settings, plan, and billing pages.
- `src/shared/ui/` contains shared UI components.
- `src/shared/i18n/` contains locale routing and message catalogs. English uses unprefixed URLs and Ukrainian uses `/uk`.
- `supabase/migrations/` contains the database schema and user-scoped row-level security policies.

## Environment

See [.env.example](.env.example) for the variables and the [README](README.md#connect-a-cloud-supabase-project) for setup. The app builds and serves public pages without Supabase configuration.

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` configure Supabase Auth.
- `NEXT_PUBLIC_APP_URL` sets the callback origin and defaults to `http://localhost:3000`.
- `SUPABASE_SERVICE_ROLE_KEY` is optional and server-only. It enables account deletion.

## Commands

Use Node.js 24 and Corepack pnpm.

| Command | Purpose |
| --- | --- |
| `corepack pnpm install --frozen-lockfile` | Install dependencies. |
| `corepack pnpm dev` | Start the development server on port 3000. |
| `corepack pnpm typecheck` | Check TypeScript types. |
| `corepack pnpm lint` | Run ESLint. |
| `corepack pnpm test:run` | Run unit and component tests. |
| `corepack pnpm build` | Create a production build. |
| `corepack pnpm test:e2e` | Build and serve the app on port 3100, then run Playwright tests. |

See the [README scripts](README.md#scripts) for browser setup.
