import { useParams } from 'react-router-dom'
import { usePDF } from '../../hooks/usePDF'
import { ShowPDF } from '../../scripts/helpers/showPDF/showPDF'
import { getCertificate } from '../../scripts/constants/pdfConstants'

export const Certificate = () => {
  const { certificate } = useParams()
  const certificateLink = getCertificate(certificate)
  const { pdf } = usePDF(certificateLink)

  if (!certificate) return null

  return (
    <ShowPDF pdf={pdf} />
  )
}
