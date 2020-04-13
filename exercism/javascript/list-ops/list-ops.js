class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export class List {
  constructor(items = []) {
    this.head = null

    for (let item of [...items].reverse()) {
      const newHead = new Node(item, this.head)
      this.head = newHead
    }
  }

  *[Symbol.iterator]() {
    for (let node of this.nodes()) {
      yield node.value
    }
  }

  *nodes() {
    let traverser = this.head

    while (traverser !== null) {
      yield traverser
      traverser = traverser.next
    }
  }

  get values() {
    return [...this]
  }

  get length() {
    let result = 0

    for (let _ of this.nodes()) {
      result++
    }

    return result
  }

  append(list) {
    return new List([...this, ...list])
  }

  concat(listOfLists) {
    let values = []

    for (let list of listOfLists) {
      values.push(...list)
    }

    return new List([...this, ...values])
  }

  filter(pred) {
    let filtered = []

    for (let node of this.nodes()) {
      if (pred(node.value)) {
        filtered.push(node.value)
      }
    }

    return new List(filtered)
  }

  map(fn) {
    let mappedValues = []

    for (let node of this.nodes()) {
      mappedValues.push(fn(node.value))
    }

    return new List(mappedValues)
  }

  foldl(fn, init) {
    let acc = init

    for (let node of this.nodes()) {
      acc = fn(acc, node.value)
    }

    return acc
  }

  foldr(fn, init) {
    let acc = init

    for (let node of this.reverse().nodes()) {
      acc = fn(acc, node.value)
    }

    return acc
  }

  reverse() {
    return new List([...this].reverse())
  }
}
