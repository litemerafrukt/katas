import NamePool from "./name-pool"

export default class RobotName {
  private static namePool = new NamePool()

  name: string = RobotName.namePool.next()

  resetName(): void {
    this.name = RobotName.namePool.next()
  }
}
