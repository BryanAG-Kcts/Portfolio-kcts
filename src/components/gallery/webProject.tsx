import { project } from '../../hooks/Ilanguage'
import { getColorsTechnologie } from '../projects/colorTechnologie'
import { AlertTechnologies } from './alertTechnologies'
import { AnchorGrow } from '../../scripts/helpers/anchorGrow'
import { PulsationCircle } from '../../scripts/helpers/pulsationCircle'

interface WebProjectsProps {
  webProjects: project[]
  anchorText: string
}

export function WebProjects ({ webProjects, anchorText } : WebProjectsProps) {
  return (
    <div className='flex flex-wrap justify-center gap-3 p-2 font-quickSand'>
      {
        webProjects.map(webProject => <WebProject key={webProject.name} webProject={webProject} anchorText={anchorText} />)
      }
    </div>
  )
}

interface WebProjectProps {
  webProject: project
  anchorText: string
}

export function WebProject ({ webProject, anchorText } : WebProjectProps) {
  const { name, linkWeb, desc, color, technologies, preview, type, linkGitHub } = webProject

  if (type === 'backend' || !linkWeb) return null

  const colorTechnologie = getColorsTechnologie(color)

  return (
    <div className='relative flex flex-col max-w-sm gap-3 p-2 bg-white rounded-lg cardContentDarkmode'>

      <div className='flex flex-col justify-between gap-3'>
        <picture className='overflow-hidden rounded-lg'>
          <img decoding='async' loading='lazy' className='object-cover w-full h-full ease-in scaleImage aspect-square' src={preview} alt={name} />
        </picture>

        <div className='flex items-center gap-7'>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <PulsationCircle color={colorTechnologie} />
        </div>

      </div>

      <div className='flex-1 gridTechnologie '>

        <div className='flex flex-col justify-between gap-5'>

          <p>{desc}</p>

          <div className='flex flex-wrap anchorsGallery gap-2'>
            <AnchorGrow href={linkWeb} title={anchorText} />
            <AnchorGrow href={linkGitHub} title='Github' />
          </div>
        </div>

        <div className='flex items-center flex-1 rounded-lg bg-slate-100 sectionContentDarkmode'>
          <AlertTechnologies technologies={technologies} />
        </div>
      </div>

    </div>
  )
}
