import { gsap } from 'gsap'

export const mouseInHover = (element : HTMLSpanElement) => {
  gsap.to(element,
    {
      scale: 1.1,
      rotate: 360,
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })
}

export const mouseOutHover = (element : HTMLSpanElement) => {
  gsap.to(element,
    {
      scale: 1,
      rotate: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.3)'

    })
}
