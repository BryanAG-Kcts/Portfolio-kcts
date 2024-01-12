export const followBall = (e : MouseEvent) => {
  const followBall = document.getElementById('followBall') as HTMLElement
  followBall.style.setProperty('--moveX', `${e.clientX + 30}px`)
  followBall.style.setProperty('--moveY', `${e.clientY + 30}px`)
}
