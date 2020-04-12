class School {
  constructor() {
    this._roster = {};
  }

  add(name, grade) {
    this._roster = {
      ...this._roster,
      [grade]: this.grade(grade)
        .concat(name)
        .sort()
    };
  }

  grade(grade) {
    return this.roster()[grade] || [];
  }

  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }
}

export default School;
