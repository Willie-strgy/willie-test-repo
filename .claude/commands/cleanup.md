# Cleanup: Automated Code Cleaning

Find and fix low-risk code quality issues.

## Target
$ARGUMENTS — section path

## Scope (ONLY these changes — nothing else)
- Remove unused imports
- Remove dead code (unused functions, unreachable code, commented-out blocks)
- Fix inconsistent naming (per CLAUDE.md conventions)
- Normalize file structure (per CLAUDE.md patterns)
- Remove debug artifacts (console.logs, debugger statements, TODO comments older than 6 months)
- Fix simple type issues (missing return types on public functions, unnecessary `any` types with obvious alternatives)

## Process
1. Read project and section CLAUDE.md
2. Run existing linter: `npm run lint` (note existing issues)
3. Identify cleanup targets within scope
4. Make changes file by file
5. Run tests after each significant change batch: `npm test`
6. If tests fail, revert that batch and log the failure

## Safety Rules
- NEVER change logic or behavior
- NEVER modify public APIs
- NEVER remove code that might be used dynamically (string-referenced, reflection)
- If uncertain, skip and log as suggestion instead
- Run full test suite before committing

## Output
1. Create branch willie/cleanup-<section>-<date>
2. Commit changes in logical groups (one commit per category)
3. Open draft PR with clear description of all changes
4. Write log to willie/logs/

## Post-Task
1. Attempt Slack notification with change summary via ./willie/notify.sh
2. Log action
