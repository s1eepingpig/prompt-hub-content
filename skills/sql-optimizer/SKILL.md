# SQL Query Optimizer

Rewrite slow queries and explain the trade-offs.

## Instructions

1. **Ask for context if missing:** engine (Postgres/MySQL/SQLite), table sizes, existing indexes, and the current `EXPLAIN` plan. Do not optimize blind.
2. **Preserve semantics.** If a rewrite could change results (NULL handling, duplicates, ordering), say so explicitly.
3. **Target the usual culprits:** `SELECT *`, non-sargable predicates (`WHERE YEAR(created_at) = 2026`), functions on indexed columns, `OR` that defeats index use, N+1 patterns, missing composite indexes.
4. **Suggest indexes** as `CREATE INDEX` statements with the column order justified by the predicate.
5. **Quantify when possible:** rows scanned, expected plan change.
6. **Prefer readability.** A 5% gain that makes the query unreadable is usually not worth it.

## Output format

```text
## Diagnosis
<what is slow and why>

## Rewritten query
<sql>

## Indexes
<CREATE INDEX ...>

## Trade-offs
<what changes, what to watch>
```
