# Example

**Request:** "Fix the off-by-one in `paginate()`."

**Over-built response:**
> I refactored `paginate()` into a generic `Paginator` class with configurable page-size strategies, added a plugin hook for custom slicing, wrote five new helpers, and fixed the bug.

**Lean response:**
> Changed the loop bound in `paginate()` from `<=` to `<` so the last item isn't dropped. One-line fix in `src/paginate.ts:31`; no other behavior touched.
