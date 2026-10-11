# Git Workflow Toolkit

A small set of git helpers for day-to-day branch work.

> **License:** MIT. This plugin ships a shell script. It is **not executed** by Prompt Hub — download, read and run it yourself.

## Commands

| Helper     | What it does                                                     |
| ---------- | ---------------------------------------------------------------- |
| `gsafe`    | Rebase the current branch onto `main` with an automatic backup.  |
| `gname`    | Suggest a branch name from staged changes.                       |
| `gprepush` | Print a pre-push checklist (uncommitted, unpushed, secrets scan).|

## Files

- `files/git-workflow.sh` — the helpers above.

## Install

```sh
cp files/git-workflow.sh ~/.local/bin/git-workflow
chmod +x ~/.local/bin/git-workflow
```

## Safety

`gsafe` creates a backup branch (`backup/<branch>-<timestamp>`) before rebasing and aborts on conflict, leaving the original branch untouched.
