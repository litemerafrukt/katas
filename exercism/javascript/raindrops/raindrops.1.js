export function convert(n) {
  const rainSpeak = [3, 5, 7]
    .filter(x => n % x === 0)
    .reduce((speak, factor) => `${speak}${rainWord(factor)}`, "");

  return rainSpeak.length === 0 ? `${n}` : rainSpeak;
}

function rainWord(n) {
  switch (n) {
    case 3:
      return "Pling";
    case 5:
      return "Plang";
    case 7:
      return "Plong";
    default:
      return "";
  }
}
