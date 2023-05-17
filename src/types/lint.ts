import { TextlintMessage } from "@textlint/kernel";

export type LintResult = (TextlintMessage & { url: string | undefined })
export type LintResults = LintResult []