export const validate = number => {
  const digits = Array.from(`${number}`, Number);
  const sumOfRaisedDigits = digits.reduce((sum, n) => sum + n ** digits.length, 0);

  return number === sumOfRaisedDigits;
};
