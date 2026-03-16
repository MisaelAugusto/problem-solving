# Problems solutions

## LeetCode

## Beecrowd

## Creating a new solution folder

Use the CLI to scaffold a new solution folder under `leet-code` or `beecrowd`:

```bash
npm run new
```

The CLI will prompt for:

- **Folder**: `leet-code` or `beecrowd`
- **Problem number**: e.g. `42`
- **Problem name**: e.g. `Trapping Rain Water`

The new folder will be named `{number}-{slug}` (e.g. `42-trapping-rain-water`) and will contain `solution.js` and `__tests__/solution.test.js`.

You can pass options so the CLI does not prompt:

```bash
npm run new -- --folder leet-code --number 42 --name "Trapping Rain Water"
# short: -f, -n, -N
npm run new -- -f leet-code -n 42 -N "Trapping Rain Water"
```
