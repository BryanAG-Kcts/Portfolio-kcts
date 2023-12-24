import { usePDF } from '../../hooks/usePDF'
import { ShowPDF } from '../../scripts/helpers/showPDF/showPDF'
import { cvLinks } from '../../scripts/constants/pdfConstants'
import { LoaderPage } from '../loaderComponent/loader'
export const Curriculum = () => {
  const { pdf } = usePDF(cvLinks.cv)

  if (!pdf) return <LoaderPage />

  return (
    <ShowPDF pdf={pdf} />
  )
}
