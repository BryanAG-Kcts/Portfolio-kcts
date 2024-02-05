import { Helmet } from 'react-helmet-async'

export const MetaPortfolio = () => {
  return (
    <Helmet>
      <title>Kactuswow | Desarrollador en Ocaña</title>
      <meta name='description' content='Bienvenido a mi portafolio, échale un vistazo. Sígueme en mi GitHub, convirtamos ideas a código' />
      <meta name='keywords' content='portafolio,BryanAG,kactus,ocaña,cactus,github,bryan,kcts,kactuswow,cactuswow, portfolio' />
      <meta name='robots' content='index, follow' />
      <link rel='canonical' href='https://portfolio-kcts.vercel.app' />

      <link rel='preload' as='image' href='./src/assets/images/meHero.webp' type='image/webp' />
    </Helmet>
  )
}
