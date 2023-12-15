import { fadeIconText, fadeIconImg } from './fadeIconTypes'
import { ReactSVG } from 'react-svg'
import './fadeIcon.css'

export const FadeIconText = ({ icon, name } : fadeIconText) => {
  return (
    <>
      <ReactSVG src={icon} className='absolute w-10 h-10' />
      <p className='text-lg font-semibold transition-opacity opacity-0 h-10'>{name}</p>
    </>
  )
}

export const FadeIconImg = ({ primaryIcon, secondaryIcon } : fadeIconImg) => {
  return (
    <>
      <ReactSVG src={primaryIcon.icon} className='absolute w-10 h-10 primaryIconButton' />
      <ReactSVG src={secondaryIcon.icon} className='w-10 h-10 transition-opacity opacity-0' />
    </>
  )
}
