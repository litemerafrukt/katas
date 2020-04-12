export class Matrix {
  constructor(textMatrix) {
    this.rows = textMatrix.split('\n').map(textRow => textRow.match(/(\d+)/g).map(Number));

    this.columns = Array.from({ length: this.rows[0].length }, () => []);
    this.rows.forEach(row => row.forEach((n, i) => this.columns[i].push(n)));
  }

  get saddlePoints() {
    const saddlePoints = [];

    this.rows.forEach((row, rowIndex) => {
      const rowMax = Math.max(...row);
      this.columns.forEach((column, columnIndex) => {
        const columnMin = Math.min(...column);

        if (row[columnIndex] === rowMax && column[rowIndex] === columnMin) {
          saddlePoints.push([rowIndex, columnIndex]);
        }
      });
    });

    return saddlePoints;
  }
}
