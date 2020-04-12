const round = (n) => Math.round(n * 100) / 100

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds
  }

  rawEarth = () => this.seconds / 31557600
  onEarth = () => round(this.rawEarth())
  onMercury = () => round(this.rawEarth() / 0.2408467)
  onVenus = () => round(this.rawEarth() / 0.61519726)
  onMars = () => round(this.rawEarth() / 1.8808158)
  onJupiter = () => round(this.rawEarth() / 11.862615)
  onSaturn = () => round(this.rawEarth() / 29.447498)
  onUranus = () => round(this.rawEarth() / 84.016846)
  onNeptune = () => round(this.rawEarth() / 164.79132)
}

export default SpaceAge