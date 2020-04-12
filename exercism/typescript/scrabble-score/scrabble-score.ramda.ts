import {
  any,
  anyPass,
  always,
  equals,
  ifElse,
  isEmpty,
  isNil,
  reduce,
  toUpper,
  pipe
} from "ramda"

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

const findLetterScore = (scoreMap: scoreMap) => (letter: string): number =>
  reduce (
    (score, [letters, letterScore]) =>
      any (equals (letter), letters) ? letterScore : score,
    0,
    scoreMap
  )

const calcScore = (scoreMap: scoreMap) =>
  pipe (
    toUpper,
    reduce ((score, letter) => score + findLetterScore (scoreMap) (letter), 0)
  )

const score: (_: letters | undefined) => number = ifElse (
  anyPass ([isNil, isEmpty]),
  always (0),
  calcScore (scoreMap)
)

export default score
