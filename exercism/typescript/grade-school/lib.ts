export const o = (f: Function, g: Function) => (...args: Array<{}>) => f (g (args))

export const pipe = (value: {}) => (...fns: Function[]) =>
  fns.reduce ((acc, fn) => fn (acc), value)

// export function pipe(value: any, ...fns: Function[]) {
//   return fns.reduce((acc, fn) => fn(acc), value)
// }
