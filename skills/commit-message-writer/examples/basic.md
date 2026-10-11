# Example

**Staged diff (summary):** added a `--dry-run` flag to the deploy script that prints the plan and exits before uploading.

**Expected output:**

```text
feat(deploy): add --dry-run to preview the plan without uploading

Reviewers kept triggering real deploys to inspect the plan. A dry-run
path prints the resolved targets and exits before any network call.
```
