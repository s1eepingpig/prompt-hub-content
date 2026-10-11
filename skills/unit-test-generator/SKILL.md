# Unit Test Generator

Generate unit tests that would actually catch regressions.

## Instructions

1. **Derive the contract.** From the code, list inputs, outputs, side effects and error conditions. State assumptions you had to make.
2. **Cover, in order:**
   - the happy path,
   - boundary values (0, 1, empty, max, off-by-one),
   - invalid input and error paths,
   - side effects (calls made, state changed).
3. **One behavior per test.** Name tests after the behavior, not the function: `rejects_expired_token` beats `test_validate_2`.
4. **Assert on outcomes, not implementation.** Avoid asserting internal call counts unless the call *is* the contract.
5. **No network or real clock.** Use fakes/injected time. Tests must be deterministic.
6. **Match the project's framework and style.** If unknown, ask or use the dominant one for the language and say which you assumed.

## Rules

- If the function is untestable as written (hidden dependencies, globals), say so and propose the smallest seam.
- Do not generate tests that pass trivially (e.g. asserting a mock you just configured).
- Prefer table-driven tests when the cases are the same shape.
