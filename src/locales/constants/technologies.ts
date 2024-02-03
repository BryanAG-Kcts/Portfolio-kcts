export const technologieIconUrl = 'https://portafolio-kcts.vercel.app/images/technologies/'

export const technologies = {
  html5: {
    name: 'HTML 5',
    abbr: 'html',
    icon: `${technologieIconUrl}html5.svg`
  },
  css3: {
    name: 'CSS 3',
    abbr: 'css3',
    icon: `${technologieIconUrl}css3.svg`
  },
  javascript: {
    name: 'JavaScript',
    abbr: 'js',
    icon: `${technologieIconUrl}javascript.svg`
  },
  react: {
    name: 'React',
    abbr: 'react',
    icon: `${technologieIconUrl}react.svg`
  },
  nodejs: {
    name: 'Node.js',
    abbr: 'node',
    icon: `${technologieIconUrl}nodejs.svg`
  },
  express: {
    name: 'Express',
    abbr: 'express',
    icon: `${technologieIconUrl}express.svg`
  },
  java: {
    name: 'Java',
    abbr: 'java',
    icon: `${technologieIconUrl}java.svg`
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    abbr: 'tailwind',
    icon: `${technologieIconUrl}tailwindcss.svg`
  },
  git: {
    name: 'Git',
    abbr: 'git',
    icon: `${technologieIconUrl}git.svg`
  },
  github: {
    name: 'GitHub',
    abbr: 'gh',
    icon: `${technologieIconUrl}github.svg`
  },
  typescript: {
    name: 'TypeScript',
    abbr: 'ts',
    icon: `${technologieIconUrl}typescript.svg`
  },
  mySql: {
    name: 'MySql',
    abbr: 'mysql',
    icon: `${technologieIconUrl}mysql.svg`
  },
  sql: {
    name: 'SQL',
    abbr: 'sql',
    icon: `${technologieIconUrl}sql.svg`
  },
  next: {
    name: 'Next JS',
    abbr: 'next',
    icon: `${technologieIconUrl}next.svg`
  },
  three: {
    name: 'Three JS',
    abbr: 'three',
    icon: `${technologieIconUrl}three.svg`
  }
} as const

export type technologiesTypes = typeof technologies
export type technologyKeys = keyof typeof technologies;
export type technologiesKeysAbbreviation = {[Key in technologyKeys]: typeof technologies[Key]['abbr']}
export type technologiesAbbreviations = technologiesKeysAbbreviation[technologyKeys]
export type posibleTechnologies = technologiesTypes[technologyKeys]
