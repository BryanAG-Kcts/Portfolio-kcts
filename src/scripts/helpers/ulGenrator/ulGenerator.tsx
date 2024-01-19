import './ulGenerator.css'

export interface UlGeneratorProps {
    texts : string[]
}

export const UlGenerator = ({ texts } : UlGeneratorProps) => {
  return (
    <ul className='ulGenerator'>
      {
        texts.map(text => {
          return (
            <li className='flex gap-5 items-center' key={text}>
              <span className='w-2 h-2 rounded-full pulsationShape relative bg-lt-color-green-200 text-lt-color-green-200' />
              <p>{text}</p>
            </li>
          )
        })
      }
    </ul>
  )
}
