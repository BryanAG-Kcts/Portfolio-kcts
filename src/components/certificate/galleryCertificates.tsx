import { Page404 } from '../../404 page/page404'
import { useCertificate } from '../../hooks/useCertificate'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { CertificatesPreview } from './certificatePreview'

export const GalleryCertificates = () => {
  const { title, paragraph, isLangValid, certificates } = useCertificate()

  if (!isLangValid) return <Page404 />
  if (!title) return null

  return (
    <main className='flex flex-col items-center pt-7 font-quickSand gap-5 px-3 bgGradientGreenBlue'>
      <article className='text-white'>
        <TitleGenerator>{title}</TitleGenerator>
        <p className='text-center my-3'>{paragraph}</p>
      </article>

      <CertificatesPreview certificates={certificates} />
    </main>
  )
}
