import Vector from './vector.js'

export default function Thing (opts = {}) {
  const thing = {
    acc: Vector([0, 0])
  }

  thing.vel = Vector([0, 0], thing.acc)
  thing.dis = Vector([0, 0], thing.vel)

  thing.update = function update (delta) {
    const { vel, dis } = this

    vel.set.add(vel.der.scale(delta))
    dis.set.add(dis.der.scale(delta))
  }

  return Object.create(thing, opts)
}
