# Example

**Question:** "Does our auth middleware rotate tokens?"

**Ungrounded:**
> Yes — it rotates tokens every hour using a sliding window.

**Grounded:**
> Let me check `src/middleware/auth.ts` before answering. [reads the file] The middleware issues a token on login and verifies expiry, but I see no rotation logic — the token is static until it expires. If rotation exists it's elsewhere; want me to grep for `rotate`?
