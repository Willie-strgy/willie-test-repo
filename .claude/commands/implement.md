# Implement: Execute an Approved Plan

Implement changes from an approved plan file.

## Input
$ARGUMENTS — path to an approved plan file in willie/decisions/approved/

## Pre-Checks
1. Verify the plan file exists in willie/decisions/approved/ (NOT needs-approval/)
2. Read the full plan
3. Verify the codebase hasn't changed significantly since the plan was written (check git log)
4. If codebase has diverged, stop and request re-planning

## Process
1. Create branch willie/implement-<feature>-<date>
2. Execute tasks in order from the plan
3. After each task:
   - Run tests: `npm test`
   - If tests fail, attempt to fix; if fix isn't obvious, stop and notify
   - Commit with descriptive message
4. After all tasks:
   - Run full test suite: `npm test`
   - Run linter: `npm run lint`
   - Run type checker: `npm run type-check`
5. Open draft PR with:
   - Link to the original plan
   - Summary of all changes
   - Any deviations from the plan (and why)
   - Test results

## Safety Rules
- Follow the plan exactly — do not add scope
- If you discover something the plan didn't account for, log it and continue with what the plan says
- If a task seems riskier than the plan estimated, stop and notify

## Post-Task
1. Move plan file to willie/decisions/approved/completed/
2. Attempt Slack notification with PR link via ./willie/notify.sh
3. Log action with any deviations noted
