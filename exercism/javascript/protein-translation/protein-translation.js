const STOP = "STOP"

/* prettier-ignore */
const codonProtein = new Map([
  ["AUG", "Methionine"],
  ["UGG", "Tryptophan"],
  ["UUU", "Phenylalanine"], ["UUC", "Phenylalanine"],
  ["UUA", "Leucine"], ["UUG", "Leucine"],
  ["UAU", "Tyrosine"], ["UAC", "Tyrosine"],
  ["UGU", "Cysteine"], ["UGC", "Cysteine"],
  ["UCU", "Serine"], ["UCC", "Serine"], ["UCA", "Serine"], ["UCG", "Serine"],
  ["UAA", STOP], ["UAG", STOP], ["UGA", STOP],
])

export function translate(codons = "") {
  let result = []

  for (let i = 0; i < codons.length; i += 3) {
    const codon = `${codons[i]}${codons[i + 1]}${codons[i + 2]}`

    if (!codonProtein.has(codon)) {
      throw new Error("Invalid codon")
    }

    if (codonProtein.get(codon) === STOP) {
      break
    }

    result.push(codonProtein.get(codon))
  }

  return result
}
