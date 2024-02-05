import { Helmet } from 'react-helmet-async'
interface IMetaCertificate {
    pdf : string
}
export const MetaCertificate = ({ pdf } : IMetaCertificate) => {
  return (
    <Helmet>
      <title>{pdf} - kcts</title>
      <meta name='description' content={`Certificado de estudio : ${pdf.toString()}`} />
      <meta name='keywords' content='certificado, estudio, desarrollo, porgramar' />
      <meta name='robots' content='noindex' />
    </Helmet>
  )
}
