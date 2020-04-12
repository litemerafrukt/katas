module Bob exposing (..)

import String
import Char


type StateType
    = Question
    | Yell
    | Address
    | Anything


statementType : String -> StateType
statementType statement =
    if String.trim statement == "" then
        Address
    else if String.toUpper statement == statement && String.toLower statement /= statement then
        Yell
    else if String.endsWith "?" statement == True then
        Question
    else
        Anything


hey : String -> String
hey statement =
    case statementType statement of
        Question ->
            "Sure."

        Yell ->
            "Whoa, chill out!"

        Address ->
            "Fine. Be that way!"

        Anything ->
            "Whatever."
