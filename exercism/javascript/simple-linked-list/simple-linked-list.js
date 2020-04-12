export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor(values = []) {
    this.head = null;
    values.forEach(v => this.add(new Element(v)));
  }

  get length() {
    return [...this].length;
  }

  add(element) {
    element.next = this.head;
    this.head = element;
  }

  reverse() {
    return new List([...this]);
  }

  toArray() {
    return [...this];
  }

  *[Symbol.iterator]() {
    let traverser = this.head;
    while (traverser !== null) {
      yield traverser.value;
      traverser = traverser.next;
    }
  }
}
