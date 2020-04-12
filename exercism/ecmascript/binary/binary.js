class Binary {
  constructor(binary) {
    this.binaryStr = binary;
  }

  _isValidBinary = () => /^[01]+$/.test(this.binaryStr);

  _validToDecimal = () =>
    Array.from(this.binaryStr)
      .reverse()
      .map((b, i) => b * Math.pow(2, i))
      .reduce((s, n) => s + n, 0);

  toDecimal = () => (this._isValidBinary() ? this._validToDecimal() : 0);
}

export default Binary;
