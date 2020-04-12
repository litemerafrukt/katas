import { it, _ } from "param.macro"
import { adjust, findIndex, tap, split, reduce, join } from "ramda"

const nucleotides = ["A", "C", "G", "T"]

const guardInvalid = tap(
  it === -1 && throw new Error("Invalid nucleotide in strand")
)

const count = (counts, nucleotide) =>
  nucleotides
  |> findIndex(it === nucleotide)
  |> guardInvalid
  |> adjust(_, it + 1, counts)

export const parse = sequence =>
  sequence |> split("") |> reduce(count, [0, 0, 0, 0]) |> join(" ")
