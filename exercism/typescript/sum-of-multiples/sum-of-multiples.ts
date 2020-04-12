function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

const lenMultiples = (to: number, n: number): number => Math.floor((to - 1) / n)

const multiples = (to: number) => (n: number): number[] =>
  Array.from({ length: lenMultiples(to, n) }, (_, i) => (i + 1) * n)

export default (nums: [number]) => ({
  to: (to: number) =>
    nums
      .map(multiples(to))
      .reduce((collector, multiples) => uniq([...collector, ...multiples]), [])
      .reduce((sum, n) => sum + n, 0)
})
