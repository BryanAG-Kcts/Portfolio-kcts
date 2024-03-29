import { useContext } from 'react'
import { languageContext } from '../../scripts/constants/languageConstants'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { Infos } from './info'
import { LinkGrow } from '../../scripts/helpers/anchorGrow'
export function Information () {
  const { information, indie, selectedLanguage } = useContext(languageContext)
  const { name, infos } = information
  const { cvLink, certificateLink } = indie

  return (
    <section className='flex flex-col items-center w-full gap-4 font-quickSand'>
      <TitleGenerator>
        {name}
      </TitleGenerator>
      <div className='w-full max-w-[500px] flex flex-col gap-5 px-5 py-3 bg-white rounded-2xl cardContentDarkmode'>
        <Infos infos={infos} />
        <LinkGrow href='/cv' title={cvLink} />
        <LinkGrow href={`/certificate/langs/${selectedLanguage}`} title={certificateLink} />
      </div>
    </section>
  )
}
