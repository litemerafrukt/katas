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
    if (this.head === null) {
      return this
    }

    let lastNode = null

    for (let node of this.nodes()) {
      lastNode = node
    }

    lastNode.next = list.head

    return this
  }

  concat(listOfLists) {
    if (listOfLists.list === null) {
      return this
    }

    for (let list of listOfLists) {
      this.append(list)
    }

    return this
  }

  filter(pred) {
    let prevNode = this.head

    for (let node of this.nodes()) {
      if (!pred(node.value)) {
        prevNode.next = node.next
        continue
      }
      prevNode = node
    }

    return this
  }

  map(fn) {
    for (let node of this.nodes()) {
      node.value = fn(node.value)
    }

    return this
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
    let newHead = null
    let traverser = this.head
    let next = null

    while (traverser !== null) {
      next = traverser.next
      traverser.next = newHead
      newHead = traverser
      traverser = next
    }

    this.head = newHead

    return this
  }
}
