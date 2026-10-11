# Frontend Design

Build a frontend that looks designed rather than generated. Load this when producing or reviewing UI, landing pages, or web components.

> Adapted from Anthropic Claude docs — frontend aesthetics guidance (https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), based on Anthropic's open-source frontend-design Skill.

## When to use

- Building a page, component, or app UI from scratch.
- A design reads as generic "AI slop" and needs a distinctive point of view.

## The problem

Left unguided, models converge on the same on-distribution defaults: Inter/Roboto/Arial, purple-on-white gradients, predictable card layouts. The result is competent and forgettable. Break that convergence deliberately.

## Dispositions

- **Typography** — choose distinctive, characterful fonts. Avoid the defaults (Inter, Roboto, Arial, system stacks). Let type carry the aesthetic.
- **Color & theme** — commit to one cohesive aesthetic, defined in CSS variables. Dominant colors with sharp accents beat evenly-spread timid palettes. Draw on IDE themes and cultural aesthetics for inspiration.
- **Motion** — animate with intent. Prefer CSS-only for HTML; use Motion on React. One well-orchestrated page load with staggered reveals (`animation-delay`) delights more than scattered micro-interactions.
- **Backgrounds** — build atmosphere and depth. Layer gradients, geometric patterns, or contextual effects instead of a flat fill.

## Avoid

- Overused fonts (Inter, Roboto, Arial, system).
- Clichéd schemes — especially purple gradients on white.
- Cookie-cutter layouts that ignore the subject's context.
- Converging on the same "safe" pick across generations (e.g. Space Grotesk). Vary deliberately.

## Output

Interpret the brief creatively and make context-specific choices. When you finish, state the aesthetic you committed to in one line so it can be reviewed.
