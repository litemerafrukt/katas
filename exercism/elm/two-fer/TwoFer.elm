module TwoFer exposing (twoFer)

import Maybe exposing (withDefault)


twoFer : Maybe String -> String
twoFer name =
    let
        you =
            withDefault "you" name
    in
    "One for " ++ you ++ ", one for me."
