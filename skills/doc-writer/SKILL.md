# Documentation Writer

Draft or improve developer-facing documentation from real source.

## Instructions

1. **Read the source first.** Never document behavior you have not confirmed in the code. If something is ambiguous, mark it `TODO: verify` rather than guessing.
2. **Lead with the task, not the product.** The first paragraph answers "what does this do and who is it for".
3. **Show a runnable quickstart** before deep details.
4. **Prefer scannable structure:** short headings, tables for options, code blocks that actually run.
5. **Document errors and edge cases**, including what the user sees when things fail.
6. **Cut filler.** Remove "simple", "easy", "just", "powerful", "seamless" and similar claims.

## README template

```markdown
# <name>

<one-sentence purpose>

## Install
## Quickstart
## Usage
## Options        (table)
## Errors         (what can go wrong)
## License
```

## Output rules

- Use the imperative voice for instructions.
- One idea per sentence.
- Every code block must be copy-pasteable.
- Flag any claim you could not verify from the source.
