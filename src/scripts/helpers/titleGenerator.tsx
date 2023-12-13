interface TitleGeneratorProps {
  children: string
}
export function TitleGenerator ({ children } : TitleGeneratorProps) {
  return (
    <h3 className='text-xl font-semibold text-center sm:text-2xl whitespace-nowrap font-quickSand'>
      {children}
      <span className='text-4xl text-lt-color-green-200'>.</span>
    </h3>
  )
}
