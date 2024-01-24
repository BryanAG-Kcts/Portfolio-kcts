export const tailwindColorsTechnolgies = {
  ts: 'dk-color-blue-100',
  js: 'lt-color-yellow-100',
  html: 'dk-color-red-100',
  css3: 'dk-color-blue-100',
  react: 'lt-color-blue-100',
  node: 'lt-color-green-100',
  express: 'black',
  java: 'dk-color-red-100'
}

export type TailwindColorsTechnolgies = keyof typeof tailwindColorsTechnolgies

export const getColorsTechnologie = (technologie: TailwindColorsTechnolgies) => tailwindColorsTechnolgies[technologie]
