export default class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  kind() {
    this.throwOnIllegal();

    switch (countUnique(this.sides)) {
      case 1:
        return 'equilateral';
      case 2:
        return 'isosceles';
      case 3:
        return 'scalene';
      default:
        throw new Error('Found no triangle kind');
    }
  }

  get hasNoSize() {
    return sum(this.sides) === 0;
  }

  get hasNegativeSide() {
    return pipe(this.sides)(
      filter(isNegative),
      count,
      isMoreThan(0),
    );
  }

  get hasInequality() {
    const longestSide = Math.max(...this.sides);
    const sumOfSides = sum(this.sides);

    return longestSide > (sumOfSides - longestSide);
  }

  throwOnIllegal() {
    if (this.hasNoSize || this.hasNegativeSide || this.hasInequality) {
      throw new Error('Illegal triangle');
    }
  }
}

// utils
function countUnique(values) { return new Set(values).size; }
function sum(arr) { return arr.reduce((s, n) => s + n, 0); }
function count(arr) { return arr.length; }
function filter(predicate) { return arr => arr.filter(predicate); }
function isMoreThan(testValue) { return value => value > testValue; }
function isNegative(nr) { return nr < 0; }
function pipe(whatToPipe) { return (...fns) => fns.reduce((acc, fn) => fn(acc), whatToPipe); }
