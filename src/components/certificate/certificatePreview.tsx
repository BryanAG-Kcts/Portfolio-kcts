import { certificate } from '../../hooks/ICertificate'
import { LinkGrow } from '../../scripts/helpers/anchorGrow'

interface CertificatesPreviewProps {
    certificates : certificate[]
}

export const CertificatesPreview = ({ certificates } : CertificatesPreviewProps) => {
  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {
        certificates.map(certificate => <CertificatePreview certificate={certificate} key={certificate.name} />)
      }
    </section>
  )
}

interface CertificatePreviewProps {
    certificate : certificate
}

export const CertificatePreview = ({ certificate } : CertificatePreviewProps) => {
  const { img, name } = certificate

  return (
    <div className='flex flex-col gap-4 p-3 rounded-lg max-w-xl bg-slate-100'>
      <picture className='rounded-lg overflow-hidden flex-1'>
        <img src={img} alt={name} className='hover:scale-110 transition-transform w-full h-full object-cover' />
      </picture>

      <LinkGrow href={`/certificate/${name}`} title={name} />

    </div>
  )
}
