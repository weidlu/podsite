# Tasks: Modern Podcast Website

**Branch**: `001-modern-podcast`
**Spec**: [spec.md](../spec.md)
**Plan**: [plan.md](../plan.md)

## Phase 1: Setup & Configuration
*Goal: Initialize the project environment and base styles.*

- [x] T001 Initialize Next.js App Router project with TypeScript (if not exists) `package.json`
- [x] T002 Configure `next.config.js` for Static Export (`output: 'export'`) `next.config.js`
- [ ] T003 Set up global CSS variables for colors/typography and clean default styles `src/app/globals.css`
- [ ] T004 Create utility helper for class names (cn) `src/lib/utils.ts`

## Phase 2: Core Infrastructure
*Goal: Implement data models and shared layout components.*

- [ ] T005 Create Episode interface definition `src/types/index.ts`
- [ ] T006 Implement mock data repository with 20 items `src/data/episodes.ts`
- [ ] T007 Implement responsive Navbar component `src/components/layout/Navbar.tsx`
- [ ] T008 Implement Footer component `src/components/layout/Footer.tsx`
- [ ] T009 [P] Update Root Layout to include Navbar and Footer `src/app/layout.tsx`

## Phase 3: User Story 1 - Landing Page
*Goal: Showcase featured episode and provide a strong first impression.*

- [ ] T010 [US1] Create FeaturedEpisode component with hero styling `src/components/episodes/FeaturedEpisode.tsx`
- [ ] T011 [US1] Create reusable EpisodeCard component `src/components/episodes/EpisodeCard.tsx`
- [ ] T012 [US1] Implement Landing Page with featured section and recent episodes preview `src/app/page.tsx`

## Phase 4: User Story 2 - Episode Catalog
*Goal: Allow users to browse the full list of episodes.*

- [ ] T013 [US2] Implement Episodes Page with grid layout rendering all 20 episodes `src/app/episodes/page.tsx`

## Phase 5: User Story 3 - About Page
*Goal: Provide context about the podcast.*

- [ ] T014 [P] [US3] Implement About Page with static content and team visuals `src/app/about/page.tsx`

## Phase 6: User Story 4 - FAQ Page
*Goal: Answer common user questions.*

- [ ] T015 [P] [US4] Implement FAQ Page with accordion or list layout `src/app/faq/page.tsx`

## Phase 7: Polish & Validation
*Goal: Ensure quality, accessibility, and responsiveness.*

- [ ] T016 Verify responsiveness on mobile, tablet, and desktop `src/app/globals.css`
- [ ] T017 Audit accessibility (ARIA labels, contrast) `src/app/layout.tsx`
- [ ] T018 Verify SEO metadata (title, description) for all pages `src/app/layout.tsx`

## Dependencies

- Phase 2 depends on Phase 1
- Phase 3, 4, 5, 6 depend on Phase 2
- Phase 7 depends on all previous phases

## Implementation Notes
- Use CSS Modules (`*.module.css`) for component-specific styles where complex.
- Ensure images use `next/image` even for placeholders (use a solid color or pattern if no assets).
- Use `lucide-react` for icons (menu, social, play buttons).
