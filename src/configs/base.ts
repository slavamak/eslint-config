import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'
import { mergeConfigs } from 'eslint-flat-config-utils'
import jsdoc from 'eslint-plugin-jsdoc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

import { GLOB_SRC } from '../constants'

export const base = mergeConfigs<Linter.Config>(
  js.configs.recommended,
  stylistic.configs['recommended-flat'],
  jsdoc.configs['flat/recommended'],
  {
    name: '@slavamak/eslint-config/base',
    files: GLOB_SRC,
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'jsdoc/require-jsdoc': ['warn', { enableFixer: false }],
    },
  },
)
