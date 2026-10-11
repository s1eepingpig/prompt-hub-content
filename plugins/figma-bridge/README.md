# Figma Bridge

Turn Figma design tokens into code.

> **License:** MIT. This plugin ships a Node script. Prompt Hub does **not** run it — review and run it locally.

## What it does

- Reads a tokens JSON export (from the Figma Tokens plugin) and emits:
  - `tokens.css` — CSS custom properties,
  - `tailwind.tokens.js` — a Tailwind theme fragment.
- Output is deterministic: same input, byte-identical output, so diffs are reviewable.

## Files

- `files/export-tokens.mjs` — the exporter.

## Usage

```sh
node files/export-tokens.mjs tokens.json --out dist/
```

## Not included

- No network calls. No Figma API token is read or stored.
- No automatic upload back to Figma.
