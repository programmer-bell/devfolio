Identify which parts of the page actually require client-side JavaScript.

Keep static content server-rendered.

Use Astro islands only for genuinely interactive components.

For each hydrated component, explain:
- why JavaScript is required
- what state it owns
- when it should hydrate
- whether hydration can be delayed

Minimize shipped JavaScript without sacrificing UX.
