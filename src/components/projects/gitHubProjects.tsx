import { getColorsTechnology } from './colorTechnologie'
import { PulsationCircle } from '../../scripts/helpers/pulsationCircle'
import { projects } from '../../locales/ILanguage'
interface GithubProjectsProps {
    githubProjects: projects
}

export function GithubProjects ({ githubProjects }: GithubProjectsProps) {
  return (
    <section className='flex flex-wrap justify-center w-full gap-3'>
      {
        githubProjects.map(githubProject => <GithubProject key={githubProject.keyName} gitHubProject={githubProject} />)
      }
    </section>
  )
}

interface GithubProjectProps {
    gitHubProject: projects[0]
}

export function GithubProject ({ gitHubProject } : GithubProjectProps) {
  const { name, color, linkGitHub, technology, desc, type } = gitHubProject

  if (type === 'frontend') return

  const colorTailwind = getColorsTechnology(color)

  return (
    <a href={linkGitHub} target='_blank' rel='noreferrer' className='relative bg-white rounded-2xl px-5 py-7 min-w-[200px] max-w-[600px] flex-1 lg:min-w-[400px] shadow-lg transition-transform hover:scale-[101%] hover:z-10 ssm:hover:scale-95 cardContentDarkmode'>

      <div className='flex flex-col gap-2 mb-7 font-quickSand'>
        <h3 className='font-semibold'>{name}</h3>
        <p>{desc}</p>
      </div>

      <div className='absolute flex items-center gap-4 bottom-5 right-5'>
        <PulsationCircle color={colorTailwind} />
        <p className='text-sm font-semibold font-quickSand'>{technology}</p>
      </div>
    </a>
  )
}
