module Acronym (abbreviate) where

import Data.Char
import Data.List

splitWith :: (a -> Bool) -> [a] -> [[a]]
splitWith pred [] = []
splitWith pred xs = firstMatch : splitWith pred (restOf remaining)
  where
    (firstMatch, remaining) = span pred xs
    restOf [] = []
    restOf (_:rest) = rest

splitCamelCase :: String -> String
splitCamelCase str =
  if allCaps str then
    str
  else
    foldl splitCamel "" str
  where
    allCaps = all isUpper
    splitCamel = \r c -> if isUpper c then r ++ " " ++ [c] else r ++ [c]

    -- maybe do some recursion?

abbreviate :: String -> String
abbreviate longName = map (\(x:xs) -> toUpper x : xs) (words longName)
  where
    caps (x:xs) =
