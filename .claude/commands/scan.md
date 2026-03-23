# Scan: Codebase Health Check

Analyze the specified section of the codebase for health issues. Do NOT make any changes.

## Target
Section: $ARGUMENTS (if empty, scan entire project)

## Process
1. Read the project CLAUDE.md and any relevant section CLAUDE.md files
2. Analyze the code for:
   - Convention violations (naming, file structure, import patterns)
   - Dead code (unused exports, unreachable branches, commented-out code)
   - Type safety issues (any types, missing types, unsafe casts)
   - Dependency health (unused imports, circular dependencies)
   - Test coverage gaps (untested public functions, missing edge cases)
   - Code duplication
   - Security concerns (hardcoded values, exposed secrets, injection vulnerabilities)
3. Categorize findings by severity: critical, warning, info
4. Check if findings match or contradict known issues in CLAUDE.md

## Output
Write a structured report to willie/logs/YYYY-MM-DD-scan-<section>.md:

```
# Scan Report: <section>
Date: <timestamp>
Files analyzed: <count>
Duration: <time>

## Critical
- [file:line] Description

## Warnings
- [file:line] Description

## Info
- [file:line] Description

## Health Score
<score>/100 with brief justification

## Comparison to Last Scan
[improvements/regressions since last scan of this section]
```

## Post-Task
1. Attempt Slack notification with summary and health score via ./willie/notify.sh
2. If any critical issues found, add to willie/decisions/needs-approval/
3. Update section CLAUDE.md quality notes with scan date and score
