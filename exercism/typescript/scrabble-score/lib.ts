export const o = (f: Function, g: Function) => (...args: any[]) => f (g (args))

export const pipe = (value: {}) => (...fns: Function[]) =>
  fns.reduce ((acc, fn) => fn (acc), value)

export const Str = {
  toUpperCase: (s: string) => s.toUpperCase (),
  split: (splitter: string) => (s: string) => s.split (splitter)
}

export const Arr = {
  reduce: (fn: any, start: any) => (arr: any) => arr.reduce (fn, start)
}
