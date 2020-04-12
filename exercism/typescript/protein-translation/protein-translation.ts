import { flow } from "fp-ts/lib/function"
import { pipe } from "fp-ts/lib/pipeable"
import { Codon, Protein, CodonsProteinPair } from "./types"
import { map, takeLeftWhile, findFirst } from "fp-ts/lib/Array"
import { fold, fromNullable, chain } from "fp-ts/lib/Option"

const partitionString = (step: number) => (str: string): string[] =>
  str.match(new RegExp(`.`.repeat(step), "g")) || []

const hasCodon = (codons: Readonly<Codon[]>, codon: Codon | string): boolean =>
  codons.some((c: Codon | string) => c === codon)

const translateCodon = (codonsProteinTable: CodonsProteinPair[]) => (
  codon: Codon | string
): Protein =>
  pipe(
    codonsProteinTable,
    findFirst<CodonsProteinPair>(([codons]) => hasCodon(codons, codon)),
    chain(([, protein]) => fromNullable(protein)),
    fold(
      () => {
        throw new Error("Undefined codon")
      },
      protein => protein
    )
  )

const codonsProteinTable: CodonsProteinPair[] = [
  [["AUG"], "Methionine"],
  [["UGG"], "Tryptophan"],
  [["UUU", "UUC"], "Phenylalanine"],
  [["UUA", "UUG"], "Leucine"],
  [["UAU", "UAC"], "Tyrosine"],
  [["UGU", "UGC"], "Cysteine"],
  [["UAA", "UAG", "UGA"], "STOP"],
  [["UCU", "UCC", "UCA", "UCG"], "Serine"]
]

const proteins: (rnaString: string) => Protein[] = flow(
  partitionString(3),
  map(translateCodon(codonsProteinTable)),
  takeLeftWhile(protein => protein !== "STOP")
)

export default { proteins }
