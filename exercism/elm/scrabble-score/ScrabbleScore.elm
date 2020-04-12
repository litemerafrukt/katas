module ScrabbleScore exposing (..)

import Guards exposing (..)
import Char


inString : Char -> String -> Bool
inString =
    String.any << (==) << Char.toUpper


charScore : Char -> Int
charScore char =
    inString char "AEIOULNRST"
        => 1
        |= inString char "DG"
        => 2
        |= inString char "BCMP"
        => 3
        |= inString char "FHVWY"
        => 4
        |= inString char "K"
        => 5
        |= inString char "JX"
        => 8
        |= inString char "QZ"
        => 10
        |= 0


scoreWord : String -> Int
scoreWord word =
    String.toList word
        |> List.map charScore
        |> List.sum
