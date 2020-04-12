module RNATranscription exposing (..)


combine : List (Result x a) -> Result x (List a)
combine =
    List.foldr (Result.map2 (::)) (Ok [])


transcribe : Char -> Result Char Char
transcribe n =
    case n of
        'G' ->
            Ok 'C'

        'C' ->
            Ok 'G'

        'T' ->
            Ok 'A'

        'A' ->
            Ok 'U'

        _ ->
            Err n


toRNA : String -> Result Char String
toRNA dna =
    List.map transcribe (String.toList dna)
        |> combine
        |> Result.map String.fromList
