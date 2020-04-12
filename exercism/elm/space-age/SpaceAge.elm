module SpaceAge exposing (..)


type Planet
    = Mercury
    | Venus
    | Earth
    | Mars
    | Jupiter
    | Saturn
    | Uranus
    | Neptune


toEarthYears : Int -> Float
toEarthYears s =
    toFloat s / 31557600


ageOn : Planet -> Int -> Float
ageOn planet s =
    case planet of
        Mercury ->
            (toEarthYears s) / 0.2408467

        Venus ->
            (toEarthYears s) / 0.6151972

        Earth ->
            (toEarthYears s)

        Mars ->
            (toEarthYears s) / 1.8808158

        Jupiter ->
            (toEarthYears s) / 11.862615

        Saturn ->
            (toEarthYears s) / 29.447498

        Uranus ->
            (toEarthYears s) / 84.016846

        Neptune ->
            (toEarthYears s) / 164.79132
