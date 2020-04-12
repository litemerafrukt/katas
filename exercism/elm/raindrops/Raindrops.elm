module Raindrops exposing (..)

import String


numberToSound : Int -> String
numberToSound n =
    case n of
        3 ->
            "Pling"

        5 ->
            "Plang"

        7 ->
            "Plong"

        _ ->
            ""


getFactors : Int -> List Int
getFactors n =
    let
        testList =
            [1..(n // 2)] ++ [ n ]
    in
        testList
            |> List.filter (\x -> n % x == 0)


raindrops : Int -> String
raindrops n =
    let
        buildRaintalk factor stringSoFar =
            stringSoFar ++ numberToSound factor

        raintalkOrNumber raintalk =
            if String.isEmpty raintalk then
                toString n
            else
                raintalk
    in
        getFactors n
            |> List.foldl buildRaintalk ""
            |> raintalkOrNumber
