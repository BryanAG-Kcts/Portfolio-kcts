import { Suspense, lazy } from 'react'

import { Hero } from './hero/hero'
import { Skill } from './skills/skill'
import { Project } from './projects/project'
import { Information } from './information/information'
import { Header } from './header/header'
import { Footer } from './footer/footerPage'
import { Experience } from './experience/experience'
import { MetaPortfolio } from './metaPortfolio'

const Gallery = lazy(() => import('./gallery/gallery'))
const AboutMe = lazy(() => import('./about/aboutMe'))

export function Portfolio () {
  return (
    <>
      <MetaPortfolio />
      <Header />
      <Hero />

      <section id='mainContent' className='greatSection p-2 sectionContentDarkmode'>
        <Experience />

        <div className='flex flex-col w-full gap-6 p-3 rounded-lg sectionContentDarkmode bg-slate-100 md:flex-row'>
          <nav className='flex flex-col items-center flex-1 gap-6'>
            <Skill />
            <Information />
          </nav>
          <Project />
        </div>

        <Suspense fallback={null}>
          <Gallery />

          <div id='aboutContent' className='w-full bg-slate-100 rounded-lg sectionContentDarkmode'>
            <AboutMe />
          </div>
        </Suspense>
      </section>

      <Footer />

    </>
  )
}
