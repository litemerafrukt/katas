module Anagram exposing (..)


sameLetters : String -> String -> Bool
sameLetters word1 word2 =
    let
        l1 =
            List.sort <| String.toList <| String.toLower word1

        l2 =
            List.sort <| String.toList <| String.toLower word2
    in
        l1 == l2


detect : String -> List String -> List String
detect str str_lst =
    let
        possibleAnagram =
            sameLetters str

        sameWord w =
            String.toLower str /= String.toLower w
    in
        List.filter possibleAnagram str_lst
            |> List.filter sameWord
