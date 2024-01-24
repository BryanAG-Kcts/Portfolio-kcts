import { languages } from './languageConstants'
import { ILanguage } from '../../hooks/Ilanguage'

export type possibleLanguages = keyof typeof languages

export interface ILanguageContext extends ILanguage{
    setSelectedLanguage: (language: possibleLanguages) => void
    setLanguage: (language: ILanguage) => void
    selectedLanguage: possibleLanguages
    setSelectedLanguageFromStore : (language: possibleLanguages) => void
}

export interface ICachedLanguage {
    es: ILanguage
    en: ILanguage
}
