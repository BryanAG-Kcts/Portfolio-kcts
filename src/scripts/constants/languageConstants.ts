import { createContext } from 'react'
import { ILanguageContext } from './languageInterfaces'

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

export const languageContext = createContext<ILanguageContext>({} as ILanguageContext)
