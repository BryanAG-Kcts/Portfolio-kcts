import { header } from '../../components/scripts/hooks/Ilanguage'
import { FadeIconText, FadeIconImg } from './fadeIcon'
import { fadeIconImg } from './fadeIconTypes'

interface FadeButtonIconTextProps {
  iconText: header
  fn: () => void
}

export const FadeButtonIconText = ({ fn, iconText } : FadeButtonIconTextProps) => {
  const { icon, name } = iconText

  return (
    <button onClick={fn} className='relative flex items-center justify-center w-full iconTextContainer'>
      <FadeIconText icon={icon} name={name} />
    </button>
  )
}

interface FadeButtonIconImgProps extends fadeIconImg {
  fn: () => void
}

export const FadeButtonIconImg = ({ fn, primaryIcon, secondaryIcon } : FadeButtonIconImgProps) => {
  return (
    <button onClick={fn} className='relative flex items-center justify-center w-full iconImgContainer'>
      <FadeIconImg primaryIcon={primaryIcon} secondaryIcon={secondaryIcon} />
    </button>
  )
}
