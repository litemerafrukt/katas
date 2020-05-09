export default class NamePool {
  private names: string[] = []
  private indexes: number[] = []

  constructor() {
    this.generateNamesAndIndexes()
  }

  next(): string {
    const index = this.indexes.pop()
    if (index === undefined) throw new Error("The name-pool is empty")

    return this.names[index]
  }

  private generateNamesAndIndexes(): void {
    const letters = this.letters()
    const digits = this.digits()

    const names = []

    for (const ls of letters) {
      for (const ds of digits) {
        names.push(`${ls}${ds}`)
      }
    }

    this.names = names
    this.indexes = Array.from({ length: this.names.length }, (_, i) => i).sort(
      () => Math.random() - 0.5
    )
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
