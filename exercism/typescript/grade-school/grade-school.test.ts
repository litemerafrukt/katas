import GradeSchool from "./grade-school"

import { pipe } from "./lib"

describe ("test functional variant of grade school", () => {
  it ("a new school has an empty roster", () => {
    expect (GradeSchool.size (GradeSchool.empty ()) === 0).toEqual (true)
  })

  it ("adding a student adds them to the roster for the given grade", () => {
    const gradeSchool = GradeSchool.addStudent ("Aimee", 2) (GradeSchool.empty ())

    const expectedDb = new Map ([[2, ["Aimee"]]])
    expect (GradeSchool.studentRoster (gradeSchool)).toEqual (expectedDb)
  })

  it ("adding more students to the same grade adds them to the roster", () => {
    const gradeSchool = pipe (GradeSchool.empty ()) (
      GradeSchool.addStudent ("Blair", 2),
      GradeSchool.addStudent ("James", 2),
      GradeSchool.addStudent ("Paul", 2)
    )

    const expectedDb = new Map ([[2, ["Blair", "James", "Paul"]]])
    expect (GradeSchool.studentRoster (gradeSchool)).toEqual (expectedDb)
  })

  it ("adding students to different grades adds them to the roster", () => {
    const gradeSchool = pipe (GradeSchool.empty ()) (
      GradeSchool.addStudent ("Chelsea", 3),
      GradeSchool.addStudent ("Logan", 7)
    )

    const expectedDb = new Map ([[3, ["Chelsea"]], [7, ["Logan"]]])
    expect (GradeSchool.studentRoster (gradeSchool)).toEqual (expectedDb)
  })

  it ("grade returns the students in that grade in alphabetical order", () => {
    const gradeSchool = pipe (GradeSchool.empty ()) (
      GradeSchool.addStudent ("Franklin", 5),
      GradeSchool.addStudent ("Bradley", 5),
      GradeSchool.addStudent ("Jeff", 1)
    )

    const expectedStudents = ["Bradley", "Franklin"]
    expect (GradeSchool.studentsInGrade (5) (gradeSchool)).toEqual (
      expectedStudents
    )
  })

  it ("grade returns an empty array if there are no students in that grade", () => {
    expect (GradeSchool.studentsInGrade (1) (GradeSchool.empty ())).toEqual ([])
  })

  it ("the students names in each grade in the roster are sorted", () => {
    const gradeSchool = pipe (GradeSchool.empty ()) (
      GradeSchool.addStudent ("Jennifer", 4),
      GradeSchool.addStudent ("Kareem", 6),
      GradeSchool.addStudent ("Christopher", 4),
      GradeSchool.addStudent ("Kyle", 3)
    )

    const expectedSortedStudents = new Map ([
      [3, ["Kyle"]],
      [4, ["Christopher", "Jennifer"]],
      [6, ["Kareem"]]
    ])
    expect (GradeSchool.studentRoster (gradeSchool)).toEqual (
      expectedSortedStudents
    )
  })

  it ("roster cannot be modified outside of module", () => {
    const gradeSchool = GradeSchool.addStudent ("Aimee", 2) (GradeSchool.empty ())
    const roster = GradeSchool.studentRoster (gradeSchool)
    const result = roster.get (2) || []
    result.push ("Oops.")
    const expectedDb = new Map ([[2, ["Aimee"]]])
    expect (GradeSchool.studentRoster (gradeSchool)).toEqual (expectedDb)
  })

  it ("roster cannot really be modified outside of module", () => {
    const gradeSchool = GradeSchool.addStudent ("Aimee", 2) (GradeSchool.empty ())
    const roster = GradeSchool.studentRoster (gradeSchool)
    const result = roster
    result.set (1, ["Oops."])
    const expectedDb = new Map ([[2, ["Aimee"]]])
    expect (GradeSchool.studentRoster (gradeSchool)).toEqual (expectedDb)
  })

  it ("roster cannot be modified outside of module using studentsInGrade()", () => {
    const gradeSchool = GradeSchool.addStudent ("Aimee", 2) (GradeSchool.empty ())
    GradeSchool.studentsInGrade (2) (gradeSchool).push ("Oops.")
    const expectedDb = new Map ([[2, ["Aimee"]]])
    expect (GradeSchool.studentRoster (gradeSchool)).toEqual (expectedDb)
  })
})
