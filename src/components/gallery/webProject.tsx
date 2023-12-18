import { CSSProperties } from 'react'
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
        webProjects.map((webProject, index) => <WebProject key={webProject.name} webProject={webProject} anchorText={anchorText} index={index} />)
      }
    </div>
  )
}

interface WebProjectProps {
  webProject: project
  anchorText: string
  index: number
}

export function WebProject ({ webProject, anchorText, index } : WebProjectProps) {
  const { name, linkWeb, desc, color, technologies, preview } = webProject

  if (!linkWeb) return null

  const colorTechnologie = getColorsTechnologie(color)

  const customStyles = {
    '--delayEntry': `${index * 2}%`,
    '--delayCover': `${index * 4}%`
  } as CSSProperties

  return (
    <div className='relative flex flex-col max-w-sm gap-3 p-2 bg-white rounded-lg cardContentDarkmode reveal' style={customStyles}>

      <div className='flex flex-col justify-between gap-3'>
        <picture className='overflow-hidden rounded-lg'>
          <img className='object-cover w-full h-full ease-in scaleImage aspect-square' src={preview} alt={name} />
        </picture>

        <div className='flex items-center gap-7'>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <PulsationCircle color={colorTechnologie} />
        </div>

      </div>

      <div className='flex-1 gridTechnologie '>

        <div className='flex flex-col justify-between gap-3'>

          <p>{desc}</p>

          <AnchorGrow href={linkWeb} title={anchorText} />

        </div>

        <div className='flex items-center flex-1 rounded-lg bg-slate-100 sectionContentDarkmode'>
          <AlertTechnologies technologies={technologies} />
        </div>
      </div>

    </div>
  )
}
