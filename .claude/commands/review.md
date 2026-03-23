# Review: Recent Changes

Review recent git changes for quality, convention compliance, and potential issues.

## Target
$ARGUMENTS — accepts: branch name, PR number, commit range, or "last N commits"

## Process
1. Read project CLAUDE.md for conventions and patterns
2. Get the diff for the target changes
3. For each changed file:
   - Check convention compliance
   - Look for bugs, edge cases, error handling gaps
   - Verify type safety
   - Check test coverage for changed code
   - Assess naming clarity
   - Look for accidental debug code, TODOs, console.logs
4. Assess overall change quality

## Output
Write review to willie/logs/YYYY-MM-DD-review-<target>.md:

```
# Review: <target>
Date: <timestamp>
Files changed: <count>
Lines added/removed: +<added>/-<removed>

## Issues Found
### Must Fix
- [file:line] Description and suggestion

### Should Fix
- [file:line] Description and suggestion

### Nitpicks
- [file:line] Description and suggestion

## Positive Notes
[Good patterns observed, well-written code worth highlighting]

## Overall Assessment
[Brief summary of change quality]
```

## Post-Task
1. Attempt Slack notification with summary via ./willie/notify.sh
2. If reviewing a PR, optionally post findings as PR comment via gh
3. Log review
