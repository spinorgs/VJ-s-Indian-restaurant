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

Production compilation and asset/route source checks performed. Local Chrome checks passed at desktop (1440px) and mobile (390px): no horizontal overflow, menu category switching, mobile navigation, menu route loading, and no JavaScript exceptions. Desktop and mobile screenshots were captured and visually reviewed.

## Research-led design direction

Official reference sites reviewed: [Dishoom](https://www.dishoom.com/), [Semma](https://www.semma.nyc/), [Dhamaka](https://www.dhamaka.nyc/), and [Junoon](https://www.junoonnyc.com/). These informed regional food storytelling, prominent menu and reservation access, image-led composition and a recognizable restaurant identity. No restaurant copy, logos, or photography were copied.

The current design uses parchment, oxblood, warm brass, editorial serif typography, a large arched feast photograph, interactive menu preview tabs, family storytelling, lunch details, and a Sacramento location section. `src/pages/Home.jsx` contains the homepage.

`public/images/indian-feast.jpg` is illustrative AI-generated imagery created with the built-in image_gen tool. Its exact prompt is saved in `public/images/indian-feast.prompt.txt`. Other food photography remains illustrative Unsplash imagery. No star ratings or awards are claimed.

## Location details

The user-supplied Google Maps screenshot confirms VJ’s Kitchen at 2600 Gateway Oaks Dr., #100, Sacramento, CA 95833, United States; phone 916-927-2600; dine-in, takeaway, and no-contact delivery. The screenshot’s phone supersedes the previous PDF-derived number for this restaurant. `src/data/location.js` provides shared map, address and telephone configuration; `src/components/Location.jsx` renders homepage/contact location details. Full opening hours were not supplied, so the site invites guests to call rather than extrapolating a weekly schedule from the screenshot’s temporary status.

## Menu and classic homepage update

The latest local version includes 163 PDF-derived selections across 15 categories, adding thalis, buffet prices, entrée upgrades, wine and beer. Existing IDs are preserved for preview-bag compatibility. The original PDF remains downloadable. Phone and exact location from the user's Maps information remain authoritative.

- `src/pages/Menu.jsx`: menu browsing, search, dietary filters and dish details.
- `src/components/DishDialog.jsx`: keyboard-accessible native dialog for ingredients and preparation.
- `src/data/dish-details.js`: editorial descriptions and typical preparation profiles, with independent recipe references for seven classics.
- `src/pages/Recipes.jsx`: seven signature dishes and full home-style recipe links.
- `src/data/image-sources.json` and `/photo-credits`: image provenance, photographer names and licenses.
- `src/pages/Home.jsx`: classic wine, brass and ivory design with web-sourced food photography.

The PDF supplies names/prices, not recipes. Ingredient lists and preparation notes describe common versions; they are not claims about the restaurant's proprietary recipes. Full recipe links credit Swasthi's Recipes. The recipe collection covers butter chicken, paneer butter masala, Hyderabadi chicken dum biryani, masala dosa, samosas, gulab jamun and mango lassi.

Eight additional photos were found by web search: dosa (Zoshua Colah), idli (Mayur Roxan), naan (Rashpal Singh), curry (Mohammad Fahim), biryani (Mario Raj) and samosas (Juli Moreira) under the Unsplash License; gulab jamun (Amit.jay32) and mango lassi (Ayshamarjana) under CC BY-SA 4.0. Original Wikimedia files are retained; their display crops are covered by the same license. Images depict similar dishes, not actual VJ's Kitchen preparations.

The previously removed header reservation button and starburst symbols remain removed. No bookings, orders or payments are simulated as completed.

## Relevant menu photography

All 163 menu selections now resolve to a local, food-relevant image, using 91 distinct files. The generic feast fallback has been removed. Vegetarian rice dishes use vegetarian rice photographs; soups, appetizers, dals, curries, seafood, breads, beverages, sweets and sides have corresponding image groups. Related variants share a representative photograph, whose pictured subject is identified on the card and in image alternative text. Stock imagery remains illustrative rather than a promise of exact restaurant presentation.

Source pages, photographer names, licenses and display changes are recorded in `src/data/image-sources.json` and shown at `/photo-credits`. The photo-credits route loads separately so its attribution data does not enlarge the initial homepage bundle. Local Chrome checks verified all 163 menu images decode, zero generic feast images remain, vegetarian rice images are correctly separated, and the mobile grid has no horizontal overflow. Image contact sheets were visually reviewed.

## Menu photo review — October 2026

Visually reviewed the 91 existing menu photographs and browsed Wikimedia Commons for replacements. Updated 20 distinct photo assets, including paneer butter masala, stuffed eggplant curry, dal tadka, dal makhani, chicken curry, both vindaloos, samosa chaat, paneer/vegetable/egg/mushroom biryanis, chicken fried rice, mushroom curry, shrimp fry, gongura chicken, chicken kurma, cauliflower 65, paneer 65 and grilled paneer. Added dedicated dish mappings instead of using dal for vindaloo or papdi chaat for samosa chaat. Source descriptions were checked to exclude mixed chicken-and-paneer photos from vegetarian dishes. Author, license, original page and display changes are recorded in the photo credits. All 163 menu image references decode and have credits; production build passes. Specialty variants still share representative photos where an exact match was unavailable.

## Distinct menu imagery — October 2026

Updated 69 menu image assignments after reviewing repeated photographs and the nine specifically identified dishes. All 163 menu entries now reference different image content (checked by SHA-256), rather than copies with different filenames. Replacements distinguish vegetable, cauliflower and chicken Manchurian, ginger and coriander chicken, mushroom pepper fry, breads, curries and rice dishes. Licensed Wikimedia source pages, authors, licenses and display changes are preserved in `/photo-credits`.

Three specialty images—Karvepaku Chicken, Goat Ghee Roast and Butter Chicken Fries—are AI-generated representative illustrations. Their cards, dialogs and credit entries explicitly identify them; exact prompts are saved beside the assets. Generated originals remain in the image generation Library; web copies use JPEG encoding. Stock photographs for some regional variants show a related preparation, identified by the image caption, rather than claiming to show the restaurant's exact recipe or presentation.

Validation: all 163 menu images decode, have attribution/provenance records, and have unique file contents. Production build and whitespace checks pass.

## Dosa and chicken illustration refresh

Replaced Chilli Chicken, Cilantro Chicken, six dosa varieties and both dosa breakfast combos with ten distinct, dish-specific AI illustrations. Menu cards, details and recipe cards identify generated imagery; prompts and provenance are retained. Combo illustrations show two idlis or two medu vadas alongside one masala dosa. All 163 menu images remain distinct and decode successfully; production build passes.
