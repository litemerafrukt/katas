const zip = ([h1, ...t1], [h2, ...t2], zipped = []) =>
  h1 === undefined || h2 === undefined ? zipped : zip(t1, t2, [...zipped, [h1, h2]])

const nucleotidePairDistance = ([nA, nB]) => (nA === nB ? 0 : 1)

const sum = (acc, n) => acc + n

export const compute = (sA, sB) => {
  if (sA.length !== sB.length) {
    throw new Error("left and right strands must be of equal length")
  }

  return zip(sA, sB)
    .map(nucleotidePairDistance)
    .reduce(sum, 0)
}
