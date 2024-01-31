import { CSSProperties } from 'react'
import { ReactSVG } from 'react-svg'
import { technologies } from '../../locales/ILanguage'

interface TechnologieProps {
    technologie : technologies[0]
    index: number
}
export function Technologie ({ technologie, index } : TechnologieProps) {
  const { icon, name } = technologie

  const customStyles = {
    '--delayEntry': '5%',
    '--delayCover': `${index * 1.25 + 7}%`
  } as CSSProperties

  return (
    <span className='relative flex flex-col items-center justify-center p-4 text-center transition-transform bg-white rounded-lg select-none hover:scale-105 ssm:hover:scale-95 cardContentDarkmode reveal' style={customStyles}>
      <ReactSVG title={name} desc={name} src={icon} className='w-16 h-16' />
    </span>
  )
}

interface TechnologiesProps {
  technologies : technologies
}
export function Technologies ({ technologies }: TechnologiesProps) {
  return (
    <div className='flex flex-wrap justify-center w-full gap-3'>
      {technologies.map((technologie, index) => <Technologie key={technologie.name} technologie={technologie} index={index} />)}
    </div>
  )
}
