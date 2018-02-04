import Thing from './thing.js'

const doc = document
const $body = doc.body

const $ball = document.createElement('div')
$ball.className = 'ball'
$ball.style.width = 100
$ball.style.height = 100
$body.appendChild($ball)

const ball = Thing()
{
  const { acc, vel, dis } = ball
  acc.set([0, 100])
  vel.set([1500, 1500])
  dis.set([window.innerWidth / 2 - 50, window.innerHeight / 2 - 50])
}

function update (delta) {
  ball.update(delta)

  const disV = ball.dis.vector
  const vel = ball.vel
  const velV = ball.vel.vector

  // Whenever the ball collides with a viewport border,
  // flip velocity and slightly decrease its magnitude
  if (disV[0] < 0) {
    disV[0] = 0
    vel.set([-velV[0], velV[1]])
    vel.set.scale(0.95)
  }
  if (disV[0] > window.innerWidth - 100) {
    disV[0] = window.innerWidth - 100
    vel.set([-velV[0], velV[1]])
    vel.set.scale(0.95)
  }
  if (disV[1] < 0) {
    disV[1] = 0
    vel.set([velV[0], -velV[1]])
    vel.set.scale(0.95)
  }
  if (disV[1] > window.innerHeight - 100) {
    disV[1] = window.innerHeight - 100
    vel.set([velV[0], -velV[1]])
    vel.set.scale(0.95)
  }
}

function render () {
  $ball.style.transform =
    `translate(${ball.dis.vector[0]}px, ${ball.dis.vector[1]}px)`
}

let then = Date.now()
let now = Date.now()

function main () {
  now = Date.now()
  let delta = now - then

  update(delta / 1000)
  render()

  then = now
  window.requestAnimationFrame(main)
}
main()

function onMouseMove (e) {
  ball.dis.set([e.pageX - 50, e.pageY - 50])
}
$ball.addEventListener('mousedown', () => {
  $body.addEventListener('mousemove', onMouseMove)
})
$body.addEventListener('mouseup', () => {
  $body.removeEventListener('mousemove', onMouseMove)
})

window.ball = ball
