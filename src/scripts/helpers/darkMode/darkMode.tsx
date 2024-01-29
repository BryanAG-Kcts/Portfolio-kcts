import { useState } from 'react'
import { themeIcon } from './darkModeConstants'
import './darkmode.css'
import { ReactSVG } from 'react-svg'

export const DarkMode = () => {
  const [selectColorMode, setSelectColorMode] = useState(false)
  const { moon, sun } = themeIcon

  const changeDarkMode = () => {
    setSelectColorMode(!selectColorMode)
    document.body.classList.toggle('dark')
  }

  const primaryIcon = selectColorMode ? moon : sun
  const secondaryIcon = !selectColorMode ? moon : sun

  return (
    <button aria-label='Darkmode' className='darkmodeBtn flex relative justify-center' onClick={changeDarkMode}>
      <ReactSVG title='darkmode' desc='darkmode' className='firstIcon' src={primaryIcon.icon} />
      <ReactSVG title='darkmode' desc='darkmode' className='secondIcon' src={secondaryIcon.icon} />
    </button>
  )
}
