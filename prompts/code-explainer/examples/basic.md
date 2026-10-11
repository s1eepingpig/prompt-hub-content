# Example

**Input:** a debounce helper, audience unspecified.

**Response (excerpt, peer level):**

> **Purpose.** `debounce(fn, ms)` returns a wrapper that delays calling `fn`
> until `ms` have passed with no further calls — used to stop a handler from
> firing on every keystroke.
>
> **Gotcha.** The returned function does not expose a `cancel()`. A pending
> call will still fire after the component unmounts, which is the usual cause
> of "set state on unmounted component" warnings. Consider returning
> `{ run, cancel }`.
