import { useEffect, useRef } from 'react'

export const TitleWindow = () => {
  const firstTitle = useRef<string>()

  useEffect(() => {
    window.addEventListener('blur', () => {
      firstTitle.current = document.title
      document.title = '¡Kactuswow! 🕒💣'
    })

    window.addEventListener('focus', () => {
      document.title = firstTitle.current ?? 'Kactuswow'
    })
  }, [])

  return (
    <></>
  )
}
