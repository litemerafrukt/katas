class Node {
  constructor({ value, next = null, previous = null }) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node({ value });
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.head === this.tail) {
      this.head.next = node;
    }

    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }

  pop() {
    const node = this.tail;
    this.tail = node.previous;

    if (this.head === node) {
      this.head = null;
    }

    return node.value;
  }

  unshift(value) {
    const node = new Node({ value });
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.head === this.tail) {
      this.tail.previous = node;
    }

    this.head.previous = node;
    node.next = this.head;
    this.head = node;
  }

  shift() {
    const node = this.head;
    this.head = node.next;

    if (this.tail === node) {
      this.tail = null;
    }

    return node.value;
  }

  count() {
    let traverser = this.head;
    let count = 0;

    while (traverser) {
      count += 1;
      traverser = traverser.next;
    }

    return count;
  }

  delete(value) {
    let traverser = this.head;

    while (traverser) {
      if (traverser.value === value) {
        const node = traverser;
        if (node === this.head) {
          this.head = node.next;
        } else {
          traverser.previous.next = node.next;
        }
        if (node === this.tail) {
          this.tail = node.previous;
        } else {
          traverser.next.previous = node.previous;
        }
        return;
      }
      traverser = traverser.next;
    }
  }
}
