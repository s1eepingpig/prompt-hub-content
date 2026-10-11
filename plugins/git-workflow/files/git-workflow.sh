#!/usr/bin/env sh
# Git Workflow Toolkit — MIT. Provided as-is. Review before running.
set -eu

cmd_safe() {
  branch="$(git rev-parse --abbrev-ref HEAD)"
  backup="backup/${branch}-$(date +%Y%m%d%H%M%S)"
  git branch "$backup"
  echo "backup: $backup"
  if ! git rebase main; then
    echo "rebase failed; your branch is unchanged. backup: $backup" >&2
    git rebase --abort 2>/dev/null || true
    exit 1
  fi
}

cmd_name() {
  git diff --cached --name-only | head -1 | sed 's#/#-#g' | sed 's/\.[^.]*$//' | sed 's#^#feat/#'
}

cmd_prepush() {
  echo "== uncommitted =="
  git status --porcelain
  echo "== unpushed =="
  git log --oneline @{u}.. 2>/dev/null || echo "(no upstream)"
}

case "${1:-}" in
  safe) cmd_safe ;;
  name) cmd_name ;;
  prepush) cmd_prepush ;;
  *) echo "usage: git-workflow {safe|name|prepush}" >&2; exit 2 ;;
esac
