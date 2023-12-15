export interface UlGeneratorProps {
    texts : {
        title : string
        content: string
    }[]
}

export const UlGenerator = ({ texts } : UlGeneratorProps) => {
  return (
    <ul className='flex flex-col gap-3'>
      {
        texts.map(text => {
          return (
            <li key={text.title}>
              <strong>{text.title} :</strong> {text.content}
            </li>
          )
        })
      }
    </ul>
  )
}
