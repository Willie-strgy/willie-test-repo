# Document: Documentation Audit and Updates

Fact-check existing documentation against actual code and fill gaps.

## Target
$ARGUMENTS — section path, or "all" for full project

## Process
1. Read all existing documentation (README files, CLAUDE.md files, inline JSDoc/TSDoc)
2. Compare documentation claims against actual code:
   - Are described APIs accurate?
   - Are file paths and imports correct?
   - Are configuration options documented correctly?
   - Are examples runnable?
3. Identify undocumented areas:
   - Public functions/components without JSDoc
   - Modules without README
   - Configuration without explanation
   - Complex logic without inline comments
4. Draft documentation updates

## Output
1. Create branch willie/docs-<section>-<date>
2. Update/create documentation files
3. Open draft PR with categorized changes
4. Write log to willie/logs/YYYY-MM-DD-document-<section>.md

## Post-Task
1. Attempt Slack notification via ./willie/notify.sh
2. Update section CLAUDE.md with documentation coverage notes
3. Log action
