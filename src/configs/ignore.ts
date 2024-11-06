import gitignore from 'eslint-config-flat-gitignore'

import { DEFAULT_IGNORE_FILES } from '../constants'

export const ignore = gitignore({
  name: '@slavamak/eslint-config/ignore',
  files: DEFAULT_IGNORE_FILES,
  strict: false,
})
