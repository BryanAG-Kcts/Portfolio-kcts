import { header } from '../../components/scripts/hooks/Ilanguage'
import { FadeIconText } from './fadeIcon'

interface FadeAnchorIconTextProps {
  iconText : header
}

export const FadeAnchorIconText = ({ iconText } : FadeAnchorIconTextProps) => {
  const { icon, link, name } = iconText

  return (
    <a href={link} className='relative flex items-center justify-center w-full iconTextContainer'>
      <FadeIconText icon={icon} name={name} />
    </a>
  )
}

interface FadeAnchorIconTextsProps {
  iconTexts : header[]
}

export const FadeAnchorIconTexts = ({ iconTexts } : FadeAnchorIconTextsProps) => {
  return (
    <section className='flex flex-col justify-around flex-1 gap-4'>
      {
        iconTexts.map(iconText => <FadeAnchorIconText key={iconText.name} iconText={iconText} />)
      }
    </section>
  )
}
