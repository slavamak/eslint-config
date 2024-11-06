import { Linter } from 'eslint'
import { mergeConfigs } from 'eslint-flat-config-utils'
import n from 'eslint-plugin-n'
import globals from 'globals'

import { GLOB_SRC } from '../constants'

export const node = mergeConfigs<Linter.Config>(n.configs['flat/recommended'], {
  name: '@slavamak/eslint-config/node',
  files: GLOB_SRC,
  languageOptions: {
    globals: {
      ...globals.nodeBuiltin,
    },
  },
  rules: {
    'n/no-missing-import': 'off',
    'n/no-extraneous-import': 'off',
  },
})
