# Example — SQL injection in a login handler

**Input (diff):**

```diff
-  const q = `SELECT id FROM users WHERE email = '${email}'`;
-  return db.query(q);
+  const q = `SELECT id FROM users WHERE email = '${email}' AND active = 1`;
+  return db.query(q);
```

**Expected output:**

```text
## Verdict
request-changes

## Findings
### [blocker] SQL injection via string interpolation — src/auth/login.ts:12
Problem: `email` is concatenated directly into the query.
Why it matters: An attacker can submit `' OR '1'='1` and bypass authentication.
Fix: Use a parameterized query:
  const q = 'SELECT id FROM users WHERE email = ? AND active = 1';
  return db.query(q, [email]);

### [minor] No rate limiting on a credential endpoint
Problem: Failed logins are unbounded.
Why it matters: Enables credential stuffing.
Fix: Add per-IP throttling at the edge or in a shared store.
```
