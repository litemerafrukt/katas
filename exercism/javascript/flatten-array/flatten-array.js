export class Flattener {
  flatten(arr, flattened = []) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        this.flatten(el, flattened)
      } else {
        el != null && flattened.push(el)
      }
    }

    return flattened
  }
}
