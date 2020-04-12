export class Robot {
  constructor() {
    this._setRandomName();
  }

  reset() {
    this._setRandomName();
  }

  get name() {
    return this._name;
  }

  set name(_) {
    throw new Error("oh no you don't");
  }

  _setRandomName() {
    let name;
    do {
      name = randomName();
    } while (Robot.usedNames.has(name));

    this._name = name;
    Robot.usedNames.add(name);
  }
}

Robot.usedNames = new Set();
Robot.releaseNames = () => {
  Robot.usedNames = new Set();
};

function randomName() {
  const A1 = randomAlpha(),
    A2 = randomAlpha(),
    N1 = randomNumber(),
    N2 = randomNumber(),
    N3 = randomNumber();

  return `${A1}${A2}${N1}${N2}${N3}`;
}

function randomAlpha() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}
