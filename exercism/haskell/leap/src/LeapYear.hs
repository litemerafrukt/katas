module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year = isFourthYear && not isHundredthYear || isFourHundredthYear
  where
    isFourthYear = year `mod` 4 == 0
    isHundredthYear = year `mod` 100 == 0
    isFourHundredthYear = year `mod` 400 == 0
