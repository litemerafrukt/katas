export class Triangle {
  constructor(height) {
    this.height = height;
  }

  get rows() {
    return range(0, this.height).map(pascalTriangleRow);
  }

  get lastRow() {
    return pascalTriangleRow(this.height - 1);
  }
}

function pascalTriangleRow(rowNr) {
  return range(0, rowNr + 1).map(column => pascalTriangleCell(rowNr, column));
}

function pascalTriangleCell(row, column) {
  return factorial(row) / (factorial(column) * factorial(row - column));
}

function range(from, to) {
  return Array.from({ length: to - from }).map((_, i) => i + from);
}

const factorial = memoizedFactorial();
function memoizedFactorial() {
  const cache = {};

  return function factorial(n) {
    if (!cache[n]) {
      cache[n] = n === 0 ? 1 : n * factorial(n - 1);
    }

    return cache[n];
  };
}
