import './anchorGrow.css'

interface AnchorGrowProps {
    title: string
    href: string
}

export const AnchorGrow = ({ title, href } : AnchorGrowProps) => {
  return (
    <a href={href} target='_blank' rel='noreferrer' className='relative flex items-center justify-center p-2 overflow-hidden font-semibold border-2 rounded-lg -center border-lt-color-green-100 text-lt-color-green-100 anchorVisit '>
      <p className='z-10'>{title}</p>
    </a>
  )
}
