import './followBall.css'

export const FollowBall = () => {
  window.addEventListener('mousemove', (e) => {
    const followBall = document.getElementById('followBall') as HTMLElement
    followBall.style.setProperty('--moveX', `${e.clientX + 30}px`)
    followBall.style.setProperty('--moveY', `${e.clientY + 30}px`)

    // hay que sumarle el alto que queda atrás
  })

  return (
    <section className='fixed top-0 left-0 w-full h-screen z-50 pointer-events-none'>
      <span id='followBall' className='w-12 h-12 z-50 rounded-full' />
    </section>
  )
}
