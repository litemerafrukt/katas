const weekdays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

const ordering = {
  "1st": 0,
  "2nd": 7,
  "3rd": 14,
  "4th": 21,
  "5th": 28
}

const nextWeekdayDate = (fromWeekday, weekday) =>
  ((7 - (fromWeekday - weekday)) % 7) + 1

const lastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate()

export const meetupDay = (year, month, weekday, order) => {
  const searchFromDay =
    order === "teenth"
      ? new Date(year, month, 10).getDay()
      : order === "last"
      ? new Date(year, month, lastDateOfMonth(year, month) - 7).getDay()
      : new Date(year, month).getDay()

  const date =
    order === "teenth"
      ? nextWeekdayDate(searchFromDay, weekdays[weekday]) + 9
      : order === "last"
      ? nextWeekdayDate(searchFromDay, weekdays[weekday]) +
        lastDateOfMonth(year, month) -
        1
      : nextWeekdayDate(searchFromDay, weekdays[weekday]) + ordering[order]

  return new Date(year, month, date)
}
