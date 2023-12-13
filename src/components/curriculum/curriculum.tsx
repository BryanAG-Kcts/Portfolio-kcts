import { useCV } from '../../hooks/useCV'
export const Curriculum = () => {
  const { cv } = useCV()

  if (!cv) {
    return
  }

  return (
    <iframe src={cv} className='w-full h-full' />
  )
}
