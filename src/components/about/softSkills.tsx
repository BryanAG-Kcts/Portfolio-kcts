import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { UlGenerator } from '../../scripts/helpers/ulGenrator/ulGenerator'

export const SoftSkills = () => {
  const { softSkill } = useContext(languageContext)

  if (!softSkill) return null

  const { paragraph, softSkills, title } = softSkill

  return (
    <section className='rounded-lg p-2 flex flex-col gap-3'>
      <TitleGenerator>
        {title}
      </TitleGenerator>

      <article>
        <p className='mb-4'>{paragraph}</p>
        <UlGenerator texts={softSkills} />
      </article>
    </section>
  )
}
