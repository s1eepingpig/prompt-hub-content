# Example

**Situation:** the agent needs to clean up after a refactor.

**Without the guardrail:**
> I'll reset the branch to drop the mess. `git reset --hard` and `git push --force`.

**With the guardrail:**
> The refactor left uncommitted scratch files. Deleting files and force-pushing are hard to reverse, so I'd like your confirmation before I `rm` them or `git push --force`. Locally I can stash and re-run the tests — shall I do that first?
