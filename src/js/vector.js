export default function Vector (vector, der) {
  const vect = {
    vector,
    der,
    set: function set (vector) {
      this.vector = vector
      return this.vector
    },
    scale: function scale (scalar) {
      return this.vector.map(comp => comp * scalar)
    },
    add: function add (vector) {
      return this.vector.map((comp, i) => comp + vector[i])
    }
  }

  // The base 'scale' and 'add' methods don't modify
  // the original - just create a new vector
  ;['scale', 'add'].forEach((method) => {
    vect.set[method] = (...args) => {
      return vect.set(vect[method](...args))
    }
  })

  return vect
}
