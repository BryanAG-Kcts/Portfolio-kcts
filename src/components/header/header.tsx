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

      <div className='flex flex-1 justify-between'>
        <p className='text-3xl font-semibold sm:text-left select-none'>
          Kactus
          <span className='text-lt-color-green-100'>wow.</span>
        </p>
        <div className='sm:hidden'><DarkMode /></div>
      </div>

      <nav className='flex flex-1 flex-wrap gap-4 navHeader items-center'>
        <Sections section={section} />
        <Language language={language} />
      </nav>

      <div className='sm:flex justify-center hidden'>
        <DarkMode />
      </div>
    </header>
  )
}
