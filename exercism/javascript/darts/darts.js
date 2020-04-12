const isInnerCircle = r => r <= 1;
const isMiddleCircle = r => r > 1 && r <= 5;
const isOuterCircle = r => r > 5 && r <= 10;

export const solve = (x, y) => {
  const r = Math.hypot(Math.abs(x), Math.abs(y));

  switch (true) {
    case Number.isNaN(r):
      return null;
    case isInnerCircle(r):
      return 10;
    case isMiddleCircle(r):
      return 5;
    case isOuterCircle(r):
      return 1;
    default:
      return 0;
  }
};
