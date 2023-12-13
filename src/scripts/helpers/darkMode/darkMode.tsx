import { useState } from 'react'
import { themeIcon } from './darkModeConstants'
import { FadeButtonIconImg } from '../fadeIcon/fadeIconButton'

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
    <FadeButtonIconImg fn={changeDarkMode} primaryIcon={primaryIcon} secondaryIcon={secondaryIcon} />
  )
}
