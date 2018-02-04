# physics-test
Playing with JavaScript to create a physics test for no reason at all.

## Fun
The variable `ball` is accessible in the global scope. You can use it to mess around with its acceleration, velocity, and position.

```javascript
ball.acc.set.add([1000, -50])
// Acceleration is now [1000, -50]

ball.vel.set.scale(2)
// Velocity has been doubled

ball.dis.set([100, 100])
// Position is [100, 100],
// relative to top-left of viewport
```
