import { useContext, useEffect, useRef } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { Technologies } from './technologies'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export function Skill () {
  const { skill } = useContext(languageContext)
  const { name, skills } = skill
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (element.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element.current,
            start: 'top bottom',
            end: 'bottom top'
          }
        })

        tl.fromTo('.technologie-square', {
          x: (index) => gsap.utils.random(-50 * (index + 1), 50 * (index + 1)),
          opacity: 0,
          rotate: 20,
          y: (index) => gsap.utils.random(-50 * (index + 1), 50 * (index + 1))
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          y: 0,
          ease: 'elastic.out(1, 0.7)',
          duration: 1,
          stagger: { each: 0.1, from: 'random' }
        })
      }
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <section>
      <div ref={element} className='flex flex-col gap-4'>
        <TitleGenerator>{name}</TitleGenerator>
        <Technologies technologies={skills} />
      </div>
    </section>
  )
}
