import { technologiesAbbreviations, technologies, posibleTechnologies } from './technologies'
import { possibleProjectTypes, possibleProjectsKeyNames, projectTypes } from './projectKeys'
import { linksGitHub, linksWeb, projectPreviewUrl } from './projectLinks'

const { backend, frontend, fullStack } = projectTypes
const { css3, express, html5, mySql, next, javascript, nodejs, react, sql, typescript, tailwindcss, three } = technologies

interface IProject {
  name: string
  technology: string
  color: technologiesAbbreviations
  linkGitHub: string
  type: possibleProjectTypes
  keyName: possibleProjectsKeyNames

  desc?: string
  linkWeb?: string
  preview?: string,
  technologies?: posibleTechnologies[]
}

export const projectsBody : Record<possibleProjectsKeyNames, IProject> = {
  portfolio: {
    name: 'Kactuswow',
    technology: typescript.name,
    color: typescript.abbr,
    linkGitHub: linksGitHub.portfolio,
    keyName: 'portfolio',
    type: backend
  },
  sittingnt: {
    name: "Sittingn't",
    technology: css3.name,
    color: css3.abbr,
    linkGitHub: linksGitHub.sittingnt,
    keyName: 'sittingnt',
    type: backend
  },
  kctsground: {
    name: 'Kctsground',
    technology: typescript.name,
    color: typescript.abbr,
    linkGitHub: linksGitHub.kctsground,
    keyName: 'kctsground',
    type: frontend,
    technologies: [
      next,
      typescript,
      tailwindcss,
      css3
    ],
    linkWeb: linksWeb.kctsground,
    preview: `${projectPreviewUrl}kctsGround.webp`
  },
  landing: {
    name: 'Landing 3D',
    technology: three.name,
    color: three.abbr,
    linkGitHub: linksGitHub.landing,
    keyName: 'landing',
    type: frontend,
    linkWeb: linksWeb.landing,
    preview: `${projectPreviewUrl}landing.webp`,
    technologies: [
      next,
      typescript,
      tailwindcss,
      three
    ]
  },
  kctshort: {
    name: 'Kctshort',
    technology: next.name,
    color: next.abbr,
    linkGitHub: linksGitHub.kctshort,
    linkWeb: linksWeb.kctshort,
    technologies: [
      css3,
      next,
      tailwindcss,
      typescript,
      sql
    ],
    keyName: 'kctshort',
    type: fullStack,
    preview: `${projectPreviewUrl}kctshort.webp`
  },
  game2048: {
    name: '2048',
    technology: typescript.name,
    color: typescript.abbr,
    linkGitHub: linksGitHub.game2048,
    linkWeb: linksWeb.game2048,
    technologies: [
      css3,
      react,
      typescript,
      mySql,
      express,
      nodejs
    ],
    keyName: 'game2048',
    type: frontend,
    preview: `${projectPreviewUrl}game2048.webp`
  },
  simpleTranslate: {
    name: 'SimpleTranslate',
    technology: typescript.name,
    color: typescript.abbr,
    linkGitHub: linksGitHub.simpleTranslate,
    linkWeb: linksWeb.simpleTranslate,
    technologies: [
      css3,
      react,
      typescript,
      tailwindcss
    ],
    keyName: 'simpleTranslate',
    type: frontend,
    preview: `${projectPreviewUrl}simpleTranslate.webp`
  },
  infoCountry: {
    name: 'InfoCountry',
    technology: typescript.name,
    color: typescript.abbr,
    linkGitHub: linksGitHub.infoCountry,
    linkWeb: linksWeb.infoCountry,
    technologies: [
      css3,
      react,
      typescript,
      tailwindcss
    ],
    keyName: 'infoCountry',
    type: frontend,
    preview: `${projectPreviewUrl}infoCountry.webp`
  },
  kactusKraft: {
    name: 'KactusKraft',
    technology: javascript.name,
    color: javascript.abbr,
    linkGitHub: linksGitHub.kactusKraft,
    linkWeb: linksWeb.kactusKraft,
    technologies: [
      css3,
      react,
      javascript,
      html5
    ],
    keyName: 'kactusKraft',
    type: frontend,
    preview: `${projectPreviewUrl}kactusKraft.webp`
  },
  tsDo: {
    name: 'Ts Do',
    technology: typescript.name,
    color: typescript.abbr,
    linkGitHub: linksGitHub.tsDo,
    linkWeb: linksWeb.tsDo,
    technologies: [
      css3,
      react,
      typescript,
      tailwindcss
    ],
    keyName: 'tsDo',
    type: frontend,
    preview: `${projectPreviewUrl}tsDo.webp`
  },
  button: {
    name: 'The button',
    technology: javascript.name,
    color: javascript.abbr,
    linkGitHub: linksGitHub.button,
    linkWeb: linksWeb.button,
    technologies: [
      css3,
      html5,
      javascript,
      tailwindcss
    ],
    keyName: 'button',
    type: frontend,
    preview: `${projectPreviewUrl}button.webp`
  },
  wapiw: {
    name: 'WapiW',
    technology: javascript.name,
    color: javascript.abbr,
    linkGitHub: linksGitHub.wapiw,
    keyName: 'wapiw',
    type: backend
  },
  tictactoe: {
    name: 'TicTacToe',
    technology: javascript.name,
    color: javascript.abbr,
    linkGitHub: linksGitHub.tictactoe,
    linkWeb: linksWeb.tictactoe,
    technologies: [
      css3,
      react,
      javascript,
      tailwindcss
    ],
    keyName: 'tictactoe',
    type: frontend,
    preview: `${projectPreviewUrl}ticTacToe.webp`
  },
  kctsExpressGenerator: {
    name: 'Kcts-Express-Generator',
    technology: typescript.name,
    color: typescript.abbr,
    linkGitHub: linksGitHub.kctsExpressGenerator,
    keyName: 'kctsExpressGenerator',
    type: backend
  },
  backGame2048: {
    name: '2048',
    technology: express.name,
    color: express.abbr,
    linkGitHub: linksGitHub.backGame2048,
    keyName: 'backGame2048',
    type: backend
  } as const
}
