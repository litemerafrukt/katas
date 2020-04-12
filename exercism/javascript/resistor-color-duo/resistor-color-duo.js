export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const value = ([oneColor, anotherColor]) =>
  ~~`${COLORS.indexOf(oneColor)}${COLORS.indexOf(anotherColor)}`;
