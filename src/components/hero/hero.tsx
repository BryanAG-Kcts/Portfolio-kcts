import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import kactusLogo from '../../assets/images/Kactuswow.png'
import './hero.css'

export function Hero () {
  const heroContext = useContext(languageContext)
  const { hero } = heroContext
  if (!hero) return null

  return (
    <section id='heroContent' className='bg-lt-color-green-100 w-full flex-col flex items-center justify-center py-10 min-h-[50vh] md:min-h-[70vh] relative'>
      <div className='flex flex-col items-center gap-7 md:flex-row md:gap-0 md:w-[700px] md:justify-between lg:w-[900px]'>

        <div className='flex flex-col gap-4 px-3 text-center text-white md:text-left md:max-w-md'>
          <h1 className='text-[40px] lg:text-[50px] font-sans'>
            {hero.title}
            <br />
            {hero.heroName}
          </h1>

          <p className='text-md sm:text-xl'>{hero.paragraph}</p>
        </div>

        <span className='w-64 h-64 overflow-hidden rounded-lg md:w-72 md:h-72 lg:w-96 lg:h-96'>
          <img
            className='object-cover w-full h-full imgSection'
            src={kactusLogo}
            alt='Kactuswow'
          />
        </span>

      </div>
      <div className='w-full h-40' />
      <div className='air air1' />
      <div className='air air2' />
      <div className='air air3' />
      <div className='air air4' />
    </section>
  )
}
