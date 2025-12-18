# Implementation Plan: Modern Podcast Website

**Branch**: `001-modern-podcast` | **Date**: 2025-12-17 | **Spec**: [spec.md](../spec.md)
**Input**: Feature specification from `/specs/001-modern-podcast/spec.md`

## Summary

Build a modern, responsive podcast website using Next.js with a static site configuration. The site will feature a landing page with a featured episode, an episode catalog, about page, and FAQ page. Data will be mocked in-memory (no database). Styling will use Vanilla CSS/CSS Modules to achieve a sleek, premium look.

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 20+
**Framework**: Next.js 15+ (App Router)
**Primary Dependencies**: React 19, Lucide React (icons)
**Styling**: Vanilla CSS (CSS Variables + CSS Modules) for premium, custom design.
**Storage**: None (Mock data embedded in `src/data/episodes.ts`).
**Deployment**: Static Export (`output: 'export'` in `next.config.js`).
**Project Type**: Web Application
**Performance Goals**: 100/100 Lighthouse Performance score.
**Constraints**: No external API, strictly responsive, "sleek" aesthetic without heavy frameworks.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Content-First/SEO**: Next.js App Router with proper metadata for SEO.
- [x] **Sleek & Modern Design**: Custom CSS implementation focusing on typography and spacing.
- [x] **Performance**: Static generation ensures optimal TTFB and FCP.
- [x] **Accessibility**: Semantic HTML and ARIA labels where necessary.
- [x] **Data-Driven**: Mock data structure defined in `data-model.md`.
- [x] **Scope Discipline**: Implementation limited to the 4 requested pages.
- [x] **Minimal Dependencies**: Using standard Next.js stack, avoiding heavy UI libraries like MUI/Bootstrap.

## Project Structure

### Documentation (this feature)

```text
specs/001-modern-podcast/
├── plan.md              # This file
├── data-model.md        # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code

```text
src/
├── app/
│   ├── layout.tsx       # Root layout (Navbar, Footer, Font setup)
│   ├── page.tsx         # Landing Page (Featured Episode)
│   ├── about/
│   │   └── page.tsx     # About Page
│   ├── episodes/
│   │   └── page.tsx     # Full Episode List
│   └── faq/
│       └── page.tsx     # FAQ Page
├── components/
│   ├── ui/              # Reusable atoms (Button, Card)
│   ├── layout/          # Navbar, Footer
│   └── episodes/        # EpisodeCard, FeaturedEpisode
├── data/
│   └── episodes.ts      # Mock Data Array
├── lib/
│   └── utils.ts         # Formatting helpers (date, duration)
└── types/
    └── index.ts         # Episode Interface
```

**Structure Decision**: Standard Next.js App Router structure. `components` folder split by domain for clarity. `data` folder for the mock source.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| (None)    |            |                                     |
