# Portfolio Zero-Touch Operating Policy

## Owner intent
This repository should require almost no routine technical input from Walt. Engineering agents own normal diagnosis, implementation, testing, documentation, safe retries, and release preparation.

## Default authority
Agents may, without asking Walt:
- inspect the repository, logs, tests, and deployment configuration;
- install existing declared dependencies in ephemeral development/CI environments;
- fix bugs, tests, type errors, lint errors, build failures, and documentation drift;
- create or update automated tests and CI checks;
- make backward-compatible implementation changes that preserve product intent;
- prepare releases and deployment-ready commits;
- retry safe, reversible failures and report the evidence.

## Escalate to Walt only for
- new spending, subscriptions, paid infrastructure, or a higher recurring bill;
- credentials, MFA, account consent, DNS ownership, or another owner-only authentication step;
- destructive or irreversible production/data actions;
- legal, compliance, pricing, contract, refund-policy, or material privacy decisions;
- a genuine product-direction choice where the repository does not already define the answer.

## Financial rule
Incremental spending authority is $0 unless Walt explicitly supplies a different available-capital amount. Existing approved infrastructure may continue to be used. Never interpret available cash as permission to spend all of it.

## Release rule
The target state is exception-based ownership: build, test, and prepare routine releases automatically; report failures with the exact blocker, evidence, and smallest owner action required. Never call a build successful without test/build evidence.

## Safety
Protect customer data and secrets. Prefer reversible changes. Do not weaken authentication, authorization, billing verification, backups, or security controls merely to make automation pass.
