import { technologie } from '../../hooks/Ilanguage'
import { Technologies } from '../skills/technologies'

interface AlertTechnologiesProps {
  technologies : technologie[]
}

export function AlertTechnologies ({ technologies } : AlertTechnologiesProps) {
  return (
    <div className='w-full p-3'>
      <Technologies technologies={technologies} />
    </div>
  )
}
