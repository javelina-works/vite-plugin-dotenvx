export declare interface VitePluginDotenvxOptions {
  enabled?: boolean

  verbose?: boolean

  path?: string | string[]

  envKeysFile?: string

  overload?: boolean

  convention?: string

  applyInBuild?: boolean

  strict?: boolean

  ignore?: string[]

  generateExample?: boolean

  updateGitignore?: boolean

  exposeToClient?: string[]
}