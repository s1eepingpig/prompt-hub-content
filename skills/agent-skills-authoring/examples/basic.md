# Example — a Skill that never triggers

**Input:** a Skill whose frontmatter description reads `Helps with documents`.

**Output:**

## Diagnosis
The `description` has no triggers, so Claude cannot match it to a request and never loads the Skill.

## Fix — frontmatter

```yaml
---
name: extracting-pdf-tables
description: Extract tables and text from PDF files and fill PDF forms. Use when working with PDFs, scanned documents, forms, or when the user mentions extracting data from a PDF.
---
```

## Why it works
- **Third person, concrete verbs:** names the task (extract tables/text) and the object (PDF).
- **Explicit triggers:** "PDFs", "scanned documents", "forms" are terms a user is likely to say.
- **Within limits:** specific enough to disambiguate from other Skills, still well under 1024 chars.
