Review all user-controlled input and determine where validation, normalization, sanitization and output encoding are required.

Prevent:
- XSS
- unsafe HTML rendering
- injection through URLs
- unsafe redirects
- malicious file names
- dangerous user-provided attributes

Do not blindly sanitize everything.

Prefer safe rendering APIs and framework defaults.

Never trust frontend validation as a security boundary; the backend remains authoritative.
