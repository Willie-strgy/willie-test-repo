# Suggest: Gather Improvement Opportunities

Analyze the codebase and produce categorized improvement suggestions. Do NOT make any changes.

## Target
$ARGUMENTS — section path or "all"

## Categories
Produce suggestions across all of these dimensions:

### Code Quality
- Refactoring opportunities (complex functions, deep nesting, long files)
- Better patterns available (newer language features, library utilities)
- Performance improvements (unnecessary re-renders, unoptimized queries, missing memoization)

### Architecture
- Coupling issues (modules knowing too much about each other)
- Abstraction opportunities (repeated patterns that could be shared)
- Dependency concerns (outdated packages, security vulnerabilities, heavy dependencies)

### Developer Experience
- Missing tooling (scripts, automation, git hooks)
- Build/test speed improvements
- Onboarding gaps (what would confuse a new developer?)

### Infrastructure
- CI/CD improvements
- Monitoring/observability gaps
- Deployment concerns

### Willie Self-Improvement
- Are CLAUDE.md files accurate and useful?
- Are command templates producing good results?
- Should any commands be split, merged, or restructured?
- Are there repeated patterns in logs that suggest a new command?

## Output
Write categorized suggestions to willie/suggestions/<category>/:
- Each suggestion as a separate .md file with: description, rationale, estimated effort, affected files, priority

Write summary to willie/logs/YYYY-MM-DD-suggest-<section>.md

## Post-Task
1. Attempt Slack notification with suggestion count per category via ./willie/notify.sh
2. Log action
