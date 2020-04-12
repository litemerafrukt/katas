const firstPrimeFactor = (num: number): number => {
  let fact
  for (fact = 2; num % fact !== 0; fact++) {}
  return fact
}

const primeFactors = (num: number): number[] | never[] => {
  const collect = []
  do {
    const primeF = firstPrimeFactor(num)
    collect.push(primeF)
    num = num / primeF
  } while (num > 1)

  return collect
}

export default (num: number): number[] | never[] =>
  num === 1 ? [] : primeFactors(num)
