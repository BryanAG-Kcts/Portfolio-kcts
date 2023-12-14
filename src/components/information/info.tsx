import { info } from '../../hooks/Ilanguage'
import { ReactSVG } from 'react-svg'

const pointerEvents = {
  none: {
    pointerEvents: 'none'
  },
  all: {
    pointerEvents: 'all'
  }
} as const

interface InfosProps {
  infos: info[]
}
export function Infos ({ infos }: InfosProps) {
  return (
    <>
      {
        infos.map(info => <Info key={info.name} info={info} />)
      }
    </>
  )
}

interface InfoProps {
  info: info
}
export function Info ({ info } : InfoProps) {
  const { select, answer, icon, link, name } = info
  const pointer = select ? 'all' : 'none'
  const pointerEvent = pointerEvents[pointer]

  return (
    <span className='flex justify-between gap-5'>

      <div className='flex items-center gap-3'>
        <ReactSVG src={icon} className='w-4 h-4' />
        <p className='whitespace-nowrap'>{name} :</p>
      </div>

      <a href={link} target='_blank' className='font-medium truncate duration-150 hover:text-lt-color-green-100' rel='noreferrer noopener' style={pointerEvent}>{answer}</a>

    </span>
  )
}
