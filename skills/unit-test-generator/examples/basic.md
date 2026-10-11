# Example

**Input:**

```ts
export function parseDuration(input: string): number {
  const m = /^(\d+)(s|m|h)$/.exec(input);
  if (!m) throw new Error('invalid duration');
  const n = Number(m[1]);
  return n * ({ s: 1, m: 60, h: 3600 }[m[2]] as number);
}
```

**Expected output (excerpt, Vitest):**

```ts
describe('parseDuration', () => {
  it.each([
    ['30s', 30],
    ['5m', 300],
    ['2h', 7200],
    ['0s', 0],
  ])('parses %s to %i seconds', (input, expected) => {
    expect(parseDuration(input)).toBe(expected);
  });

  it.each(['', '10', '10d', 'm10', ' 10s'])(
    'throws on invalid input %j',
    (bad) => { expect(() => parseDuration(bad)).toThrow('invalid duration'); },
  );
});
```
