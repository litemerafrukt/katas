/**
 * Helpers
 */
const plus = x => y => x + y
const minus = x => y => x - y
const multiply = x => y => x * y
const divide = x => y => x / y

const deepFlatten = ([head, ...tail], col = []) => {
  const el = Array.isArray(head) ? deepFlatten(head) : head
  return el != undefined ? deepFlatten(tail, col.concat(el)) : col
}

const thrush = x => fn => fn(x)

const calculateInOrder = numbersAndOperations =>
  numbersAndOperations.reduce((acc, fn) => {
    acc = typeof acc === "number" ? thrush(acc) : acc
    return acc(fn)
  })

/**
 * Parsers
 */
import * as P from "parsimmon"
import { timer } from "rxjs"

const numberParser = P.regexp(/-?[0-9]+[.0-9]*/).map(Number)
const plusParser = P.regexp(/plus/i).map(() => plus)
const minusParser = P.regexp(/minus/i).map(() => minus)
const multipliedByParser = P.regexp(/multiplied by/i).map(() => multiply)
const dividedByParser = P.regexp(/divided by/i).map(() => divide)
const operatorParser = P.alt(plusParser, minusParser, multipliedByParser, dividedByParser)
const repeatedCalculation = P.seq(
  P.whitespace.then(operatorParser),
  P.whitespace.then(numberParser)
).atLeast(1)

const calculationParser = P.seq(P.whitespace.then(numberParser), repeatedCalculation)

const wordyParser = P.regexp(/What is/)
  .then(calculationParser)
  .skip(P.string("?"))

/**
 * WordProblem, ArgumentError
 */
export class ArgumentError extends Error {}

export class WordProblem {
  constructor(question) {
    this.question = question
  }

  answer() {
    try {
      const parsed = deepFlatten(wordyParser.tryParse(this.question))
      return calculateInOrder(parsed)
    } catch (_) {
      throw new ArgumentError()
    }
  }
}
