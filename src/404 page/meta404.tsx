import { Helmet } from 'react-helmet-async'

export const Meta404 = () => {
  return (
    <Helmet>
      <title>404 - Cactus not Found</title>
      <meta name='description' content='Page not found' />
      <meta name='robots' content='noindex' />
      <meta name='keywords' content='404, not found, kcts' />
    </Helmet>
  )
}
