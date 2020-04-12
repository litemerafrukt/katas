export { steps };

function steps(n) {
  guard(n <= 0, "Only positive numbers are allowed");

  let steps = 0;

  while (n !== 1) {
    n = isEven(n) ? n / 2 : 3 * n + 1;
    steps++;
  }

  return steps;
}

function isEven(n) {
  return n % 2 === 0;
}

function guard(condition, message) {
  if (condition) {
    throw new Error(message);
  }
}
