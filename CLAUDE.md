# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (starts on port 3000)
- **Build:** `npm run build`
- **Test:** `npm run test` (vitest, runs once)
- **Lint:** `npm run lint` (biome)
- **Format:** `npm run format` (biome)
- **Check (lint + format):** `npm run check` (biome)

## Architecture

TanStack Start (React 19) full-stack app using file-based routing, SSR via Nitro, and Vite as the build tool.

- **Routing:** TanStack Router with file-based route generation. Routes live in `src/routes/` and the route tree is auto-generated to `src/routeTree.gen.ts` (do not edit manually).
- **Root layout:** `src/routes/__root.tsx` — defines the HTML shell, head metadata, theme initialization script, and wraps all pages with Header/Footer.
- **Router config:** `src/router.tsx` — creates the router with scroll restoration and intent-based preloading.
- **Server-only code:** Use `import "@tanstack/react-start/server-only"` to mark modules that should only run on the server (see `src/testService.ts`).
- **Data loading:** Route loaders (e.g., `loader` in `createFileRoute`) run on the server and provide data via `Route.useLoaderData()`.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin. Custom CSS tokens/variables defined in `src/styles.css`.

## Code Style

- Biome for linting and formatting: tabs for indentation, double quotes for JS/TS strings.
- Path alias: `#/*` maps to `./src/*` (configured in both `tsconfig.json` and `package.json` imports).
- TypeScript strict mode enabled.
