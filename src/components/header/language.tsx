import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { language, languages } from '../../locales/ILanguage'

interface ILanguage {
    language : language
}
export const Language = ({ language } : ILanguage) => {
  const { languages, title } = language
  const { selectedLanguage } = useContext(languageContext)

  return (
    <div defaultValue={selectedLanguage} className='cursor-pointer hoverToModal relative border-b flex-1'>
      <p>{title}</p>

      <ul className='modalsection boxCol hidden cardContentDarkmode z-50'>
        {languages.map(language => <LanguageOption languageOption={language} key={language.value} />)}
      </ul>
    </div>
  )
}

interface ILanguageOption {
    languageOption : languages[0]
}

export const LanguageOption = ({ languageOption } : ILanguageOption) => {
  const { name, value } = languageOption
  const { handleSelectLanguage, selectedLanguage } = useContext(languageContext)

  const handleChange = () => {
    handleSelectLanguage(value)
  }

  const isSelected = selectedLanguage === value ? 'bg-lt-color-green-100' : ''

  return (
    <li onClick={handleChange} className={`p-2 ${isSelected} rounded hover:opacity-75 hover:bg-dk-color-gray-100`}>
      {name}
    </li>
  )
}
