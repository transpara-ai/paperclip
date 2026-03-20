## Review guidelines

See `.github/codex/prompts/review.md` for detailed review instructions.

Key rules:
- Never approve PRs that contain hardcoded secrets or credentials.
- This is a fork of upstream Paperclip. Changes should be minimal and focused.
- All fixes accumulate on the fork before filing upstream PRs in batches.
- TypeScript strict mode is enforced. No `any` without documented justification.
