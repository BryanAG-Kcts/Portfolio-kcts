import { createContext } from 'react'
import { ILanguageContext, possibleLanguages } from './languageInterfaces'
import { ILanguage } from '../../hooks/Ilanguage'

export const languagesUrl = {
  es: 'https://portafolio-kcts.vercel.app/langs/es',
  en: 'https://portafolio-kcts.vercel.app/langs/en'
}

export const languages = {
  es: 'es',
  en: 'en'
} as const

export const nextLanguage = {
  es: languages.en,
  en: languages.es
}

export const getLanguageFromStore = (language: possibleLanguages) => {
  const cachedLanguage = localStorage.getItem(`language:${language}`)
  if (cachedLanguage) {
    return JSON.parse(cachedLanguage) as ILanguage
  }

  return {} as ILanguage
}

export const languageContext = createContext<ILanguageContext>({} as ILanguageContext)
