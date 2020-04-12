module WordCount exposing (..)

import Dict exposing (Dict)
import Regex


addToWordCount n =
    case n of
        Just n ->
            Just <| n + 1

        Nothing ->
            Just 1


countWord word dict =
    Dict.update word addToWordCount dict


wordCount : String -> Dict String Int
wordCount str =
    String.toLower str
        |> Regex.split Regex.All (Regex.regex "\\W+")
        |> List.filter (not << String.isEmpty)
        |> List.foldl countWord Dict.empty
