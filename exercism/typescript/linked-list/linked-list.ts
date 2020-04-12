interface Node<T> {
  kind: "Node"
  prev: List<T>
  data: T
  next: List<T>
}

function node<T>(prev: List<T>, data: T, next: List<T>): Node<T> {
  return { kind: "Node", prev, data, next }
}

interface Empty {
  kind: "Empty"
}

function empty(): Empty {
  return { kind: "Empty" }
}

type List<T> = Empty | Node<T>

class LinkedList<T> {
  private first: List<T>
  private last: List<T>

  constructor() {
    this.last = empty()
    this.first = this.last
  }

  push = (data: T) => {
    switch (this.last.kind) {
      case "Node":
        this.last = node(this.last, data, empty())
        break
      case "Empty":
        this.first = this.last = node(empty(), data, empty())
    }
  }

  pop = () => {
    switch (this.last.kind) {
      case "Node":
        const data = this.last.data
        this.last = this.last.prev
        return data
      default:
        throw new Error("You broke pop!")
    }
  }

  unshift = (data: T) => {
    switch (this.first.kind) {
      case "Node":
        this.first = node(empty(), data, this.first)
        break
      case "Empty":
        this.first = this.last = node(empty(), data, empty())
    }
  }

  shift = () => {
    console.log(this.first)
    switch (this.first.kind) {
      case "Node":
        const data = this.first.data
        this.first = this.first.next
        return data
      default:
        throw new Error("You broke shift!")
    }
  }
}

export default LinkedList
