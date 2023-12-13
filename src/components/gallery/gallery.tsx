import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { WebProjects } from './webProject'
import './gallery.css'

export function Gallery () {
  const { project } = useContext(languageContext)
  if (!project) return null

  const { nameWeb, projects, anchorName } = project
  return (
    <section id='projectsContent' className='flex flex-col gap-4 p-4 rounded-lg bg-slate-100 sectionContentDarkmode'>
      <TitleGenerator>
        {nameWeb}
      </TitleGenerator>
      <WebProjects webProjects={projects} anchorText={anchorName} />
    </section>
  )
}
