export function convert(n) {
  const pling = n % 3 === 0 ? "Pling" : "";
  const plang = n % 5 === 0 ? "Plang" : "";
  const plong = n % 7 === 0 ? "Plong" : "";

  return pling + plang + plong || `${n}`;
}
