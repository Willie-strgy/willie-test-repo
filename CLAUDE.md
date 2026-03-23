# Project: Willie Test Repo

## Purpose
Test repository for validating Willie autonomous maintenance agent commands.
Contains intentional issues across multiple categories for detection scoring.
See KNOWN-ISSUES.md for the full inventory (32 issues).

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Runtime**: Node.js 20
- **Package Manager**: npm
- **Testing**: Jest
- **Linting**: ESLint (next/core-web-vitals)

## Architecture
Small single-app Next.js project. Not a monorepo.

```
src/
  app/          — Next.js App Router pages (layout, page)
  components/   — React components (UserCard, Header)
  lib/          — Backend utilities (database)
  api/          — API client functions
  utils/        — Shared utilities (formatters, helpers)
  types/        — TypeScript type definitions
__tests__/      — Jest test files
```

## Section Map
| Section | Path | Description | Depends On |
|---------|------|-------------|------------|
| App | src/app/ | Next.js pages and layout | Components, Utils |
| Components | src/components/ | React UI components | Utils, Types |
| Lib | src/lib/ | Backend/database utilities | Types |
| API | src/api/ | External API client | Types |
| Utils | src/utils/ | Shared formatters and helpers | — |
| Types | src/types/ | TypeScript interfaces | — |
| Tests | __tests__/ | Jest test files | Utils |

## Conventions
- Named exports (no default exports except Next.js pages)
- Functional components with TypeScript interfaces for props
- Path aliases: `@/*` maps to `./src/*`

## Commands
- Build: `npm run build`
- Dev: `npm run dev`
- Test: `npm test`
- Lint: `npm run lint`
- Type check: `npm run type-check`

## Known Issues
This is a test repo with intentionally planted issues:
- 4 critical (hardcoded secrets, SQL injection)
- 9 warnings (any types, dead code, deep nesting, missing error handling)
- 19 info (unused imports, stale TODOs, test gaps, heavy dependencies)

Full inventory in KNOWN-ISSUES.md.

## Recent Willie Updates
[Empty — will be maintained by Willie going forward]
