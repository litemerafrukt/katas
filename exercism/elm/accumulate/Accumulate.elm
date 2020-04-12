module Accumulate exposing (..)

-- accumulate : (a -> b) -> List a -> List b
-- accumulate f l =
--     case List.head l of
--         Just v ->
--             f v :: (accumulate f (Maybe.withDefault [] (List.tail l)))
--
--         Nothing ->
--             []


accumulate : (a -> b) -> List a -> List b
accumulate f l =
    case l of
        x :: xs ->
            f x :: (accumulate f xs)

        [] ->
            []
