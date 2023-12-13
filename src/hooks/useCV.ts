import { useState, useEffect } from 'react'
import { cvLinks } from '../scripts/constants/cvConstants'

export const useCV = () => {
  const [cv, setCv] = useState('')

  useEffect(() => {
    fetch(cvLinks.cv)
      .then(res => res.blob())
      .then(blob => setCv(URL.createObjectURL(blob)))
  }, [])

  return {
    cv
  }
}
