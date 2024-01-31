import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { Technologies } from './technologies'
export function Skill () {
  const { skill } = useContext(languageContext)

  if (!skill) return null
  const { name, skills } = skill

  return (
    <div className='flex flex-col gap-4'>
      <TitleGenerator>{name}</TitleGenerator>
      <Technologies technologies={skills} />
    </div>
  )
}
