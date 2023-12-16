import { About } from './about'
import { SoftSkills } from './softSkills'
import perfil from '../../assets/images/herobg.svg'
import { LinkGrow } from '../../scripts/helpers/anchorGrow'

export const AboutMe = () => {
  return (
    <main className='font-quickSand p-4 flex flex-col gap-4 mx-auto md:flex-row-reverse max-w-6xl mt-5 reveal'>

      <section className='flex flex-col gap-4 lg:flex-1'>

        <img className='aspect-square object-cover rounded-lg max-w-sm w-full mx-auto' src={perfil} alt='🌵' />
        <LinkGrow href='/cv' title='cv' />

      </section>

      <section className='md:flex-1 lg:flex-[2]'>
        <About />
        <SoftSkills />
      </section>
    </main>
  )
}
