import {zip} from 'ramda'

type nucleotidPair = [string, string]

const accumulateScore = (prevScore: number, pair: nucleotidPair): number => {
    return pair[0] === pair[1] ? prevScore : prevScore + 1
}

export default class Hamming {

    compute(firstStrand: string, secondStrand: string): number {
        if (firstStrand.length !== secondStrand.length) {
            throw 'DNA strands must be of equal length.'
        }

        return (
            zip(firstStrand.split(''), secondStrand.split(''))
            .reduce(accumulateScore, 0)
        )
    }
}
