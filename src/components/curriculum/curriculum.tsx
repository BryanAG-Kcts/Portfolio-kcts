import { usePDF } from '../../hooks/usePDF'
import { ShowPDF } from '../../scripts/helpers/showPDF/showPDF'
import { cvLinks } from '../../scripts/constants/pdfConstants'
import { LoaderPage } from '../loaderComponent/loader'
import { MetaCurriclum } from './metaCurriclum'
export const Curriculum = () => {
  const { pdf } = usePDF(cvLinks.cv)

  if (!pdf) return <LoaderPage />

  return (
    <>
      <MetaCurriclum />
      <ShowPDF pdf={pdf} />
    </>
  )
}
