const $body = document.body

let ball

let enabled = false
let position = [
  -window.innerWidth / 2 + 50,
  -window.innerHeight / 2 + 50
]

function onMouseMove (e) {
  position = [-e.clientX + 50, -e.clientY + 50]
}

function loop () {
  if (enabled) requestAnimationFrame(loop)

  ball.vel.set(ball.dis.add(position))
  ball.vel.set.scale(-2)
}

function toggle (e) {
  enabled = !enabled

  $body
    [enabled ? 'addEventListener' : 'removeEventListener']
    ('mousemove', onMouseMove)

  if (enabled) {
    onMouseMove(e)
    loop()
  }
}

const Follow = {
  attach: (el, ballRef) => {
    ball = ballRef
    el.addEventListener('click', toggle)
  }
}

export default Follow
