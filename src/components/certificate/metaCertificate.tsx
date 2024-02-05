import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { languageContext } from '../../scripts/constants/languageConstants'

interface IMetaCertificate {
    pdf : string
}
export const MetaCertificate = ({ pdf } : IMetaCertificate) => {
  const { selectedLanguage } = useContext(languageContext)

  return (
    <Helmet>
      <title>{pdf} - kcts</title>
      <meta name='description' content={`Certificado de estudio : ${pdf.toString()}`} />
      <meta name='keywords' content='certificado, estudio, desarrollo, porgramar' />
      <meta name='robots' content='noindex' />
      <link rel='canonical' href={`https://portfolio-kcts.vercel.app/langs/${selectedLanguage}`} />

    </Helmet>
  )
}
