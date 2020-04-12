import random from 'lodash/random';

class AsciiTools {
  static a = 97;
  static z = 122;

  static charCode = char => char.charCodeAt(0);
  static letterNum = char => AsciiTools.charCode(char) - AsciiTools.a;
  static charFromLetterNum = num => String.fromCharCode(num + AsciiTools.a);
}

class Key {
  constructor(key) {
    this.key = (key => {
      if (key === undefined) {
        return Key.random(100);
      }

      if (Key.invalid(key)) {
        throw new Error('Bad key');
      }

      return key;
    })(key);
  }

  valueAt = pos => AsciiTools.letterNum(this.key[pos % this.key.length]);

  static invalid = key =>
    key.length < 1 ||
    !Array.from(key).every(
      c => AsciiTools.charCode(c) >= AsciiTools.a && AsciiTools.charCode(c) <= AsciiTools.z,
    );

  static random = length =>
    Array.from({ length }, () => String.fromCharCode(random(AsciiTools.a, AsciiTools.z))).join('');
}

export default class Cipher {
  constructor(key) {
    this._key = new Key(key);
  }

  get key() {
    return this._key.key;
  }

  encodeChar = (char, index) =>
    AsciiTools.charFromLetterNum(
      Math.abs(AsciiTools.letterNum(char) + this._key.valueAt(index)) % 26,
    );

  decodeChar = (char, index) =>
    this.key[index] > char
      ? AsciiTools.charFromLetterNum(
          Math.abs(26 + (AsciiTools.letterNum(char) - this._key.valueAt(index)) % 26),
        )
      : AsciiTools.charFromLetterNum(
          Math.abs((AsciiTools.letterNum(char) - this._key.valueAt(index)) % 26),
        );

  encode = message => Array.from(message, this.encodeChar).join('');

  decode = encrypted => Array.from(encrypted, this.decodeChar).join('');
}
