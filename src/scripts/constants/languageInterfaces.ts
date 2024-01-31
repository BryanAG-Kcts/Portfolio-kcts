import { ILanguage } from '../../locales/ILanguage'
import { languages } from './languageConstants'

export type possibleLanguages = keyof typeof languages

export interface ILanguageContext extends ILanguage{
    handleSelectLanguage: (language: possibleLanguages) => void
    setLanguage: (language: ILanguage) => void
    selectedLanguage: possibleLanguages,
}
