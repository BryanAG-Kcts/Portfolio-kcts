import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ICertificate } from './ICertificate'
import { fetchDataJson } from '../scripts/helpers/fetchDataJson'
import { possibleLanguages } from '../scripts/constants/languageInterfaces'
import { certificateLanguagesLinks } from '../scripts/constants/certificateConstants'

export const useCertificate = () => {
  const { lang } = useParams()

  const [certificate, setCertificate] = useState({} as ICertificate)
  const selectedLang = lang as possibleLanguages || 'es'
  const langtoFetch = certificateLanguagesLinks[selectedLang]
  const isLangValid = langtoFetch !== undefined

  useEffect(() => {
    fetchDataJson(langtoFetch).then((data: ICertificate) => setCertificate(data))
  }, [selectedLang, lang, langtoFetch])

  const { certificates, paragraph, title } = certificate

  return {
    certificates,
    paragraph,
    title,
    isLangValid
  }
}
