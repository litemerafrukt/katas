module Strain exposing (..)


keep : (a -> Bool) -> List a -> List a
keep f l =
    case l of
        x :: xs ->
            if f x then
                x :: (keep f xs)
            else
                keep f xs

        [] ->
            []


discard : (a -> Bool) -> List a -> List a
discard f l =
    keep (not << f) l



-- discard f l =
--     case l of
--         x :: xs ->
--             if f x then
--                 discard f xs
--             else
--                 x :: (discard f xs)
--         [] ->
--             []
