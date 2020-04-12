class Bob {
  isShouting(statement) {
    return (
      statement.toUpperCase() === statement
      && statement.toLowerCase() !== statement
    );
  }

  isQuestion(statement) {
    return statement.endsWith('?');
  }

  isSilence(statement) {
    return statement.trim() === '';
  }

  hey(statement) {
    return (
      (this.isShouting(statement) && 'Whoa, chill out!') ||
      (this.isSilence(statement) && 'Fine. Be that way!') ||
      (this.isQuestion(statement) && 'Sure.') ||
      'Whatever.'
    );
  }
}

export default Bob;
