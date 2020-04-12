const sortLetters = str => Array.from(str.toLowerCase())
  .sort()
  .join();

const hasSameLetters = word1 => (word2) => {
  const sorted1 = sortLetters(word1);
  const sorted2 = sortLetters(word2);

  return sorted1 === sorted2;
};

const notSameWord = word1 => word2 => word1.toLowerCase() !== word2.toLowerCase();

export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(words) {
    return words.filter(hasSameLetters(this.word)).filter(notSameWord(this.word));
  }
}
