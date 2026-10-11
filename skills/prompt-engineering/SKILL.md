# Prompt Engineering Playbook

Rewrite or review a prompt using the techniques that reliably move Claude's output quality. Load this when the user asks to improve, debug, or design a prompt.

> Adapted from Anthropic Claude docs — prompting best practices (https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices).

## When to use

- The user hands you a prompt and asks to make it better.
- Outputs are inconsistent, too verbose, or miss the requested format.
- You are writing a system prompt for an agent or product.

## Diagnose first

Before editing, identify which problem the prompt actually has:

1. **Ambiguous goal** — the model can't tell what "done" looks like.
2. **Missing context** — no reason *why* a rule matters, so the model can't generalize.
3. **Format drift** — the shape of the output is undefined.
4. **Wrong structure** — instructions and data are mixed together.
5. **Over-prompting** — rules written for older models that now cause overtriggering.

Match the fix to the diagnosis. Do not apply every technique at once.

## Techniques

- **Be clear and direct.** State the desired output format and constraints explicitly. If you want "above and beyond," ask for it by name.
- **Add the why.** Give the motivation behind a rule so the model generalizes: instead of `NEVER use ellipses`, say the text is read aloud by a text-to-speech engine that mispronounces them.
- **Use examples.** 3–5 relevant, diverse, structured examples steer format and tone better than description. Wrap them in `<example>` / `<examples>`.
- **Structure with XML tags.** Wrap each content type — `<instructions>`, `<context>`, `<input>` — so a mixed prompt stays unambiguous. Nest tags for hierarchy.
- **Give a role.** One sentence in the system prompt focuses tone and behavior.
- **Long context.** Put long documents *above* the query; wrap each in `<document index="n">` with `<document_content>` and `<source>`; ask the model to quote relevant spans first.
- **Prefer prose over prohibition.** Say what to do, not what to avoid: "write in flowing paragraphs" beats "don't use markdown."
- **Steer thinking, don't script it.** "Think thoroughly" outperforms a hand-written step list. Ask for a self-check before finishing — except on models that already over-verify, where it adds cost.
- **Explicit action.** To make the model act rather than suggest, write `Change this function…`, not `Can you suggest…`.

## Output format

Return:

1. **Diagnosis** — the single biggest problem, in one line.
2. **Rewritten prompt** — in a fenced block, ready to paste.
3. **What changed and why** — a short bullet list mapping each edit to a technique.

## Do not

- Do not stack every technique; apply the ones the diagnosis calls for.
- Do not invent examples the user's domain doesn't support.
- Do not silently drop constraints the user clearly intended.
