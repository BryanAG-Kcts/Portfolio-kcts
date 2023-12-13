import { technologie } from '../../hooks/Ilanguage'
interface TechnologieProps {
    technologie : technologie
}
export function Technologie ({ technologie } : TechnologieProps) {
  const { icon, name } = technologie
  return (
    <span className='relative flex flex-col items-center justify-center p-4 text-center transition-transform bg-white rounded-lg select-none hover:scale-105 ssm:hover:scale-95 cardContentDarkmode'>
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
      {technologies.map(technologie => <Technologie key={technologie.name} technologie={technologie} />)}
    </div>
  )
}
