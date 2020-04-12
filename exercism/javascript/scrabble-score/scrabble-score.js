/* prettier-ignore */
const scores = [
  [["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 1],
  [["D", "G"], 2],
  [["B", "C", "M", "P"], 3],
  [["F", "H", "V", "W", "Y"], 4],
  [["K"], 5],
  [["J", "X"], 8],
  [["Q", "Z"], 10]
]

const getScore = letter =>
  scores.find(([letters]) => letters.includes(letter))[1]

const calculateScore = (sum, letter) => sum + getScore(letter)

export const score = word =>
  word
    .toUpperCase()
    .split("")
    .reduce(calculateScore, 0)

score("OxyphenButazone") // ?
