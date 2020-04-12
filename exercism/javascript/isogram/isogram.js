export function isIsogram(str) {
  const letters = str.replace(/\W+/g, '').toLowerCase();
  const uniqueLetters = Array.from(new Set(letters).values()).join('');

  return letters === uniqueLetters;
}
