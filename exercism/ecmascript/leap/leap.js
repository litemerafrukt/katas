export default class Year {
  constructor(year) {
    this.year = year;
  }

  evenBy(num) {
    return this.year % num === 0;
  }

  notEvenBy(num) {
    return !this.evenBy(num);
  }

  isLeap() {
    return this.evenBy(4) && (this.evenBy(400) || this.notEvenBy(100));
  }
}
