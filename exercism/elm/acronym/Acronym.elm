module Acronym exposing (abbreviate)

{-
   Elm regex does crash on lack of heap memory when using this lookahead:
   splitEm words =
       Regex.split (Maybe.withDefault Regex.never <| Regex.fromString "(?=[A-Z][a-z])|\\W") words
   (should probably write an issue)

   Lets use a parser instead!
-}

import Regex


splitEm words =
    Regex.split (Maybe.withDefault Regex.never <| Regex.fromString "(?=[A-Z][a-z])|\\W") words


replaceNonAlphaWithSpace : Char -> Char
replaceNonAlphaWithSpace char =
    if Char.isAlpha char then
        char

    else
        ' '


abbreviate : String -> String
abbreviate phrase =
    phrase
        |> String.map replaceNonAlphaWithSpace
        |> splitEm
        |> List.map (String.slice 0 1)
        |> List.map (String.map Char.toUpper)
        |> List.foldr (++) ""
