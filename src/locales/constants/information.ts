import { technologieIconUrl } from './technologies'

export const noLink = '#'

export const informationKeyNames = {
  name: 'name',
  located: 'located',
  github: 'github',
  email: 'email',
  linkedin: 'linkedin',
  university: 'university'
} as const

export type informationKeyNamesType = keyof typeof informationKeyNames

interface IInformation {
    answer : string
    link : string
    select : boolean,
    keyName: informationKeyNamesType,
    icon: string
}

export const informationIconsUrl = 'https://portafolio-kcts.vercel.app/images/assets/'

export const informationBody : Record<string, IInformation> = {
  name: {
    answer: 'Bryan David Álvarez Galvis',
    link: noLink,
    select: false,
    keyName: informationKeyNames.name,
    icon: `${informationIconsUrl}avatarUser.svg`
  },
  located: {
    answer: 'Norte de Santander, Ocaña',
    link: noLink,
    select: false,
    keyName: informationKeyNames.located,
    icon: `${informationIconsUrl}location.svg`
  },
  github: {
    answer: 'BryanAG-Kcts',
    link: 'https://github.com/BryanAG-Kcts',
    select: true,
    keyName: informationKeyNames.github,
    icon: `${technologieIconUrl}github.svg`
  },
  email: {
    answer: 'bryanalvarezg.kcts@gmail.com',
    link: 'mailto:bryanalvarezg.kcts@gmail.com',
    select: true,
    keyName: informationKeyNames.email,
    icon: `${informationIconsUrl}email.svg`
  },
  linkedin: {
    answer: 'BryanAG-Kcts',
    link: 'https://www.linkedin.com/in/bryanag-kcts',
    select: true,
    keyName: informationKeyNames.linkedin,
    icon: `${technologieIconUrl}linkedin.svg`
  },
  university: {
    answer: 'Ufpso',
    link: 'https://www.facebook.com/UFPSO/?locale=es_LA',
    select: true,
    keyName: informationKeyNames.university,
    icon: `${informationIconsUrl}university.svg`
  }
}
