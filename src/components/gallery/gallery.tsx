import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { WebProjects } from './webProject'
import './gallery.css'

function Gallery () {
  const { project } = useContext(languageContext)
  if (!project) return null

  const { nameWeb, projects, anchorName } = project
  return (
    <section id='projectsContent' className='greatSection p-4 rounded-lg bg-slate-100 sectionContentDarkmode'>
      <TitleGenerator>
        {nameWeb}
      </TitleGenerator>
      <WebProjects webProjects={projects} anchorText={anchorName} />
    </section>
  )
}

export default Gallery
