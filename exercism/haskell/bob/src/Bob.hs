module Bob (responseFor) where

import Data.Char (isSpace, toUpper, toLower)
import Data.List (last)

strToUpper :: String -> String
strToUpper = map toUpper

strToLower :: String -> String
strToLower = map toLower

strStripSpaces :: String -> String
strStripSpaces = filter (not . isSpace)

strEndsWith :: Char -> String -> Bool
strEndsWith c s = last s == c

responseFor :: String -> String
responseFor statement
  | isSilence          = "Fine. Be that way!"
  | isForcefulQuestion = "Calm down, I know what I'm doing!"
  | isQuestion         = "Sure."
  | isShouting         = "Whoa, chill out!"
  | otherwise          = "Whatever."
  where
    stripped    = strStripSpaces statement
    isSilence  = stripped == ""
    isQuestion = strEndsWith '?' stripped
    isShouting = stripped == strToUpper stripped && stripped /= strToLower stripped
    isForcefulQuestion = isShouting && isQuestion
