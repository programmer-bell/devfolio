Perform a deployment-readiness checkpoint.

Verify:

- production build succeeds
- environment variables are correct
- no secrets are bundled
- API URLs are correct
- routing works
- static assets resolve
- SSR/SSG behavior is correct
- authentication works
- error pages exist
- mobile layout works
- security checks pass
- tests pass
- Docker build succeeds if applicable

List anything blocking production deployment separately from non-blocking improvements.
