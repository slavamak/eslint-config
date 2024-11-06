import { Linter } from 'eslint'
import { mergeConfigs } from 'eslint-flat-config-utils'
import tseslint from 'typescript-eslint'

import { GLOB_TS_SRC } from '../constants'

export const typescript = mergeConfigs<Linter.Config>(
  tseslint.configs.eslintRecommended as Linter.Config,
  {
    name: '@slavamak/eslint-config/typescript',
    files: GLOB_TS_SRC,
    languageOptions: {
      parser: tseslint.parser as Linter.Parser,
      parserOptions: {
        project: true,
      },
    },
  },
)
