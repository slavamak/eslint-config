import { Linter } from 'eslint'
import { mergeConfigs } from 'eslint-flat-config-utils'
import globals from 'globals'

import { GLOB_SRC } from '../constants'

export const browser = mergeConfigs<Linter.Config>({
  name: '@slavamak/eslint-config/browser',
  files: GLOB_SRC,
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
})
