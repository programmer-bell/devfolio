# Frontend Engineering Brief

## 1. Project and purpose
- Project:
- Target users:
- Main user problems:
- Primary user journeys:

## 2. Technology and constraints
- Framework and rendering environment:
- Existing repository and conventions:
- Styling and component libraries:
- Backend/API:
- Deployment target:
- Dependency constraints:

Respect the existing stack. Do not introduce unnecessary frameworks, libraries, or architecture.

## 3. UI and design requirements
- Visual direction and reference designs:
- Layout, typography, spacing, colors, and hierarchy:
- Mobile, tablet, and desktop behavior:
- Shared components and design tokens:
- Accessibility and keyboard requirements:

Avoid generic template-like UI. Use consistent design decisions and meaningful visual hierarchy.

## 4. Behavior and data
- Routes and navigation:
- Component interactions:
- State ownership and URL synchronization:
- API contracts and authentication:
- Validation and business-rule boundaries:
- Loading, empty, error, success, and unauthorized states:
- Pagination, concurrency, retries, and duplicate submissions:

Never invent API endpoints or move trusted business logic into the browser.

## 5. Architecture and rendering
Choose SSR, SSG, CSR, or a hybrid approach based on each route's requirements. Define component boundaries, data flow, server/client boundaries, caching, and environment-variable handling.

## 6. Production requirements
- Secure handling of untrusted content and credentials
- Responsive behavior and accessibility
- Minimal necessary client JavaScript and dependencies
- Appropriate images, fonts, caching, and loading performance
- Reproducible production build and correct deployment configuration
- Appropriate tests and failure recovery

## 7. Execution and review
First inspect the repository and summarize the proposed approach, assumptions, and risks. Then implement incrementally.

Run the available build, lint, type-check, and relevant tests. Validate critical user journeys and responsive layouts where tooling permits.

Report:
1. What was implemented
2. Architectural and dependency decisions
3. Tests and build results
4. Known limitations and unresolved issues
5. Any manual verification still required

Do not claim a test passed unless it actually ran successfully. Do not claim production readiness without evidence.
