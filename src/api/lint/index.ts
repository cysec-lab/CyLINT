/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 200
    /** Lint Result */
    resBody: Types.LintResults

    reqBody: {
      code: string
      lang: 'ja' | 'en'
    }
  }
}
