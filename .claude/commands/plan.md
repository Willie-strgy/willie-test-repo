# Plan: Feature Implementation Planning

Analyze the codebase and produce a detailed implementation plan for a feature or change.

## Input
$ARGUMENTS — feature description, issue number, or path to a requirements document

## Process
1. Read project and all relevant section CLAUDE.md files
2. Analyze the feature requirements
3. Map out which sections of the codebase will be affected
4. For each affected section:
   - Identify specific files that need changes
   - Describe what changes are needed
   - Note dependencies and ordering constraints
   - Estimate complexity (small/medium/large per file)
5. Identify risks and open questions
6. Break the plan into implementable tasks sized for single Claude Code sessions

## Output
Write plan to willie/decisions/needs-approval/plan-<feature>-<date>.md:

```
# Implementation Plan: <feature>
Date: <timestamp>
Estimated total effort: <small/medium/large>
Sections affected: <list>

## Overview
[Brief description of the change and approach]

## Tasks (in order)
### Task 1: <description>
- Section: <section>
- Files: <list>
- Changes: <description>
- Dependencies: <what must be done first>
- Tests needed: <description>
- Risk: <low/medium/high>

### Task 2: ...

## Open Questions
[Things that need human input before implementation]

## Risks
[What could go wrong, what to watch for]
```

## Post-Task
1. Attempt Slack notification: "Plan ready for review: <feature>" via ./willie/notify.sh
2. Log action
3. STOP — do not implement without approval
