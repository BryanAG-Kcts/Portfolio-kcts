import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'

export const About = () => {
  const { about } = useContext(languageContext)

  if (!about) return null

  const { title, paragraphs } = about

  return (
    <article className='flex flex-col p-2 gap-3 rounded-lg'>
      <TitleGenerator>{title}</TitleGenerator>

      {
        paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)
      }
    </article>
  )
}
