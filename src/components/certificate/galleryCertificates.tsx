import { Page404 } from '../../404 page/page404'
import { useCertificate } from '../../hooks/useCertificate'
import { DarkMode } from '../../scripts/helpers/darkMode/darkMode'
import { LinkHome } from '../../scripts/helpers/showPDF/linkHome'
import { TitleGenerator } from '../../scripts/helpers/titleGenerator'
import { LoaderPage } from '../loaderComponent/loader'
import { CertificatesPreview } from './certificatePreview'
import { MetaGallery } from './metaGallery'

export const GalleryCertificates = () => {
  const { title, paragraph, isLangValid, certificates } = useCertificate()

  if (!isLangValid) return <Page404 />
  if (!title) return <LoaderPage />

  return (
    <>
      <MetaGallery />
      <main className='flex flex-col items-center py-7 font-quickSand gap-7 px-3 bgPolygonal relative overflow-x-hidden'>
        <article className='text-white'>
          <TitleGenerator>{title}</TitleGenerator>
          <p className='text-center my-3'>{paragraph}</p>
        </article>

        <CertificatesPreview certificates={certificates} />

        <div className='fixed top-0 right-0 m-6 bg-white p-3 rounded-full sectionContentDarkmode'>
          <DarkMode />
        </div>

        <LinkHome />
      </main>
    </>
  )
}
