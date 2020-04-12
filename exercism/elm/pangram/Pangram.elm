module Pangram exposing (..)

import Char


alphabet : String
alphabet =
    "abcdefghijklmnopqrstuvxyz"


isPangram : String -> Bool
isPangram testString =
    let
        inTestString character =
            testString
                |> String.toLower
                |> String.contains (String.fromChar character)
    in
        String.all inTestString alphabet
