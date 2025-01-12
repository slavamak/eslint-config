import { Linter } from 'eslint'
import { mergeConfigs } from 'eslint-flat-config-utils'
import sveltePlugin from 'eslint-plugin-svelte'
import tseslint from 'typescript-eslint'

import { GLOB_SVELTE_SRC } from '../constants'

export const svelte = mergeConfigs<Linter.Config>(
  ...sveltePlugin.configs['flat/recommended'],
  {
    name: '@slavamak/eslint-config/svelte',
    files: GLOB_SVELTE_SRC,
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: tseslint.parser as Linter.Parser,
      },
    },
  },
)
