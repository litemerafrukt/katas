class Gigasecond {
  constructor(date) {
    this.milliseconds = date.getTime() + Math.pow(10, 12);
  }

  date() {
    return new Date(this.milliseconds);
  }
}

export default Gigasecond;
