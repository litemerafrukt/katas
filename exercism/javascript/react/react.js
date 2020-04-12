export class InputCell {
  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }
}

export class ComputeCell {
  constructor(cells, fn) {
    this.cells = cells;
    this.fn = fn;
  }

  get value() {
    return this.fn(this.cells);
  }

  addCallback(cb) {
    cb.watch(this);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.watching = [];
  }

  get values() {
    return this.watching.map(this.fn);
  }

  watch(cell) {
    this.watching.push(cell);
  }
}
