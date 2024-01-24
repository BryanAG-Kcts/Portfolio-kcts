import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import './header.css'
import { Language } from './language'
import { Sections } from './sections'
import { DarkMode } from '../../scripts/helpers/darkMode/darkMode'

export function Header () {
  const { header } = useContext(languageContext)

  if (!header) {
    return null
  }

  const { language, section } = header

  return (
    <header className='sm:flex-row sm:justify-between sm:items-center cardContentDarkmode'>

      <p className='text-3xl text-center font-semibold flex-1 sm:text-left select-none'>
        Kactus
        <span className='text-lt-color-green-100'>wow.</span>
      </p>

      <nav className='flex flex-1 flex-wrap gap-4 navHeader items-center'>
        <Sections section={section} />
        <Language language={language} />
      </nav>

      <DarkMode />
    </header>
  )
}
