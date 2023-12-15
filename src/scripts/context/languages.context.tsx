import { ReactNode } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { languageContext } from '../constants/languageConstants'

interface LanguageContextProps {
  children: ReactNode
}

export function LanguageContext ({ children }: LanguageContextProps) {
  return (
    <languageContext.Provider value={{ ...useLanguage() }}>
      {children}
    </languageContext.Provider>
  )
}
