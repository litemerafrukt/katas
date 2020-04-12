module RunLengthEncoding exposing (decode, encode)

import List.Extra exposing (groupWhile)


compressChars charGroup =
    case charGroup of
        ( char, [] ) ->
            String.fromChar char

        ( char, chars ) ->
            String.fromInt (List.length chars + 1) ++ String.fromChar char


encode : String -> String
encode string =
    String.toList string
        |> groupWhile (\a b -> a == b)
        |> List.map compressChars
        |> List.foldr (++) ""


decode : String -> String
decode string =
    string
