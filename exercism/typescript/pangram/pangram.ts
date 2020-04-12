class Pangram {
  static alphabet = "abcdefghijklmnopqrstuvxyz".split("")
  str: string

  constructor(str: string) {
    this.str = str.toLowerCase()
  }

  isPangram = (): boolean => Pangram.alphabet.every(c => this.str.includes(c))
}

export default Pangram
