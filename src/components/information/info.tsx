import { ReactSVG } from 'react-svg'
import { informations } from '../../locales/ILanguage'

const pointerEvents = {
  none: {
    pointerEvents: 'none'
  },
  all: {
    pointerEvents: 'all'
  }
} as const

interface InfosProps {
  infos: informations
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
  info: informations[0]
}
export function Info ({ info } : InfoProps) {
  const { select, answer, icon, link, name } = info
  const pointer = select ? 'all' : 'none'
  const pointerEvent = pointerEvents[pointer]

  return (
    <span className='flex justify-between gap-5'>

      <div className='flex items-center gap-3'>
        <ReactSVG title={name} desc={name} src={icon} className='w-4 h-4' />
        <p className='whitespace-nowrap'>{name} :</p>
      </div>

      <a href={link} target='_blank' className='font-medium truncate duration-150 hover:text-lt-color-green-100' rel='noreferrer noopener' style={pointerEvent}>{answer}</a>

    </span>
  )
}
