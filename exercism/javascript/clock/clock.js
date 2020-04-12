export function at(hour, minute) {
  const hoursAsMinutesFromMidnight = (24 + (hour % 24) || 0) * 60;
  const minutesInTheHour = minute || 0;
  const time = hoursAsMinutesFromMidnight + minutesInTheHour;

  return {
    plus() {
      throw new Error("Remove this statement and implement this function");
    },

    minus() {
      throw new Error("Remove this statement and implement this function");
    },

    equals() {
      throw new Error("Remove this statement and implement this function");
    },

    toString() {
      const hours = `${Math.floor((time / 60) % 24)}`.padStart(2, "0");
      const minutes = `${time % 60}`.padStart(2, "0");

      return `${hours}:${minutes}`;
    }
  };
}
