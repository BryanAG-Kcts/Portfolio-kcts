import { useEffect, useRef } from 'react'
import { certificate } from '../../hooks/ICertificate'
import { LinkGrow } from '../../scripts/helpers/anchorGrow'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
  const { img, name, pdf } = certificate
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (element.current === null) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element.current,
          start: 'top bottom',
          end: 'bottom top'
        }
      })

      tl.fromTo('.galleryCertificate',
        {
          opacity: 0,
          y: -50
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          y: 0,
          ease: 'elastic.out(1, 0.3)'
        })
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <div className='flex w-full max-w-xl aspect-[16/14]' ref={element}>
      <div className='flex flex-col gap-4 p-3 rounded-lg bg-slate-100 cardContentDarkmode galleryCertificate'>
        <picture className='rounded-lg overflow-hidden flex-1'>
          <img src={img} alt={name} className='hover:scale-110 transition-transform w-full h-full object-cover imgSection' />
        </picture>

        <LinkGrow href={`/certificate/${pdf}`} title={name} />

      </div>
    </div>
  )
}
