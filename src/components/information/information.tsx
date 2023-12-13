import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { Infos } from './info'
export function Information () {
  const { information } = useContext(languageContext)

  if (!information) return null

  const { name, infos } = information

  return (
    <section className='flex flex-col items-center w-full gap-4 font-quickSand'>
      <TitleGenerator>
        {name}
      </TitleGenerator>
      <Infos infos={infos} />
    </section>
  )
}
