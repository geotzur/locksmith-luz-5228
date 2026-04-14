# Design Spec — Locksmith Luz

## LOGO PERSONALITY
`trustworthy-established` / `moderate` animation / `balanced` layout
BRIEF: The Locksmith Luz logo communicates established professional authority through its bold green-and-gold shield-and-key emblem — this is a brand that signals security, reliability, and local pride.
IMPLEMENTING: bold all-caps Oswald condensed headings; deep green hero + gold CTA buttons; shield/badge UI elements; smooth 400–500ms scroll reveals with 100ms stagger; gold shimmer hover on CTAs; thin gold horizontal divider lines between sections.

---

## Creative Direction

Locksmith Luz is a trusted authority, not a startup — the site should feel like walking into a licensed municipal security office that's also warm and immediately responsive. The mood is "fortress-with-a-human-face": deep forest greens anchor stability and safety while bright gold flashes signal urgency, value, and fast action. The visual metaphor is a California county sheriff's substation reimagined as a premium service agency — bold condensed signage typography, structured grid layouts, shield-echo badge elements, and a color system that reads "licensed professional" in every pixel. In the first 3 seconds, a homeowner locked out at midnight, or a business owner who just changed the locks, should feel: *this is a real, established, professional locksmith I can trust right now.* What would feel wrong: thin type, airy whitespace, tech-startup gradients, carousel sliders, or any aesthetic that suggests a gig-economy side hustle. The gold must always feel earned — used for actions and highlights only, never as a dominant background wash.

---

## DO NOT Repeat (from history)

```
DO NOT USE:
- Colors: #e87f24 (orange) — ClingPool v1; #66b0d2 (pool blue) — ClingPool v1; #6d386d (purple) — ClingPool v1;
          #0c0e13 near-black — ClingPool v2; #c011d2, #d84ee0, #8a0c96 (magenta/purple) — Unique Air Duct
- Fonts: Space Grotesk, DM Sans — ClingPool v1; Barlow Condensed, Outfit — ClingPool v2;
         Bebas Neue — Locksmith Luz v1 (4406)
- Hero: image triptych (2/3 + stacked 1/3) — ClingPool v1; dark split-panel 44/56 with all content in left panel — ClingPool v2
- Nav: transparent bar with pill CTA — ClingPool v2; fixed top-bar-split — Unique Air Duct
- Tone/mood: warm-editorial orange — ClingPool v1; dark-luxury Miami — ClingPool v2; dark civic all-black — Locksmith Luz v1
- Background sequence reuse: dark→light→dark is fine but avoid the ClingPool v2 all-dark sequence
- Services: uniform-card-grid with image-top cards — ClingPool v1; numbered runway alternating rows — ClingPool v2
- Section patterns: accordion FAQ was used in ClingPool v1; stacked-quotes testimonials was ClingPool v1;
                   horizontal-numbered ProcessSteps was ClingPool v2; bento-grid — do not use
- Decorative: diagonal clip-path dividers — ClingPool v2; giant city-name rotated watermark — ClingPool v2;
              pool-blue sine-wave SVG divider — ClingPool v2; radial-pulse button glow — ClingPool v2
- Effects: stagger-fade-up generic (must use named stagger) — ClingPool v1; spring-counter overshoot — ClingPool v2;
           card-lift-on-hover minimal — ClingPool v1; diagonal clip sections — ClingPool v2
- Card shadows: heavy card shadows — per screenshot_inspiration: avoid; bento proportions — avoid
- Carousels: any auto-rotating carousel — screenshot_inspiration explicitly forbids
```

---

## Color Palette — "Shield & Gold"

**Logo-anchored: YES** — hues come directly from logo_colors in company_info.json

- **Primary**: `#d6b328` — the logo's gold; used for all primary CTAs, active states, gold accents
- **Primary Light**: `#e8cc5a` — lighter gold for hover states and gradient endpoints
- **Primary Dark**: `#a8891c` — deeper gold for button pressed states and text-on-light
- **Secondary**: `#217443` — the logo's forest green; used for section headings, nav links, icon strokes
- **Accent**: `#62c794` — the logo's mint green; used for checkmarks, badges, subtle success states
- **Background**: `#f5f9f6` — very pale green-white; warm but not cream, gives the off-white sections a branded quality
- **Surface**: `#ffffff` — pure white for cards and form inputs
- **Surface Dark**: `#0f1e17` — deep forest near-black; hero, CTA left panel, FAQ section, footer
- **Text Primary**: `#0d1a12` — near-black with a green undertone; all body text on light sections
- **Text Secondary**: `#4a6155` — muted forest green-grey; descriptions, captions, secondary labels
- **Text Light**: `#FFFFFF` — all text on dark sections
- **Border**: `#d4e6db` — light mint-green border for cards, inputs, dividers on light sections

---

## Typography

- **Display font**: Oswald — weights 400, 600, 700 — condensed authority, matches the heavy 'LOCKSMITH LUZ' wordmark
- **Body font**: Nunito Sans — weights 400, 500, 600, 700 — rounded, readable, approachable companion

**Google Fonts URL**:
`https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,400&display=swap`

- **Headings**: Oswald 700, `tracking-tight` (-0.5px), `leading-none` to `leading-tight`
- **Section pre-labels** (small text above h2): Oswald 400, all-caps, `tracking-widest` (3px), 11–12px, gold (#d6b328) on dark sections / forest green (#217443) on light sections
- **Body**: Nunito Sans 400/500, `leading-relaxed` (1.65), neutral size 16px
- **Labels/buttons**: Oswald 600, uppercase
- **Nav links**: Oswald 500, uppercase, 13px, tracking-wider

---

## Hero — "Fortress Command Hero"

Full-screen (100vh) hero with a background scene photo (locksmith at work, residential exterior) covered by a radial-gradient overlay: `radial-gradient(ellipse at 50% 0%, #1a5e35 0%, #0f1e17 80%)` at `0.88` opacity, layered over a Ken Burns slow zoom animation on the photo (`scale(1.0)→scale(1.08)` over 12s ease-in-out infinite alternate). Content is absolutely centered horizontally with a flex column layout, vertically positioned at 45% of viewport height. At the top of the content stack: a small trust chip badge — `rounded-full`, `border border-[#d6b328]/40`, `bg-[#217443]/20`, Nunito Sans 500 12px text-white, reading "🔒 Licensed & Insured · California" — this fades in on load at 0ms. Headline: 2 lines, Oswald 700, 88px desktop / 48px mobile, all-caps, letter-spacing -1px, line-height 0.95; line 1 in white, line 2 key word (e.g. "TRUSTED LOCKSMITH") uses gradient text: `background: linear-gradient(90deg, #d6b328, #e8cc5a); -webkit-background-clip: text; color: transparent`. Sub-headline: Nunito Sans 400, 18px, `text-white/75`, max-w-xl, centered, 24px margin-top. CTA row: two buttons side-by-side with 16px gap — (1) **Primary gold**: `bg-[#d6b328] text-[#0d1a12]` Oswald 600 uppercase px-8 py-4 rounded-sm tracking-wide with diagonal shimmer on hover; (2) **Outlined phone**: `border-2 border-white/70 text-white` Oswald 600 px-8 py-4 rounded-sm with a phone icon prefix, hover fills to `bg-white/15`. Below buttons (32px gap): inline quick-quote form panel — `backdrop-blur-md bg-white/10 border border-white/15 rounded-lg p-6` — 3 fields horizontally (Name, Phone, Service Type select) plus a gold magnetic submit button ("GET FREE QUOTE"); on mobile the 3 fields stack vertically.

**Mobile**: Image stays as full background; overlay increases to 0.94 opacity; headline drops to 44px 2-line; both CTA buttons stack vertically full-width; form fields stack to single column; badge stays at top.

---

## Navigation — "Sentinel Bar"

**Desktop**: Transparent over the hero — `background: transparent`, no border, no shadow. Logo on far left, 180px wide, full-color (no filter needed against dark hero). Navigation links in Oswald 500 uppercase 13px tracking-wider `text-white` on transparent state / `text-[#0d1a12]` on scrolled state, centered-right of bar, 32px gap. Phone CTA button on far right: **ALWAYS** `bg-[#d6b328] text-[#0d1a12]` Oswald 700 uppercase px-5 py-2.5 rounded-sm — hardcoded gold fill so the button is always visible regardless of whether nav is transparent over the dark hero or solid white on scroll. ⚠️ **CRITICAL FIX**: Do not use `variant` props or conditional classes that might accidentally make the button transparent — use explicit Tailwind `bg-[#d6b328] text-[#0d1a12]` with no overrides. "Services" link has a dropdown menu.

**Scroll behavior**: After scrolling 80px, the nav transitions over 300ms to: `bg-white/96 backdrop-blur-md shadow-sm border-b border-[#d6b328]/30`. Nav links text changes from white to `#0d1a12`. The gold CTA button remains `bg-[#d6b328] text-[#0d1a12]` in both states — it never changes.

**Mobile**: Hamburger icon (`text-white` on transparent, `text-[#0d1a12]` on scrolled) triggers a slide-in drawer from the right side. Drawer: full-height, full-width overlay, `bg-[#0f1e17]`, Oswald 700 28px white links stacked vertically with 24px gap, gold CTA phone button at bottom full-width `bg-[#d6b328] text-[#0d1a12]`. Drawer opens with `translateX(100%)→translateX(0)` over 320ms ease-out; close via X button top-right in `text-white`.

---

## Accent / Signature Elements

1. **Green-Gold Gradient Left Bar**: A 4px-wide × 36px-tall vertical bar using `linear-gradient(to bottom, #217443, #d6b328)` placed 10px to the left of every split-section h2 heading. Created via `::before` pseudo-element or a `<span>` sibling. Appears on Services, About, and ProcessSteps section headings only.

2. **Gold Shimmer Button**: All primary gold CTA buttons (`bg-[#d6b328]`) have an `::after` pseudo-element: `background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)` at -45deg, initially positioned at `translateX(-150%)`. On hover, this sweeps to `translateX(150%)` over 1.2s ease-in — a single-pass diagonal glint. The button also gets `scale(1.01)` over 200ms on hover.

3. **Section Pre-Labels**: Every section h2 is preceded by a small Oswald 400 all-caps 11px tracking-widest label (e.g. "WHY CHOOSE US", "OUR SERVICES") in `#d6b328` on dark sections or `#217443` on light sections. A 2px × 20px horizontal rule in the same color sits to the left of the label text, with 8px gap.

4. **Thin Gold Rule Dividers**: Between select sections (after WhyUs, after StatsBar), a full-width `<hr>` element styled as `border-0 border-t-[1px] border-[#d6b328]/20 mx-auto max-w-5xl` provides visual separation without harsh geometry.

5. **Mint Checkmark Bullets**: In Services split-row checklists, each bullet uses a filled circular checkmark icon in `#62c794` (mint accent) at 18px, with 8px gap to Nunito Sans 400 14px `text-[#4a6155]` text. These stagger-in sequentially with 50ms delay per item when the section enters view.

---

## Section Specifications

### 1. Hero — "Fortress Command Hero"
*(Full description in Hero section above — referenced here)*

**Animation model**: On page load — Ken Burns fires immediately (photo scale 1.0→1.08 over 12s); trust badge chip fades in opacity 0→1 at 0ms over 300ms; headline splits by word (using split-text) with each word entering `translateY(30px)→translateY(0)` opacity 0→1, staggered 80ms per word, spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)`, starting at 200ms after load; subtitle fades in at 600ms over 400ms; CTA buttons fade up at 800ms staggered 100ms apart; form panel fades in at 1100ms.

---

### 2. WhyUs — "Feature Icon Columns"

- **Component pattern**: `icon-feature-grid` — 4-column centered grid. Each column: thin-line centered icon (32–36px, `stroke: #217443` 1.5px), Oswald 600 18px uppercase heading `text-[#0d1a12]`, Nunito Sans 400 14px `text-[#4a6155]` 2–3 line description. Fits this business because it mirrors the screenshot inspiration exactly and efficiently communicates 4 key trust differentiators above the fold.
- **Background**: `#f5f9f6` (brand pale green-white), full-width section. Preceded by a full-width marquee trust strip (see below).
- **Layout**: `max-w-6xl mx-auto py-20 px-6`. 4 columns with `gap-8` on desktop. Section pre-label + h2 centered above the grid with 48px bottom margin.
- **Heading**: Oswald 700 42px `text-[#0d1a12]` centered, preceded by gold pre-label "WHY CHOOSE US".
- **One item anatomy**: `flex flex-col items-center text-center gap-4 p-6`. Icon in a `w-16 h-16 rounded-full bg-[#217443]/08 flex items-center justify-center`. Title: Oswald 600 17px `text-[#0d1a12]`. Description: Nunito Sans 400 14px `text-[#4a6155]` leading-relaxed.
- **Interaction model**: On hover, icon container scales to `scale(1.1)` over 200ms ease-out; icon stroke color transitions from `#217443` to `#d6b328` over 250ms; heading color shifts from `#0d1a12` to `#217443` over 200ms. No card border or shadow — stays flat per client preference.
- **Animation model**: Section heading fades in from `translateY(20px)` opacity 0→1 over 500ms ease-out on scroll entry. 4 icon columns enter simultaneously from `translateY(40px) scale(0.92)` to natural position with spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` over 550ms, staggered 100ms apart (col 1 at 0ms, col 2 at 100ms, col 3 at 200ms, col 4 at 300ms after section enters view).
- **Unique element**: Preceded by a full-width dual-row marquee strip (infinite scroll, opposite directions, 40s loop, pause-on-hover) on `bg-[#0f1e17]` with `text-[#d6b328]/80` Oswald 500 13px uppercase trust labels separated by gold diamond ◆ separators: "LICENSED ◆ INSURED ◆ 24/7 EMERGENCY ◆ FAST RESPONSE ◆ CALIFORNIA CERTIFIED ◆ RESIDENTIAL ◆ COMMERCIAL ◆ AUTOMOTIVE ◆"

**Mobile**: 2×2 grid, each column item centered, same stagger but 2 groups of 2 with 80ms delay.

---

### 3. Services — "Split Editorial Rows"

- **Component pattern**: `split-editorial-rows` — alternating full-width rows: even rows have image left (60%) + text right (40%); odd rows have text left (40%) + image right (60%). No card borders, no shadows per client preference. Fits this business because it matches the screenshot inspiration exactly and allows each service (Residential, Commercial, Automotive, Emergency) to have a dedicated visual showcase.
- **Background**: Alternating `#ffffff` and `#f5f9f6` per row. Section header on `#f5f9f6`.
- **Layout**: Each row is `max-w-7xl mx-auto` with `grid grid-cols-5` (image: `col-span-3`, text: `col-span-2`) or reversed. Row padding: `py-16 px-6`. Gap between image and text: `gap-12`.
- **Heading**: Section h2: Oswald 700 48px `text-[#0d1a12]` left-aligned with gold pre-label "OUR SERVICES" above. Each row sub-heading: Oswald 700 34px `text-[#0d1a12]` with the Green-Gold Gradient Left Bar signature element.
- **One item anatomy**: Image side: `rounded-sm overflow-hidden` image at `aspect-[4/3]`. Text side: `flex flex-col justify-center gap-5`. Row pre-label (Oswald 400 11px gold uppercase), h3 with left gradient bar, Nunito Sans 400 16px `text-[#4a6155]` description paragraph, checklist of 3–4 mint checkmark bullets (Nunito Sans 500 14px), gold outlined "Learn More →" link-button.
- **Interaction model**: On hover over image container: image scales to `scale(1.04)` over 400ms ease-out; a gold `2px` border traces clockwise around the image container using `box-shadow: inset 0 0 0 2px #d6b328` expanding from 0 to full over 350ms; background row color deepens by one tone. Text column heading transitions `text-[#0d1a12]→text-[#217443]` over 200ms.
- **Animation model**: Each row enters on scroll with the image side sliding in from its respective outer edge (`translateX(-40px)` for left-image rows, `translateX(40px)` for right-image rows) with opacity 0→1 over 600ms ease-out. The text side enters simultaneously from the opposite direction `translateX(40px/-40px)`. Checklist bullets stagger in 50ms per item at 200ms after row entry, each from `translateX(-10px)` opacity 0→1 over 300ms ease-out.
- **Unique element**: The alternating directional slide creates kinetic energy as the user scrolls; the image always slides in from the viewport edge (never from center) for maximum visual effect.

**Mobile**: Single column, image on top / text below for every row. Image at `aspect-[16/9]`. Full width, stacked.

---

### 4. StatsBar — "Authority Numbers Strip"

- **Component pattern**: `stat-callout-columns` — 4 stats in a dark full-width strip. Centered alignment. Visual anchor for social proof.
- **Background**: `bg-[#0f1e17]` deep forest near-black with floating gradient blobs: 2 blobs at 6–8% opacity (`radial-gradient(circle, #217443 0%, transparent 65%)` and `radial-gradient(circle, #d6b328 0%, transparent 70%)`) drifting slowly with `float-slow` 9s ease-in-out infinite alternate.
- **Layout**: `max-w-6xl mx-auto py-16 px-6`. 4 equal columns with `divide-x divide-[#d6b328]/20`.
- **Heading**: No section heading — numbers speak for themselves.
- **One item anatomy**: Centered flex column. Number: Oswald 700 80px `text-[#d6b328]` with suffix ("+", "min", "%") in 48px same weight. Label below: Nunito Sans 500 13px `text-white/60` uppercase tracking-wider.
- **Interaction model**: No hover effects on stats themselves — the ambient floating blobs provide enough life.
- **Animation model**: Counter animation fires when section enters viewport (IntersectionObserver threshold 0.5). Each number counts from 0 to its final value over 1800ms with `cubic-bezier(0, 0, 0.2, 1)` easing (ease-out, no overshoot). Numbers are staggered — counter starts 150ms apart per column. Stats: "2,900+ Jobs Completed", "20 min Avg Response", "15+ Years Experience", "98% Satisfaction Rate".
- **Unique element**: Floating blobs behind numbers create a subtle organic depth without overwhelming the data. Thin gold vertical dividers between columns reinforce the structured authority feel.

**Mobile**: 2×2 grid, dividers removed, 16px gap between cells.

---

### 5. ProcessSteps — "Pinned Scroll Reveal"

- **Component pattern**: `pinned-scroll-reveal` — section pins for ~300vh of scroll distance. Left panel (35% width, `bg-[#0f1e17]`) shows a fixed vertical list of step labels; right panel (65% width, `bg-[#f5f9f6]`) displays the active step's full content. As user scrolls through the pinned section, steps activate one by one. Fits this business because it slows the visitor down and communicates the professional process clearly.
- **Background**: Left panel `bg-[#0f1e17]`; right panel `bg-[#f5f9f6]`.
- **Layout**: Full-viewport-width pinned container. Left panel: `w-[35%] min-h-screen sticky top-0 flex flex-col justify-center px-12`. Right panel: `w-[65%] flex flex-col`.
- **Heading**: Section h2 in left panel: Oswald 700 38px `text-white` with gold pre-label "HOW IT WORKS". Step list labels: Oswald 600 16px `text-white/50` inactive / `text-[#d6b328]` active with a `2px` left border in `#d6b328` on the active step.
- **One item anatomy** (right panel active step): Full-height viewport section. Ghost watermark: Oswald 700 140px `text-[#217443]/06` positioned absolute top-right. Step number: Oswald 700 80px `text-[#d6b328]`. Step title: Oswald 700 40px `text-[#0d1a12]`. Body: Nunito Sans 400 17px `text-[#4a6155]` max-w-lg. Steps: 1. Call or Request Online, 2. Technician Dispatched, 3. On-Site Assessment, 4. Job Completed & Secured.
- **Interaction model**: As user scrolls, steps transition with opacity 0.3→1 and `translateY(20px)→0` over 500ms ease-out. The left panel step label animates its left border from `scaleY(0)→scaleY(1)` and text brightens. Inactive steps dim to 30% opacity.
- **Animation model**: Scroll-pinned: the section is pinned (position sticky) and each step activates based on scroll progress through the pinned zone. Steps divide the 300vh equally (~75vh per step). Right panel content changes at each 25% scroll increment with a cross-fade transition.
- **Unique element**: The ghost watermark step number (140px Oswald) rotates subtly from `rotate(-3deg)→rotate(0deg)` as the step activates, adding a kinetic micro-moment.

**Mobile**: Un-pins. Becomes a vertical timeline — numbered steps stacked, each in a card (`bg-white rounded-sm border border-[#d4e6db] p-6`), left gold border `4px` on each card. No pinning on mobile. Steps enter from `translateY(30px)` opacity 0→1 staggered 120ms on scroll.

---

### 6. Testimonials — "Review Card Grid"

- **Component pattern**: `review-card-grid` — 3-column static grid of testimonial cards. All cards visible at once, no carousel, no drag. Fits client preference (screenshot inspiration: no carousels) and allows immediate credibility scanning.
- **Background**: `bg-[#f5f9f6]` pale green-white.
- **Layout**: `max-w-6xl mx-auto py-20 px-6`. `grid grid-cols-3 gap-6` desktop, `grid-cols-1` mobile. Section pre-label + h2 centered above.
- **Heading**: Oswald 700 44px `text-[#0d1a12]` centered, preceded by green pre-label "WHAT CLIENTS SAY".
- **One item anatomy**: Card: `bg-white rounded-sm p-7 border border-[#d4e6db] border-l-4 border-l-[#217443]`. Inside: 5 gold star icons (`text-[#d6b328]` filled SVG, 16px). Review text: italic Nunito Sans 400 15px `text-[#4a6155]` leading-relaxed `"review text..."`. Bottom: reviewer name Oswald 600 14px `text-[#0d1a12]` + role Nunito Sans 400 12px `text-[#4a6155]` + circular avatar image 40px.
- **Interaction model**: On hover: the left border `border-l-[#217443]` transitions to `border-l-[#d6b328]` over 250ms; card lifts `translateY(-4px)` over 200ms ease-out; box-shadow: `0 8px 24px -4px rgba(33,116,67,0.12)` appears over 200ms.
- **Animation model**: Section heading fades in from `translateY(20px)` on scroll entry over 500ms. Cards enter from `translateY(40px)` opacity 0→1 staggered 80ms per card (card 1 at 0ms, 2 at 80ms, 3 at 160ms), ease-out 500ms each.
- **Unique element**: Left border color-shift from forest green to gold on hover creates a subtle but satisfying loyalty signal — "this is a brand you can trust, and you're now connecting with it."

**Mobile**: Single column, cards stacked, same stagger.

---

### 7. FAQ — "Tab Category Switcher"

- **Component pattern**: `tab-categories` — 4 category tabs (Home Lockouts, Emergency, Automotive, Commercial). Active tab has a gold sliding underline indicator. Answers for all questions in the active tab are always visible (no accordion within tab). Fits locksmith business perfectly since customers have very different needs by category.
- **Background**: `bg-[#0f1e17]` deep forest near-black.
- **Layout**: `max-w-5xl mx-auto py-20 px-6`. Tab row centered with `gap-2`. Below tabs: answer grid `grid grid-cols-1 gap-4`.
- **Heading**: Oswald 700 44px `text-white` centered, preceded by gold pre-label "FREQUENTLY ASKED".
- **One item anatomy**: Tab button: Oswald 600 14px uppercase tracking-wide `text-white/50` inactive / `text-white` active. Active tab: gold underline `2px solid #d6b328` that slides to the new position using `left/width` CSS transition 300ms ease. Each Q&A block: Question in Oswald 600 16px `text-white`, Answer in Nunito Sans 400 14px `text-white/70` leading-relaxed.
- **Interaction model**: Clicking a tab: (1) gold underline slides to new tab in 300ms, (2) old tab content fades out opacity 1→0 in 200ms, (3) new tab content fades in opacity 0→1 in 300ms with `translateY(8px)→0`. Tab text lightens/dims at same time.
- **Animation model**: On scroll entry: heading fades in from `translateY(20px)` over 500ms. Tab bar fades in at 200ms delay. FAQ content blocks slide in from `translateY(15px)` opacity 0→1, each staggered 60ms over 400ms ease-out.
- **Unique element**: The gold sliding tab indicator — a single `<div>` that reflows to the active tab's exact position and width using JavaScript, so it smoothly slides across all 4 tabs without a jarring jump.

**Mobile**: Tabs become a scrollable horizontal strip (overflow-x auto, snap-x). Same behavior on tap.

---

### 8. Areas — "Badge Chip Grid"

- **Component pattern**: `badge-chip-grid` — California service area names displayed as rounded-full chip badges in a wrapping flex layout. Each chip: `bg-[#217443]/12 border border-[#217443]/30 text-[#0d1a12]` with the area name in Oswald 500 14px. On hover: `bg-[#217443] text-white` with `box-shadow: 0 0 0 4px rgba(33,116,67,0.25)` glow-ring expansion. Fast, scannable, visually distinctive.
- **Background**: `bg-[#f5f9f6]`.
- **Layout**: `max-w-5xl mx-auto py-16 px-6`. Section pre-label + h2 left-aligned above. `flex flex-wrap gap-3 mt-10`.
- **Heading**: Oswald 700 38px `text-[#0d1a12]` left-aligned, preceded by green pre-label "AREAS WE SERVE".
- **One item anatomy**: `<span>` or `<a>` with `rounded-full px-5 py-2.5 inline-block cursor-pointer transition-all duration-200`.
- **Interaction model**: Hover: background fills `bg-[#217443]`, text turns `text-white`, glow-ring `box-shadow: 0 0 0 4px rgba(33,116,67,0.25)` expands over 200ms ease-out, chip scales to `scale(1.05)`.
- **Animation model**: Section heading enters from `translateY(20px)` over 500ms on scroll. Chips enter with a spring pop — each from `scale(0.7) opacity 0` to `scale(1.0) opacity 1` with `cubic-bezier(0.34, 1.56, 0.64, 1)` 400ms, staggered 40ms per chip (total ~25 chips, 1000ms spread). Chips pop in left-to-right, row by row.
- **Unique element**: The staggered spring-pop entry of ~25 chips creates a playful cascade that momentarily captures attention and communicates geographic coverage breadth at a glance.

**Mobile**: Same wrapping flex, chips slightly smaller (`px-4 py-2`), stagger compressed to 20ms per chip.

---

### 9. CTA — "Split Authority Panel"

- **Component pattern**: `split-authority-panel` — 50/50 split. Left half: deep forest near-black `#0f1e17` with headline, trust bullet points, and phone number. Right half: solid gold `#d6b328` with quote form + magnetic submit button. The juxtaposition of dark trust left / bright action right is maximally effective for conversion.
- **Background**: Left `bg-[#0f1e17]`, Right `bg-[#d6b328]`.
- **Layout**: Full-viewport-width. No max-width constraint — bleeds edge-to-edge. Each half `min-h-[500px] flex flex-col justify-center px-12 lg:px-20`.
- **Heading**: Left panel: Oswald 700 52px `text-white` 2 lines, with gold pre-label "READY TO HELP". Trust bullets: 3 items with mint checkmark icons + Nunito Sans 500 15px `text-white/80`. Phone number: Oswald 700 32px `text-[#d6b328]` with phone icon prefix, on hover underlines. Floating blobs in left panel at 6–8% opacity.
- **Button** (right panel form): Magnetic submit button: `bg-[#0f1e17] text-white` Oswald 700 uppercase, full-width, `py-4 rounded-sm`. Gold shimmer on hover (white glint sweeps from right to left this time). Magnetic pull: on mouse approach within 80px, button translateX/Y toward cursor max 10px.
- **Interaction model**: Left panel phone number: `text-[#d6b328]` on hover, underline sweeps from left `scaleX(0→1)` over 250ms. Right panel form inputs: `bg-[#d6b328] border-[#0f1e17]/20` focus state gets `border-[#0f1e17] ring-2 ring-[#0f1e17]/20`. Submit button: magnetic pull + shimmer sweep on hover (300ms).
- **Animation model**: On scroll entry: left panel content enters `translateX(-30px)→0` opacity 0→1 over 600ms ease-out. Right panel form slides in `translateX(30px)→0` opacity 0→1 simultaneously. Floating blobs on left panel are always animating (infinite loop, not scroll-triggered).
- **Unique element**: The right panel is solid gold (#d6b328) — not a gradient, not an image, but pure brand gold. This makes the CTA section unmissable and completely unexpected after the dark sections above it.

**Mobile**: Stacks vertically — dark panel on top, gold form panel below. Each full-width. Heading drops to 38px. Form fields stack single column.

---

## Footer

- **Background**: `bg-[#0d1a12]` near-black forest
- **Layout**: `max-w-7xl mx-auto py-16 px-6`. 4-column grid: (1) Logo + tagline + social icons; (2) Services links; (3) Quick links; (4) Contact info. Below: copyright bar `border-t border-[#d6b328]/15 mt-12 pt-6` with copyright left + "Built in California" right.
- **Logo treatment**: Full-color logo at 150px width, no filter needed on dark background.
- **Link style**: Nunito Sans 400 14px `text-white/60` hover → `text-[#d6b328]` over 200ms, underline `scaleX(0→1)` sweep.
- **Column headings**: Oswald 600 13px `text-[#d6b328]` uppercase tracking-widest, `border-b border-[#d6b328]/25 pb-3 mb-4`.
- **Contact info**: Phone in Oswald 700 18px `text-white`, address/hours in Nunito Sans 400 13px `text-white/55`.

---

## Global Rules

- **Section padding**: `py-20` (80px) as default; hero is `min-h-screen`; StatsBar uses `py-16`; marquee strip uses `py-3`
- **Max content width**: `max-w-6xl mx-auto` for most sections; `max-w-7xl` for split editorial rows; CTA is full-bleed
- **Border radius default**: `rounded-sm` (2–4px) as the site's primary radius — sharp geometry echoes the shield motif. Chips and badges use `rounded-full`. Form inputs use `rounded-sm`.
- **Image treatment**: All images use `object-cover`, `overflow-hidden`, `rounded-sm`. No global filter. Hero image has the gradient overlay component.
- **Animation philosophy**: Moderate and structured — every animation serves readability or signals interactivity. Motion language is "institutional authority with warmth": spring physics for micro-interactions (icon hovers, badge pops), ease-out curves for content reveals, never rapid-fire or distracting. Total animation duration never exceeds 600ms for any single element. Parallax is subtle (0.85× speed on service images only). Rich but never flashy — the brand is trusted, not trendy.
- **Text density**: Balanced — not minimal, not dense. Each section has enough copy to communicate authority without overwhelming. Cards have 2–4 lines of body text. Split rows have 2–3 sentence descriptions + 3–4 checklist items.
- **No carousels, no bento grids, no heavy card shadows** — per client's screenshot inspiration preference.
