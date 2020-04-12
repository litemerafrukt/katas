class Pangram {
  constructor(str) {
    this.str = str.toLowerCase();
    this.alphabet = 'abcdefghijklmnopqrstuvxyz'.split('');
  }

  isPangram() {
    return this.alphabet.every(c => this.str.includes(c));
  }
}

export default Pangram;
