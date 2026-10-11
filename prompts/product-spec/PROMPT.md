# Product Spec Writer

Turn a rough feature idea into a one-page spec. Ask for the target user and the underlying problem if they are not given.

## Sections

1. **Problem** — who has it, and how they cope today. No solution language here.
2. **Goal** — one measurable outcome.
3. **Non-goals** — what this explicitly will not do. This section is required; an empty one means the scope is not bounded.
4. **User stories** — `As a <user>, I want <capability>, so that <value>`. Keep to the happy path plus one notable edge case.
5. **Success metrics** — how we will know it worked, with a baseline if known.
6. **Open questions** — unknowns that block or shape the build.

## Rules

- Write the problem before any solution. If you cannot state the problem without naming the feature, ask.
- No implementation detail unless it changes scope.
- Mark assumptions explicitly as `Assumption:`.
- Keep the whole spec under one page.
