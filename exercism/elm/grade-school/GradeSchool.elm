module GradeSchool exposing (..)

import Set


type alias Student =
    { name : String
    , grade : Int
    }


type alias Roster =
    List Student


type alias Grade =
    ( Int, List String )


empty : Roster
empty =
    []


addStudent : Int -> String -> Roster -> Roster
addStudent grade name roster =
    { name = name, grade = grade } :: roster


studentsInGrade : Int -> Roster -> List String
studentsInGrade grade roster =
    roster
        |> List.filter (\s -> s.grade == grade)
        |> List.map (\s -> s.name)
        |> List.sort


allGrades : Roster -> List Int
allGrades roster =
    roster
        |> List.map .grade
        |> Set.fromList
        |> Set.toList
        |> List.sort


allStudents : Roster -> List Grade
allStudents roster =
    roster
        |> allGrades
        |> List.map (\g -> ( g, (studentsInGrade g roster) ))
