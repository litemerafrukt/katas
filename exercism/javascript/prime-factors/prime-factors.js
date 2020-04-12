const firstPrimeFactor = (num) => {
  let fact;
  for (fact = 2; num % fact !== 0; fact += 1) {}

  return fact;
};

export const primeFactors = (num) => {
  if (num === 1) return [];

  const collect = [];
  do {
    const primeF = firstPrimeFactor (num);
    collect.push (primeF);
    num /= primeF;
  } while (num > 1);

  return collect;
};
