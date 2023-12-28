import { CSSProperties } from 'react'
import { technologie } from '../../hooks/Ilanguage'

interface TechnologieProps {
    technologie : technologie
    index: number
}
export function Technologie ({ technologie, index } : TechnologieProps) {
  const { icon, name } = technologie

  const customStyles = {
    '--delayEntry': `${index * 0.5 + 5}%`,
    '--delayCover': `${index * 1 + 10}%`
  } as CSSProperties

  return (
    <span className='relative flex flex-col items-center justify-center p-4 text-center transition-transform bg-white rounded-lg select-none hover:scale-105 ssm:hover:scale-95 cardContentDarkmode reveal' style={customStyles}>
      <img src={icon} alt={name} className='object-cover w-16 h-16' />
    </span>
  )
}

interface TechnologiesProps {
  technologies : technologie[]
}
export function Technologies ({ technologies }: TechnologiesProps) {
  return (
    <div className='flex flex-wrap justify-center w-full gap-3'>
      {technologies.map((technologie, index) => <Technologie key={technologie.name} technologie={technologie} index={index} />)}
    </div>
  )
}
