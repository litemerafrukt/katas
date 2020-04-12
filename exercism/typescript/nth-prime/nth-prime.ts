export default class Prime {
  isPrime = (n: number) => {
    for (let i = 2, stop = n / 2; i <= stop; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  nth = (n: number) => {
    if (n < 1) {
      throw new Error("Prime is not possible")
    }

    let candidate = 1

    do {
      candidate += 1
      if (this.isPrime(candidate)) {
        n--
      }
    } while (n > 0)

    return candidate
  }
}
