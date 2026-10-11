# Example

**Input:**

```sql
SELECT * FROM orders WHERE DATE(created_at) = '2026-01-01';
```

**Expected output (excerpt):**

```text
## Diagnosis
Wrapping created_at in DATE() makes the predicate non-sargable: the
index on created_at cannot be used, so the engine scans every row.

## Rewritten query
SELECT id, customer_id, total, created_at
FROM orders
WHERE created_at >= '2026-01-01'
  AND created_at <  '2026-01-02';

## Indexes
CREATE INDEX idx_orders_created_at ON orders (created_at);

## Trade-offs
Half-open range avoids timezone ambiguity at midnight. Replacing
SELECT * narrowed the projection; add columns back only if needed.
```
