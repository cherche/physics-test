const Follow = {
  init: (ball) => {
    const $body = document.body

    let enabled = false
    let position = [
      -window.innerWidth / 2 + 50,
      -window.innerHeight / 2 + 50
    ]

    function onMouseMove (e) {
      position = [-e.clientX + 50, -e.clientY + 50]
    }

    function loop () {
      ball.vel.set(ball.dis.add(position))
      ball.vel.set.scale(-2)

      if (enabled) requestAnimationFrame(loop)
    }

    $body.addEventListener('click', (e) => {
      $body
        [enabled ? 'removeEventListener' : 'addEventListener']
        ('mousemove', onMouseMove)
      enabled = !enabled

      if (enabled) {
        onMouseMove(e)
        loop()
      }
    })
  }
}

export default Follow
