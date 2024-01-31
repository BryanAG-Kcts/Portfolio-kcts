import { mainEs } from './langs/es/main'

export type ILanguage = typeof mainEs
export type experience = ILanguage['experience']['experience']
export type technologies = ILanguage['skill']['skills']
export type projects = ILanguage['project']['projects']
export type language = ILanguage['header']['language']
export type languages = language['languages']
export type section = ILanguage['header']['section']
export type sections = section['sections']
export type information = ILanguage['information']
export type informations = information['infos']
