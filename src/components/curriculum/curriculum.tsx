import { useCV } from '../../hooks/useCV'
import { LinkHome } from './linkHome'
export const Curriculum = () => {
  const { cv } = useCV()

  if (!cv) {
    return
  }

  return (
    <section className='w-screen h-screen relative p-7 bg-gradient-to-r bgGradientGreenBlue'>
      <iframe src={cv} className='w-full h-full rounded-3xl' />
      <LinkHome />
    </section>
  )
}
