# Power Safety V2 -- QA Report

**Date:** 2026-03-21
**Reviewer:** Mei Ling (QA) via Bishop
**Site:** powersafety-v2 (localhost:3105)
**Build status:** Clean (15/15 static pages, 0 build errors)
**Console errors:** None

## Executive Summary

**SCORE: 82/100 -- CONDITIONAL PASS**

The site is structurally solid. Build completes clean, no console errors, good accessibility tree, proper SEO metadata, structured data, and honeypot spam protection on all forms. The 3D road hero is a standout piece. However, there are several issues that need to be addressed before shipping -- most critically the Unsplash dependency on the services page and the double-dash (--) problem throughout the copy.

---

## Critical Issues (Must Fix Before Shipping)

### C1. Unsplash URLs on Services Detail Page
**File:** `app/services/page.tsx:23-34, 43`
**Severity:** CRITICAL

Four Unsplash URLs are used for service detail images on the /services page. The taste-skill explicitly bans Unsplash links ("NO Broken Unsplash Links"). These are external dependencies that can break at any time (rate limits, hotlink blocking, URL changes). The homepage services overview already uses local images (`/images/services/traffic-plan.jpg`, `/images/services/flagging-crew.jpg`, `/images/services/event-management.jpg`), but the detail page uses Unsplash instead of those same local files.

The hero image on /services also uses an Unsplash URL:
```
src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
```

**Fix:** Replace all four Unsplash URLs with the corresponding local images that already exist in `/public/images/services/`. The hero should use `/images/hero/hero-bg.jpg` or `/images/services/services-hero.jpg`. Then remove the `unsplash.com` entry from `next.config.ts` remotePatterns since it will no longer be needed.

### C2. Double Dashes (--) Throughout Copy
**File:** `lib/forms.config.ts:91, 94, 153, 195, 199, 236`
**File:** `components/FamilySection.tsx:28, 35`
**Severity:** CRITICAL (Aaron preference violation)

Aaron's hard rule: NO em dashes in copy or deliverables. The codebase uses double hyphens (--) as a substitute, which renders as literal "--" in the browser. Found in 8+ locations:

- "More Than a Company -- We're Family" (forms.config.ts:195, FamilySection.tsx:28)
- "engineers -- Professional Engineers" (forms.config.ts:91)
- "permit service -- we handle the paperwork" (forms.config.ts:94)
- "PG&E, SMUD, municipal water -- we support utility" (forms.config.ts:153)
- "family -- tight-knit" (forms.config.ts:199, FamilySection.tsx:35)
- "Stockton to Redding -- Power Safety" (forms.config.ts:236)

**Fix:** Replace all "--" with periods, commas, or restructured sentences. Example: "More Than a Company. We're Family." or "More Than a Company, We're Family."

### C3. SmoothScroll requestAnimationFrame Memory Leak
**File:** `components/ui/SmoothScroll.tsx:13-15`
**Severity:** HIGH

The `requestAnimationFrame` loop never cancels the animation frame ID on cleanup. The `lenis.destroy()` call handles Lenis cleanup, but the rAF loop continues indefinitely because the frame ID is never captured or cancelled.

```typescript
// Current (leaky):
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Fixed:
let frameId: number;
function raf(time: number) {
  lenis.raf(time);
  frameId = requestAnimationFrame(raf);
}
frameId = requestAnimationFrame(raf);
return () => {
  cancelAnimationFrame(frameId);
  lenis.destroy();
};
```

### C4. API Routes: No Input Validation
**Files:** `app/api/contact/route.ts`, `app/api/quote/route.ts`, `app/api/careers/route.ts`
**Severity:** HIGH

All three API routes accept any JSON body and forward it directly to GHL webhooks with zero validation. No field length limits, no email format check, no phone format check. If `data.website` is falsy (empty string is falsy -- correct for honeypot), the entire raw body is forwarded. While `{ ...data, website: undefined }` removes the honeypot, it doesn't prevent injection of arbitrary additional fields.

**Fix:** Add basic schema validation -- at minimum, required field checks and string length limits. Consider using Zod for type-safe validation.

### C5. Global Wildcard Transition on All Elements
**File:** `app/globals.css:36`
**Severity:** HIGH (Performance)

```css
* {
  transition: background-color 0.3s ease, color 0.2s ease, border-color 0.3s ease;
}
```

Applying transitions to every single DOM element (including SVGs, pseudo-elements, and the Road3D's 50+ child elements) forces the browser to track transition state for all of them. This impacts paint performance, especially on mobile. The intent is clearly for dark mode transitions, but it should be scoped to specific elements.

**Fix:** Remove the `*` selector. Apply transitions only to elements that actually change on theme toggle (body, cards, headers, backgrounds).

---

## Design Quality Findings (Taste-Skill Audit)

### D1. Services Overview: 3-Column Equal Card Grid
**File:** `components/ServicesOverview.tsx:32`
**Status:** FLAGGED (taste-skill violation)

`grid grid-cols-1 md:grid-cols-3 gap-6` produces the classic "3 equal cards horizontally" layout that the taste-skill explicitly bans. However, the cards include images and have visual depth, which partially mitigates the generic feel. Consider a 2-column zig-zag or asymmetric layout if redesigning.

### D2. Values Section: 3-Column Icon-Card Grid with Center Text
**File:** `components/Values.tsx:19, 29`
**Status:** FLAGGED (taste-skill violation)

`grid grid-cols-1 md:grid-cols-3 gap-8` with centered icon + centered text inside each card. This is the textbook "3-column icon-circle grid" AI pattern. The rounded-2xl icons with centered headings and centered descriptions is the most common AI layout signature.

### D3. Certifications: 5-Column Icon Grid
**File:** `components/Certifications.tsx:18`
**Status:** MINOR

5 identical rounded-full icon containers in a grid. While the data naturally fits this layout, it reads as generated.

### D4. Industries: 4-Column Grid with Centered Text
**File:** `components/Industries.tsx:34, 63`
**Status:** FLAGGED

`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6` with `text-center` on each card. The pattern of image-on-top + centered-icon-overlay + centered-title + centered-description is a common AI pattern.

### D5. Layout Diversity -- GOOD
**Status:** PASS

The homepage demonstrates real layout diversity:
- Hero: left-aligned split with 3D visual (not centered-text-over-image)
- TrustBarMarquee: horizontal infinite scroll
- ServicesOverview: 3-col cards with images (flagged above but has images)
- FamilySection: asymmetric 2-column split
- Industries: 4-col cards
- WhyChooseUs: asymmetric 5-col grid (2+3 split, numbered list)
- CTABanner: centered CTA (appropriate for CTA sections)

The WhyChooseUs section is well-executed with the 2/3 split and numbered list pattern. The FamilySection with floating credential badge is a nice touch.

### D6. Color Usage -- PASS
Orange (#f26725) as accent, blue (#2ea3f2) as primary. No neon glows, no purple AI palette. The `.cta-glow` box-shadow on orange CTAs is borderline but acceptable for this industrial brand.

### D7. Typography -- PARTIAL PASS
**File:** `lib/fonts.ts:10`

Using Inter as body font. The taste-skill bans Inter, but this is a body font (not heading), and the heading font is Barlow Condensed which is appropriate for an industrial/construction brand. Inter as body is acceptable for this use case. Not flagging as a violation since the taste-skill ban targets Inter as a display/premium font choice.

### D8. Hero Section -- PASS
Left-aligned content, 3D road visual as background. Not the banned "centered text over dark image" pattern. The Road3D component is genuinely creative and industry-relevant.

---

## Copy Quality Findings

### CP1. Double Dashes Rendering as "--"
See C2 above. These display as literal double hyphens in the browser, not proper punctuation. They need to be removed entirely per Aaron's no-em-dash rule.

### CP2. Placeholder Names in Forms
**File:** `components/forms/ContactForm.tsx:79-80`, `components/forms/QuoteForm.tsx:92-93`, `components/forms/CareersForm.tsx:96-97`
**Status:** MINOR

All forms use "John" / "Smith" as placeholder names. The taste-skill bans generic names ("John Doe" etc.). Consider more creative, realistic placeholder names or industry-relevant examples. However, since these are form placeholders (not display data), this is low priority.

### CP3. AI-Sounding Language Check -- PASS
No instances of "elevate," "seamless," "unleash," "next-gen," or similar AI cliches found in the copy. The language is direct and industry-specific. Copy feels authentic to the traffic control industry.

### CP4. No Emojis -- PASS
Zero emojis found anywhere in the codebase. Clean.

---

## Performance Notes

### P1. Build Size
First Load JS shared: 102 kB (acceptable).
Homepage: 160 kB First Load JS. Largest page is careers at 161 kB. All within reasonable bounds.

### P2. All Images Use `unoptimized`
Every `<Image>` tag in the codebase uses `unoptimized`. This bypasses Next.js image optimization entirely -- no WebP conversion, no srcset generation, no lazy loading optimization. This was likely set to avoid build-time image processing, but it means users download full-resolution JPGs/PNGs regardless of viewport.

### P3. Server Performance
TTFB: 3ms, DOM Ready: 22ms, Full Load: 64ms (local). Excellent.

### P4. Road3D Animation Performance
`components/Road3D.tsx` renders 20+ star elements with CSS animations, 6 traffic cones with framer-motion animations, 2 safety barriers, and animated road dashes. All CSS animations use transform/opacity (compliant with taste-skill performance guardrails). The component is properly isolated as a client component.

### P5. Marquee Performance
`components/TrustBarMarquee.tsx:29-73` renders 4 copies of the credential list for seamless looping. This is the standard approach and performs fine.

---

## Accessibility Notes

### A1. Accessibility Tree -- PASS
Proper heading hierarchy (h1 on homepage, h2 for sections). Navigation is properly structured. Links have descriptive text. Phone link has aria-label. Theme toggle has aria-label. Mobile menu toggle has dynamic aria-label.

### A2. Focus States -- PASS
**File:** `app/globals.css:58-66`
Custom focus-visible styles with 2px solid accent outline. Properly implemented.

### A3. Honeypot Fields -- PASS
All three forms use `aria-hidden="true"` and `tabIndex={-1}` on honeypot fields. Screen readers and keyboard users will not interact with them.

### A4. Decorative Hero Image -- PASS
`components/Hero.tsx:18`: Hero background image has `alt=""` which is correct for decorative images.

### A5. Form Labels -- PASS
All form fields have associated labels via `htmlFor`/`id` pairs in `FormField.tsx`.

---

## SEO Notes

### S1. Structured Data -- PASS
`components/JsonLd.tsx` renders valid JSON-LD with ProfessionalService schema, including address, geo coordinates, credentials, and memberships.

### S2. Metadata -- PASS
Every page has unique title and description via `formsConfig.seo`. OpenGraph tags on homepage.

### S3. Sitemap and Robots -- PASS
Both properly configured. Sitemap includes all 7 pages with appropriate priorities and frequencies.

### S4. URL in Config Points to powersafety.com
**File:** `lib/forms.config.ts:10`
`url: "https://powersafety.com"` -- need to confirm this domain is active and pointing to this deployment. The Vercel deployment is at `powersafety-v2.vercel.app`. If the custom domain isn't configured, OG tags and sitemap will have incorrect URLs.

---

## Recommendations

1. **MUST FIX (C1):** Replace all Unsplash URLs in `app/services/page.tsx` with local images. The local images already exist.
2. **MUST FIX (C2):** Remove all "--" from copy across `forms.config.ts` and `FamilySection.tsx`. Replace with periods or commas.
3. **SHOULD FIX (C3):** Fix the rAF memory leak in `SmoothScroll.tsx`.
4. **SHOULD FIX (C4):** Add basic input validation to API routes.
5. **SHOULD FIX (C5):** Scope the `*` transition rule to specific selectors.
6. **NICE TO HAVE (D1/D2):** Rework the Values section to avoid the 3-column centered-icon pattern if doing a design pass.
7. **NICE TO HAVE (P2):** Remove `unoptimized` from Image components and let Next.js optimize images for production.
8. **VERIFY (S4):** Confirm powersafety.com domain is configured and pointing to the Vercel deployment.
