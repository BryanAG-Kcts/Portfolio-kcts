import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { languageContext } from '../../scripts/constants/languageConstants'

export const MetaGallery = () => {
  const { selectedLanguage } = useContext(languageContext)

  return (
    <Helmet>
      <title>Kactuswow - 🎓🌟</title>
      <meta name='description' content='Una simple galeria sobre el camino de mi estudio' />
      <meta name='keywords' content='kactuswow, kactus, kcts, certificados, programador, ocaña, portafolio' />
      <meta name='robots' content='index, follow' />
      <link rel='canonical' href={`https://portfolio-kcts.vercel.app/certificate/langs/${selectedLanguage}`} />
    </Helmet>
  )
}
