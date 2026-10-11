# Prompt Hub — Content

Official content repository for **Prompt Hub**. This repo is the **single source of truth** for every published Skill, Prompt and Plugin. The website is built from this repository; nothing is authored in a database.

## Layout

```text
prompt-hub-content/
├── skills/<slug>/
│   ├── manifest.yaml      # metadata consumed by the catalog
│   ├── SKILL.md           # primary file (entry)
│   ├── examples/          # usage examples
│   └── references/        # supporting docs
├── prompts/<slug>/
│   ├── manifest.yaml
│   ├── PROMPT.md          # primary file (entry)
│   └── examples/
├── plugins/<slug>/
│   ├── manifest.yaml
│   ├── README.md          # primary file (entry)
│   └── files/             # source files shipped with the plugin
└── schemas/manifest.schema.json
```

## Rules

1. **One directory per item.** The directory name is the slug.
2. **`id` = `<type>-<slug>`** and must be globally unique. e.g. `skills/code-review/` → `id: skill-code-review`.
3. **`type` must match the top-level directory** (`skills` → `skill`).
4. **`entry`** must be a relative path that exists and stays inside the item directory.
5. **`version`** is SemVer.
6. **Media is never committed here.** Add an R2 object `key` to `media:` and store the binary in the R2 bucket (see below). Only text and lightweight descriptors live in Git.
7. **Do not assume a license.** Every item declares its own.

## Adding content

1. Branch or open a PR.
2. Add the directory + `manifest.yaml` + primary file.
3. CI runs `validate-content` — duplicate ids, missing entries, bad versions or types fail the build.
4. On merge to `main`, the site rebuilds and deploys.

## Media (R2)

Media binaries live in the `prompt-hub-media` R2 bucket and are served over its public `r2.dev` domain. Reference them by object key:

```yaml
media:
  - kind: cover
    key: content/skill-code-review/v1.0.0/cover.webp
    alt: Code review workflow illustration
    width: 1200
    height: 630
```

Object keys follow `content/<id>/v<version>/<name>`. The build turns a key into a public URL; the key itself is the stable, reviewable reference.

## License

Repository tooling and descriptors: MIT (see `LICENSE`). Each item carries its own `license` field.
