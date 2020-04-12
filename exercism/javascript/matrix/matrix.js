class Matrix {
  constructor(stringMatrix) {
    this.matrix = Matrix.of(stringMatrix);
  }

  static of(stringMatrix) {
    return stringMatrix
      .split('\n')
      .map(row => row.split(' '))
      .map(row => row.map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return Object.keys(this.matrix)
      .map(columnIndex => this.matrix.map(row => row[columnIndex]));
  }
}

export default Matrix;
