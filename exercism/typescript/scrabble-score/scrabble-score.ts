import { Maybe } from "typemayberesult"
import { pipe, Str, Arr } from "./lib"

type letter = string
type letters = string
type letterScore = number
type scoreMap = Array<[letters, letterScore]>

const scoreMap: scoreMap = [
  ["AEIOULNRST", 1],
  ["DG", 2],
  ["BCMP", 3],
  ["FHVWY", 4],
  ["K", 5],
  ["JX", 8],
  ["QZ", 10]
]

const findLetterScore = (scoreMap: scoreMap, letter: letter): number =>
  pipe (
    Maybe.fromNullable (scoreMap.find (([letters]) => letters.includes (letter)))
  ) (Maybe.map (([, score]) => score), Maybe.withDefault (0))

const calcScore = (scoreMap: scoreMap, letters: string): number =>
  pipe (letters) (
    Str.toUpperCase,
    Str.split (""),
    Arr.reduce (
      (score: number, letter: string) =>
        score + findLetterScore (scoreMap, letter),
      0
    )
  )

const score = (letters: letters | undefined): number =>
  pipe (Maybe.fromNullable (letters)) (
    Maybe.map ((letters: string) => calcScore (scoreMap, letters)),
    Maybe.withDefault (0)
  )

export default score
