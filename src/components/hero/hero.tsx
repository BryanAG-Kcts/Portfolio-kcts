import { useContext, useEffect, useRef } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import heroKcts from '../../assets/images/meHero.webp'
import './hero.css'
import { AnimationIcon } from '../../scripts/helpers/animationIcon/animationIcon'
import { gsap } from 'gsap'

export function Hero () {
  const heroContext = useContext(languageContext)
  const heroElement = useRef<HTMLDivElement>(null)
  const { hero } = heroContext

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroElement.current) {
        gsap.timeline()
          .fromTo('.bounceHello',
            {
              opacity: 0,
              y: -300,
              x: -400,
              rotate: -320
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              rotate: 0,
              duration: 1,
              ease: 'elastic.out(1, 0.3)',
              delay: 0.5
            })
          .fromTo('.hero-p-bounce',
            {
              opacity: 0,
              y: -300
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'elastic.out(1, 0.3)'
            })
      }
    }, heroElement)

    return () => ctx.revert()
  }, [])

  return (
    <section id='heroContent' className='bg-lt-color-green-100 w-full flex-col flex items-center justify-center py-10 min-h-[50vh] md:min-h-[70vh] relative font-quickSand'>
      <div className='flex flex-col items-center gap-7 md:flex-row md:gap-0 md:w-[700px] md:justify-between lg:w-[900px]'>

        <div ref={heroElement} className='flex flex-col gap-4 px-3 text-center text-white lg:text-left md:max-w-md'>
          <h1 className='text-[40px] lg:text-[50px]'>
            <div className='flex gap-3 justify-center md:justify-start'>
              {hero.title}
              <span className='bounceHello flex opacity-0'>
                <AnimationIcon>
                  👋
                </AnimationIcon>
              </span>
            </div>
            {hero.heroName}
          </h1>

          <p className='text-md sm:text-xl hero-p-bounce opacity-0'>{hero.paragraph}</p>
        </div>

        <span className='w-64 h-64 overflow-hidden rounded-lg md:w-72 md:h-72 lg:w-96 lg:h-96'>
          <img
            className='object-cover w-full h-full imgSection'
            src={heroKcts}
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
