/* eslint-disable */
export type LintResult = {
  loc: {
    start: {
      column: number
      line: number
    }

    end: {
      column: number
      line: number
    }
  }

  message: string
  ruleId?: string | undefined
  url?: string | undefined
}

export type LintResults = LintResult[]
