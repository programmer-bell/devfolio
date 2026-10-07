Create a production Dockerfile for this Astro application.

First determine whether the Astro output is:
- static
- server
- hybrid

Use a minimal production image appropriate for that output.

Apply:
- multi-stage builds where useful
- dependency caching
- non-root execution where practical
- production-only dependencies
- .dockerignore
- environment-variable safety

Do not include development tooling in the final image unless required.
