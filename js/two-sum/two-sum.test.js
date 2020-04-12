const twoSum = require("./two-sum")

describe("two-sum", () => {
  test.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[1234, 5678, 9012], 14690, [1, 2]],
    [[2, 2, 3], 4, [0, 1]],
    [[871, 40, 899, 510, 420, 733, 121, 852, 949, 899], 1369, [4, 8]],
  ])("%o with target %i should be %o", (ints, target, expected) => {
    expect(twoSum(ints, target)).toEqual(expected)
  })
})
