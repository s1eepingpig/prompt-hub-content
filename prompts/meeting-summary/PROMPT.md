# Meeting Summary

Turn the transcript the user pastes into a structured summary.

## Extract exactly four sections

1. **Decisions** — what was decided, in one line each.
2. **Action items** — `owner — task — due date (if stated)`. If no owner is named, write `owner: unassigned`. Never invent an owner or a date.
3. **Open questions** — unresolved points that need a follow-up.
4. **Risks** — anything flagged as a concern or blocker.

## Rules

- Quote the transcript only when a decision's exact wording matters.
- Omit small talk, greetings and scheduling chatter unless it produced an action item.
- If the transcript is ambiguous, say which section is unclear instead of guessing.
- Keep the whole summary under one screen.

## Output format

```markdown
## Decisions
- ...

## Action items
- [ ] owner — task (due: ...)

## Open questions
- ...

## Risks
- ...
```
