# Reflect: Self-Improvement Cycle

Review Willie's recent operations and improve configuration.

## Process
1. Read all logs from the past week in willie/logs/
2. If available, check outcomes:
   - PRs that were merged (successful work)
   - PRs that were rejected or required significant revision (areas for improvement)
   - Suggestions that were dismissed (calibration needed)
   - Scans that missed issues later found by humans (detection gaps)
3. Analyze patterns:
   - Are certain types of issues being repeatedly found? (suggests a deeper fix needed)
   - Are any commands producing low-value output? (suggests refinement)
   - Are CLAUDE.md files helping or are important things missing?
   - Are logs useful for tracing decisions?
4. Propose improvements:
   - Updates to project CLAUDE.md or section CLAUDE.md files
   - Updates to command templates
   - New commands needed
   - Changes to approval thresholds
   - Changes to notification verbosity

## Output
Write all proposed changes to willie/suggestions/willie-self/reflect-<date>.md

For CLAUDE.md updates, apply them directly (these are documentation, low risk).
For command template changes, write to willie/decisions/needs-approval/.

## Self-Pruning Rule
CRITICAL: When updating any CLAUDE.md file, review its total size.
If a CLAUDE.md exceeds 200 lines, consolidate:
- Remove outdated information
- Merge redundant entries
- Move detailed reference material to /docs and link to it
- Keep CLAUDE.md files as quick-reference, not encyclopedias

## Post-Task
1. Attempt Slack notification with reflection summary via ./willie/notify.sh
2. Log action
