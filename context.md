# Airbnb Interface Study

## User and Goal
The user is a traveler comparing vacation rentals by destination, price, and amenities. They want to discover a stay, refine their options, inspect its photos and host, and choose guests before making a reservation. The experience should be easy to scan on a 375px phone and offer more information side by side on larger screens.

## Pages
- Home (`/`): branded navigation, live destination search, horizontal category controls, loading skeletons, a responsive collection of stays, destination suggestions, and a structured footer.
- Catalog (`/catalog`): shared navigation, query-aware results, result count, ascending/descending price sorting, reusable listing cards, and a labeled map placeholder below results on mobile and beside them on desktop.
- Room (`/rooms/[id]`): loading state, catalog breadcrumb, navigable photo gallery, title/rating/reviews/location, host information, amenities, and a booking panel with a bounded guest counter and reservation confirmation.

## Vision-to-Spec Workflow
Reference: the mobile Home screenshot attached to this conversation. Its visible interface includes a pill-shaped search control, compact icon navigation, horizontal category strips, repeated photo cards with guest-favorite badges and heart actions, destination collections, bottom mobile navigation, and a grouped footer. The screenshot is very narrow and uses horizontal shelves; the assignment explicitly requires a single-column mobile listing grid, so this implementation retains its visual vocabulary while adapting the collection layout.

Vision prompt: “Identify the reusable component names, their props, and their layout relationships in this Airbnb mobile screenshot. Describe the hierarchy at a 375px viewport, then derive responsive desktop relationships without using a UI component library.”

### Home Specification (Derived From Attached Screenshot)
- `Header { query?, onSearch? }`: brand and user controls surround a pill-shaped search input; mobile search sits below the brand row.
- `CategoryFilter { active, onChange }`: horizontally scrollable icon + label buttons; selected category has a dark underline.
- `ListingGrid { listings, loading }`: one column at 375px, multiple columns starting at 768px; loading placeholders replace cards during the simulated fetch.
- `ListingCard { listing }`: rounded property image, guest-favorite badge, independent save button, title, location, dates, per-night price, and star rating; image and details link to the room route.
- `DestinationStrip`: photo-led destination links following the listing collection.
- `Footer`: getaway tabs, destination links, support/hosting/company link groups, locale/currency and legal information.
- `MobileNav`: fixed bottom Explore, Wishlists, and Log in controls.

### Catalog Specification (Inferred, Awaiting Screenshot)
Only the Home screenshot was supplied. This spec follows the assignment and shared Home components; it is not claimed to be generated from a Catalog screenshot.
- `CatalogView`: owns filtered listing state and price sort state; composes shared header, `ResultsHeader { count, sort, onSort }`, listing grid and `MapPlaceholder`.
- `ResultsHeader`: count and native sort select align vertically on mobile and horizontally on desktop.
- `MapPlaceholder`: gray area labeled Map; below the collection on mobile, right-hand sticky column at desktop widths.

### Room Specification (Inferred, Awaiting Screenshot)
Only the Home screenshot was supplied. This spec follows the assignment and familiar Airbnb detail-page structure; a Room screenshot is still needed to complete the three-screenshot workflow.
- `RoomView { id }`: loads a typed Room using a cleanup-safe timeout, shows loading or missing-room state, and composes the sections below.
- `PhotoGallery { photos, title }`: large main image with previous/next icon controls, photo count and thumbnail selectors; active index wraps around.
- `RoomHeader { room }`: title, star rating, review count, location, save and share actions.
- `HostInfo { host }`: circular avatar next to name and years hosting.
- `Amenities { amenities }`: two-column icon and label grid.
- `BookingCard { room }`: nightly price, date inputs, bounded guest controls, total and Reserve button with local confirmation. Mobile appears in document flow; desktop occupies a sticky right column.

## Architecture and Constraints
Next.js 16, TypeScript, Tailwind CSS, and App Router, scaffolded using create-next-app (no starter template). Routes live in `/app`, focused const functional components in `/components`, data interfaces in `/types`, and deterministic fixture data in `/lib`. Each component stays below approximately 80 lines. All internal navigation uses Next.js Link. No prebuilt UI library and no inline style objects. Lucide supplies icons only. Real photography provides the requested photo placeholders. Home and Room simulate loading with useEffect and setTimeout; state drives live search, categories, sort, saved cards, gallery and guests.

## Scaffold Command Review
Run `npx create-next-app@16 stay-app --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes --disable-git`, then move the generated project into this repository while preserving this brief and existing README. Install `lucide-react` for icons. Validate via ESLint, production build, and mobile/desktop browser checks; start the dev server on an available port.

## Implementation Notes
The generated Next.js 16 configuration enables prerendering; Suspense boundaries contain runtime URL hooks. SearchBar, BookingDates, BookingConfirmation, RoomHighlights, FooterInspiration and FooterLegal were extracted to keep rendering responsibilities focused. Dates use native browser controls, and booking confirmation is local only. Visual tests wait for simulated data and verify every photo, a one-column mobile grid, and absence of horizontal page overflow.