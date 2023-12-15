import { useContext } from 'react'
import { languageContext, nextLanguage } from '../../scripts/constants/languageConstants'
import { FadeButtonIconText } from '../../scripts/helpers/fadeIcon/fadeIconButton'
import { FadeAnchorIconTexts } from '../../scripts/helpers/fadeIcon/fadeIconAnchor'
import { DarkMode } from '../../scripts/helpers/darkMode/darkMode'
import './header.css'

export function Header () {
  const { header, setSelectedLanguage, selectedLanguage } = useContext(languageContext)

  if (!header) {
    return null
  }

  const auxHeader = header.slice(0, header.length - 1)
  const changeLanguage = header[header.length - 1]
  const nextLanguageName = nextLanguage[selectedLanguage]

  return (
    <>
      <span className='fixed z-50 w-16 h-screen hoverHeaderContent colorBeforeDarkmode' />
      <header className='fixed z-40 h-screen gap-3 p-5 transition-transform headerContent '>
        <FadeAnchorIconTexts iconTexts={auxHeader} />

        <div className='flex flex-col gap-12'>
          <FadeButtonIconText fn={() => setSelectedLanguage(nextLanguageName)} iconText={changeLanguage} />
          <DarkMode />
        </div>
      </header>

    </>
  )
}
