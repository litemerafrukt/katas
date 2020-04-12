export function keep<T>(arr: T[], pred: (x: T) => boolean): T[] {
  return arr.filter(pred)
}

export function discard<T>(arr: T[], pred: (x: T) => boolean): T[] {
  return arr.filter(x => !pred(x))
}
