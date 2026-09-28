# Implementation Plan - NeuroSpark Landing Page Clone

## Summary
Replicate the complete structure, aesthetic, typography, and interactive behavior of the reference landing page (`https://global-academia.com/mental/documentaryba/`) as a lightweight, lightning-fast, fully responsive static web application served via Vite/Node.js on port 3000.

## Deliverables & Architecture
- Clean HTML5 + Modern CSS + Vanilla TypeScript / JavaScript implementation bundled with Vite.
- Static architecture with 0ms first-contentful paint, zero external trackers, zero third-party tracking pixels, and completely self-contained local assets (`media-logos.png`, `product-mockup.png`, `video-poster.jpg`, `video-cover.jpg`).
- Dedicated project logo for branding compliance (`app.config.ts` and favicon).
- Accessible interactive components:
  1. Header/Hero VSL presentation with accurate headline typography and colored emphasis.
  2. Vertical Video Container with interactive sound/play trigger, realistic loading bar, and video playback support.
  3. Media Trust Bar featuring Stanford, NYT, HuffPost, BBC, etc.
  4. Offer Box with primary CTA button "ACCESS NOW!", product mockup showcase, and benefit checklist.
  5. Evergreen Countdown Timer showing Hours, Minutes, Seconds.
  6. FAQ Accordion with accessible ARIA tags and smooth toggle interaction.
  7. 60-Day Money Back Guarantee trust box with gold emblem.
  8. Scientific References section listing all 7 clinical studies with clean external links.
  9. Legal Footer with FTC/Meta disclaimers, Hotmart reseller attribution, and Copyright 2026.
  10. Standard `/manus-routes.json` route manifest.

## Verification
- HTTP 200 response on `http://127.0.0.1:3000/` and `http://127.0.0.1:3000/manus-routes.json`.
- Visual alignment validation using `webdev.take_screenshot` for both desktop (1280x720) and mobile (375x812) viewports.
- Interaction checks for accordion expand/collapse, audio overlay dismiss, and countdown decrement.
