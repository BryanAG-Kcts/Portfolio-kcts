import { ReactSVG } from 'react-svg'
import { technologies } from '../../locales/ILanguage'
import { useEffect, useRef } from 'react'
import { mouseInHover, mouseOutHover } from './hoverTechnologie'

interface TechnologieProps {
    technologie : technologies[0]
}
export function Technologie ({ technologie } : TechnologieProps) {
  const { icon, name } = technologie
  const spanTechnologie = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const currentSpanTechnologie = spanTechnologie.current
    if (currentSpanTechnologie === null) return

    const handleMouseEnter = () => mouseInHover(currentSpanTechnologie)
    const handleMouseLeave = () => mouseOutHover(currentSpanTechnologie)

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      mouseInHover(currentSpanTechnologie)
    }
    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      mouseOutHover(currentSpanTechnologie)
    }

    currentSpanTechnologie.addEventListener('mouseenter', handleMouseEnter)
    currentSpanTechnologie.addEventListener('mouseleave', handleMouseLeave)
    currentSpanTechnologie.addEventListener('touchstart', handleTouchStart)
    currentSpanTechnologie.addEventListener('touchend', handleTouchEnd)

    return () => {
      currentSpanTechnologie?.removeEventListener('mouseenter', handleMouseEnter)
      currentSpanTechnologie?.removeEventListener('mouseleave', handleMouseLeave)
      currentSpanTechnologie.removeEventListener('touchstart', handleTouchStart)
      currentSpanTechnologie.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <span ref={spanTechnologie} title={name} className='p-4 bg-white rounded-lg select-none  cardContentDarkmode technologie-square'>
      <ReactSVG title={name} desc={name} src={icon} className='w-16 h-16' />
    </span>
  )
}

interface TechnologiesProps {
  technologies : technologies
}
export function Technologies ({ technologies }: TechnologiesProps) {
  return (
    <div className='flex flex-wrap justify-center w-full gap-3 technologie-square-container'>
      {technologies.map(technologie => <Technologie key={technologie.name} technologie={technologie} />)}
    </div>
  )
}
