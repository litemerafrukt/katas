module DifferenceOfSquares exposing (..)


square : Int -> Int
square =
    flip (^) 2


squareOfSum : Int -> Int
squareOfSum =
    square << List.sum << List.range 1


sumOfSquares : Int -> Int
sumOfSquares =
    List.sum << List.map square << List.range 1


difference : Int -> Int
difference num =
    squareOfSum num - sumOfSquares num
