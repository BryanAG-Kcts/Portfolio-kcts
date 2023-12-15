import { useContext } from 'react'

import { Hero } from './hero/hero'
import { Skill } from './skills/skill'
import { Project } from './projects/project'
import { Information } from './information/information'
import { Gallery } from './gallery/gallery'
import { Header } from './header/header'

import { languageContext } from '../scripts/constants/languageConstants'

export function Portfolio () {
  const { isLoading } = useContext(languageContext)

  if (isLoading) return null

  return (
    <>
      <Header />
      <Hero />

      <section id='mainContent' className='flex flex-col gap-4 p-2 sectionContentDarkmode'>
        <div className='flex flex-col w-full gap-6 p-3 rounded-lg sectionContentDarkmode bg-slate-100 md:flex-row'>
          <nav className='flex flex-col items-center flex-1 gap-6'>
            <Skill />
            <Information />
          </nav>
          <Project />
        </div>

        <Gallery />
      </section>
    </>
  )
}
