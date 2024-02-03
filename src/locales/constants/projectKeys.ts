export const projectTypes = {
  backend: 'backend',
  frontend: 'frontend',
  fullStack: 'fullStack'
} as const

export const projectsKeyNames = {
  portfolio: 'portfolio',
  sittingnt: 'sittingnt',
  kctshort: 'kctshort',
  game2048: 'game2048',
  simpleTranslate: 'simpleTranslate',
  kctsExpressGenerator: 'kctsExpressGenerator',
  backGame2048: 'backGame2048',
  tictactoe: 'tictactoe',
  button: 'button',
  wapiw: 'wapiw.',
  tsDo: 'tsDo',
  infoCountry: 'infoCountry',
  kactusKraft: 'kactusKraft',
  landing: 'landing'
} as const

export type possibleProjectsKeyNames = keyof typeof projectsKeyNames
export type possibleProjectTypes = keyof typeof projectTypes
