import { useState, useRef, useEffect } from 'react'
import { fetchDataJson } from '../scripts/helpers/fetchDataJson'
import { ILanguage } from './Ilanguage'
import { languagesUrl, languages } from '../scripts/constants/languageConstants'
import { possibleLanguages, ICachedLanguage } from '../scripts/constants/languageInterfaces'

export function useLanguage () {
  const cachedLanguages = useRef<ICachedLanguage>({
    es: {} as ILanguage,
    en: {} as ILanguage
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
    })
  }, [selectedLanguage])

  const { header, hero, information, project, skill } = language

  return {
    header,
    hero,
    information,
    project,
    skill,
    setLanguage,
    selectedLanguage,
    setSelectedLanguage
  }
}
