Perform a frontend security audit.

Check:
- XSS
- unsafe HTML
- token/session handling
- exposed secrets
- environment variables
- CORS assumptions
- CSRF implications
- unsafe redirects
- URL parameters
- third-party scripts
- dependency risks
- source-map exposure
- authentication/authorization assumptions

Separate actual vulnerabilities from backend responsibilities.

Report findings as:
CRITICAL / HIGH / MEDIUM / LOW / INFORMATIONAL

Do not claim the frontend is secure merely because validation exists.
