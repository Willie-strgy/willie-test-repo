# Known Issues Inventory

This file tracks intentional issues planted in the test repo for scoring Willie's detection rate.

## Security (Critical)
1. [x] `src/components/UserCard.tsx:15` — Hardcoded API key
2. [x] `src/lib/database.ts:7` — Hardcoded database credentials
3. [x] `src/lib/database.ts:30` — SQL injection in getUserById
4. [x] `src/lib/database.ts:35` — SQL injection in createUser

## Code Quality (Warning)
5. [x] `src/app/page.tsx` — Multiple `any` types (users, error states)
6. [x] `src/app/page.tsx:18,25` — console.log left in production code
7. [x] `src/components/UserCard.tsx:12` — console.log in render
8. [x] `src/utils/helpers.ts:22-42` — Deeply nested processUserData
9. [x] `src/utils/formatters.ts:20` — formatUserName overly complex
10. [x] `src/api/users.ts` — No input validation on createUser
11. [x] `src/lib/database.ts:26` — Connection never closed in getUsers

## Dead Code (Warning)
12. [x] `src/components/UserCard.tsx:31-37` — UserCardSkeleton never used
13. [x] `src/components/UserCard.tsx:40-46` — Commented-out OldUserCard
14. [x] `src/utils/helpers.ts:46-52` — legacyTransform never called
15. [x] `src/utils/formatters.ts:38` — DEPRECATED_DATE_FORMAT unused
16. [x] `src/api/users.ts:34` — deleteAllUsers unused and dangerous

## Type Safety (Warning)
17. [x] `src/utils/formatters.ts` — All functions use `any` params
18. [x] `src/utils/helpers.ts` — Multiple `any` types
19. [x] `src/types/index.ts:22` — ApiResponse uses `any` for all fields
20. [x] `src/types/index.ts:28` — UserDTO duplicates User interface
21. [x] `src/components/UserCard.tsx:8` — Props use `any` for user

## Unused Imports (Info)
22. [x] `src/app/page.tsx:1` — useCallback, useMemo unused
23. [x] `src/app/page.tsx:4` — helpers imported but not meaningfully used
24. [x] `src/app/page.tsx:5` — lodash imported but unused
25. [x] `src/components/Header.tsx:1` — useRef, useContext unused

## Stale TODOs (Info)
26. [x] `src/app/page.tsx:9` — TODO from 2024-01-15 (>6 months old)
27. [x] `src/app/page.tsx:10` — TODO from 2023-06-20 (>6 months old)
28. [x] `src/lib/database.ts:2` — TODO from 2023-03-10 (>6 months old)

## Architecture (Info)
29. [x] `src/api/users.ts` vs `src/lib/database.ts` — Duplicate user fetching patterns
30. [x] `moment` used throughout — heavy dependency, could use native Date or lighter alternative

## Test Coverage Gaps (Info)
31. [x] `__tests__/formatters.test.ts` — Only 1 test case, many functions untested
32. [x] No tests for: helpers, database, api, components

---

**Total: 32 known issues**
- Critical: 4
- Warning: 9
- Info: 19
