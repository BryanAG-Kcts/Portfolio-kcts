import { project } from '../../hooks/Ilanguage'
import { getColorsTechnologie } from './colorTechnologie'
import { PulsationCircle } from '../../scripts/helpers/pulsationCircle'
interface GithubProjectsProps {
    githubProjects: project[]
}

export function GithubProjects ({ githubProjects }: GithubProjectsProps) {
  return (
    <section className='flex flex-wrap justify-center w-full gap-3'>
      {
        githubProjects.map(githubProject => <GithubProject key={githubProject.name} gitHubProject={githubProject} />)
      }
    </section>
  )
}

interface GithubProjectProps {
    gitHubProject: project
}

export function GithubProject ({ gitHubProject } : GithubProjectProps) {
  const { name, color, linkGitHub, technologie, desc } = gitHubProject
  const colorTailwind = getColorsTechnologie(color)

  return (
    <a href={linkGitHub} target='_blank' rel='noreferrer' className='relative bg-white rounded-2xl px-5 py-7 min-w-[200px] max-w-[600px] flex-1 lg:min-w-[400px] shadow-lg transition-transform hover:scale-[101%] hover:z-10 ssm:hover:scale-95 cardContentDarkmode reveal'>

      <div className='flex flex-col gap-2 mb-7 font-quickSand'>
        <h3 className='font-semibold'>{name}</h3>
        <p>{desc}</p>
      </div>

      <div className='absolute flex items-center gap-4 bottom-5 right-5'>
        <PulsationCircle color={colorTailwind} />
        <p className='text-sm font-semibold font-quickSand'>{technologie}</p>
      </div>
    </a>
  )
}
