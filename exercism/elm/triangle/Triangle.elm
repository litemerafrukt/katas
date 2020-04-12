module Triangle exposing (..)

import Guards exposing (..)


type Triangle
    = Equilateral
    | Isosceles
    | Scalene


triangleKind : number -> number -> number -> Result String Triangle
triangleKind s1 s2 s3
    =  List.all ((==) 0) [s1, s2, s3] => Err "Invalid lengths"
    |= List.any ((>) 0) [s1, s2, s3] => Err "Invalid lengths"
    |= ((s1 + s2 < s3 || s1 + s3 < s2) || s2 + s3 < s1) => Err "Violates inequality"
    |= ((s1 == s2 && s1 == s3) && s2 == s3) => Ok Equilateral
    |= ((s1 == s2 || s1 == s3) || s2 == s3) => Ok Isosceles
    |= Ok Scalene
