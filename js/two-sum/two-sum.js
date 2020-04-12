module.exports = twoSum

function twoSum(numbers, target) {
  const seenNumbers = new Map()

  for (let [index, number] of numbers.entries()) {
    if (number >= target) {
      continue
    }

    const wantedNumber = target - number

    if (seenNumbers.has(wantedNumber)) {
      const firstIndex = seenNumbers.get(wantedNumber)

      return [firstIndex, index]
    }

    seenNumbers.set(number, index)
  }

  throw new Error("Invalid input")
}
