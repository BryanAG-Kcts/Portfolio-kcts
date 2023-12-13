import { ReactNode } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { languageContext } from '../constants/languageConstants'

interface LanguageContextProps {
  children: ReactNode
}

export function LanguageContext ({ children }: LanguageContextProps) {
  const { header, hero, information, project, skill, setSelectedLanguage, setLanguage, selectedLanguage } = useLanguage()

  return (
    <languageContext.Provider value={{ header, hero, information, project, skill, setSelectedLanguage, setLanguage, selectedLanguage }}>
      {children}
    </languageContext.Provider>
  )
}
