import { createContext } from 'react'
import { ILanguageContext } from './languageInterfaces'

export const languages = {
  es: 'es',
  en: 'en'
} as const

export const languageContext = createContext<ILanguageContext>({} as ILanguageContext)
