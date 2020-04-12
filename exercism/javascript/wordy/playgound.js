const T = x => fn => fn (x)

const multiply = x => y => x * y

const add = x => y => x + y

const deepFlatten = ([head, ...tail], col = []) => {
  const el = Array.isArray (head) ? deepFlatten (head) : head
  return el != undefined ? deepFlatten (tail, col.concat (el)) : col
}

console.log (
  deepFlatten ([[1, add], [3, [multiply, 5]]]).reduce ((acc, fn) => {
    if (typeof acc === "number") {
      acc = T (acc)
    }

    return acc (fn)
  })
)
let r = [5, multiply, 7, add, 8, multiply, 2].reduce ((acc, fn) => {
  if (typeof acc === "number") {
    acc = T (acc)
  }

  return acc (fn)
})

console.log (r)
