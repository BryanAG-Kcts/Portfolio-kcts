import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'

export const About = () => {
  const { about } = useContext(languageContext)

  if (!about) return null

  const { paragraph1, paragraph2, paragraph3, paragraph4, title } = about

  return (
    <article className='flex flex-col p-2 gap-3 rounded-lg'>
      <TitleGenerator>{title}</TitleGenerator>

      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <p>{paragraph3}</p>
      <p>{paragraph4}</p>
    </article>
  )
}
