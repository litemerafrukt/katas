const verseTemplate = (bottles: number) =>
  `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.
`

const verseTwoBottles = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`

const verseOneBottle = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`

const verseNoBottle = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`

export default class Beer {
  static verse = (n: number) => {
    switch (n) {
      case 0:
        return verseNoBottle
      case 1:
        return verseOneBottle
      case 2:
        return verseTwoBottles
      default:
        return verseTemplate(n)
    }
  }

  static sing = (start = 99, stop = 0) =>
    Array.from({ length: start - stop + 1 }, (_, i) =>
      Beer.verse(start - i)
    ).join("\n")
}
