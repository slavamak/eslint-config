import type { Linter } from 'eslint'
import { composer } from 'eslint-flat-config-utils'

import { base } from './base'
import { browser } from './browser'
import { ignore } from './ignore'
import { node } from './node'
import { react } from './react'

export const remix = (await composer(
  ignore,
  base,
  browser,
  node,
  react,
).overrideRules({
  'n/no-unsupported-features/node-builtins': 'off',
})) as Linter.Config[]
