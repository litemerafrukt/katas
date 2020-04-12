import { filter, join, map, pipe, split, take, toUpper } from "ramda";

const firstUpper = pipe(
  take(1),
  toUpper
);

export const parse = pipe(
  split(/(?=[A-Z][a-z])|[^A-z]/),
  filter(Boolean),
  map(firstUpper),
  join("")
);
