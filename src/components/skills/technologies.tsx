import { ReactSVG } from 'react-svg'
import { technologies } from '../../locales/ILanguage'

interface TechnologieProps {
    technologie : technologies[0]
}
export function Technologie ({ technologie } : TechnologieProps) {
  const { icon, name } = technologie

  return (
    <span title={name} className='p-4 bg-white rounded-lg select-none  cardContentDarkmode technologie-square'>
      <ReactSVG title={name} desc={name} src={icon} className='w-16 h-16' />
    </span>
  )
}

interface TechnologiesProps {
  technologies : technologies
}
export function Technologies ({ technologies }: TechnologiesProps) {
  return (
    <div className='flex flex-wrap justify-center w-full gap-3 technologie-square-container'>
      {technologies.map(technologie => <Technologie key={technologie.name} technologie={technologie} />)}
    </div>
  )
}
