import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { WorkExperiences } from './workExperience'

import './experience.css'

export const Experience = () => {
  const { experience } = useContext(languageContext)

  if (!experience) return null

  const { experience: experiences, title } = experience

  return (
    <section className='greatSection bg-slate-100 font-quickSand p-4 sectionContentDarkmode'>
      <TitleGenerator>
        {title}
      </TitleGenerator>
      <WorkExperiences experiences={experiences} />
    </section>
  )
}
