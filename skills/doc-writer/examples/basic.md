# Example

**Input:** a CLI script with flags `--input`, `--out`, `--format` and a known failure when `--input` points at a directory.

**Expected output (excerpt):**

```markdown
# json2csv

Convert a JSON array to CSV.

## Quickstart

    json2csv --input data.json --out data.csv

## Options

| Flag       | Default | Description                          |
| ---------- | ------- | ------------------------------------ |
| `--input`  | —       | Path to a JSON **file** (not a dir). |
| `--out`    | stdout  | Output path.                         |
| `--format` | `csv`   | `csv` or `tsv`.                      |

## Errors

- `E_IS_DIR` — `--input` points at a directory. Pass a file path.
```
