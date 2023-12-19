import { CSSProperties } from 'react'
import { certificate } from '../../hooks/ICertificate'
import { LinkGrow } from '../../scripts/helpers/anchorGrow'

interface CertificatesPreviewProps {
    certificates : certificate[]
}

export const CertificatesPreview = ({ certificates } : CertificatesPreviewProps) => {
  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {
        certificates.map((certificate, index) => <CertificatePreview certificate={certificate} key={certificate.name} index={index} />)
      }
    </section>
  )
}

interface CertificatePreviewProps {
    certificate : certificate
    index: number
}

export const CertificatePreview = ({ certificate, index } : CertificatePreviewProps) => {
  const { img, name, pdf } = certificate

  const customStyles = {
    '--delayEntry': `${index}%`,
    '--delayCover': `${index * 2 + 7}%`
  } as CSSProperties

  return (
    <div className='flex flex-col gap-4 p-3 rounded-lg max-w-xl bg-slate-100 reveal cardContentDarkmode' style={customStyles}>
      <picture className='rounded-lg overflow-hidden flex-1'>
        <img src={img} alt={name} className='hover:scale-110 transition-transform w-full h-full object-cover imgSection' />
      </picture>

      <LinkGrow href={`/certificate/${pdf}`} title={name} />

    </div>
  )
}
