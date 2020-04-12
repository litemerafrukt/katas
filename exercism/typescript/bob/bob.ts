class Bob {
  isShouting = (statement: string): boolean =>
    statement.toUpperCase() === statement &&
    statement.toLowerCase() !== statement

  isQuestion = (statement: string): boolean => statement.endsWith("?")

  isSilence = (statement: string): boolean => statement.trim() === ""

  hey = (statement: string): string =>
    (this.isShouting(statement) && "Whoa, chill out!") ||
    (this.isSilence(statement) && "Fine. Be that way!") ||
    (this.isQuestion(statement) && "Sure.") ||
    "Whatever."
}

export default Bob
