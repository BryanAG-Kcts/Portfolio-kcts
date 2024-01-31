import { useState } from 'react'
import { languages } from '../scripts/constants/languageConstants'
import { possibleLanguages } from '../scripts/constants/languageInterfaces'
import { locales } from '../locales/main'

export function useLanguage () {
  const [selectedLanguage, setSelectedLanguage] = useState <possibleLanguages>(languages.es)
  const [language, setLanguage] = useState(locales.es)
  const handleSelectLanguage = (language : possibleLanguages) => {
    setSelectedLanguage(language)
    setLanguage(locales[language])
  }

  return {
    ...language,
    setLanguage,
    selectedLanguage,
    handleSelectLanguage
  }
}
