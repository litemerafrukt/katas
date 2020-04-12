module Leap

let leapYear (year: int): bool =
  let isAFourthYear = year % 4 = 0
  let isNotAHundrethYear = year % 100 <> 0
  let isAFourthHundrethYear = year % 400 = 0
  (isAFourthYear && isNotAHundrethYear) || isAFourthHundrethYear
