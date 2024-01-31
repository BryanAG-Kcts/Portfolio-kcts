import { technologies } from '../../locales/ILanguage'
import { Technologies } from '../skills/technologies'

interface AlertTechnologiesProps {
  technologies : technologies
}

export function AlertTechnologies ({ technologies } : AlertTechnologiesProps) {
  return (
    <div className='w-full p-3'>
      <Technologies technologies={technologies} />
    </div>
  )
}
