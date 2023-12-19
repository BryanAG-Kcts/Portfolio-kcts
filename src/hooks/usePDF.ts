import { useState, useEffect } from 'react'

export const usePDF = (pdfLink : string = '') => {
  const [pdf, setPdf] = useState('')

  useEffect(() => {
    fetch(pdfLink)
      .then(res => res.blob())
      .then(blob => setPdf(URL.createObjectURL(blob)))
  }, [pdfLink])

  return {
    pdf
  }
}
