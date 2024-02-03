import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { GithubProjects } from './gitHubProjects'

export function Project () {
  const { project } = useContext(languageContext)
  const { nameGithub, projects } = project

  return (
    <div className='flex flex-col gap-4 items-center flex-1 lg:flex-[2]'>
      <TitleGenerator>
        {nameGithub}
      </TitleGenerator>
      <GithubProjects githubProjects={projects} />
    </div>
  )
}
