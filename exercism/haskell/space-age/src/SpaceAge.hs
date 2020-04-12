module SpaceAge (Planet(..), ageOn) where

data Planet = Mercury
            | Venus
            | Earth
            | Mars
            | Jupiter
            | Saturn
            | Uranus
            | Neptune

earthSeconds :: Float
earthSeconds = 31557600

earthYear :: Planet -> Float
earthYear Mercury = 0.2408467
earthYear Venus = 0.61519726
earthYear Earth = 1.0
earthYear Mars = 1.8808158
earthYear Jupiter = 11.862615
earthYear Saturn = 29.447498
earthYear Uranus = 84.016846
earthYear Neptune = 164.79132

ageOn :: Planet -> Float -> Float
ageOn planet seconds = seconds / (earthYear planet * earthSeconds)
