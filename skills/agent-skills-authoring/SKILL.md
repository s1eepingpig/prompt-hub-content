# Authoring Agent Skills

Create or review a `SKILL.md` that Claude can discover and use. Load this when the user asks to write, package, or improve a Skill.

> Adapted from Anthropic Claude docs — Agent Skills (https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) and Skill authoring best practices (https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices).

## When to use

- Writing a new Skill from scratch.
- Reviewing a Skill that never triggers, or triggers too often.
- Deciding what belongs in SKILL.md versus a bundled file.

## Frontmatter contract

Every Skill needs a `SKILL.md` with YAML frontmatter and exactly two required fields:

- `name` — max 64 chars; lowercase letters, numbers, hyphens only; no XML; not the reserved words `anthropic` or `claude`. Prefer gerund form: `processing-pdfs`.
- `description` — non-empty, max 1024 chars, no XML, **third person**. It must say both **what** the Skill does and **when** to use it; this is the text Claude matches a request against.

## Writing the body

- **Concise is key.** Assume Claude is already smart. Cut any line that does not add context Claude lacks. A short code snippet beats a paragraph explaining it.
- **Match freedom to fragility.**
  - High freedom (prose steps) when many approaches work — e.g. code review.
  - Low freedom (an exact command, "do not modify") when a sequence is fragile — e.g. migrations.
- **Progressive disclosure.** Keep SKILL.md under ~500 lines. Move detail into sibling files (`reference.md`, `forms.md`, `scripts/`) linked one level deep from SKILL.md. Bundled files cost zero tokens until read.
- **Workflows with checklists.** For multistep tasks, give a copyable `- [ ]` checklist so progress is trackable.
- **Feedback loops.** "Run validator → fix → repeat" is the highest-value pattern.
- **Consistent terminology.** Pick one word per concept and never vary it.

## Review checklist

- [ ] `name` and `description` satisfy the frontmatter rules; the description names concrete triggers.
- [ ] Body under ~500 lines; extra detail split out.
- [ ] File references are **one level deep** from SKILL.md.
- [ ] No time-sensitive wording (or it sits in an "Old patterns" `<details>` block).
- [ ] Scripts handle their own errors; no magic constants.
- [ ] Forward slashes only in paths.

## Do not

- Do not put an exact script where general guidance suffices, or vice versa.
- Do not nest references more than one level deep.
- Do not offer a menu of libraries when one sensible default plus an escape hatch will do.
