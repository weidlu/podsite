<!--
  SYNC IMPACT REPORT
  - Version change: 1.1.0 -> 1.2.0
  - Modified principles: Added "Node Version Management"
  - Added sections: None
  - Removed sections: None
-->
# Podsite Constitution

<!--
  This document outlines the core principles and standards for the Podsite project.
  All development and contributions must adhere to this constitution.
-->

## Core Principles

### I. Content-First and SEO-Optimized
The website's design, architecture, and user experience must prioritize the clear and effective presentation of podcast content. Search Engine Optimization (SEO) is a primary concern, ensuring all content is easily discoverable and indexable by search engines.

### II. Sleek, Modern, and Responsive Design
The user interface must be visually appealing, modern, and "sleek" as per the initial vision. It must be fully responsive, providing an optimal and consistent user experience across all devices, including desktops, tablets, and mobile phones.

### III. Performance by Default
Website performance is a critical feature. The site must be architected for speed, ensuring fast page load times, optimized asset delivery, and a smooth user experience. Performance metrics will be tracked throughout development.

### IV. Accessibility for All
The website must be accessible to everyone, including people with disabilities. Development must follow the Web Content Accessibility Guidelines (WCAG) 2.1 AA as a minimum standard. This includes providing text alternatives for non-text content, ensuring full keyboard navigability, and maintaining sufficient color contrast.

### V. Data-Driven with Mocked Content
The initial development will be driven by a well-defined mocked data structure representing the podcast episodes and other site content. The site will launch with 20 mocked episodes. This approach allows for frontend development to proceed independently of the final content source.

### VI. Scope Discipline
Modifications must be strictly limited to the scope of the current iteration or task. Do not modify code unrelated to the immediate objective ("scope creep"). If an issue is found outside the current scope, document it or create a new task rather than fixing it invisibly during an unrelated change.

### VII. Minimal Dependencies
New dependencies should be introduced only after careful consideration. We adhere to the "minimal dependency" principle: prefer standard library or lightweight, well-maintained solutions over heavy or redundant packages. Ensure every added dependency is necessary and justified.

### VIII. Node Version Management
The project MUST use Node.js 21.x managed via nvm (Node Version Manager). All developers must ensure they are using the correct Node version before running install or development commands. This ensures consistency across development environments.

## Development Workflow

Development will follow a Git feature-branch workflow. Every new feature or significant change will begin with a clear specification document (`spec.md`) before implementation begins. Code will be merged into the main branch only after review and approval.

## Quality Gates

All contributions are subject to quality gates before being accepted into the main branch.
- **Code Review**: All pull requests must be reviewed and approved by at least one other team member.
- **Automated Testing**: All existing and new automated tests must pass.
- **Lighthouse Score**: Every page must achieve a score of 90 or higher in all Google Lighthouse categories (Performance, Accessibility, Best Practices, SEO).

## Governance

This constitution is the guiding document for the project. Any proposed amendments must be documented, reviewed by the team, and recorded with an updated version number. All project decisions and technical choices must align with these principles.

**Version**: 1.2.0 | **Ratified**: 2025-12-17 | **Last Amended**: 2025-12-17
