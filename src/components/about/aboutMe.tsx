import { About } from './about'
import { SoftSkills } from './softSkills'
import aboutKcts from '../../assets/images/meAbout.webp'
import { LinkGrow } from '../../scripts/helpers/anchorGrow'
import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'

const AboutMe = () => {
  const { indie, selectedLanguage } = useContext(languageContext)
  const { cvLink, certificateLink } = indie

  return (
    <main className='font-quickSand p-4 flex flex-col gap-4 mx-auto md:flex-row-reverse max-w-6xl mt-5'>

      <section className='flex flex-col gap-4 lg:flex-1'>

        <img draggable='false' decoding='async' loading='lazy' className='aspect-square object-cover rounded-lg max-w-sm w-full mx-auto' src={aboutKcts} alt='🌵' />
        <LinkGrow href='/cv' title={cvLink} />
        <LinkGrow href={`/certificate/langs/${selectedLanguage}`} title={certificateLink} />

      </section>

      <section className='md:flex-1 lg:flex-[2]'>
        <About />
        <SoftSkills />
      </section>
    </main>
  )
}

export default AboutMe
