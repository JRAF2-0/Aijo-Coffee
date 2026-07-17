# Aijo Coffee Shop — Project Architecture

Ito ang "source of truth" natin. Babalik-balikan natin ito bawat phase. Kapag may bagong file/folder, dadagdagan lang natin ang structure na ito — hindi natin babaguhin ang laman ng document, extend lang.

---

## 1. Tech Stack (Final)

| Layer | Tool | Purpose |
|---|---|---|
| Build tool | Vite | Fast dev server, bundling |
| Framework | React 18 + TypeScript | Component structure, type safety |
| Styling | Tailwind CSS | Utility-first styling |
| Scroll | Lenis | Smooth/inertia scrolling |
| Animation | GSAP + ScrollTrigger | Cinematic scroll-based animations |
| UI motion | Framer Motion | Simple hover/tap/fade UI transitions |
| 3D (optional, later) | Three.js + React Three Fiber | Steam/particles kung gusto nating i-level up |
| Icons | Lucide React | Icon set (Wifi, Coffee, MapPin, etc.) |
| Deployment | Vercel | Hosting |

> Note: Three.js/R3F ay **optional add-on** sa huli. Hindi natin gagamitin agad — pwede nating i-simulate muna ang "steam animation" gamit GSAP + CSS/SVG, mas mabilis at mas madaling i-debug. Kapag gusto mo pa ng mas cinematic, doon na natin idadagdag ang R3F bilang layer sa ibabaw.

---

## 2. Folder Structure (Target — hahantungan natin dito)

```
aijo-coffee/
├── public/
│   ├── favicon.ico
│   └── videos/
│       └── hero-bg.mp4
│
├── src/
│   ├── assets/
│   │   ├── images/          # drinks, gallery, about photos
│   │   └── icons/           # custom svg (logo, steam shapes)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/        # 1 component = 1 section ng site
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedDrinks.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── BestSellers.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Reviews.tsx
│   │   │   └── VisitUs.tsx
│   │   │
│   │   └── ui/               # reusable small pieces
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── SectionHeading.tsx
│   │
│   ├── data/                 # LAHAT ng dummy/content data dito (hiwalay sa UI)
│   │   ├── drinks.ts
│   │   ├── bestsellers.ts
│   │   ├── reviews.ts
│   │   ├── gallery.ts
│   │   └── siteConfig.ts     # business name, address, hours, socials
│   │
│   ├── hooks/
│   │   ├── useLenis.ts        # smooth scroll setup
│   │   └── useGsapContext.ts  # cleanup helper para sa GSAP
│   │
│   ├── animations/            # LAHAT ng GSAP timelines dito, hiwalay sa components
│   │   ├── loaderTimeline.ts
│   │   ├── heroTimeline.ts
│   │   └── scrollAnimations.ts
│   │
│   ├── lib/
│   │   └── gsap.ts            # register plugins (ScrollTrigger, etc.) — 1 beses lang
│   │
│   ├── types/
│   │   └── index.ts           # shared TypeScript types (Drink, Review, etc.)
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .eslintrc.cjs
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Bakit ganito ang structure (para madaling i-debug)

- **`components/sections/`** — bawat section ng site (Hero, Gallery, atbp.) ay sarili-sariling file. Kapag may sira sa isang section, alam mo agad kung saang file pupuntahan.
- **`data/`** — pinaghiwalay natin ang **content** (text, prices, links) sa **UI code**. Kapag gustong palitan ng client ang presyo o menu, doon lang sa `data/` mag-e-edit, hindi na kailangan hawakan ang component.
- **`animations/`** — lahat ng GSAP timeline logic ay nakahiwalay sa component. Ito ang pinaka-importante para sa "cinematic flow" mo — kapag may na-debug na animation issue, alam mo agad na doon ka lang titingin, hindi kailangan hanapin sa loob ng JSX.
- **`hooks/`** — reusable logic (Lenis scroll setup, GSAP cleanup) para hindi paulit-ulit isulat.
- **`lib/gsap.ts`** — dito lang natin i-re-register ang GSAP plugins (once), iiwasan natin ang duplicate registration bugs.

---

## 3. Animation Flow → Saan sila titira sa code

| Flow Step | Component | Animation File |
|---|---|---|
| Loading Screen | `LoadingScreen.tsx` | `loaderTimeline.ts` |
| Coffee logo fades in | `LoadingScreen.tsx` | `loaderTimeline.ts` |
| Steam animation | `LoadingScreen.tsx` (or `Hero.tsx`) | `loaderTimeline.ts` |
| Hero video starts | `Hero.tsx` | `heroTimeline.ts` |
| Heading slides up | `Hero.tsx` | `heroTimeline.ts` |
| Button fades in | `Hero.tsx` | `heroTimeline.ts` |
| Coffee beans move (scroll) | `FeaturedDrinks.tsx` / global | `scrollAnimations.ts` |
| Images zoom (scroll) | `Gallery.tsx`, `BestSellers.tsx` | `scrollAnimations.ts` |
| Menu cards stagger | `FeaturedDrinks.tsx` | `scrollAnimations.ts` |
| Reviews slide | `Reviews.tsx` | `scrollAnimations.ts` |
| Google Maps fade in | `VisitUs.tsx` | `scrollAnimations.ts` |
| Footer reveal | `Footer.tsx` | `scrollAnimations.ts` |

Idea: **loading/hero animations** ay isang timeline (`gsap.timeline()`) na naka-sequence. **Scroll-based animations** naman (steps pababa) ay gagamit ng `ScrollTrigger` — bawat section may sariling trigger, hindi lahat naka-chain sa isang malaking timeline (mas madaling i-debug kapag isolated).

---

## 4. Development Phases (susunod nating gagawin, isa-isa)

- [ ] **Phase 0** — Tools setup (Node.js check, VS Code, terminal ready)
- [ ] **Phase 1** — Scaffold Vite + React + TypeScript project
- [ ] **Phase 2** — Install dependencies (Tailwind, GSAP, Lenis, Framer Motion, Lucide)
- [ ] **Phase 3** — Buuin ang folder structure (empty files muna, walang laman)
- [ ] **Phase 4** — Gawin ang static layout (walang animation muna) — Header, Hero, lahat ng sections, Footer, with dummy data
- [ ] **Phase 5** — Style gamit Tailwind (colors, fonts, spacing, responsive)
- [ ] **Phase 6** — GSAP: Loading screen + Hero intro sequence
- [ ] **Phase 7** — GSAP: Scroll animations (beans, zoom, stagger cards, reviews, maps, footer)
- [ ] **Phase 8** — Polish, responsive check, performance check
- [ ] **Phase 9** — Deploy sa Vercel

> Update log ng phases at file additions ay ilalagay natin dito paulit-ulit habang tumatagal ang project, para may makikitang buong history ng ginawa.

---

## 5. Example Dummy Data (gagamitin sa Phase 3-4)

- **Business name:** Aijo Coffee
- **Tagline:** "Freshly Brewed Coffee, Crafted with Passion"
- **Drinks:** Espresso ₱89, Latte ₱109, Mocha ₱119, Cappuccino ₱99
- **Best Sellers:** Spanish Latte, Caramel Macchiato, Dirty Matcha, Cold Brew
- **Hours:** Mon–Sun, 7:00 AM – 9:00 PM
- **Address:** Cebu, Philippines (placeholder, papalitan ng client)
- **Socials:** Facebook, Instagram, TikTok (placeholder links muna)
