type Name = string
type Names = Name[]
type Grade = number
type GradeSchoolMap = Map<Grade, Names>

const getOr = <K, V>(or: V, key: K, map: Map<K, V>): V => {
  const value = map.get (key)

  return value !== undefined ? value : or
}

export default class GradeSchool {
  private roster: GradeSchoolMap = new Map<Grade, Names> ()

  static empty = (): GradeSchool => new GradeSchool ()

  static size = (gs: GradeSchool): number => gs.roster.size

  static addStudent = (name: Name, grade: Grade) => (gs: GradeSchool) => {
    gs.roster.set (grade, [...getOr ([], grade, gs.roster), name].sort ())

    return gs
  }

  static studentsInGrade = (grade: Grade) => (gs: GradeSchool): Names => [
    ...getOr ([], grade, gs.roster)
  ]

  static studentRoster = (gs: GradeSchool): GradeSchoolMap => {
    const clone = new Map ()
    gs.roster.forEach ((names, grade) => clone.set (grade, [...names]))

    return clone
  }
}
