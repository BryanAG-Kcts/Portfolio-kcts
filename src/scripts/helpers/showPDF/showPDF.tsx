import { LinkHome } from './linkHome'
interface ShowPDFProps {
    pdf : string
}

export const ShowPDF = ({ pdf } : ShowPDFProps) => {
  return (
    <section className='w-screen h-screen relative p-7 bg-gradient-to-r bgGradientGreenBlue'>
      <iframe src={pdf} className='w-full h-full rounded-3xl' />
      <LinkHome />
    </section>
  )
}
