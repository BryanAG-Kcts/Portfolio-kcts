import { useEffect } from 'react'
import { followBall } from '../scripts/constants/folloBallConstants'
import './followBall.css'

export const FollowBall = () => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent)
    if (isMobile) return
    window.addEventListener('mousemove', followBall)

    return () => {
      window.removeEventListener('mousemove', followBall)
    }
  }, [])

  return (
    <section className='fixed top-0 left-0 w-full h-screen z-50 pointer-events-none'>
      <span id='followBall' className='w-12 h-12 z-50 rounded-full' />
    </section>
  )
}
