import { usePDF } from '../../hooks/usePDF'
import { ShowPDF } from '../../scripts/helpers/showPDF/showPDF'
import { cvLinks } from '../../scripts/constants/pdfConstants'
export const Curriculum = () => {
  const { pdf } = usePDF(cvLinks.cv)

  if (!pdf) {
    return
  }

  return (
    <ShowPDF pdf={pdf} />
  )
}
