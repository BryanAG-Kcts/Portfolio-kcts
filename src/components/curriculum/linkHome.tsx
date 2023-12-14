import { Link } from 'react-router-dom'
import goBack from '../../assets/images/icons/return.svg'

export const LinkHome = () => {
  return (
    <Link to='/' className='absolute bottom-0 right-0 m-5 pulseHover z-10'>
      <picture className='bg-white p-3 w-16 h-16 block rounded-full overflow-hidden'>
        <img className='w-full h-full' src={goBack} alt='<--' />
      </picture>
    </Link>
  )
}
