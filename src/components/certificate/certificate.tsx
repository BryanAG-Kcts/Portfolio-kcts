import { useParams } from 'react-router-dom'
import { usePDF } from '../../hooks/usePDF'
import { ShowPDF } from '../../scripts/helpers/showPDF/showPDF'
import { getCertificate } from '../../scripts/constants/pdfConstants'
import { LoaderPage } from '../loaderComponent/loader'
import { MetaCertificate } from './metaCertificate'

export const Certificate = () => {
  const { certificate } = useParams()
  const certificateLink = getCertificate(certificate)
  const { pdf } = usePDF(certificateLink)

  if (!pdf || !certificate) return <LoaderPage />

  return (
    <>
      <MetaCertificate pdf={certificate} />
      <ShowPDF pdf={pdf} />
    </>
  )
}
