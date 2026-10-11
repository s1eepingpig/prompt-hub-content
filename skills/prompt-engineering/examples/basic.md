# Example — tightening a vague prompt

**Input prompt:**

```text
Write a summary of this article.
```

**Output:**

## Diagnosis
Ambiguous goal — nothing defines length, audience, or what a "summary" should contain.

## Rewritten prompt

```text
Summarize the article in the <article> tags for a busy engineer who has not read it.

<article>
{{ARTICLE}}
</article>

Produce exactly:
1. A one-sentence takeaway.
2. Three bullet points, each a specific claim with its supporting number if present.
3. One open question the article leaves unanswered.

Write plain-prose bullets. Do not speculate beyond the text.
```

## What changed and why
- **Added context (audience + length):** "busy engineer" and the fixed output shape remove ambiguity.
- **XML structure:** the article is isolated in `<article>` so instructions and data stay separate.
- **Explicit format:** numbered deliverables replace an open-ended "summary."
- **Grounding rule:** "do not speculate beyond the text" keeps the output faithful.
