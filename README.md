# VJ’s Kitchen

React + Vite, Tailwind CSS, Framer Motion, React Router, Lucide.

## Run locally

`npm install` then `npm run dev`. Production: `npm run build`; inspect with `npm run preview`.

## Architecture and editing

- `src/main.jsx`: shared shell, navigation, cart and checkout preview.
- `src/pages/index.jsx`: home, menu/order, story, gallery, gatherings, reservation and contact routes.
- `src/components/shared.jsx`: animation wrapper and shared formatting.
- `src/data/menu.json`: searchable menu data extracted from the supplied scanned PDF; prices in USD. Descriptions are editorial. Check transcription before commercial launch.
- `src/styles.css`: ivory, forest charcoal and terracotta design system; responsive layouts and reduced-motion behavior.
- `public/dine-in-menu.pdf`: original supplied menu.
- `public/images`: locally hosted illustrative Unsplash photographs; food and interior are not verified photographs of the restaurant.

The supplied PDF is the source for the Sacramento address, telephone, family story, menu prices, buffet and thali schedules. Full opening hours, email, social accounts, reviews and live events were not supplied. No fabricated reviews are shown. The preview bag persists only on the visitor’s device. Reservation and contact form data are not saved or sent.

## Integrations before accepting real bookings/orders

Connect server endpoints or a booking provider for reservations; validate and store requests before showing confirmation. Connect an ordering backend with authoritative prices, taxes, availability, delivery areas, and order storage. Integrate payments on the server and confirm through verified payment webhooks. Connect a contact service. Do not mark a booking, order, message or payment successful before its backend confirms it. Keep service credentials off the client.

## Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`.
2. Run `firebase login` and `firebase use --add` to select your Firebase project.
3. Run `npm run build`.
4. Run `firebase deploy --only hosting`.

`firebase.json` includes SPA routing and immutable hashed asset caching.

## Verification

Production compilation and asset/route source checks performed. Interactive browser verification requires a browser tool; one was not available in this session.
