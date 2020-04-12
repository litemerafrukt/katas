module Hamming exposing (distance)


nucleotideScore : Char -> Char -> Int
nucleotideScore nLeft nRight =
    if nLeft /= nRight then
        1

    else
        0


distance : String -> String -> Result String Int
distance left right =
    if String.length left /= String.length right then
        Result.Err "left and right strands must be of equal length"

    else
        List.map2 nucleotideScore (String.toList left) (String.toList right)
            |> List.sum
            |> Result.Ok
