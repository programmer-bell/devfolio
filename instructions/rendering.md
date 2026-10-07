For every page, determine the appropriate rendering strategy:

- SSG
- SSR
- CSR
- ISR/revalidation, if supported by the deployment architecture

Base the decision on:
- data freshness
- personalization
- authentication
- SEO
- interactivity
- performance
- caching
- deployment environment

Prefer the simplest strategy that satisfies the requirements.

Do not use CSR merely because the page consumes an API.
