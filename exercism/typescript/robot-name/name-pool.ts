export default class NamePool {
  private names: string[] = []

  constructor() {
    this.generateNames()
  }

  next(): string {
    const name = this.names.pop()

    if (name === undefined) throw new Error("The name-pool is empty")

    return name
  }

  private generateNames(): void {
    const alpha = this.letters()
    const numeric = this.digits()

    this.names = []

    for (const a of alpha) {
      for (const n of numeric) {
        this.names.push(`${a}${n}`)
      }
    }

    this.names.sort(() => Math.random() - 0.5)
  }

  private letters(): string[] {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const result = []

    for (const l1 of letters) {
      for (const l2 of letters) {
        result.push(`${l1}${l2}`)
      }
    }

    return result
  }

  private digits(): string[] {
    const digits = "1234567890"

    const result = []

    for (const d1 of digits) {
      for (const d2 of digits) {
        for (const d3 of digits) {
          result.push(`${d1}${d2}${d3}`)
        }
      }
    }

    return result
  }
}
