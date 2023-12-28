import { useState, useRef, useEffect } from 'react'
import { fetchDataJson } from '../scripts/helpers/fetchDataJson'
import { ILanguage } from './Ilanguage'
import { languagesUrl, languages, getLanguageFromStore } from '../scripts/constants/languageConstants'
import { possibleLanguages, ICachedLanguage } from '../scripts/constants/languageInterfaces'

export function useLanguage () {
  const cachedLanguages = useRef<ICachedLanguage>({
    es: getLanguageFromStore('es'),
    en: getLanguageFromStore('en')
  })

  const [language, setLanguage] = useState<ILanguage>(cachedLanguages.current.es)
  const [selectedLanguage, setSelectedLanguage] = useState <possibleLanguages>(languages.es)

  useEffect(() => {
    const cachedLanguage = cachedLanguages.current[selectedLanguage]

    if (cachedLanguage.hero) {
      setLanguage(cachedLanguage)
      return
    }

    fetchDataJson(languagesUrl[selectedLanguage]).then((data: ILanguage) => {
      setLanguage(data)
      cachedLanguages.current[selectedLanguage] = data
      sessionStorage.setItem(`language:${selectedLanguage}`, JSON.stringify(data))
    })
  }, [selectedLanguage])

  return {
    ...language,
    setLanguage,
    selectedLanguage,
    setSelectedLanguage
  }
}
