# Commit Message Writer

Turn a staged diff into a Conventional Commits message.

## Instructions

1. Inspect `git diff --staged`. If nothing is staged, say so and stop.
2. Choose **one** type: `feat`, `fix`, `refactor`, `perf`, `docs`, `test`, `build`, `ci`, `chore`.
3. Write the subject in the imperative mood, lowercase, no trailing period, ≤ 72 characters.
4. Add a scope in parentheses when the change is localized: `fix(auth): reject expired tokens`.
5. Add a body only when the *why* is not obvious from the subject. Wrap at 72 columns. Explain motivation and trade-offs, not a restatement of the diff.
6. Add `BREAKING CHANGE:` footer when applicable.
7. Never mention the tool, the assistant, or "as requested".

## Output format

```text
<type>(<scope>): <subject>

<body — optional>

<footer — optional>
```

## Examples

```text
feat(search): debounce catalog filtering by 200ms

Filtering ran on every keystroke and dropped frames on large indexes.
Debouncing keeps typing responsive without changing results.
```

```text
fix(api): reject tokens whose exp is in the past
```
