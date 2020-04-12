module DNA (nucleotideCounts) where

import Data.Either
import Data.List (group, sort)
import Data.Map (Map, union, fromList, empty, difference)

nucleotideMap = fromList [ ('A', 0)
                         , ('C', 0)
                         , ('G', 0)
                         , ('T', 0) ]

charCounts :: String -> Map Char Int
charCounts = fromList . map (\l@(x:xs) -> (x,length l)) . group . sort

nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts xs =
  if onlyNucleotids then
    Right nMap
  else
    Left "Some error in the DNA"
  where
    nMap = charCounts xs `union` nucleotideMap
    onlyNucleotids = empty == difference nMap nucleotideMap
