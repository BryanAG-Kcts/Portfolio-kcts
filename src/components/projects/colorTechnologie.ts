import { technologiesAbbreviations } from '../../locales/constants/technologies'

export const tailwindColorsTechnolgies : Record<technologiesAbbreviations, string> = {
  ts: 'dk-color-blue-100',
  js: 'lt-color-yellow-100',
  html: 'dk-color-red-100',
  css3: 'dk-color-blue-100',
  react: 'lt-color-blue-100',
  node: 'lt-color-green-100',
  express: 'black',
  java: 'dk-color-red-100',
  next: 'black',
  gh: 'black',
  git: 'black',
  tailwind: 'black',
  mysql: 'black',
  sql: 'black'
}

export const getColorsTechnologie = (technologie: technologiesAbbreviations) => tailwindColorsTechnolgies[technologie]
