# Building-an-Airbnb-UI-Clone-accaw1

A mobile-first Airbnb interface study built with Next.js 16, React, TypeScript, Tailwind CSS and the App Router. Scaffolded with create-next-app; no UI component library.

## Run Locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. The three routes are `/`, `/catalog`, and `/rooms/1` (room IDs 1-8 are available). All internal navigation uses Next.js Link.

## Features

- Home: cleanup-safe simulated loading, live search, category filtering, responsive listing grid and persistent local wishlists.
- Catalog: query-aware search, price sorting, shared listing cards and responsive map placeholder.
- Room: simulated loading, wraparound photo gallery, host, amenities, bounded guest counter, native date fields, calculated totals and local reservation confirmation.
- 375px mobile layouts, expanded grids at 768px, keyboard focus states and accessible control labels.

## Verification

```sh
npm run lint
npm run build
npx playwright install --with-deps chromium
npm run dev
# In a second terminal:
npm test
```

The browser suite covers both 375px and 1440px, live filtering, sorting, client-side navigation, gallery navigation, guest limits, booking totals, invalid room IDs, image loading and viewport overflow. Screenshots are generated under `test-results`.

## Organization

- `app`: route entry points and shared layout.
- `components`: small const functional components, including the shared ListingCard.
- `types`: Listing, Room and Category data shapes.
- `lib`: deterministic fixture data.
- `tests`: Playwright workflow checks.

Read [context.md](context.md) for the pre-code brief and component specifications. The attached Home screenshot informed the visual direction. Catalog and Room specifications are explicitly marked as inferred: original 375px screenshots of those two views are still needed to complete the requested three-screenshot vision workflow.

Photography is loaded from Unsplash and requires an internet connection. The map is intentionally a placeholder. Reservations are demonstrations only; no backend, authentication or payments are connected. Dates use the browser's native date picker rather than an additional UI library.