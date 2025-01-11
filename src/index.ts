import { base } from './configs/base'
import { browser } from './configs/browser'
import { ignore } from './configs/ignore'
import { node } from './configs/node'
import { react } from './configs/react'
import { remix } from './configs/remix'
import { svelte } from './configs/svelte'
import { typescript } from './configs/typescript'

export * from 'eslint-flat-config-utils'

export const configs = {
  base,
  browser,
  ignore,
  node,
  react,
  remix,
  svelte,
  typescript,
}
