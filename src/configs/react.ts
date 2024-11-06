import eslintReact from '@eslint-react/eslint-plugin'
import { Linter } from 'eslint'
import { mergeConfigs } from 'eslint-flat-config-utils'
import jsxa11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'

import { GLOB_JSX_SRC } from '../constants'

export const react = mergeConfigs<Linter.Config>(
  eslintReact.configs.recommended as unknown as Linter.Config,
  jsxa11y.flatConfigs.recommended,
  {
    name: '@slavamak/eslint-config/react',
    files: GLOB_JSX_SRC,
    plugins: {
      'jsxa11y': jsxa11y,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
)
