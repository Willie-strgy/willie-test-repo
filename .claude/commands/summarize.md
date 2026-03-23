# Summarize: Produce Weekly Operations Digest

Create a summary of Willie's operations for the past week.

## Process
1. Read all logs from willie/logs/ for the past 7 days
2. Read any new suggestions from willie/suggestions/
3. Compile statistics:
   - Tasks run by type
   - PRs opened, merged, rejected
   - Issues found by severity
   - Health score trends per section
   - Suggestions generated vs acted on
4. Highlight key events:
   - Critical issues found
   - Significant improvements made
   - Items still waiting for approval
   - Self-improvement changes applied

## Output
Write to willie/summaries/weekly-YYYY-WNN.md

Attempt to send full summary to Slack via ./willie/notify.sh

## Post-Task
Archive processed logs older than 30 days to willie/logs/archive/
