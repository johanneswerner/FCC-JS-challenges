# FreeCodeCamp JavaScript Challenges

A collection of FreeCodeCamp coding challenges solved in JavaScript, using Deno as the runtime.

## Structure

```
challenges/
└── id_XXX_challenge_name/
    ├── README.md       # Challenge description
    └── solution.js     # Solution implementation

tests/
└── test_XXX_challenge_name.test.js  # Test cases
```

## Requirements

- [Deno](https://deno.land/) 1.x or higher

## Usage

### Run all tests
```bash
deno task test
```

### Run tests in watch mode
```bash
deno task test:watch
```

### Check code formatting
```bash
deno task fmt:check
```

### Format code
```bash
deno task fmt
```

### Lint code
```bash
deno task lint
```

## Adding New Challenges

1. Create a new directory in `challenges/` with format `id_XXX_challenge_name/`
2. Add a `README.md` with the challenge description
3. Create `solution.js` with exported functions
4. Add corresponding test file in `tests/` directory

## License

MIT
